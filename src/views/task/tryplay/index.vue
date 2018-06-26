<template>
  <div class="app-container">
    <div class="filter-container">
      <el-input @keyup.enter.native="handleFilter" placeholder="任务名称" style="width: 200px;" class="filter-item" v-model="listQuery.keyword">
      </el-input>
      <el-button class="filter-item" type="primary" icon="el-icon-search" @click="handleFilter">查询</el-button>
      <el-button class="filter-item" style="margin-left: 10px;" @click="handleCreate" type="primary" icon="el-icon-edit">新增</el-button>
    </div>

    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row style="width: 100%">
      <el-table-column align="center" label='No' width="40">
        <template slot-scope="scope">
          {{scope.$index+1}}
        </template>
      </el-table-column>
      <el-table-column label="名称" align="center">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="Icon" align="center" width="100">
        <template slot-scope="scope" >
          <img :src="scope.row.iconPath+'-style_100x100'" width="80">
        </template>
      </el-table-column>
      <el-table-column align="center" class-name="status-col" label="积分" width="60">
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
      <el-table-column align="center" label="试玩时长" width="80">
        <template slot-scope="scope">
          {{scope.row.tryplayTimeLength}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="开始/结束时间" >
        <template slot-scope="scope">
          {{scope.row.startDate}}<br> {{scope.row.endDate}}
        </template>
      </el-table-column>
      <el-table-column label="APK下载地址" >
        <template slot-scope="scope">
          {{scope.row.ApkPath}}
        </template>
      </el-table-column>
      <el-table-column label="应用包名" >
        <template slot-scope="scope">
          {{scope.row.packageName}}
        </template>
      </el-table-column>
      <el-table-column label="状态" width="50">
        <template slot-scope="scope">
          {{scope.row.isShow}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="添加时间" >
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.createDate}}</span>
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
        <!-- <el-form-item :label="$t('table.type')" prop="type">
          <el-select class="filter-item" v-model="temp.type" placeholder="Please select">
            <el-option v-for="item in  calendarTypeOptions" :key="item.key" :label="item.display_name" :value="item.key">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item :label="$t('table.date')" prop="timestamp">
          <el-date-picker v-model="temp.timestamp" type="datetime" placeholder="Please pick a date">
          </el-date-picker>
        </el-form-item> -->
        <el-form-item label="名称" prop="name">
          <el-input v-model="temp.name"></el-input>
        </el-form-item>
        <el-form-item label="iconPath" prop="iconPath">
          <el-upload class="upload-demo" accept=".png" action="" :auto-upload='false' :on-change='changeUpload' >
            <el-button size="small" type="primary" plain>上传</el-button>
          </el-upload>
        </el-form-item>
        <el-form-item label="Apk下载地址" prop="name">
          <el-input v-model="temp.name"></el-input>
        </el-form-item>
        <el-form-item label="Apk包名" prop="name">
          <el-input v-model="temp.name"></el-input>
        </el-form-item>
        <el-form-item label="开始时间" prop="startDate">
          <el-date-picker v-model="temp.startDate" type="date" placeholder="开始日期" :picker-options="pickerOptions0">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="结束时间" prop="endDate">
          <el-date-picker v-model="temp.endDate" type="date" placeholder="结束日期" :picker-options="pickerOptions1">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="描述">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="Please input" v-model="temp.note">
          </el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{$t('table.cancel')}}</el-button>
        <el-button v-if="dialogStatus=='create'" type="primary" @click="createData">{{$t('table.confirm')}}</el-button>
        <el-button v-else type="primary" @click="updateData">{{$t('table.confirm')}}</el-button>
      </div>
    </el-dialog>
    <!--  -->
  </div>
</template>

<script>
  import { getTryPlayList, saveTryPlay, changeStatus } from '@/api/task'

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
        getTryPlayList(this.listQuery).then(response => {
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
      createData() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            this.temp.id = parseInt(Math.random() * 100) + 1024 // mock a id
            this.temp.author = 'vue-element-admin'
            saveTryPlay(this.temp).then(() => {
              this.list.unshift(this.temp)
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
        this.temp = Object.assign({}, row) // copy obj
        this.temp.timestamp = new Date(this.temp.timestamp)
        this.dialogStatus = 'update'
        this.dialogFormVisible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].clearValidate()
        })
      },
      updateData() {
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
