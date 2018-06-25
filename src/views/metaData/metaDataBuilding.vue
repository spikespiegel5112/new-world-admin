<template>
  <el-row class="app-container">
    <el-row class="common-filter-wrapper">
      <el-col :span="6">
        <el-input @keyup.enter.native="handleFilter" placeholder="任务名称" class="filter-item"
                  v-model="listQuery.keyword">
        </el-input>

      </el-col>
      <el-col :span="6">
        <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
        <el-button class="filter-item" @click="handleCreate" type="primary"
                   icon="el-icon-edit">新增
        </el-button>
      </el-col>
    </el-row>

    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column label="No" type="index" width="50" align="center"
                       fixed></el-table-column>
      <el-table-column label="名称" align="center" prop="name"></el-table-column>
      <el-table-column label="Icon" align="center" width="100">
        <template slot-scope="scope">
          <img :src="scope.row.iconPath+'-style_100x100'" width="80">
        </template>
      </el-table-column>
      <el-table-column align="center" label="是否可用" prop="available">
        <template slot-scope="scope">
          {{scope.row.available?'是':'否'}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="点击反映类型" prop="actionType"></el-table-column>
      <el-table-column align="center" label="actionParam" prop="actionParam"></el-table-column>
      <el-table-column align="center" label="操作" style="width:500px">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit"
                     layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <!-- 弹框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="850px">
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form :rules="rules" ref="formData" :model="formData" label-position="left" label-width="140px">
            <el-form-item label="名称" prop="name">
              <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="Icon" prop="iconPath">
              <el-upload
                class="common-avataruploader-wrapper"
                ref="uploadAvatar"
                :action="this.$baseUrl+'attachment/storeAttachment'"
                :limit="2"
                :show-file-list="false"
                :before-upload="handleBeforeUpload"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="uploadSuccess"
                :on-exceed="uploadAvatarExceeded"
                :file-list="fileList"
                :data="portraitParams">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2MB</div>
              </el-upload>
            </el-form-item>
            <el-form-item label="是否可用" prop="available">
              <el-switch
                v-model="formData.available"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </el-form-item>
            <el-form-item label="点击反映类型" prop="actionType">
              <el-select v-model="formData.actionType">
                <el-option v-for="item in $store.state.app.actionType"
                           :key="item.code"
                           :label="item.name"
                           :value="item.code"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="actionParam" prop="name">
              <el-input v-model="formData.actionParam"></el-input>
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
        value2: '',
        value1: '',
        tableKey: 0,
        list: null,
        total: null,
        listLoading: true,
        listQuery: {
          page: 1,
          limit: 20,
          importance: undefined,
          keyword: undefined,
          type: undefined,
          sort: '+id'
        },
        importanceOptions: [1, 2, 3],
        sortOptions: [{label: 'ID Ascending', key: '+id'}, {label: 'ID Descending', key: '-id'}],
        statusOptions: ['published', 'draft', 'deleted'],
        showReviewer: false,
        formData: {
          id: '',
          "name": "",
          "label": "",
          "available": false,
          "actionType": "",
          "actionParam": "",
          "icon": ""
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
          name: [{required: true, message: 'name is required', trigger: 'change'}],
          timestamp: [{type: 'date', required: true, message: 'timestamp is required', trigger: 'change'}],
          title: [{required: true, message: 'title is required', trigger: 'blur'}]
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
        portraitParams: {}
      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      }
    },
    created() {
      this.fetchData()
    },
    methods: {
      fetchData() {
        this.listLoading = true;
        getMetaDataBuildListRequest(this.listQuery).then(response => {
          console.log(response)
          this.list = response;
          this.total = response.totalElements;
          this.listLoading = false
        })
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
          "name": "",
          "label": "",
          "available": false,
          "actionType": "",
          "actionParam": "",
          "icon": ""
        }
      },
      handleCreate() {
        this.resetTemp()
        this.dialogStatus = 'create';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['formData'].clearValidate()
        })
      },
      createData() {
        this.$refs['formData'].validate((valid) => {
          if (valid) {
            this.formData.id = parseInt(Math.random() * 100) + 1024 // mock a id
            this.formData.author = 'vue-element-admin'
            saveTryPlay(this.formData).then(() => {
              this.list.unshift(this.formData)
              this.dialogFormVisible = false
              this.$notify({
                title: '成功',
                message: '创建成功',
                type: 'success',
                duration: 2000
              })
            })
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
          this.$http.post('http://gateway.zan-qian.com/' + `meta-service/1.0.0/buildings/${formData.id}`, {
            "name": formData.name,
            "label": formData.label,
            "available": formData.available,
            "actionType": formData.actionType,
            "actionParam": formData.actionParam,
            "icon": formData.icon
          }).then((response) => {
            console.log(response)
            this.dialogFormVisible = false;
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
      handleDelete(row) {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
          duration: 2000
        })
        const index = this.list.indexOf(row)
        this.list.splice(index, 1)
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
        response = response.data;
        this.componentModelData.uploaded = response.id;
        this.loading = false;
        this.$message({
          message: '图片上传成功',
          type: 'success'
        });
        this.fileList = [{
          id: response.id
        }];
      },
      uploadAvatarExceeded(files, fileList) {
        if (fileList.length > 0) {
          this.$confirm('当前申报已有上传头像，需先删除已有头像，请确认是否删除？', '提示', {
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
