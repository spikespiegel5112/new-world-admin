<template>
  <div class="app-container">
    <div class="common-querytable-wrapper">
      <div class="queryform-wrapper">
        <div class="outside">
          <el-form class="basearea">
            <ul class="pull-left">
              <li>
                <el-button size="mini" type="primary" icon="el-icon-plus" @click="handleCreate" v-waves>新增</el-button>
              </li>
            </ul>
          </el-form>
          <ul class="operation-wrapper pull-right">
            <li>
              <div class="common-search-wrapper" @keyup.enter="search">
                <input v-model="queryModel.name" type="text" placeholder="请输入名称"/>
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
                  <el-button type="primary" size="mini" icon="el-icon-search" @click="search" v-waves>搜索
                  </el-button>
                  <el-button type="primary" size="mini" icon="el-icon-refresh" @click="reset" v-waves>重置
                  </el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </div>

    <el-table :data="tableList" v-loading.body="listLoading" element-loading-text="Loading" border fit
              highlight-current-row>
      <el-table-column align="center" label='No' width="50">
        <template slot-scope="scope">
          {{scope.$index+1}}
        </template>
      </el-table-column>
      <el-table-column label="名称" alignuk="center">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="Icon" align="center" width="100">
        <template slot-scope="scope">
          <img :src="scope.row.iconPath+'-style_213x144'" width="80">
        </template>
      </el-table-column>
      <el-table-column align="center" class-name="status-col" label="积分" width="70">
        <template slot-scope="scope">
          {{scope.row.bounty}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="完成数" width="70">
        <template slot-scope="scope">
          {{scope.row.completedNum}}
        </template>
      </el-table-column>
      <el-table-column label="剩余数" width="70">
        <template slot-scope="scope">
          {{scope.row.surplusNum}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="提交时间" width="80">
        <template slot-scope="scope">
          <!--{{scope.row.submitPath}}-->
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="添加时间">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.createDate}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="上架">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.isShow" :active-value="1" :inactive-value="0" active-color="#13ce66"
                     inactive-color="#ff4949" @change="updateShelfStatus(scope)">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)" v-waves>编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)" v-waves>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="common-pagination-wrapper">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="queryModel.page" :page-sizes="[10,20,30,50]" :page-size="queryModel.limit"
                     layout="total, sizes, prev, pager, next, jumper" :total="pagination.total">
      </el-pagination>
    </div>
    <!-- 弹框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="dataForm" :model="formData" label-position="right" label-width="120px"
               style='width: 400px; margin-left:50px;'>
        <el-form-item label="名称" prop="name">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="iconPath" prop="iconPath">
          <div class="avatar-wrapper">
            <a v-if="formData.icon!==''" class="close">
              <span class="iconfont icon-crosswide"></span>
            </a>
            <img v-if="formData.icon===''" src="../../image/default/defaultavatar_60_60.png" class="avatar">
            <img v-else :src="formData.iconPath+'-style_100x100'" class="avatar">
          </div>
          <el-upload class="common-avataruploader-wrapper" ref="uploadAvatar"
                     :action="$baseUrl+'image-upload-service/1.0.0/file/upload'" :limit="1" :show-file-list="false"
                     :before-upload="handleBeforeUpload" :on-preview="handlePreview" :on-remove="handleRemove"
                     :on-success="uploadSuccess" :on-exceed="uploadAvatarExceeded" :file-list="fileList"
                     :data="portraitParams">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2MB</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="Please input"
                    v-model="formData.note">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" v-waves>{{$t('table.cancel')}}</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData" v-waves>{{$t('table.confirm')}}
        </el-button>
        <el-button v-else type="primary" @click="updateData" v-waves>{{$t('table.confirm')}}</el-button>
      </div>
    </el-dialog>
    <!--  -->
  </div>

</template>

<script>
  import {getBankCardList, updateShelfStatusRequest} from "@/api/task";

  export default {
    data() {
      return {
        getbankcardlistRequest: "task-service/1.0.0/cardtask/bk/getbankcardlist",
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
          id: null,
          name: "",
          note: "",
          startDate: null,
          endDate: null,
          iconPath: "",
          packageName: ""
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
            message: "name is required",
            trigger: "change"
          }],
          timestamp: [{
            type: "date",
            required: true,
            message: "timestamp is required",
            trigger: "change"
          }],
          title: [{
            required: true,
            message: "title is required",
            trigger: "change"
          }]
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
        fileList: [],
        portraitParams: {
          bucketName: "funyvalley",
          folderName: "task"
        }
      };
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
        this.$http.get(this.$baseUrl + this.getbankcardlistRequest, {
          params: Object.assign(this.queryModel, this.pagination)
        }).then(response => {
          console.log(response);
          response = response.data;
          this.tableList = response.content;
          this.pagination.total = response.totalElements;
          this.listLoading = false;
        });
      },
      handleFilter() {
        this.queryModel.page = 1;
        this.getTableData();
      },
      handleSizeChange(val) {
        this.queryModel.limit = val;
        this.getTableData();
      },
      handleCurrentChange(val) {
        this.queryModel.page = val;
        this.getTableData();
      },
      updateShelfStatus(scope) {
        console.log(scope);
        //0下架 1上架
        updateShelfStatusRequest(scope.row.id, scope.row.isShow).then(response => {
          if (response) {
            this.$message({
              message: "操作成功",
              type: "success"
            });
          } else {
            this.$message({
              message: "操作失败",
              type: "error"
            });
          }
        });
      },
      resetTemp() {
        this.formData = {
          id: null,
          name: "",
          note: "",
          startDate: null,
          endDate: null,
          iconPath: ""
        };
      },
      handleCreate() {
        this.resetTemp();
        this.dialogStatus = "create";
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs["dataForm"].clearValidate();
        });
      },
      createData() {
      },
      handleUpdate(row) {
        this.formData = Object.assign({}, row); // copy obj
        this.formData.timestamp = new Date(this.formData.timestamp);
        this.dialogStatus = "update";
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs["dataForm"].clearValidate();
        });
      },
      updateData() {
      },
      handleDelete(row) {
        this.$notify({
          title: "成功",
          message: "删除成功",
          type: "success",
          duration: 2000
        });
        const index = this.tableList.indexOf(row);
        this.tableList.splice(bankCard, 1);
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
      },
      upShelf() {
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
        this.formData.detailImage.splice(index, 1);
        this.formData.detailImage.forEach((item, index) => {
          if (item === this.formData.image) {
            this.formData.image = item;
          }
        });
        this.fileList = this.fileList.filter(item => item.uid !== file.uid);
        console.log(this.formData.detailImage);
      },
      uploadSuccess(response, file, fileList) {
        this.loading = false;
        console.log(file);
        console.log(response);
        console.log(6, fileList);

        this.fileList.push(response);
        console.log(this.formData);
        this.formData.detailImage.push(response.url);
        console.log(fileList);
        // this.formData.detailImage.forEach((item, index) => {
        //   if (item.url === this.formData.image) {
        //     this.formData.detailImage.splice(index, 1)
        //   }
        // });

        this.loading = false;
        this.$message({
          message: "图片上传成功",
          type: "success"
        });
      },
      uploadAvatarExceeded(files, fileList) {
      }
    }
  };
</script>
