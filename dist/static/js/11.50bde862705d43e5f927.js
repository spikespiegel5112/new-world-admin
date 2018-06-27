webpackJsonp([11],{p0pz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("aA9S"),l=a.n(i),n={data:function(){var e=this;return{categoryListRequest:"better-discount-service/1.0.0/queryTitleTypeList",value2:"",value1:"",tableKey:0,tableData:[],total:null,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,keyword:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,formData:{id:void 0,name:"",note:"",startDate:null,endDate:null,iconPath:"",packageName:""},rules:{name:[{required:!0,message:"name is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],downloadLoading:!1,pickerOptions0:{disabledDate:function(t){if(""!==e.value2)return t.getTime()>e.value2}},pickerOptions1:{disabledDate:function(t){return t.getTime()<e.value1}}}},filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},created:function(){this.getTableData()},methods:{getTableData:function(){var e=this;this.listLoading=!0,this.$http.get(this.$baseUrl+this.categoryListRequest).then(function(t){console.log(t),t=t.data,e.tableData=t,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getTableData()},handleSizeChange:function(e){this.listQuery.limit=e,this.getTableData()},handleCurrentChange:function(e){this.listQuery.page=e,this.getTableData()},handleModifyStatus:function(e,t){var a=this;changeStatus(e.id,t).then(function(i){i?(a.$message({message:"操作成功",type:"success"}),e.isShow=t):a.$message({message:"操作失败",type:"error"})})},resetTemp:function(){this.formData={id:void 0,name:"",note:"",startDate:null,endDate:null,iconPath:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.formData.clearValidate()})},addGoods:function(){},handleUpdate:function(e){var t=this;this.formData=l()({},e),this.formData.timestamp=new Date(this.formData.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.formData.clearValidate()})},updatedGoods:function(){},handleDelete:function(e){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var t=this.tableData.indexOf(e);this.tableData.splice(t,1)},changeUpload:function(e){console.log(e)}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("el-row",{staticClass:"common-querytable-wrapper",attrs:{gutter:20}},[a("el-col",{attrs:{span:6}},[a("el-input",{attrs:{placeholder:"任务名称"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.name,callback:function(t){e.$set(e.listQuery,"name",t)},expression:"listQuery.name"}})],1),e._v(" "),a("el-col",{attrs:{span:6}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("新增")])],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.tableData,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"40",prop:"id"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品类目",align:"center",prop:"title"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品类目副标题",align:"center",prop:"summary"}}),e._v(" "),a("el-table-column",{attrs:{label:"类型",align:"center",prop:"type"}}),e._v(" "),a("el-table-column",{attrs:{label:"图片",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.imageUrl+"-style_100x100",width:"80"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品价格",prop:"status"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v("编辑")]),e._v(" "),"0"==t.row.isShow?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){e.handleModifyStatus(t.row,1)}}},[e._v("上架\n        ")]):e._e(),e._v(" "),"1"==t.row.isShow?a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleModifyStatus(t.row,0)}}},[e._v("下架\n        ")]):e._e(),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.row)}}},[e._v("删除\n        ")])]}}])})],1),e._v(" "),a("div",{staticClass:"common-pagination-wrapper"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:16}},[a("el-form",{ref:"formData",attrs:{rules:e.rules,model:e.formData,"label-position":"right","label-width":"120px"}},[a("el-form-item",{attrs:{label:"ID",prop:"id"}},[a("el-input",{model:{value:e.formData.goodsNumber,callback:function(t){e.$set(e.formData,"goodsNumber",t)},expression:"formData.goodsNumber"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品类目",prop:"title"}},[a("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品类目副标题",prop:"summary"}},[a("el-input",{model:{value:e.formData.image,callback:function(t){e.$set(e.formData,"image",t)},expression:"formData.image"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-input",{model:{value:e.formData.price,callback:function(t){e.$set(e.formData,"price",t)},expression:"formData.price"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"图片",prop:"imageUrl"}},[a("el-input",{model:{value:e.formData.discountPrice,callback:function(t){e.$set(e.formData,"discountPrice",t)},expression:"formData.discountPrice"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-input",{model:{value:e.formData.coupons,callback:function(t){e.$set(e.formData,"coupons",t)},expression:"formData.coupons"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.addGoods}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:e.updatedGoods}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]},r=a("vSla")(n,o,!1,null,null,null);t.default=r.exports}});