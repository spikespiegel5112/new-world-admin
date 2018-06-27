<template>
  <el-row class="app-container">
    <el-row class="common-querytable-wrapper" :gutter="20">
      <el-col :span="6">
        <el-input @keyup.enter.native="handleFilter" placeholder="任务名称" v-model="listQuery.name">
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
        <el-button @click="handleCreate" type="primary" icon="el-icon-edit">新增</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-form label-position="top" label-width="80px">
        <el-form-item label="审核版本">
          <CommonTag title="iOS" :tagData="iosVersionListData" buttonText="添加版本" :metaData="['ios']"
                     @add="handleAddIosList" @delete="handleDeleteIosList"/>
          <CommonTag title="Android" :tagData="androidVersionListData" buttonText="添加版本"
                     :metaData="['android']"
                     @add="handleAddIosList" @delete="handleDeleteIosList"/>
        </el-form-item>
      </el-form>
    </el-row>

    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column label="No" type="index" width="50" align="center" fixed></el-table-column>
      <el-table-column label="ID" align="center" prop="id"></el-table-column>
      <el-table-column label="名称" align="center" prop="name"></el-table-column>
      <el-table-column label="是否可用" align="center" prop="name"></el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="availabilityFlag=true">设置可用性</el-button>
          <el-button type="primary" size="mini" @click="editFlag=true">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="common-pagination-wrapper">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="listQuery.page" :page-sizes="[10,20,30,50]" :page-size="listQuery.limit"
                     layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <!-- 弹框 -->
    <el-dialog title="设置可用性" :visible.sync="availabilityFlag" width="850px">
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form :rules="rules" ref="formData" :model="formData" label-position="right" label-width="140px">
            <el-form-item label="ID" prop="id">
              <el-input v-model="formData.moduleId"></el-input>
            </el-form-item>
            <el-form-item label="类型" prop="type">
              <el-input v-model="formData.type"></el-input>
            </el-form-item>
            <el-form-item label="iosEnable" prop="iosEnable">
              <el-switch
                v-model="formData.iosEnable"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
            <el-form-item label="androidEnable" prop="androidEnable">
              <el-switch
                v-model="formData.androidEnable"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
            <el-form-item label="版本号" prop="version">
              <el-input v-model="formData.version"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="availabilityFlag = false">{{$t('table.cancel')}}</el-button>
        <el-button type="primary" @click="createData">{{$t('table.confirm')}}</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
  import {getMetaDataBuildListRequest} from '@/api/metaData'
  import {updateMetaDataBuildListRequest} from '@/api/metaData'
  import CommonTag from '@/components/CommonTag.vue'

  export default {
    components: {
      CommonTag
    },
    data() {
      return {
        createFeatureRequest: 'meta-service/1.0.0/feature',
        featureListRequest: 'meta-service/1.0.0/feature',
        featureAvailabilityRequest: 'meta-service/1.0.0/availability',
        versionListRequest: 'meta-service/1.0.0/availability/versionList/',
        versionControlRequest: 'meta-service/1.0.0/versionControl/',

        availabilityFlag: false,
        editFlag: true,
        value2: '',
        value1: '',
        tableKey: 0,
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
          name: '',
          available: '',
          actionType: '',
          actionParam: '',
          icon: '',
          page: 1,
          limit: 20,
        },
        importanceOptions: [1, 2, 3],
        sortOptions: [{label: 'ID Ascending', key: '+id'}, {label: 'ID Descending', key: '-id'}],
        statusOptions: ['published', 'draft', 'deleted'],
        showReviewer: false,
        formData: {
          id: '',
          name: '',
        },
        dialogStatus: '',
        textMap: {
          update: 'Edit',
          create: 'Create'
        },
        dialogPvVisible: false,
        pvData: [],
        rules: {
          id: [{required: true, message: '请输入ID', trigger: 'change'}],
          name: [{required: true, message: '请输入名称', trigger: 'change'}],
          moduleId: [{required: true, message: '请输入名称', trigger: 'change'}],
          type: [{required: true, message: '请输入名称', trigger: 'change'}],
          iosEnable: [{required: true, message: '请输入名称', trigger: 'change'}],
          androidEnable: [{required: true, message: '请输入名称', trigger: 'change'}],
          version: [{required: true, message: '请输入名称', trigger: 'change'}],
        },
        downloadLoading: false,
        pickerOptions0: {
          disabledDate: (time) => {
            if (this.value2 !== '') {
              return time.getTime() > this.value2
            }
          }
        },
        pickerOptions1: {
          disabledDate: (time) => {
            return time.getTime() < this.value1
          }
        },
        fileList: [],
        portraitParams: {
          bucketName: 'funyvalley',
          folderName: 'icon'
        },
        iosVersionListData: [],
        androidVersionListData: []
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        };
        return statusMap[status]
      }
    },
    mounted() {
      this.getTableData();
      this.getControllableVersionList();
    },
    methods: {
      getTableData() {
        this.listLoading = true;
        this.$http.get(this.$baseUrl + this.featureListRequest, {
          params: {
            id: '',
            name: ''
          }
        }).then(response => {
          console.log(response)
          this.list = response.data;
          // this.total = response.totalElements;
          this.listLoading = false
        });
      },
      getControllableVersionList() {
        this.$http.get(this.$baseUrl + this.versionListRequest).then(response => {
          console.log(response)
          response = response.data;
          this.androidVersionListData = response.androidList;
          this.iosVersionListData = response.iosList;
        })
      },
      handleFilter() {
        this.listQuery.page = 1;
        this.getTableData()
      },
      handleSizeChange(val) {
        this.listQuery.limit = val;
        this.getTableData()
      },
      handleCurrentChange(val) {
        this.listQuery.page = val;
        this.getTableData()
      },
      resetTemp() {
        this.formData = {
          id: '',
          name: '',
        }
      },
      handleCreate() {
        this.resetTemp();
        this.dialogStatus = 'create';
        this.availabilityFlag = true;
        this.$nextTick(() => {
          this.$refs['formData'].clearValidate()
        })
      },
      createData() {
        const formData = this.formData;

        console.log(this.$baseUrl)

        this.$refs['formData'].validate((valid) => {
          if (valid) {
            this.$refs['formData'].validate((valid) => {
              this.$http.post(this.$baseUrl + this.createFeatureRequest, {
                name: formData.name,
              }).then((response) => {
                console.log(response)
                this.availabilityFlag = false;
                this.$message.success('信息创建成功');
                this.getTableData();
              })
            });
          }
        })
      },
      handleUpdate(scope) {
        console.log(scope)
        this.formData = Object.assign({}, scope.row); // copy obj
        this.dialogStatus = 'update';
        this.availabilityFlag = true;
        this.$nextTick(() => {
          this.$refs['formData'].clearValidate()
        })
      },
      updateData() {
        const formData = this.formData;
        this.$refs['formData'].validate((valid) => {
          this.$http.post(this.$baseUrl + `meta-service/1.0.0/buildings/${formData.id}`, {
            "name": formData.name,
            "label": formData.label,
            "available": formData.available,
            "actionType": formData.actionType,
            "actionParam": formData.actionParam,
            "icon": formData.icon
          }).then((response) => {
            console.log(response)
            this.availabilityFlag = false;
            this.$message.success('信息修改成功');
            this.getTableData();
          })

          // updateMetaDataBuildListRequest({
          //   id: formData.id,
          // }, {
          //   "name": formData.name,
          //   "label": formData.label,
          //   "available": formData.available,
          //   "actionType": formData.actionType,
          //   "actionParam": formData.actionParam,
          //   "icon": formData.actionParam
          // }).then(response => {
          //   console.log(response)
          //   this.list = response;
          //   this.total = response.totalElements;
          //   this.listLoading = false
          // })
        });
      },
      handleDelete(scope) {

        this.$confirm('确认删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

          this.$http.delete(this.$baseUrl + `meta-service/1.0.0/buildings/${scope.row.id}`).then((response) => {
            console.log(response)
            this.availabilityFlag = false;
            this.$message.success('删除成功');
            this.getTableData();
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      changeUpload(file) {
        console.log(file)
      },
      handlePreview(file) {
        console.log(file);
        this.fileList.push(file);
      },
      uploadSuccess(response) {
        this.loading = false;
        console.log(response)
        this.formData.icon = response.url;
        this.loading = false;
        this.$message({
          message: '图片上传成功',
          type: 'success'
        });
      },
      uploadAvatarExceeded(files, fileList) {
        if (fileList.length > 0) {
          this.$confirm('当前申报已有上传图片，需先删除已有头像，请确认是否删除？', '提示', {
            type: 'warning'
          }).then(resolve => {
            this.$refs['uploadAvatar'].clearFiles();
            this.$http.get(this.$baseUrl + 'attachment/deleteAttachment/' + this.fileList[0].id).then(response => {
              if (response.data.code === '200') {
                this.fileList.splice(this.fileList.indexOf(response.id), 1);
                this.componentModelData.uploaded = '';
                this.$message.success('图片删除成功')
              } else {
                this.fileList.splice(this.fileList.indexOf(response.id), 1);
                this.componentModelData.uploaded = '';
                this.$message.warning('图片删除失败')
              }
            })
          })
        }
      },
      handleRemove() {

      },
      handleBeforeUpload(file) {
        console.log(file)
        let suffixDictionary = ['jpg', 'jpeg', 'png'];
        let index1 = file.name.lastIndexOf('.') + 1;
        let index2 = file.name.length;
        let fileSuffix = file.name.substring(index1, index2);
        if (suffixDictionary.filter(item => item === fileSuffix).length === 0) {
          this.$message({
            message: '文件必须为' + suffixDictionary.join('、') + '类型文件',
            type: 'error'
          });
          return false;
        }
        if (file.size > 1024 * 1024 * 2) {
          this.$message({
            message: '文件不得大于2M',
            type: 'error'
          });
          return false;
        }
        this.loading = true;
      },
      editAvailability() {
        this.availabilityFlag = true;
      },
      handleAddIosList(data, type) {
        console.log(data)
        console.log(type)
        this.$http.post(this.$baseUrl + this.versionControlRequest, {
          deviceType: type,
          version: data[data.length - 1]
        }, {
          headers: {
            'Authorization': 'Bearer ' + this.$store.state.user.token
          }
        }).then(response => {
          console.log(response)
        })
      },
      handleDeleteIosList(data, index,type) {
        this.$http.delete(this.$baseUrl + this.versionControlRequest+`${type}/${data}`, {
          headers: {
            'Authorization': 'Bearer ' + this.$store.state.user.token
          }
        }).then(response => {
          console.log(response)
        })
      },
    }
  }
</script>
