<
<template>
  <el-row class="app-container">
    <CommonQuery>
      <template slot="button1">
        <el-button size="mini" type="primary" icon="el-icon-plus" @click="handleCreate" v-waves>
          新增
        </el-button>
      </template>
      <template slot="query1">
        <div class="common-search-wrapper" @keyup.enter="search">
          <input v-model="queryModel.brandName" type="text" placeholder="请输入游戏名称"/>
          <a>
            <span @click="search" class="el-icon-search"></span>
          </a>
        </div>
      </template>
    </CommonQuery>

    <el-table :data="tableList" v-loading.body="listLoading" element-loading-text="Loading" border fit
              highlight-current-row
              :height="tableHeight">
      <el-table-column label="No" type="index" width="50" align="center" fixed></el-table-column>
      <el-table-column label="活动ID" align="center" prop="activityId"></el-table-column>
      <el-table-column label="奖品数量" align="center" prop="number">
        <template slot-scope="scope">
          {{scope.row.number.toString()!=='-1'?scope.row.number:'无限次'}}
        </template>
      </el-table-column>
      <el-table-column label="中奖率" align="center" prop="probability"></el-table-column>
      <el-table-column label="奖品ID" align="center" prop="rewardId"></el-table-column>
      <el-table-column label="奖品名称" align="center" prop="rewardName"></el-table-column>
      <el-table-column label="是否可用" align="center" prop="status">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.status"
            :active-value="1"
            :inactive-value="0"
            active-color="#13ce66"
            inactive-color="#ff4949"
            disabled
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="300px">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope)">编辑</el-button>
          <el-button type="danger" size="mini" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="common-pagination-wrapper">
      <el-pagination background @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page.sync="pagination.page"
                     :page-sizes="[10,20,30,50]"
                     :page-size="pagination.size"
                     :total="total"
                     layout="total, sizes, prev, pager, next, jumper"
      >
      </el-pagination>
    </div>
    <!-- 编辑品牌 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" width="850px">
      <el-row type="flex" justify="center">
        <el-col :span="20">
          <el-form :rules="rules" ref="formData" :model="formData"
                   label-position="right"
                   label-width="140px">

            <el-form-item label="活动ID" prop="activityId">
              <el-input type="textarea" v-model="formData.activityId"></el-input>
            </el-form-item>
            <el-form-item label="奖品数量" prop="number">
              <el-input v-model="formData.number"></el-input>
            </el-form-item>
            <el-form-item label="中奖率" prop="probability">
              <el-input v-model.number="formData.probability"></el-input>
            </el-form-item>
            <el-form-item label="奖品ID" prop="rewardId">
              <el-input v-model="formData.rewardId"></el-input>
            </el-form-item>
            <el-form-item label="是否可用" prop="status">
              <el-switch v-model="formData.status"
                         :active-value="1"
                         :inactive-value="0"
                         active-color="#13ce66"
                         inactive-color="#ff4949"
              >
              </el-switch>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" v-waves>{{$t('table.cancel')}}</el-button>
        <el-button v-if="dialogStatus==='create'" type="primary" @click="createData">{{$t('table.confirm')}}</el-button>
        <el-button v-else type="primary" @click="updateData" v-waves>{{$t('table.confirm')}}</el-button>
      </div>
    </el-dialog>

  </el-row>
