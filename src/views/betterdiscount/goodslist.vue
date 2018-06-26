<template>
  <div class="app-container">
  	<div class="filter-container">
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" class="filter-item" >
      </el-input>
      <el-button class="filter-item" type="primary" v-waves icon="el-icon-search" @click="handleFilter">查询</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">新增</el-button>
    </div>
    
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label='ID' width="40">
        <template slot-scope="scope">
          {{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column label="商品编号" align="center" width="100">
        <template slot-scope="scope">
          {{scope.row.goodsNumber}}
        </template>
      </el-table-column>
      <el-table-column label="商品名称" align="center" width="100">
        <template slot-scope="scope" >
            {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="商品图片" width="150" align="center">
        <template slot-scope="scope">
         <img :src="scope.row.image+'-style_200x200'" width="80">
        </template>
      </el-table-column>
      <el-table-column align="center" label="商品价格" width="70">
        <template slot-scope="scope">
          {{scope.row.price}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="折扣价" width="70">
        <template slot-scope="scope">
          {{scope.row.discountPrice}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="优惠券链接" width="100">
        <template slot-scope="scope">
          {{scope.row.coupons}}
        </template>
      </el-table-column>
      <el-table-column label="详情" width="200">
        <template slot-scope="scope">
          {{scope.row.details}}
        </template>
      </el-table-column>
    <el-table-column label="简介" width="150">
        <template slot-scope="scope">
          {{scope.row.summary}}
        </template>
      </el-table-column>
       <el-table-column label="购买链接" width="150">
        <template slot-scope="scope">
          {{scope.row.buyUrl}}
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" >
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button v-if="scope.row.isShow=='0'" size="mini" type="success" @click="handleModifyStatus(scope.row,1)">上架
          </el-button>
          <el-button v-if="scope.row.isShow=='1'" size="mini"  @click="handleModifyStatus(scope.row,0)">下架
          </el-button>
          <el-button  size="mini" type="danger" @click="handleDelete(scope.row)">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="pagination-container">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="listQuery.page" :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
 <!-- 弹框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="dataForm" :model="temp" label-position="left" label-width="70px" style='width: 400px; margin-left:50px;'>
    
        <el-form-item label="商品编号" prop="goodsNumber">
          <el-input v-model="temp.goodsNumber"></el-input>
        </el-form-item>
        <el-form-item label="商品名称" prop="name">
          <el-input v-model="temp.name"></el-input>
        </el-form-item>
        <el-form-item label="商品图片" prop="image">
          <el-input v-model="temp.image"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input v-model="temp.price"></el-input>
        </el-form-item>
        <el-form-item label="折扣价" prop="discountPrice">
          <el-input v-model="temp.discountPrice"></el-input>
        </el-form-item>
        <el-form-item label="优惠券链接" prop="coupons">
          <el-input v-model="temp.coupons"></el-input>
        </el-form-item>
        <el-form-item label="详情" prop="details">
          <el-input v-model="temp.details"></el-input>
        </el-form-item>
        <el-form-item label="简介" prop="summary">
          <el-input v-model="temp.summary"></el-input>
        </el-form-item>
        <el-form-item label="购买链接" prop="buyUrl">
          <el-input v-model="temp.buyUrl"></el-input>
        </el-form-item>
      </el-form>
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
import { getDiscountGoodsList } from '@/api/betterdiscount'

// const calendarTypeOptions = [
//   { key: '主编推荐', value: '1' },
//   { key: '彩妆护肤', value: '2' },
//   { key: '吃货生活', value: '3' },
//   { key: '服饰鞋靴', value: '4' },
//   { key: '男士数码', value: '5' },
//   { key: '运动礼物', value: '6' }
// ]

// const goodsType = calendarTypeOptions.reduce((acc, cur) => {
//   acc[cur.key] = cur.value
//   return acc
// }, {})

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
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      temp: {
        id: undefined,
        name: '',
        note: '',
        startDate: null,
        endDate: null,
        iconPath: '',
        packageName: ''
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
        name: [{ required: true, message: 'name is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'blur' }]
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
      }
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
      this.listLoading = true
      getDiscountGoodsList(this.listQuery).then(response => {
        this.list = response.content
        this.total = response.totalElements
        this.listLoading = false
      })
    },
    handleFilter() {
      this.listQuery.page = 1
      this.fetchData()
    },
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.fetchData()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.fetchData()
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
      this.temp = {
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
        this.$refs['dataForm'].clearValidate()
      })
    },
    addGoods() {
    },
    handleUpdate(row) {
      this.temp = Object.assign({}, row) // copy obj
      this.temp.timestamp = new Date(this.temp.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
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
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    },
    changeUpload(file) {
      console.log(file)
    }
  }
}
</script>
