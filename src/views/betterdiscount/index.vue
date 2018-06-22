<template>
  <div class="app-container">
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row>
      <el-table-column align="center" label='ID' width="95">
        <template slot-scope="scope">
          {{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column label="商品编号" width="100" align="center">
        <template slot-scope="scope">
          {{scope.row.goodsNumber}}
        </template>
      </el-table-column>
      <el-table-column label="商品名称" width="150" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.name}}</span>
        </template>
      </el-table-column>
       <el-table-column label="商品图片" width="150" align="center">
        <template slot-scope="scope">
         <img :src="scope.row.image" width="80">
        </template>
      </el-table-column>
      <el-table-column label="商品价格" width="80" align="center">
        <template slot-scope="scope">
          {{scope.row.price}}
        </template>
      </el-table-column>
      <el-table-column label="折扣价" width="80" align="center">
        <template slot-scope="scope">
          {{scope.row.discountPrice}}
        </template>
      </el-table-column>
      <el-table-column label="优惠券链接" width="100" align="center">
        <template slot-scope="scope">
          {{scope.row.coupons}}
        </template>
      </el-table-column>
      <el-table-column label="详情" width="200" align="center">
        <template slot-scope="scope">
          {{scope.row.details}}
        </template>
      </el-table-column>
      <el-table-column label="简介" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.summary}}
        </template>
      </el-table-column>
      <el-table-column label="购买链接" width="150" align="center">
        <template slot-scope="scope">
          {{scope.row.buyUrl}}
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" >
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope.row)">编辑</el-button>
          <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleModifyStatus(scope.row,'deleted')">删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getDiscountGoodsList } from '@/api/betterdiscount'

export default {
  data() {
    return {
      list: null,
      listLoading: true
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
        this.listLoading = false
      })
    }
  }
}

// fetchData () {
//        this.loading = true
//        this.page.cur = +this.$route.query.page || 1   // 这个就是当前要请求的页数
//        this.getList()  // 向后台发数据请求的接口，我分来来写了。
//      }
// // 这个就根据后台接口自己去写请求方法了。
// getList () {
//        api.getBookList({
//          pageable: this.page.cur,
//          reservationname: this.guestName,
//          reservationphone: this.phoneNum
//        })
//          .then((data) => {
//            this.loading = false
//            // 转化数据
//            this.resolveData(data.data.orders)
//            // 赋值总页数
//            this.page.totalPage = data.data.count
//          })
//          .catch((err) => {
//            console.log(err)
//          })
//      }

</script>
