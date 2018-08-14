<template>
  <div class="app-container">
    <CommonLoading :loading="loading" :relative="false"/>

    <el-row type="flex" justify='center'>
      <el-col :span="24">
        <div class="edifice_main_container common_sortlist_wrapper">
          <div class="buildingname">大楼名称：{{buildingName}}</div>
          <ul class="addgame">
            <li>
              <a class="plus" @click="handleAddFloor">
                <span class="add el-icon-circle-plus-outline"></span>
              </a>
            </li>
          </ul>
          <ul class="sortlist" :style="{height:layoutHeight+'px'}">
            <li v-for="(item, index) in floorList" :key="item.id">
              <el-row>
                <el-col :span="1">
                  <div class="floornumber">
                    <span>{{item.floorsRank}}</span>
                    <label>楼</label>

                  </div>
                </el-col>
                <el-col :span="23">
                  <el-row>
                    <el-col :span="23">
                      <el-form ref="form" label-width="150px" class="maincontent">
                        <el-row class="floordesc">
                          <el-col class="brandmeta" :span="4">
                            <el-form-item label="品牌名称：">
                              <span>{{item.brand.brandName}}</span>
                            </el-form-item>
                          </el-col>
                          <el-col class="brandmeta" :span="3">
                            <el-form-item label="key总数量：">
                              <span>{{item.brand.keyTotal}}</span>
                            </el-form-item>
                          </el-col>
                          <el-col class="brandmeta" :span="3">
                            <el-form-item label="key已领取数：">
                              <span>{{item.brand.keyReceived}}</span>
                            </el-form-item>
                          </el-col>
                          <el-col class="brandmeta" :span="3">
                            <el-form-item label="key可用数：">
                              <span>{{item.brand.keyEnable}}</span>
                            </el-form-item>
                          </el-col>
                          <el-col class="brandmeta" :span="3">
                            <el-form-item label="每用户可领取key数：">
                              <span>{{item.brand.keyNumPerUser}}</span>
                            </el-form-item>
                          </el-col>
                          <el-col class="operation" :span="3">
                            <el-button type="primary" size="mini" @click="handleAddBrand" :disable="item!=={}">添加品牌
                            </el-button>
                            <el-button type="primary" size="mini" @click="handleAddBrand" :disable="item==={}">移除品牌
                            </el-button>
                          </el-col>
                        </el-row>
                        <el-row class="advertisedesc">
                          <el-col class="brandmeta" :span="3">
                            <el-form-item label="品牌icon：">
                              <img :src="item.brand.icon+'-style_100x100'"/>
                            </el-form-item>
                          </el-col>

                          <el-col class="brandmeta" :span="21">
                            <el-form-item label="广告：">
                              <ul class="advertiselist">
                                <li v-for="item2 in item.brand.advertisements">
                                  <img :src="item2.url+'-style_100x100'"/>
                                  <el-form ref="form" label-width="130px" class="advertisemeta">
                                    <el-form-item label="Android可用性：">
                                      <el-tag v-if="item2.androidEnable===true" type="success">可用</el-tag>
                                      <el-tag v-if="item2.androidEnable===false" type="error">不可用</el-tag>
                                    </el-form-item>
                                    <el-form-item label="iOS可用性：">
                                      <el-tag v-if="item2.iosEnable===true" type="success">可用</el-tag>
                                      <el-tag v-if="item2.iosEnable===false" type="error">不可用</el-tag>
                                    </el-form-item>
                                    <el-form-item label="链接：">
                                      <el-button class="location" type="text" @click="openAdvertiseUrl(item2.location)">
                                        {{item2.url}}
                                      </el-button>
                                    </el-form-item>
                                  </el-form>
                                </li>
                              </ul>
                            </el-form-item>
                          </el-col>
                        </el-row>
                      </el-form>

                    </el-col>
                    <el-col :span="1">
                      <a v-if="item.floorsRank===pagination.total" @click="minusGame(index)" class="minus">
                        <span class="add el-icon-remove-outline"></span>
                      </a>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>


            </li>
          </ul>

        </div>
      </el-col>
    </el-row>
    <!-- 分页 -->
    <div class="common-pagination-wrapper">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="pagination.page" :page-sizes="[10,20,30,50]" :page-size="pagination.size"
                     layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
      </el-pagination>
    </div>


    <!-- 弹框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="addFloorFormVisible" width="600px">
      <el-row type="flex" justify="center">
        <el-col :span="20">
          <el-form :rules="rules" ref="queryModel" :model="queryModel" label-position="right" label-width="150px">
            <el-form-item label="Icon" prop="icon">
              <CommonUploadImage
                :action="$baseUrl+'image-upload-service/1.0.0/file/upload'"
                @on-success="uploadSuccess"
                :returnUrlList.sync="floorFormData.url"
              />
              <el-input v-show="false" v-model="floorFormData.url"></el-input>
            </el-form-item>
            <el-form-item label="广告链接" prop="location">
              <el-input v-model="floorFormData.location"></el-input>
            </el-form-item>
            <el-form-item label="iOS可用性" prop="iosEnable">
              <el-switch v-model="floorFormData.iosEnable" active-color="#13ce66"
                         inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
            <el-form-item label="Android可用性" prop="androidEnable">
              <el-switch v-model="floorFormData.androidEnable" active-color="#13ce66"
                         inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
            <el-form-item label="是否上线" prop="status">
              <el-switch v-model="floorFormData.status" :active-value="1" :inactive-value="0" active-color="#13ce66"
                         inactive-color="#ff4949">
              </el-switch>

            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" v-waves>{{$t('table.cancel')}}</el-button>
        <el-button type="primary" @click="addFloor" v-waves>{{$t('table.confirm')}}</el-button>
      </div>
    </el-dialog>
  </div>
