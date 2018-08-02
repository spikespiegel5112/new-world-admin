<
<template>
  <el-row class="app-container">

    <el-tabs tab-position="left">
      <el-tab-pane v-for="item in $store.state.app.deviceTypeDictionary" :label="item.name" :style="{height:layoutHeight-5+'px'}">
        <el-tabs tab-position="left">
          <el-tab-pane v-for="item in gameTypeList" :label="item.name">
            <el-row>
              <el-col :span="6">
                <el-form ref="form" :model="queryModel" label-width="80px">
                  <el-form-item label="游戏名称">
                    <el-input v-model="queryModel.name"></el-input>
                  </el-form-item>
                </el-form>
                <div class="common-sortlist-wrapper">
                  <ul>
                    <li v-for="item in sortList">
                      <label>{{item.name}}</label>
                      <a>
                        <span class="add">+</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </el-col>
            </el-row>


          </el-tab-pane>
        </el-tabs>
      </el-tab-pane>
    </el-tabs>



  </el-row>
</template>`

<script>
  import CommonTag from '@/views/common/CommonTag.vue'
  import CommonQuery from '@/views/common/CommonQuery.vue'

  export default {
    components: {
      CommonTag,
      CommonQuery,
    },
    data() {
      return {
        game_typeAddOrUpdateRequest: 'game-service/1.0.0/game_type/addOrUpdate',
        game_typeDeleteRequest: 'game-service/1.0.0/game_type/delete',

        game_infoListRequest: 'game-service/1.0.0/game_info/list',
        game_typeListRequest: 'game-service/1.0.0/game_type/list',
        rankGameByTypeRequest: 'game-service/1.0.0/game_type/rankGameByType',

        value2: '',
        value1: '',
        tableKey: 0,
        tableList: [],
        total: null,
        listLoading: true,
        availabilityFlag: false,
        dynamicTags: ['标签一', '标签二', '标签三'],
        queryModel: {
          "title": '',
          "status": '',
          "name": '',
          "gender": '',
          "birthday": '',
        },
        natureDictionary: [{
          code: 1,
          name: 'app'
        }, {
          code: 2,
          name: '网页'
        }],
        statusDictionary: [{
          code: 0,
          name: '未上线'
        }, {
          code: 1,
          name: '上线'
        }],
        pagination: {
          page: 1,
          limit: 20,
        },
        importanceOptions: [1, 2, 3],
        sortOptions: [{label: 'ID Ascending', key: '+id'}, {label: 'ID Descending', key: '-id'}],
        statusOptions: ['published', 'draft', 'deleted'],
        showReviewer: false,
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
        availabilityFormData: {
          moduleId: '',
          type: '',
          iosEnable: '',
          androidEnable: '',
          version: ''
        },
        rules: {
          title: [{required: true, message: '请输入显示名称', trigger: 'change'}],
          name: [{required: true, message: '请输入唯一表示名称', trigger: 'change'}],
          description: [{required: true, message: '请输入游戏描述', trigger: 'change'}],
          iconUrl: [{required: true, message: '请上传图片', trigger: 'change'}],
          bigImageUrl: [{required: true, message: '请上传图片', trigger: 'change'}],
          iosDownloadUrl: [{required: true, message: '此项为必填项', trigger: 'change'}],
          androidDownloadUrl: [{required: true, message: '此项为必填项', trigger: 'change'}],
          webGameUrl: [{required: true, message: '此项为必填项', trigger: 'change'}],
          nature: [{required: true, message: '此项为必填项', trigger: 'change'}],
          ios: [{required: true, message: '此项为必填项', trigger: 'change'}],
          android: [{required: true, message: '此项为必填项', trigger: 'change'}],
          status: [{required: true, message: '此项为必填项', trigger: 'change'}],
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
        androidVersionListData: [],
        searchTxt: '',
        expandQuery: '',
        showFileListFlag: false,
        newFile: '',
        gameTypeList:[],
        gameTypeId:'',
        sortList:[],
        topNumber:0
      }
    },
    computed: {
      layoutHeight() {
        return this.$store.state.app.layoutHeight;
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
      }
    },
    mounted() {
      this.getGameTypeList()
    },
    methods: {

      getGameTypeList() {
        this.listLoading = true;
        this.queryModel = Object.assign(this.queryModel, this.pagination);
        this.$http.get(this.$baseUrl + this.game_infoListRequest, {
          params: this.queryModel
        }).then(response => {
          console.log(response)


          this.gameTypeList = response.list;

          this.getTableData()
          this.listLoading = false
        })
      },
      getTableData() {
        this.listLoading = true;
        this.queryModel = Object.assign(this.queryModel, this.pagination);
        this.$http.get(this.$baseUrl + this.rankGameByTypeRequest+`${this.gameTypeId}`, {
          params: this.queryModel
        }).then(response => {
          console.log(response)

          this.tableList = response.list;
          this.total = response.total;
          this.listLoading = false
        })
      },
      handleFilter() {
        this.pagination.page = 1;
        this.getTableData()
      },
      handleSizeChange(val) {
        this.pagination.limit = val;
        this.getTableData()
      },
      handleCurrentChange(val) {
        this.pagination.page = val;
        this.getTableData()
      },
      resetTemp() {
        this.formData = {
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
        };
        this.fileList = []
      },
      handleCreate() {
        this.resetTemp();
        this.dialogStatus = 'create';
        this.dialogFormVisible = true;
        if (this.$refs.formData !== undefined) {
          this.$refs.formData.resetFields();
          this.$nextTick(() => {
            this.$refs['formData'].clearValidate()
          })
        }
      },
      createData() {
        this.formData.id = 0;
        this.updateData();
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
      updateData() {
        this.$refs['formData'].validate((valid) => {
          if (valid) {
            this.$http.post(this.$baseUrl + this.game_typeAddOrUpdateRequest, {
              id: this.formData.id,
              name: this.formData.name,
              "title": this.formData.title,
              "description": this.formData.description,
              "iconUrl": this.formData.iconUrl,
              "bigImageUrl": this.formData.bigImageUrl,
              "iosDownloadUrl": this.formData.iosDownloadUrl,
              androidDownloadUrl: this.formData.androidDownloadUrl,
              webGameUrl: this.formData.webGameUrl,
              nature: this.formData.nature,
              ios: this.formData.ios,
              android: this.formData.android,
              status: this.formData.status
            }).then((response) => {
              console.log(response)
              this.dialogFormVisible = false;
              this.$message.success('信息修改成功');
              this.getTableData();
            }).catch(error => {
              console.log(error)
              this.$message.error(`${error.response.status.toString()}  ${error.response.data.error}`)
            })
          }
        });
      },
      handleDelete(scope) {
        this.$confirm('确认删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.delete(this.$baseUrl + this.game_typeDeleteRequest + `/${scope.row.id}`).then((response) => {
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
        console.log(file)
      },
      handlePreview(file) {
        console.log(file);
        this.fileList.push(file);
      },
      uploadSuccess1(response) {
        console.log(response)
        this.formData.iconUrl = response.url;
      },
      uploadSuccess2(response) {
        this.formData.bigImageUrl = response.url;
      },
      uploadAvatarExceeded(files, fileList) {
        if (fileList.length > 0) {
          this.$confirm('当前已有上传图片，需先删除已有图片，请确认是否删除？', '提示', {
            type: 'warning'
          }).then(resolve => {
            this.$refs['uploadAvatar'].clearFiles();
            this.fileList.splice(fileList.length - 1, 1)
          })
        }
      },
      handleRemove() {

      },
      handleBeforeUpload(file) {
        console.log(file)
        this.showFileListFlag = true;
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
      editAvailability(scope) {
        console.log(scope.row)

        this.availabilityFormData = Object.assign({}, {
          "moduleId": scope.row.id,
          "type": scope.row.type,
          "iosEnable": scope.row.iosEnable,
          "androidEnable": scope.row.androidEnable,
          "version": scope.row.version,
        })
        console.log(this.availabilityFormData)
        this.availabilityFlag = true;

      },
      expand() {
        this.expandQuery = !this.expandQuery;
      },
      search() {
        this.getTableData();
      },
      reset() {
        this.queryModel.available = true;
      },
      deleteImage1(index) {
        this.formData.iconUrl = '';
        this.fileList.splice(index, 1);
      },
      deleteImage2(index) {
        this.formData.bigImageUrl = '';
        this.fileList.splice(index, 1);
      }
    }
  }
</script>