</template>`

<script>
  import CommonTag from '@/views/common/CommonTag.vue'
  import CommonQuery from '@/views/common/CommonQuery.vue'
  import Draggable from 'vuedraggable'

  export default {
    components: {
      CommonTag,
      CommonQuery,
      Draggable,
    },
    data() {
      return {
        queryRewardInfoByActivityTypeRequest: 'promotion-service/1.0.0/queryRewardInfoByActivityType',
        addAndUpdateRotaryTableActivityRequest: 'promotion-service/1.0.0/addAndUpdateRotaryTableActivity',

        value2: '',
        value1: '',
        tableKey: 0,
        tableList: [],
        total: null,
        listLoading: true,
        availabilityFlag: false,
        dynamicTags: ['标签一', '标签二', '标签三'],
        rewardTypeDictionary: [{
          name: '积分',
          code: 'point'
        }, {
          name: '趣豆',
          code: 'coin'
        }, {
          name: '百视通会员',
          code: 'bes_tv'
        }, {
          name: '第三方链接',
          code: 'third_link'
        }],
        queryModel: {
          sort: 'desc',
          brandName: ''
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
          size: 20,
        },
        importanceOptions: [1, 2, 3],

        sortOptions: [{label: 'ID Ascending', key: '+id'}, {label: 'ID Descending', key: '-id'}],
        statusOptions: ['published', 'draft', 'deleted'],
        showReviewer: false,
        formData: {
          id: '',
          companyName: '',
          name: '',
          "desc": '',
          "icon": '',
          "image": '',
          "originalPrice": '',
          "url": '',
          "status": '',
          price: '',
          productId: '',
          rewardType: '',
        },
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          update: 'Edit',
          create: 'Create'
        },
        dialogPvVisible: false,
        rules: {
          id: [{required: true, message: '此项为必填项', trigger: 'change'}],
          companyName: [{required: true, message: '此项为必填项', trigger: 'change'}],
          name: [{required: true, message: '此项为必填项', trigger: 'change'}],
          price: [{required: true, message: '此项为必填项', trigger: 'change'}],
          productId: [{required: true, message: '此项为必填项', trigger: 'change'}],
          rewardType: [{required: true, message: '此项为必填项', trigger: 'change'}],
          desc: [{required: true, message: '此项为必填项', trigger: 'change'}],
          image: [{required: true, message: '此项为必填项', trigger: 'change'}],
          icon: [{required: true, message: '此项为必填项', trigger: 'change'}],
          originalPrice: [{required: true, message: '此项为必填项', trigger: 'change'},
            {type: 'number', message: '必须为数字值', trigger: "change"}],
          status: [{required: true, message: '此项为必填项', trigger: 'change'}],
          url: [{required: true, message: '此项为必填项', trigger: 'change'}],
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
        advertisementDialogFlag: false,
        currentAdvertisementTabIndex: 0,
        currentSortData: [],
        effectiveDuration: []

      }
    },
    computed: {
      tableHeight() {
        return this.$store.state.app.tableHeight;
      }
    },
    watch: {
      effectiveDuration(value) {
        console.log(value);
        if (value === null) {
          value = [];
        }
        this.formData.startDate = this.$moment(value[0]).format('YYYY-MM-DD');
        this.formData.endDate = this.$moment(value[1]).format('YYYY-MM-DD');
      },
      currentAdvertisementTabIndex(value) {
        console.log(value)
      },
      currentSortData(value) {
        console.log(value)
        value.forEach((item1, index1) => {
          this.tableList.forEach((item2, index2) => {
            if (item1.id === item2.id) {
              this.tableList[index2].orderNum = index1;
            }
          })
        });
        console.log(this.tableList)
      }
    },
    mounted() {
      this.getTableData()
    },
    methods: {
      getTableData() {
        this.listLoading = true;
        this.queryModel = Object.assign(this.queryModel, this.pagination);
        this.$http.get(this.$baseUrl + this.queryRewardInfoByActivityTypeRequest + '/2').then(response => {
          console.log(response)

          this.tableList = response.data;
          this.total = response.total;
          this.listLoading = false
        })
      },
      handleFilter() {
        this.pagination.page = 1;
        this.getTableData()
      },
      handleSizeChange(val) {
        this.pagination.size = val;
        this.getTableData()
      },
      handleCurrentChange(val) {
        this.pagination.page = val;
        this.getTableData()
      },
      resetTemp() {
        this.formData = {
          "desc": '',
          "icon": '',
          "image": '',
          "title": '',
          "originalPrice": '',
          "url": '',
          "status": '',
        };

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
        this.formData.id = '';
        this.updateData();
      },
      handleUpdate(scope) {
        console.log('handleUpdate', scope)
        this.formData = Object.assign({}, scope.row);

        this.dialogStatus = 'update';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['formData'].clearValidate()
        })
      },
      updateData() {
        this.$refs['formData'].validate((valid) => {
          if (valid) {
            this.$http.post(this.$baseUrl + this.addAndUpdateRotaryTableActivityRequest, {
              id: this.formData.id,
              "desc": this.formData.desc,
              "icon": this.formData.icon,
              "image": this.formData.image,
              "originalPrice": this.formData.originalPrice,
              "url": this.formData.url,
              "status": this.formData.status,
              companyName: this.formData.companyName,
              name: this.formData.name,
              price: this.formData.price,
              productId: this.formData.productId,
              rewardType: this.formData.rewardType,
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
          this.$http.delete(this.$baseUrl + this.brandDeleteRequest + `/${scope.row.id}`).then((response) => {
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
      expand() {
        this.expandQuery = !this.expandQuery;
      },
      search() {
        this.getTableData();
      },
      reset() {
        this.queryModel.available = true;
      },
      deleteAdvertise(data, index) {
        this.$confirm('确认删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {

        });
      },

      uploadSuccess1(response) {
        console.log(response)
        this.formData.icon = response.url;
      },
      uploadSuccess2(response) {
        this.formData.image = response.url;
      },
    }
  }
</script>
<style lang="scss">
  @import '../../styles/edifice.scss';

</style>
