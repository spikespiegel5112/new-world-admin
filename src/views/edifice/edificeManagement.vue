<template>
  <div class="app-container">
    <CommonLoading :loading="loading" :relative="false"/>

    <el-row type="flex" justify='center'>
      <el-col :span="24">
        <div class="edifice_main_container common_sortlist_wrapper" :style="{height:layoutHeight+'px'}">
          <div class="buildingname">大楼名称：{{buildingName}}</div>
          <ul class="addgame">
            <li>
              <a class="plus" @click="handleAddFloor">
                <span class="add el-icon-circle-plus-outline"></span>
              </a>
            </li>
          </ul>
          <ul class="sortlist">
            <li v-for="(item, index) in floorList" :key="item.id">
              <el-row>
                <el-col :span="23">
                  <el-form ref="form" label-width="150px" class="maincontent">
                    <el-row class="floordesc">
                      <el-col class="brandmeta" :span="7">
                        <el-form-item label="品牌名称：">
                          <span>{{item.brandName}}</span>
                        </el-form-item>
                      </el-col>
                      <el-col class="brandmeta" :span="7">
                        <el-form-item label="地点：">
                          <span>{{item.location}}</span>
                        </el-form-item>
                      </el-col>
                      <el-col class="brandmeta" :span="7">
                        <el-form-item label="地点：">
                          <span>{{item.location}}</span>
                        </el-form-item>
                      </el-col>
                      <el-col class="operation" :span="3">
                        <el-button type="primary" size="mini" @click="handleAddBrand" :disable="item!=={}">添加品牌</el-button>
                        <el-button type="primary" size="mini" @click="handleAddBrand" :disable="item==={}">移除品牌</el-button>
                      </el-col>
                    </el-row>


                    <el-row>
                      <el-col :span="6">
                        <el-form-item label="Android可用性：">
                          <span>{{item.androidEnable}}</span>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="iOS可用性：">
                          <span>{{item.iosEnable}}</span>
                        </el-form-item>
                      </el-col>
                    </el-row>
                  </el-form>

                </el-col>
                <el-col :span="1">
                  <a @click="minusGame(index)" class="minus">
                    <span class="add el-icon-remove-outline"></span>
                  </a>
                </el-col>
              </el-row>


            </li>
          </ul>

        </div>
      </el-col>
    </el-row>
    <el-row class="footer" type="flex" justify="center">
      <el-col :span="6" style="text-align: center">
        <el-button type="primary" @click="handleAddBrand">保存排序</el-button>
      </el-col>
    </el-row>


    <!-- 弹框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="600px">
      <el-row type="flex" justify="center">
        <el-col :span="20">
          <el-form :rules="rules" ref="queryModel" :model="queryModel" label-position="right" label-width="150px">
            <el-form-item label="品牌名称" prop="name">
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
  import CommonTag from "@/views/common/CommonTag.vue";
  import CommonQuery from "@/views/common/CommonQuery.vue";
  import Draggable from "vuedraggable";

  export default {
    components: {
      CommonTag,
      CommonQuery,
      Draggable
    },
    data() {
      return {
        findFloorsRequest: 'building-show-service/1.0.0/buildingShow/findFloors',


        floorList: [],
        queryModel: {
          name: '',
          deviceType: this.currentDeviceType,
          gameTypeId: this.currentGameTypeId
          // topNumber: 0,
          // ios: false,
          // android: true
        },
        pagination: {
          page: 1,
          limit: 20
        },
        formData: {
          id: 0,
          name: "",
          title: "",
          description: "",
          iconUrl: "",
          bigImageUrl: "",
          iosDownloadUrl: "",
          androidDownloadUrl: "",
          webGameUrl: "",
          nature: "",
          ios: false,
          android: false,
          status: null
        },
        dialogFormVisible: false,
        dialogStatus: "",
        textMap: {
          update: "Edit",
          create: "Create"
        },
        dialogPvVisible: false,
        rules: {
          name: [{
            required: true,
            message: "此项为不能为空",
            trigger: "change"
          }]
        },
        loading: false,
        deviceType: 'ios',
        chosenGameName: '',
        buildingName: ''

      };
    },
    computed: {
      layoutHeight() {
        return this.$store.state.app.layoutHeight - 40;
      }
    },
    watch: {
      effectiveDuration(value) {
        console.log(value);
        if (value === null) {
          value = [];
        }
        this.formData.startDate = value[0];
        this.formData.endDate = value[1];
      },
      "formData.bigImageUrl": function (value) {
        console.warn(value);
      },
      chosenGameName(value) {
        this.queryModel.name = value;
      },
      initSortData(value) {
        console.log(value);
      }
    },
    mounted() {
      this.getSortList();
    },
    methods: {

      getSortList() {
        let deviceTypeList = ["android", "ios"];

        this.$http.get(this.$baseUrl + this.findFloorsRequest+`/${this.deviceType}`, {
        // this.$http.get('http://api-doc.zan-qian.com/mock/190/building-show-service/1.0.0/buildingShow/findFloors' + `/ios}`, {
          params: this.queryModel
        }).then(response => {
          console.log(response);
          response = response.data;
          this.floorList = response;
          this.buildingName = response.buildingName;
          this.loading = false;
        });
      },
      handleUpdate(scope) {
        console.log(scope);
        this.formData = Object.assign({}, scope.row);
        this.effectiveDuration = [scope.row.startDate, scope.row.endDate];

        this.dialogStatus = "update";
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs["formData"].clearValidate();
        });
      },


      handleAddFloor() {
        this.dialogFormVisible = true;
        this.queryModel.name = "";
        this.chosenGameName = "";
      },
      addGame() {
        if (Object.keys(this.chosenGameInfo).length > 0) {
          let result = [];
          result = this.currentSortData;
          result.push(this.chosenGameInfo);
          this.currentSortData = result;
          console.log(this.currentSortData);
          console.log(this.initSortData);
          this.dialogFormVisible = false;

        } else {
          this.$message.warning("无游戏可添加");
        }
      },
      minusGame(index) {
        let result = this.currentSortData;
        result.splice(index, 1);
        this.currentSortData = result;
        console.log(this.currentSortData);
      },

      handleAddBrand() {
        let requestBody = {};
        if (this.currentSortData.length === 0) {
          this.$message.warning("排序列表不能为空");
          return;
        }
        if (this.currentDeviceType === "ios") {
          requestBody = {
            iosGameIdList: this.currentSortData.map(item => item.id)
          };
        } else if (this.currentDeviceType === "android") {
          requestBody = {
            androidGameIdList: this.currentSortData.map(item => item.id)
          };
        }
        this.$http.post(this.$baseUrl + this.rankGameByTypeRequest + `/${this.currentGameTypeId}`, requestBody).then(response => {
          console.log(response);
          this.getSortList();
        }).catch(error => {
          this.$message.error(
            `${error.response.status.toString()}  ${error.response.data.error}`
          );
        });
      },
      focusSortList(queryString, callback) {
        console.log(this.gameOptions);
        this.loading = true;

        this.queryModel = Object.assign(this.queryModel, {
          limit: 999,
          page: 1,
          status: 1,
          title: "",
          description: "",
          gameTypeId: ""
        });
        console.log(this.queryModel);

        this.$http.get(this.$baseUrl + this.game_infoListRequest, {
          params: this.queryModel
        }).then(response => {
          console.log(response);
          this.loading = false;
          this.total = response.total;
          let result = [];
          if (response.list.length !== 0) {
            response.list.forEach((item, index) => {
              result.push(
                Object.assign(item, {
                  value: item.name
                })
              );
            });
            this.currentSortData.forEach(item1 => {
              result = result.filter(item2 => item1.name !== item2.name);
            });

            console.log(111, result);

            callback(result);

            console.log(222, this.gameOptions);
          }
        });
      },

      chooseGame(data) {
        console.log(333, data);
        this.chosenGameInfo = data;
        this.queryModel.name = data.value;
      },
    }
  };
</script>

<style lang='scss'>
  @import "../../styles/edifice.scss";
</style>