</template>

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
        // findFloorsRequest: 'building-show-service/1.0.0/buildingShow/findFloors',
        floorsListRequest: 'building-show-service/1.0.0/bk/floors/list',

        floorsAddOrUpdateRequest: 'building-show-service/1.0.0/bk/floors/addOrUpdate',


        floorList: [],
        queryModel: {
          brandName: '',
          sort: 'desc',
        },
        pagination: {
          page: 1,
          size: 10,
          total: 0
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
        floorFormData: {
          "url": '',
          "location": '',
          "orderNum": null,
          "iosEnable": false,
          "androidEnable": false,
          "status": 0,
          "id": '',
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
        buildingName: '',
        addFloorFormVisible: false

      };
    },
    computed: {
      layoutHeight() {
        return this.$store.state.app.layoutHeight - 125;
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

        // let queryModel={};
        // Object.keys(this.queryModel).forEach(item=>{
        //   if(item!=='brandName'){
        //     queryModel[item]=this.queryModel[item]
        //   }
        // });
        let queryModel=this.queryModel;

        this.$http.get(this.$baseUrl + this.floorsListRequest, {
          params: Object.assign(queryModel, this.pagination)
        }).then(response => {
          console.log(response);
          this.loading = false;
          this.floorList = response.list;
          this.buildingName = response.list[0].buildingName;
          this.pagination.total = response.total;
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
        this.addFloorFormVisible = true;

      },
      addFloor() {
        this.$http.post(this.$baseUrl + this.floorsAddOrUpdateRequest, Object.assign(this.floorFormData, {
          orderNum: this.pagination.total + 1
        })).then(response => {
          console.log(response)
          this.getSortList();
          this.$message.success('已添加一层楼')
        }).catch(error => {
          this.$message.error(`${error.response.status.toString()}  ${error.response.data.error}`)
        })
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
        this.dialogFormVisible = true;
        this.queryModel.name = "";
        this.chosenGameName = "";
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
      openAdvertiseUrl(data) {
        window.open('//' + data)
      },
      handleSizeChange(val) {
        this.pagination.size = val;
        this.getSortList();
      },
      handleCurrentChange(val) {
        this.pagination.page = val;
        this.getSortList();
      },
      uploadSuccess(response) {
        console.log(response)
        this.brandFormData.icon = response.url;
      },
    }
  };
</script>

<style lang='scss'>
  @import "../../styles/edifice.scss";
</style>
