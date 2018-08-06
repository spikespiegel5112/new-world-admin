<template>
  <div class="app-container">
    <CommonLoading :loading="loading" :relative="false"></CommonLoading>

    <el-tabs tab-position="left" @tab-click="chooseDeviceType">

      <el-tab-pane v-for="item in $store.state.app.deviceTypeDictionary" :key="item.code" :label="item.name"
                   :style="{height:layoutHeight-5+'px'}">
        <el-tabs tab-position="left" @tab-click="chooseGameType">
          <el-tab-pane v-for="(item, index) in gameTypeInfo.list" :key="item.name" :label="item.name">
            <el-row type="flex" justify='center'>
              <el-col :span="24" style="text-align: center">
                <div class="common_sortlist_wrapper">
                  <ul class="sortlist">
                    <Draggable v-model="currentSortData" :options="{}" @start="drag=true" @end="drag=false">
                      <!--<transition-group>-->
                      <li v-for="item in currentSortData" :key="item.name">
                        <label>{{item.name}}</label>
                        <a @click="minusGame" class="minus">
                          <span class="add el-icon-remove-outline"></span>
                        </a>
                      </li>
                      <!--</transition-group>-->
                    </Draggable>
                  </ul>
                  <ul class="addgame">
                    <li>
                      <a class="plus" @click="handleAddGame">
                        <span class="add el-icon-circle-plus-outline"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </el-col>
            </el-row>
            <el-row class="footer" type="flex" justify="center">
              <el-col :span="6" style="text-align: center">
                <el-button type="primary" @click="saveSort">保存排序</el-button>
              </el-col>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>


    <!-- 弹框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="600px">
      <el-row type="flex" justify="center">
        <el-col :span="20">
          <el-form :rules="rules" ref="queryModel" :model="queryModel" label-position="right" label-width="150px">
            <el-form-item label="游戏名称" prop="name">
              <el-autocomplete
                v-model="chosenGameName"
                :fetch-suggestions="focusSortList"
                placeholder="请输入内容"
                @select="chooseGame"
              ></el-autocomplete>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" v-waves>{{$t('table.cancel')}}</el-button>
        <el-button type="primary" @click="addGame" v-waves>{{$t('table.confirm')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>`

<script>
  import CommonTag from '@/views/common/CommonTag.vue'
  import CommonQuery from '@/views/common/CommonQuery.vue'
  import Draggable from 'vuedraggable'
  // import Sortable from 'sortablejs'

  export default {
    components: {
      CommonTag,
      CommonQuery,
      Draggable,
      // Sortable
    },
    data() {
      return {
        game_typeAddOrUpdateRequest: 'game-service/1.0.0/game_type/addOrUpdate',
        game_typeDeleteRequest: 'game-service/1.0.0/game_type/delete',

        game_infoListRequest: 'game-service/1.0.0/game_info/list',
        rankGameByTypeRequest: 'game-service/1.0.0/game_type_mapping/rankGameByType',

        game_typeListRequest: 'game-service/1.0.0/game_type/list',

        findHomePageGameInfoRequest: 'game-service/1.0.0/game_info/findHomePageGameInfo',


        value2: '',
        value1: '',
        tableKey: 0,
        total: null,
        availabilityFlag: false,
        dynamicTags: ['标签一', '标签二', '标签三'],
        queryModel: {
          deviceType: this.currentDeviceType
          // topNumber: 0,
          // ios: false,
          // android: true
        },
        pagination: {
          page: 1,
          limit: 20,
        },
        formData: {
          id: 0,
          name: '',
          "title": "",
          "description": '',
          "iconUrl": "",
          "bigImageUrl": "",
          "iosDownloadUrl": "",
          androidDownloadUrl: '',
          webGameUrl: '',
          nature: "",
          ios: false,
          android: false,
          status: null
        },
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          update: 'Edit',
          create: 'Create'
        },
        dialogPvVisible: false,
        rules: {},
        loading: false,
        fileList: [],
        gameTypeInfo: [],
        gameTypeId: '',
        sortList: [],
        currentTopNumber: 0,
        currentGameType: 1,
        currentDeviceType: 'android',
        autoCompleteList: [],
        gameOptions: [],
        chosenGameName: '',
        chosenGameInfo: {},
        currentSortData: []
      }
    },
    computed: {
      layoutHeight() {
        return this.$store.state.app.layoutHeight - 40;
      }
    },
    watch: {
      effectiveDuration(value) {
        console.log(value)
        if (value === null) {
          value = [];
        }
        this.formData.startDate = value[0];
        this.formData.endDate = value[1];
      },
      'formData.bigImageUrl': function (value) {
        console.warn(value)
      },
      chosenGameName(value) {
        alert('dsdsdsds')
        this.queryModel.name = value
      }
    },
    mounted() {
      this.getGameTypeInfo();
    },
    methods: {
      getGameTypeInfo() {
        this.loading = true;
        this.queryModel = Object.assign(this.queryModel, this.pagination);
        this.$http.get(this.$baseUrl + this.game_typeListRequest, {
          params: this.queryModel
        }).then(response => {
          console.warn(response)


          this.gameTypeInfo = response;
          this.currentTopNumber = this.gameTypeInfo.list[0].topNumber;


          this.queryModel = Object.assign(this.queryModel, {
            page: 1,
            limit: this.gameTypeInfo.list[0].topNumber,
            name: '',
            status: 1,
            title: '',
            description: '',
            deviceType: this.currentDeviceType
          });
          this.getSortList();
          this.loading = false
        })
      },
      getSortList() {
        let deviceTypeList = ['android', 'ios'];
        let result = '';
        this.loading = true;
        deviceTypeList.forEach(item1 => {
          Object.keys(this.queryModel).forEach(item2 => {
            if (item1 === item2) {
              if (this.queryModel[item2] === true) {
                result = item1;
              }
            }
          })
        });
        console.log(this.queryModel)
        console.log(result)
        this.$http.get(this.$baseUrl + this.game_infoListRequest, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          params: this.queryModel
        }).then(response => {
          console.log(response)
          this.sortList = response.list;
          this.currentSortData = this.sortList;
          this.loading = false;
          // this.$nextTick(()=>{
          //   this.initSortable();
          // })

        })
      },
      initSortable() {
        let el = document.getElementById('sortlist');
        console.log(el)
        let sortable = Sortable.create(el, {});
      },
      handleUpdate(scope) {
        console.log(scope)
        this.formData = Object.assign({}, scope.row);
        this.effectiveDuration = [scope.row.startDate, scope.row.endDate]

        this.dialogStatus = 'update';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['formData'].clearValidate()
        })
      },


      chooseGameType(data) {
        console.log(data)
        this.currentGameType = this.gameTypeInfo.list[data.index].id;
        this.currentTopNumber = this.gameTypeInfo.list[data.index].topNumber;

        this.queryModel = Object.assign(this.queryModel, {
          page: 1,
          limit: this.currentTopNumber,
          name: '',
          status: 1,
          title: '',
          description: '',
          gameTypeId: this.currentGameType
        });
        this.getSortList();
      },
      chooseDeviceType(data) {
        console.log(data)
        this.currentDeviceType = this.$store.state.app.deviceTypeDictionary[data.index].code;
        this.queryModel = Object.assign(this.queryModel, {
          gameTypeId: this.currentGameType,
          deviceType: this.currentDeviceType
        });
        console.log(this.queryModel)
        this.getSortList();
      },
      handleAddGame() {
        this.dialogFormVisible = true;
        this.queryModel.name = '';
        this.chosenGameName = '';
      },
      minusGame(index) {
        result = this.currentSortData;
        result.splice(index, 1)

      },
      addGame() {
        let result = [];
        result = this.sortList;
        result.push(this.chosenGameInfo)
        this.currentSortData = result;
        console.log(this.currentSortData)
        this.dialogFormVisible = false;
      },
      saveSort() {
        let requestBody = {};
        if (this.currentDeviceType === 'ios') {
          requestBody = {
            iosGameIdList: this.currentSortData
          };
        } else if (this.currentDeviceType === 'android') {
          requestBody = {
            androidGameIdList: this.currentSortData.map(item=>item.id)
          }
        }
        this.$http.post(this.$baseUrl + this.rankGameByTypeRequest + `/${this.currentGameType}`, requestBody).then(response => {
          console.log(response)
        }).catch(error => {
          this.$message.error(`${error.response.status.toString()}  ${error.response.data.error}`)
        })
      },
      focusSortList(queryString, callback) {
        console.log(this.gameOptions)
        this.loading = true;

        this.queryModel = Object.assign(this.queryModel, {
          name: this.queryModel.name,
          limit: 999,
          page: 1,
          gameTypeId: '',
          status: 1,
          title: '',
          description: '',
        });
        console.log(this.queryModel)


        this.$http.get(this.$baseUrl + this.game_infoListRequest, {
          params: this.queryModel
        }).then(response => {
          console.log(response)
          this.loading = false;
          this.total = response.total;
          let result = [];

          response.list.forEach((item, index) => {
            result.push(Object.assign(item, {
              value: item.name
            }));
          });
          this.sortList.forEach(item1 => {
            result = result.filter(item2 => item1.name !== item2.name)
          });

          console.log(111, result)

          callback(result)

          console.log(222, this.gameOptions)
        })
      },

      chooseGame(data) {
        console.log(333, data)
        this.chosenGameInfo = data;
        this.queryModel.name = data.value;

      },

    }
  }
</script>
