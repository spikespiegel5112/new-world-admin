<template>
  <el-row class="app-container">
    <el-row class="common-filter-wrapper" :gutter="20">
      <el-col :span="6">
        <el-input @keyup.enter.native="handleFilter" placeholder="任务名称" v-model="listQuery.name">
        </el-input>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
        <el-button @click="handleCreate" type="primary" icon="el-icon-edit">新增</el-button>
      </el-col>
    </el-row>

    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column label="No" type="index" width="50" align="center" fixed></el-table-column>
      <el-table-column label="ID" align="center" prop="id"></el-table-column>
      <el-table-column label="名称" align="center" prop="name"></el-table-column>
      <el-table-column label="是否可用" align="center" prop="name"></el-table-column>
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope)">编辑</el-button>
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
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="850px">
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form :rules="rules" ref="formData" :model="formData" label-position="left" label-width="140px">
            <el-form-item v-if="dialogStatus==='update'" label="ID" prop="id">
              <el-input v-model="formData.id"></el-input>
            </el-form-item>
            <el-form-item label="名称" prop="name">
              <el-input v-model="formData.name"></el-input>
            </el-form-item>

          </el-form>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{$t('table.cancel')}}</el-button>
        <el-button v-if="dialogStatus==='create'" type="primary" @click="createData">{{$t('table.confirm')}}</el-button>
        <el-button v-else type="primary" @click="updateData">{{$t('table.confirm')}}</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
  import {getMetaDataBuildListRequest} from '@/api/metaData'
  import {updateMetaDataBuildListRequest} from '@/api/metaData'

  export default {
    data() {
      return {
        createFeatureRequest: 'meta-service/1.0.0/feature',
        featureListRequest: 'meta-service/1.0.0/feature',
        featureAvailabilityRequest: 'meta-service/1.0.0/availability',
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
        dialogFormVisible: false,
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
        }
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
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true;
        this.$http.get(this.$baseUrl + this.featureListRequest, {
          params: {
            id: '',
            name: ''
          }
        }).then(response=>{
          console.log(response)
          this.list = response.data;
          // this.total = response.totalElements;
          this.listLoading = false
        });
      },
      handleFilter() {
        this.listQuery.page = 1;
        this.fetchData()
      },
      handleSizeChange(val) {
        this.listQuery.limit = val;
        this.fetchData()
      },
      handleCurrentChange(val) {
        this.listQuery.page = val;
        this.fetchData()
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
        this.dialogFormVisible = true;
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
                this.dialogFormVisible = false;
                this.$message.success('信息创建成功');
                this.fetchData();
              })
            });
          }
        })
      },
      handleUpdate(scope) {
        console.log(scope)
        this.formData = Object.assign({}, scope.row); // copy obj
        this.dialogStatus = 'update';
        this.dialogFormVisible = true;
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
            this.dialogFormVisible = false;
            this.$message.success('信息修改成功');
            this.fetchData();
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
            this.dialogFormVisible = false;
            this.$message.success('删除成功');
            this.fetchData();
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
    }
  }
</script>
