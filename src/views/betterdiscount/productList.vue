<template>
  <div class="app-container">
    <div class="common-querytable-wrapper">
      <div class="queryform-wrapper">
        <div class="outside">
          <el-form class="basearea">
            <ul class="pull-left">
              <li>
                <el-button size="mini" type="primary" icon="el-icon-plus" @click="add">
                  新增
                </el-button>
              </li>
            </ul>
          </el-form>
          <ul class="operation-wrapper pull-right">
            <li>
              <div class="common-search-wrapper" @keyup.enter="search">
                <input v-model="searchTxt" type="text" placeholder="请输入单位名称和姓名"/>
                <a>
                  <span @click="search" class="el-icon-search"></span>
                </a>
              </div>
            </li>
            <li>
              <el-button size="mini" class="expand el-icon-arrow-down" type="text" @click='expand'>高级搜索<i
                class=""></i></el-button>
            </li>
          </ul>
        </div>
        <div class="expandarea" :class="{active:expandQuery}">
          <el-form ref="form" :model="queryModel" size="mini" label-width="100px">
            <el-row>
              <el-col :span="8">

              </el-col>
              <el-col :span="8">

              </el-col>
              <el-col :span="8">
                <el-form-item label="产品类型：">
                  <el-select v-if="productTypeData.length>0" v-model="queryModel.type">
                    <el-option v-for="item in productTypeData" :key="item.type" :label="item.title"
                               :value="item.type"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="23" pull-right>
                <el-form-item class="pull-right">
                  <el-button type="primary" size="mini" icon="el-icon-search" @click="search">搜索
                  </el-button>
                  <el-button type="primary" size="mini" icon="el-icon-refresh" @click="reset">重置
                  </el-button>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
    </div>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="Loading" border fit highlight-current-row
              style="width: 100%">
      <el-table-column align="center" label='ID' width="40">
        <template slot-scope="scope">
          {{scope.row.id}}
        </template>
      </el-table-column>
      <el-table-column label="商品编号" align="center" width="120">
        <template slot-scope="scope">
          {{scope.row.goodsNumber}}
        </template>
      </el-table-column>
      <el-table-column label="商品名称" align="center" width="120">
        <template slot-scope="scope">
          {{scope.row.name}}
        </template>
      </el-table-column>
      <el-table-column label="商品图片" width="150" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.image+'-style_200x200'" width="80">
        </template>
      </el-table-column>
      <el-table-column align="center" label="商品价格" width="100">
        <template slot-scope="scope">
          {{scope.row.price}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="折扣价" width="70">
        <template slot-scope="scope">
          {{scope.row.discountPrice}}
        </template>
      </el-table-column>
      <el-table-column align="center" label="优惠券链接" width="150">
        <template slot-scope="scope">
          {{scope.row.coupons}}
        </template>
      </el-table-column>
      <el-table-column label="简介">
        <template slot-scope="scope">
          {{scope.row.summary}}
        </template>
      </el-table-column>
      <el-table-column label="购买链接" width="150">
        <template slot-scope="scope">
          {{scope.row.buyUrl}}
        </template>
      </el-table-column>
      <el-table-column label="是否上架">
        <template slot-scope="scope">
          {{groundingStatusDictionary.filter(item=>item.code===scope.row.status)[0].name}}
        </template>
      </el-table-column>


      <el-table-column align="center" label="操作" width="170">
        <template slot-scope="scope">
          <el-button type="primary" size="mini" @click="handleUpdate(scope)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div class="common-pagination-wrapper">
      <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                     :current-page="pagination.page" :page-sizes="[10,20,30,50]" :page-size="queryModel.limit"
                     layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
    <!-- 弹框 -->
    <el-dialog :title="textMap[dialogStatus]" :visible.sync="dialogFormVisible" :before-close="cancel">
      <el-row type="flex" justify="center">
        <el-col :span="16">
          <el-form :rules="rules" ref="formData" :model="formData" label-position="right" label-width="120px">
            <el-form-item label="商品编号" prop="goodsNumber">
              <el-input v-model="formData.goodsNumber"></el-input>
            </el-form-item>
            <el-form-item label="商品名称" prop="name">
              <el-input v-model="formData.name"></el-input>
            </el-form-item>
            <el-form-item label="商品图片" prop="image">
              <div class="avatar-wrapper" style="">
                <a v-if="formData.image!==''" class="close">
                  <span class="iconfont icon-crosswide"></span>
                </a>
                <img v-if="formData.image===''||formData.image===null||formData.image===null"
                     src="../../image/default/defaultavatar_60_60.png"
                     class="avatar">
                <img v-else :src="formData.image+'-style_100x100'"
                     class="avatar">
              </div>
              <el-upload
                class="common-avataruploader-wrapper"
                ref="uploadAvatar"
                :action="$baseUrl+'image-upload-service/1.0.0/file/upload'"
                :limit="1"
                :show-file-list="false"
                :before-upload="handleBeforeUpload"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-success="uploadSuccess"
                :on-exceed="uploadAvatarExceeded"
                :file-list="fileList"
                :data="portraitParams">

                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">
                  只能上传jpg/png文件，且不超过2MB
                </div>
              </el-upload>
            </el-form-item>
            <el-form-item label="商品价格" prop="price">
              <el-input v-model.number="formData.price"></el-input>
            </el-form-item>
            <el-form-item label="折扣价" prop="discountPrice">
              <el-input v-model.number="formData.discountPrice"></el-input>
            </el-form-item>
            <el-form-item label="优惠券链接" prop="coupons">
              <el-input v-model="formData.coupons"></el-input>
            </el-form-item>
            <el-form-item label="详情" prop="details">
              <el-input type="textarea" v-model="formData.details"></el-input>
            </el-form-item>
            <el-form-item label="简介" prop="summary">
              <el-input type="textarea" v-model="formData.summary"></el-input>
            </el-form-item>
            <el-form-item label="购买链接" prop="buyUrl">
              <el-input v-model="formData.buyUrl"></el-input>
            </el-form-item>
            <el-form-item label="商品类型" prop="type">
              <el-select v-model="formData.type">
                <el-option v-for="item in productTypeData" :label="item.title" :value="item.type"
                           :key="item.type"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="是否上架" prop="status">
              <el-select v-model="formData.status">
                <el-option v-for="item in groundingStatusDictionary" :label="item.name" :value="item.code"
                           :key="item.code"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">{{$t('table.cancel')}}</el-button>
        <el-button v-if="dialogStatus==='create'" type="primary" @click="addGoods">{{$t('table.confirm')}}</el-button>
        <el-button v-else type="primary" @click="updatedGoods">{{$t('table.confirm')}}</el-button>
      </div>
    </el-dialog>
    <!--  -->
  </div>
</template>

<script>
  import {getDiscountGoodsList} from '@/api/betterDiscount'

  export default {
    data() {
      return {
        categoryListRequest: 'better-discount-service/1.0.0/queryTitleTypeList',
        queryGoodsListRequest: 'better-discount-service/1.0.0/queryGoodsList',
        addGoodsRequest: 'better-discount-service/1.0.0/addGoods',
        updateGoodsContentRequest: 'better-discount-service/1.0.0/updateGoodsContent',
        deleteTitleTypeRequest: 'better-discount-service/1.0.0/deleteGoods',
        queryGoodsListByTypeRequest: 'better-discount-service/1.0.0/queryGoodsListByType',

        queryGoodsListAllRequest: 'better-discount-service/1.0.0/queryGoodsListAll',


        groundingStatusDictionary: [{
          name: '下架',
          code: '0'
        }, {
          name: '上架',
          code: '1'
        }],
        productTypeDictionary: [{
          name: '不可用',
          code: '0'
        }, {
          name: '可用',
          code: '1'
        }],
        value2: '',
        value1: '',
        tableKey: 0,
        list: null,
        total: null,
        listLoading: true,
        queryModel: {
          type: null,
        },
        pagination: {
          page: 1,
          size: 10,
        },
        fileList: [],
        productTypeData: [{
          name: '无数据',
          value: ''
        }],
        importanceOptions: [1, 2, 3],
        sortOptions: [{label: 'ID Ascending', key: '+id'}, {label: 'ID Descending', key: '-id'}],
        statusOptions: ['published', 'draft', 'deleted'],
        showReviewer: false,
        formData: {
          id: null,
          goodsNumber: '',
          name: '',
          price: '',
          discountPrice: '',
          coupons: '',
          type: '',
          image: '',
          details: '',
          summary: '',
          buyUrl: '',
          imageWidth: '',
          imageHigh: '',
          status: '',
        },
        searchTxt: '',
        dialogFormVisible: false,
        dialogStatus: '',
        textMap: {
          update: 'Edit',
          create: 'Create'
        },
        dialogPvVisible: false,
        pvData: [],
        rules: {
          name: [{required: true, message: '此项为必填项', trigger: 'change'}],
          goodsNumber: [{required: true, message: '此项为必填项', trigger: 'change'}],
          price: [{required: true, message: '此项为必填项', trigger: 'change'},
            {type: 'number', message: '必须为数字值'}],
          discountPrice: [{required: true, message: '此项为必填项', trigger: 'change'},
            {type: 'number', message: '必须为数字值'}],
          coupons: [{required: true, message: '此项为必填项', trigger: 'change'}],
          type: [{required: true, message: '此项为必填项', trigger: 'change'}],
          image: [{required: true, message: '此项为必填项', trigger: 'change'}],
          details: [{required: true, message: '此项为必填项', trigger: 'change'}],
          summary: [{required: true, message: '此项为必填项', trigger: 'change'}],
          buyUrl: [{required: true, message: '此项为必填项', trigger: 'change'}],
          imageWidth: [{required: true, message: '此项为必填项', trigger: 'change'}],
          imageHigh: [{required: true, message: '此项为必填项', trigger: 'change'}],
          status: [{required: true, message: '此项为必填项', trigger: 'change'}],
        },
        downloadLoading: false,
        // pickerOptions0: {
        //   disabledDate: (time) => {
        //     if (this.value2 !== '') {
        //       return time.getTime() > this.value2
        //     }
        //   }
        // },
        // pickerOptions1: {
        //   disabledDate: (time) => {
        //     return time.getTime() < this.value1
        //   }
        // },
        expandQuery: false,

        portraitParams: {
          bucketName: 'funyvalley',
          folderName: 'icon'
        },
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
      this.getProductTypeList();
    },
    methods: {
      getTableData() {
        this.listLoading = true;
        this.$http.post(this.$baseUrl + this.queryGoodsListAllRequest, {
          pageNo: this.pagination.page - 1,
          type: this.queryModel.type
        }).then(response => {
          console.log(response)
          response = response.data;
          this.list = response.content;
          this.total = response.totalElements;
          this.listLoading = false
        })
      },
      getProductTypeList() {
        this.$http.get(this.$baseUrl + this.categoryListRequest).then(response => {
          console.log(response);
          this.productTypeData = response.data;
        });
      },
      search() {
        if (this.queryModel.type !== null || this.queryModel.type !== '') {
          this.getTableData();
        }
      },
      reset() {
        this.queryModel.type = null;
        this.pagination.page = 1;
        this.getTableData();
      },
      handleFilter() {
        this.pagination.page = 1;
        this.getTableData()
      },
      handleSizeChange(val) {
        this.queryModel.limit = val;
        this.getTableData()
      },
      handleCurrentChange(val) {
        this.pagination.page = val;

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
          id: null,
          name: '',
          note: '',
          startDate: null,
          endDate: null,
          iconPath: ''
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
      addGoods() {
        this.$refs.formData.validate(valid => {
          if (valid) {
            this.$http.post(this.$baseUrl + this.addGoodsRequest, {
              "goodsNumber": this.formData.goodsNumber,
              "name": this.formData.name,
              "price": Number(this.formData.price).toFixed(2),
              "discountPrice": Number(this.formData.discountPrice).toFixed(2),
              "coupons": this.formData.coupons,
              "type": this.formData.type,
              "image": this.formData.image,
              "details": this.formData.details,
              "summary": this.formData.summary,
              "buyUrl": this.formData.buyUrl,
              "imageWidth": this.formData.imageWidth,
              "imageHigh": this.formData.imageHigh,
              "status": this.formData.status,
            }).then(response => {
              console.log(response)
              this.dialogFormVisible = false;
              this.$message.success('商品添加成功');
              this.getTableData();
            })
          }
        })
      },
      handleUpdate(scope) {
        this.formData = Object.assign({}, scope.row);
        this.formData.timestamp = new Date(this.formData.timestamp);
        this.dialogStatus = 'update';
        this.dialogFormVisible = true;
        this.$nextTick(() => {
          this.$refs['formData'].clearValidate()
        })
      },
      updatedGoods() {
        this.$http.post(this.$baseUrl + this.updateGoodsContentRequest, {
          id: this.formData.id,
          goodsNumber: this.formData.goodsNumber,
          name: this.formData.name,
          price: Number(this.formData.price).toFixed(2),
          discountPrice: Number(this.formData.discountPrice).toFixed(2),
          coupons: this.formData.coupons,
          type: this.formData.type,
          image: this.formData.image,
          details: this.formData.details,
          summary: this.formData.summary,
          buyUrl: this.formData.buyUrl,
          imageWidth: this.formData.imageWidth,
          imageHigh: this.formData.imageHigh,
          status: this.formData.status,
        }).then(response => {
          this.dialogFormVisible = false;
          this.$message.success('产品信息更新成功');
          this.getTableData();
          console.log(response)
        })
      },
      handleDelete(scope) {
        this.$confirm('确认删除?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http.get(this.$baseUrl + this.deleteTitleTypeRequest + `/${scope.row.goodsNumber}`, {
            headers: {
              'Authorization': 'Bearer ' + this.$store.state.user.token
            }
          }).then((response) => {
            console.log(response)
            this.dialogFormVisible = false;
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
      add() {
        this.dialogFormVisible = true;
        this.dialogStatus = 'create';
        this.$nextTick(() => {
          this.$refs.formData.resetFields();
        })

      },
      expand() {
        this.expandQuery = !this.expandQuery;
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
      handlePreview(file) {
        console.log(file);
        this.fileList.push(file);
      },
      handleRemove() {

      },
      uploadSuccess(response) {
        this.loading = false;
        console.log(response)
        this.formData.image = response.url;
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
            }).catch(error => {
              this.$message.error(error.response.data)
            })
          })
        }
      },
      cancel() {
        this.dialogFormVisible = false;
        this.$refs['formData'].resetFields();

      }
    }
  }
</script>
