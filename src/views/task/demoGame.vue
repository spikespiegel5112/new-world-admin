<template>
  <div class="app-container">
    <div class="common-querytable-wrapper">
      <div class="queryform-wrapper">
        <div class="outside">
          <el-form class="basearea">
            <ul class="pull-left">
              <li>
                <el-button size="mini" type="primary" icon="el-icon-plus" @click="handleCreate" v-waves>
                  新增
                </el-button>
              </li>
            </ul>
          </el-form>
          <ul class="operation-wrapper pull-right">
            <li>
              <div class="common-search-wrapper" @keyup.enter="search">
                <input v-model="queryModel.keyword" type="text" placeholder="请输入名称"/>
                <a>
                  <span @click="search" class="el-icon-search"></span>
                </a>
              </div>
            </li>
            <li>
              <el-button size="mini" class="expand" type="text" @click='expand'>高级搜索<i class="el-icon-arrow-down"></i>
              </el-button>
            </li>
          </ul>
        </div>
        <div class="expandarea" :class="{active:expandQuery}">
          <el-form ref="form" :model="queryModel" size="mini" label-width="100px">
            <el-row>
              <el-col :span="8">

              </el-col>
              <el-col :span="8">

              </el-col>
              <el-col :span="8">

              </el-col>
            </el-row>
            <el-row>
              <el-col :span="8">

              </el-col>
              <el-col :span="8">

              </el-col>
              <el-col :span="8">

              </el-col>
            </el-row>
            <el-row>
              <el-col :span="23" pull-right>
                <el-form-item class="pull-right">
                  <el-button type="primary" size="mini" icon="el-icon-search" @click="search" v-waves>搜索</el-button>
                  <el-button type="primary" size="mini" icon="el-icon-refresh" @click="reset" v-waves>重置</el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </div>

    <el-table :data="tableList" v-loading.body="listLoading" element-loading-text="Loading" border fit
              highlight-current-row :height="tableHeight">
      <el-table-column align="center" label='No' width="50">
        <template slot-scope="scope">
          {{scope.$index+1}}
        </template>
      </el-table-column>
      <el-table-column label="名称" align="center">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="Icon" align="center" width="100">
        <template slot-scope="scope">
          <img :src="scope.row.iconPath+'-style_100x100'" width="80">
        </template>
      </el-table-column>
      <el-table-column align="center" label="积分" width="60">
        <template slot-scope="scope">
          {{scope.row.bounty}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="完成数" width="70">
        <template slot-scope="scope">
          {{scope.row.completedNum}}
        </template>
      </el-table-column>
      <!--<el-table-column label="备注" width="70">-->
      <!--<template slot-scope="scope">-->
      <!--{{scope.row.note}}-->
      <!--</template>-->
      <!--</el-table-column>-->
      <el-table-column align="center" label="试玩时长" width="80">
        <template slot-scope="scope">
          {{scope.row.tryplayTimeLength}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="开始/结束时间" width="120">
        <template slot-scope="scope">
          {{scope.row.startDate}}
          <br> {{scope.row.endDate}}
        </template>
      </el-table-column>
      <!--<el-table-column label="APK下载地址">-->
        <!--<template slot-scope="scope">-->
          <!--{{scope.row.apkPath}}-->
        <!--</template>-->
      <!--</el-table-column>-->
      <el-table-column label="应用包名">
        <template slot-scope="scope">
          {{scope.row.packageName}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="添加时间">
        <template slot-scope="scope">
          <span>{{scope.row.createDate}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="isShow" label="上架">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.isShow" :active-value="1" :inactive-value="0" active-color="#13ce66"
                     inactive-color="#ff4949" @change="updateShelfStatus(scope)">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="isShow" label="是否过期">
        <template slot-scope="scope">
          <el-tag v-if="$moment().format('x')-$moment(scope.row.endDate).format('x')>0" type="danger">过期</el-tag>
          <el-tag v-else type="success">未过期</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope)" v-waves>编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope)" v-waves>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="common-pagination-wrapper">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="pagination.page" :page-sizes="[10,20,30,50]" :page-size="pagination.limit"
                     layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <!-- 弹框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width='width: 400px;'>
      <el-row type="flex" justify="center">
        <el-col :span="20">
          <el-form :rules="rules" ref="formData" :model="formData" label-position="right" label-width="150px">

            <el-form-item label="任务名称" prop="name">
              <el-input v-model="formData.name"></el-input>
            </el-form-item>

            <el-form-item label="任务图片" prop="iconPath">
              <CommonUploadImage
                :action="$baseUrl+'image-upload-service/1.0.0/file/upload'"
                @on-success="uploadSuccess"
                :returnUrlList.sync="formData.iconPath"
                fileType="image"
              />
              <el-input v-show="false" v-model="formData.iconPath"></el-input>
            </el-form-item>
            <el-form-item label="备注" prop="note">
              <el-input type="textarea" :autosize="{ minRows: 4}" v-model="formData.note"></el-input>
            </el-form-item>
            <el-form-item label="积分/趣币" prop="bounty">
              <el-input v-model.number="formData.bounty"></el-input>
            </el-form-item>
            <el-form-item label="apk 下载地址" prop="apkPath">
              <el-input v-model="formData.apkPath"></el-input>
            </el-form-item>
            <el-form-item label="包名" prop="packageName">
              <el-input v-model="formData.packageName"></el-input>
            </el-form-item>
            <el-form-item label="是否上架" prop="isShow">
              <el-switch v-model="formData.isShow" :active-value="1" :inactive-value="0" active-color="#13ce66"
                         inactive-color="#ff4949">
              </el-switch>
            </el-form-item>

            <el-form-item label="有效时间" prop="startDate">
              <el-date-picker
                v-model="effectiveDuration"
                type="daterange"
                value-format="yyyy-MM-dd"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-form-item>
            <el-form-item label="试玩时长" prop="tryplayTimeLength">
              <el-input-number v-model.number="formData.tryplayTimeLength" :min="0" label="描述文字"></el-input-number>
            </el-form-item>
          </el-form>

        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" v-waves>{{$t('table.cancel')}}</el-button>
        <el-button v-if="dialogStatus==='create'" type="primary" @click="createData" v-waves>{{$t('table.confirm')}}
        </el-button>
        <el-button v-else type="primary" @click="updateData" v-waves>{{$t('table.confirm')}}</el-button>
      </div>
    </el-dialog>
    <!--  -->
  </div>

</template>

<script>

  import {
    getTryPlayList,
    saveTryPlay,
    updateShelfStatusRequest
  } from "@/api/task";

  export default {
    data() {
      return {
        gettryplaylistRequest: 'task-service/1.0.0/task/bk/gettryplaylist/',
        saveTryPlayRequest: 'task-service/1.0.0/task/bk/saveTryPlay/',
        delTaskRequest: 'task-service/1.0.0/task/bk/delTask/',
        value2: "",
        value1: "",
        tableKey: 0,
        tableList: null,
        total: null,
        listLoading: true,
        queryModel: {
          keyword: '',
        },
        pagination: {
          page: 1,
          limit: 10
        },
        effectiveDuration: [],
        importanceOptions: [1, 2, 3],
        sortOptions: [{
          label: "ID Ascending",
          key: "+id"
        }, {
          label: "ID Descending",
          key: "-id"
        }],
        statusOptions: ["published", "draft", "deleted"],
        showReviewer: false,
        formData: {
          id: '',
          name: '',
          note: '',
          iconPath: '',
          bounty: '',
          surplusNum: '',
          startDate: '',
          endDate: '',
          isShow: 0,
          apkPath: '',
          packageName: '',
          tryplayTimeLength: 0,
        },
        dialogFormVisible: false,
        dialogStatus: "",
        textMap: {
          update: "Edit",
          create: "Create"
        },
        dialogPvVisible: false,
        pvData: [],
        rules: {
          name: [{
            required: true,
            message: "此项为必填项",
            trigger: "change"
          }],
          note: [{
            required: false,
            message: "此项为必填项",
            trigger: "change"
          }],
          iconPath: [{
            required: true,
            message: "此项为必填项",
            trigger: "change"
          }],
          bounty: [{
            required: true,
            message: "此项为必填项",
            trigger: "change"
          }, {
            type: 'number',
            message: '必须为数字值',
            trigger: "change"
          }, {
            type: 'number',
            max: 999999,
            message: '赏金不得大于999999',
            trigger: "change"
          }],
          surplusNum: [{
            required: true,
            message: "此项为必填项",
            trigger: "change"
          }, {
            type: 'number',
            message: '必须为数字值'
          }],
          startDate: [{
            required: true,
            message: "此项为必填项",
            trigger: "change"
          }],
          endDate: [{
            required: true,
            message: "此项为必填项",
            trigger: "change"
          }],
          isShow: [{
            required: true,
            message: "此项为必填项",
            trigger: "change"
          }],
          apkPath: [{
            required: true,
            message: "此项为必填项",
            trigger: "change"
          }],
          packageName: [{
            required: true,
            message: "此项为必填项",
            trigger: "change"
          }],
          tryplayTimeLength: [{
            required: true,
            message: "此项为必填项",
            trigger: "change"
          }, {
            type: 'number',
            message: '必须为数字值'
          }],
          effectiveDuration: [{
            required: true,
            message: '此项为必填项',
            trigger: 'change'
          }],
        },
        downloadLoading: false,
        pickerOptions0: {
          disabledDate: time => {
            if (this.value2 !== "") {
              return time.getTime() > this.value2;
            }
          }
        },
        pickerOptions1: {
          disabledDate: time => {
            return time.getTime() < this.value1;
          }
        },
        expandQuery: false,
        portraitParams: {
          bucketName: "funyvalley",
          folderName: "task"
        },
        fileList: []
      };
    },
    computed:{
      tableHeight(){
        return this.$store.state.app.tableHeight
      }
    },
    watch: {
      effectiveDuration(value) {
        console.log(value)
        if (value === null) {
          value = [];
        }
        this.formData.startDate = this.$moment(value[0]).format('YYYY-MM-DD');
        this.formData.endDate = this.$moment(value[1]).format('YYYY-MM-DD');
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: "success",
          draft: "gray",
          deleted: "danger"
        };
        return statusMap[status];
      }
    },
    mounted() {
      this.getTableData();
    },
    methods: {
      getTableData() {
        this.listLoading = true;
        this.$http.get(this.$baseUrl + this.gettryplaylistRequest, {
          params: Object.assign(this.queryModel, this.pagination)
        }).then(response => {
          console.log(response);

          this.tableList = response.content;
          this.total = response.totalElements;
          this.listLoading = false;
        }).catch(error => {
          console.log(error)
          this.$message.error(`${error.response.status.toString()}  ${error.response.data.error}`)
        })
      },
      handleSizeChange(val) {
        this.pagination.limit = val;
        this.getTableData();
      },
      handleCurrentChange(val) {
        this.pagination.page = val;
        this.getTableData();
      },
      updateShelfStatus(scope) {
        console.log(scope);
        //0下架 1上架
        this.$store.dispatch('updateShelfStatus', {
          id: scope.row.id,
          isShow: scope.row.isShow
        });
      },
      resetTemp() {
        this.formData = {
          id: '',
          name: '',
          note: '',
          iconPath: '',
          bounty: '',
          surplusNum: '',
          startDate: '',
          endDate: '',
          isShow: 0,
          apkPath: '',
          packageName: '',
          tryplayTimeLength: 0,
        };
        this.effectiveDuration = [];
        this.fileList = []
      },
      handleCreate() {
        this.resetTemp();
        this.dialogStatus = "create";
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs["formData"].clearValidate();
        });
      },
      createData() {
        this.$refs["formData"].validate(valid => {
          if (valid) {
            this.$http.post(this.$baseUrl + this.saveTryPlayRequest, {
              // this.$http.post('http://192.168.1.192:9006/1.0.0/task/bk/saveTryPlay', {
              id: '',
              name: this.formData.name,
              note: this.formData.note,
              iconPath: this.formData.iconPath,
              bounty: this.formData.bounty,
              surplusNum: this.formData.surplusNum,
              startDate: this.$moment(this.formData.startDate).format('YYYY-MM-DD'),
              endDate: this.$moment(this.formData.endDate).format('YYYY-MM-DD'),
              isShow: this.formData.isShow,
              apkPath: this.formData.apkPath,
              packageName: this.formData.packageName,
              tryplayTimeLength: this.formData.tryplayTimeLength,
            }).then(() => {
              this.tableList.unshift(this.formData);
              this.dialogFormVisible = false;
              this.$message.success('创建成功');
            }).catch(error => {
              console.log(error)
              this.$message.error(`${error.response.status.toString()}  ${error.response.data.error}`)
            })
          }
        });
      },
      handleUpdate(scope) {
        this.formData = Object.assign(this.formData, scope.row);
        this.effectiveDuration = [scope.row.startDate, scope.row.endDate]
        this.dialogStatus = "update";
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs["formData"].clearValidate();
        });
      },
      updateData() {
        this.$refs.formData.validate(valid => {
          if (valid) {

            // this.$http.post('http://192.168.1.154:9006/1.0.0/task/bk/saveTryPlay', {
            this.$http.post(this.$baseUrl + this.saveTryPlayRequest, {
              id: this.formData.id,
              name: this.formData.name,
              note: this.formData.note,
              iconPath: this.formData.iconPath,
              bounty: this.formData.bounty,
              surplusNum: this.formData.surplusNum,
              startDate: this.formData.startDate,
              endDate: this.formData.endDate,
              isShow: this.formData.isShow,
              apkPath: this.formData.apkPath,
              packageName: this.formData.packageName,
              tryplayTimeLength: this.formData.tryplayTimeLength,
            }).then(response => {
              console.log(response)
              this.dialogFormVisible = false;
              this.getTableData();
              this.$message.success('信息修改成功')
            }).catch(error => {
              console.log(error)
              this.$message.error(`${error.response.status.toString()}  ${error.response.data.error}`)
            })
          }
        })
      },
      handleDelete(scope) {
        this.$confirm('确认删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.post(this.$baseUrl + this.delTaskRequest + scope.row.id).then((response) => {
            console.log(response)
            this.dialogFormVisible = false;
            this.$message.success('删除成功');
            this.getTableData();
          }).catch(error => {
            console.log(error)
            this.$message.error(`${error.response.status.toString()}  ${error.response.data.error}`)
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      changeUpload(file) {
        console.log(file);
      },
      expand() {
        this.expandQuery = !this.expandQuery;
      },
      search() {
        this.getTableData();
      },
      reset() {
        this.queryModel.name = '';
        this.pagination.page = 1;
        this.getTableData();
      },
      handleBeforeUpload(file) {
        console.log(file);
        this.loading = true;
      },
      handlePreview(file) {
        console.log(file);
      },
      handleRemove(file, fileList) {
        console.log(file);
        console.log(fileList);

        let index = null;
        fileList.forEach((item, index2) => {
          if (file.uid === item) {
            index = index2;
          }
        });
        this.formData.iconPath = '';

        this.fileList = this.fileList.filter(item => item.uid !== file.uid);
        console.log(this.formData.iconPath);
      },
      uploadSuccess(response, file, fileList) {
        this.loading = false;
        console.log(file);
        console.log(response);
        console.log(6, fileList);
        this.formData.iconPath = response.url;
        this.fileList.push(response);
        console.log(fileList);

        this.loading = false;
        this.$message({
          message: "图片上传成功",
          type: "success"
        });
      },
      uploadAvatarExceeded(files, fileList) {
      },
      deleteImage(index) {
        this.formData.iconPath = '';
        this.fileList.splice(index, 1);
      }
    }
  }

</script>
