<template>
  <div class="app-container">
    <div class="common-querytable-wrapper">
      <el-input @keyup.enter.native="handleFilter" style="width: 200px;" :placeholder="$t('table.title')" v-model="queryModel.keyword">
      </el-input>
      <!-- <el-select clearable style="width: 90px" v-model="queryModel.importance" :placeholder="$t('table.importance')">
        <el-option v-for="item in importanceOptions" :key="item" :label="item" :value="item">
        </el-option>
      </el-select> -->
      <el-select clearable style="width: 220px" v-model="queryModel.location" :placeholder="$t('table.type')">
        <el-option v-for="item in  calendarTypeOptions" :key="item.key" :label="item.display_name+'('+item.key+')'" :value="item.key">
        </el-option>
      </el-select>
      <el-select @change='handleFilter' style="width: 140px" v-model="queryModel.sort">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key">
        </el-option>
      </el-select>
      <el-button type="primary" v-waves icon="el-icon-search" @click="handleFilter">{{$t('table.search')}}</el-button>
      <el-button @click="handleCreate" type="primary" icon="el-icon-edit">{{$t('table.add')}}</el-button>
    </div>

    <el-table :key='tableKey' :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row
      style="width: 100%">
      <el-table-column align="center" :label="$t('table.id')" width="65">
        <template slot-scope="scope">
          <span>{{scope.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('table.image')" width="100px">
        <template slot-scope="scope">
          <img :src="scope.row.image+'-style_25x25'">
        </template>
      </el-table-column>
      <el-table-column align="center" height="10px" :label="$t('table.url')">
        <template slot-scope="scope">
          <span class="link-type"></span><!--{{scope.row.url}}-->
          <!-- <span class="link-type" @click="handleUpdate(scope.row)">{{scope.row.url}}</span> -->
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('table.video')">
        <template slot-scope="scope">
          <span class="link-type">{{scope.row.video}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('table.type')">
        <template slot-scope="scope">
          <el-tag>{{scope.row.location | typeFilter}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('table.endDate')">
        <template slot-scope="scope">
          <span>{{scope.row.endDate}}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" :label="$t('table.status')" width="100">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.status | statusFilterName}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column align="center" :label="$t('table.actions')" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <router-link :to="'/advertising/edit/'+scope.row.id"><el-button type="primary" size="mini">{{$t('table.edit')}}</el-button></router-link>
          <el-button v-if="scope.row.status=='0'" size="mini" type="success" @click="updateShelfStatus(scope.row,'1')">{{$t('table.publish')}}
          </el-button>
           <el-button v-if="scope.row.status=='1'" size="mini" @click="updateShelfStatus(scope.row,'0')">{{$t('table.draft')}}
          </el-button>
          <el-button v-if="scope.row.status!='deleted'" size="mini" type="danger" @click="handleDelete(scope.row)">{{$t('table.delete')}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="common-pagination-wrapper">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="queryModel.page" :page-sizes="[10,20,30,50]" :page-size="queryModel.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible">
      <el-form :rules="rules" ref="dataForm" :model="formData" label-position="right" label-width="120px" style='width: 400px; margin-left:50px;'>
        <el-form-item :label="$t('table.type')" prop="type">
          <el-select v-model="formData.type" placeholder="Please select">
            <el-option v-for="item in  calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.date')" prop="timestamp">
          <el-date-picker v-model="formData.timestamp" type="datetime" placeholder="Please pick a date">
          </el-date-picker>
        </el-form-item>
        <el-form-item :label="$t('table.title')" prop="title">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item :label="$t('table.status')">
          <el-select v-model="formData.status" placeholder="Please select">
            <el-option v-for="item in  statusOptions" :key="item" :label="item" :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.importance')">
          <el-rate style="margin-top:8px;" v-model="formData.importance" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" :max='3'></el-rate>
        </el-form-item>
        <el-form-item :label="$t('table.remark')">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="Please input" v-model="formData.remark">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false" v-waves>{{$t('table.cancel')}}</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData" v-waves>{{$t('table.confirm')}}</el-button>
        <el-button v-else type="primary" @click="updateData" v-waves>{{$t('table.confirm')}}</el-button>
      </div>
    </el-dialog>

    <el-dialog title="Reading statistics" :visible.sync="dialogPvVisible">
      <el-table :data="pvData" border fit highlight-current-row>
        <el-table-column prop="key" label="Channel"> </el-table-column>
        <el-table-column prop="pv" label="Pv"> </el-table-column>
      </el-table>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogPvVisible = false">{{$t('table.confirm')}}</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { findList, createAdvertising, updateAdvertising, deleteAdvertising } from '@/api/advertising'
import waves from '@/directive/waves' // 水波纹指令

const calendarTypeOptions = [
  { key: 'start_the', display_name: '启动页' },
  { key: 'sign_in', display_name: '签到' },
  { key: 'notice', display_name: '公告' },
  { key: 'better_discount', display_name: '好折扣' }
]

// arr to obj ,such as { CN : "China", US : "USA" }
const calendarTypeKeyValue = calendarTypeOptions.reduce((acc, cur) => {
  acc[cur.key] = cur.display_name
  return acc
}, {})

export default {
  name: 'complexTable',
  directives: {
    waves
  },
  data() {
    return {
      tableKey: 0,
      list: null,
      total: null,
      listLoading: true,
      queryModel: {
        page: 1,
        limit: 20,
        importance: null,
        title: null,
        type: null,
        sort: '+id'
      },
      importanceOptions: [1, 2, 3],
      calendarTypeOptions,
      sortOptions: [{ label: 'ID Ascending', key: '+id' }, { label: 'ID Descending', key: '-id' }],
      statusOptions: ['published', 'draft', 'deleted'],
      showReviewer: false,
      formData: {
        id: null,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        type: '',
        status: 'published'
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
        type: [{ required: true, message: 'type is required', trigger: 'change' }],
        timestamp: [{ type: 'date', required: true, message: 'timestamp is required', trigger: 'change' }],
        title: [{ required: true, message: 'title is required', trigger: 'change' }]
      },
      downloadLoading: false
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        0: 'info',
        1: 'success'
      }
      return statusMap[status]
    },
    statusFilterName(status) {
      const statusMap = {
        0: '草稿',
        1: '发布'
      }
      return statusMap[status]
    },
    typeFilter(type) {
      return calendarTypeKeyValue[type]
    }
  },
  mounted() {
    this.getList()
  },
  methods: {
    getList() {
      this.listLoading = true
      findList(this.queryModel).then(response => {
        this.list = response.list
        this.total = response.total
        this.listLoading = false
      })
    },
    handleFilter() {
      this.queryModel.page = 1
      this.getList()
    },
    handleSizeChange(val) {
      this.queryModel.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      this.queryModel.page = val
      this.getList()
    },
    updateShelfStatus(row, status) {
      row.status = status
      updateAdvertising(row).then(response => {
        this.$message({
          message: '操作成功',
          type: 'success'
        })
      })
    },
    resetTemp() {
      this.formData = {
        id: null,
        importance: 1,
        remark: '',
        timestamp: new Date(),
        title: '',
        status: 'published',
        type: ''
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
    createData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          this.formData.id = parseInt(Math.random() * 100) + 1024 // mock a id
          this.formData.author = 'vue-element-admin'
          createAdvertising(this.formData).then(() => {
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
    handleUpdate(row) {
      this.formData = Object.assign({}, row) // copy obj
      this.formData.timestamp = new Date(this.formData.timestamp)
      this.dialogStatus = 'update'
      this.dialogFormVisible = true
      this.$nextTick(() => {
        this.$refs['dataForm'].clearValidate()
      })
    },
    updateData() {
      this.$refs['dataForm'].validate((valid) => {
        if (valid) {
          const tempData = Object.assign({}, this.formData)
          tempData.timestamp = +new Date(tempData.timestamp) // change Thu Nov 30 2017 16:41:05 GMT+0800 (CST) to 1512031311464
          updateAdvertising(tempData).then(() => {
            for (const v of this.list) {
              if (v.id === this.formData.id) {
                const index = this.list.indexOf(v)
                this.list.splice(index, 1, this.formData)
                break
              }
            }
            this.dialogFormVisible = false
            this.$notify({
              title: '成功',
              message: '更新成功',
              type: 'success',
              duration: 2000
            })
          })
        }
      })
    },
    handleDelete(row) {
      deleteAdvertising(row.id).then(response => {
        this.$notify({
          title: '成功',
          message: '删除成功',
          type: 'success',
          duration: 2000
        })
      })
      const index = this.list.indexOf(row)
      this.list.splice(index, 1)
    }
  }
}
</script>
