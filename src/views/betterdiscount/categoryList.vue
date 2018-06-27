<template>
  <div class="app-container">
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

    <el-table :data="tableData" v-loading.body="listLoading" element-loading-text="Loading" border fit
              highlight-current-row>
      <el-table-column align="center" label='ID' width="40" prop="id"></el-table-column>
      <el-table-column label="商品类目" align="center" prop="title"></el-table-column>
      <el-table-column label="商品类目副标题" align="center" prop="summary"></el-table-column>
      <el-table-column label="类型" align="center" prop="type"></el-table-column>
      <el-table-column label="图片" width="150" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.imageUrl+'-style_100x100'" width="80">
        </template>
      </el-table-column>
      <el-table-column align="center" label="商品价格" prop="status"></el-table-column>

      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button v-if="scope.row.isShow=='0'" size="mini" type="success" @click="handleModifyStatus(scope.row,1)">上架
          </el-button>
          <el-button v-if="scope.row.isShow=='1'" size="mini" @click="handleModifyStatus(scope.row,0)">下架
          </el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="common-pagination-wrapper">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit"
                     layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <!-- 弹框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form :rules="rules" ref="formData" :model="formData" label-position="right" label-width="120px">
            <el-form-item label="ID" prop="id">
              <el-input v-model="formData.goodsNumber"></el-input>
            </el-form-item>
            <el-form-item label="商品类目" prop="title">
              <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="商品类目副标题" prop="summary">
              <el-input v-model="formData.image"></el-input>
            </el-form-item>
            <el-form-item label="类型" prop="type">
              <el-input v-model="formData.price"></el-input>
            </el-form-item>
            <el-form-item label="图片" prop="imageUrl">
              <el-input v-model="formData.discountPrice"></el-input>
            </el-form-item>
            <el-form-item label="状态" prop="status">
              <el-input v-model="formData.coupons"></el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>

      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{$t('table.cancel')}}</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="addGoods">{{$t('table.confirm')}}</el-button>
        <el-button v-else type="primary" @click="updatedGoods">{{$t('table.confirm')}}</el-button>
      </div>
    </el-dialog>
    <!--  -->
  </div>
</template>

<script>

  export default {
    data() {
      return {
        categoryListRequest: 'better-discount-service/1.0.0/queryTitleTypeList',
        value2: '',
        value1: '',
        tableKey: 0,
        tableData: [],
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
          id: undefined,
          name: '',
          note: '',
          startDate: null,
          endDate: null,
          iconPath: '',
          packageName: ''
        },
        rules: {
          name: [{required: true, message: 'name is required', trigger: 'change'}],
          timestamp: [{type: 'date', required: true, message: 'timestamp is required', trigger: 'change'}],
          title: [{required: true, message: 'title is required', trigger: 'blur'}]
        },
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          update: 'Edit',
          create: 'Create'
        },
        dialogPvVisible: false,
        pvData: [],

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
      this.getTableData()
    },
    methods: {
      getTableData() {
        this.listLoading = true;
        this.$http.get(this.$baseUrl + this.categoryListRequest).then(response => {
          console.log(response);
          response = response.data;
          this.tableData = response;
          this.listLoading = false;
        })
      },
      handleFilter() {
        this.listQuery.page = 1
        this.getTableData()
      },
      handleSizeChange(val) {
        this.listQuery.limit = val
        this.getTableData()
      },
      handleCurrentChange(val) {
        this.listQuery.page = val
        this.getTableData()
      },
      handleModifyStatus(row, status) {
        changeStatus(row.id, status).then(response => {
          if (response) {
            this.$message({
              message: '操作成功',
              type: 'success'
            })
            row.isShow = status
          } else {
            this.$message({
              message: '操作失败',
              type: 'error'
            })
          }
        })
      },
      resetTemp() {
        this.formData = {
          id: undefined,
          name: '',
          note: '',
          startDate: null,
          endDate: null,
          iconPath: ''
        }
      },
      handleCreate() {
        this.resetTemp()
        this.dialogStatus = 'create'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['formData'].clearValidate()
        })
      },
      addGoods() {
      },
      handleUpdate(row) {
        this.formData = Object.assign({}, row) // copy obj
        this.formData.timestamp = new Date(this.formData.timestamp)
        this.dialogStatus = 'update'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['formData'].clearValidate()
        })
      },
      updatedGoods() {
      },
      handleDelete(row) {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
          duration: 2000
        })
        const index = this.tableData.indexOf(row)
        this.tableData.splice(index, 1)
      },
      changeUpload(file) {
        console.log(file)
      }
    }
  }
</script>
