webpackJsonp([14],{IIuB:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("aA9S"),o=a.n(i);a("vLgD");var r={data:function(){return{categoryListRequest:"better-discount-service/1.0.0/queryTitleTypeList",queryGoodsListRequest:"better-discount-service/1.0.0/queryGoodsList",addGoodsRequest:"better-discount-service/1.0.0/addGoods",updateGoodsContentRequest:"better-discount-service/1.0.0/updateGoodsContent",deleteTitleTypeRequest:"better-discount-service/1.0.0/deleteGoods",queryGoodsListByTypeRequest:"better-discount-service/1.0.0/queryGoodsListByType",queryGoodsListAllRequest:"better-discount-service/1.0.0/queryGoodsListAll",groundingStatusDictionary:[{name:"下架",code:"0"},{name:"上架",code:"1"}],productTypeDictionary:[{name:"不可用",code:"0"},{name:"可用",code:"1"}],value2:"",value1:"",tableKey:0,tableData:null,total:null,listLoading:!0,queryModel:{name:"",goodsNumber:null},pagination:{page:1,size:10},fileList:[],productTypeData:[{name:"无数据",value:""}],importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,formData:{id:null,goodsNumber:"",name:"",price:null,discountPrice:null,coupons:"",type:"",image:"",detailImage:[],details:"",summary:"",buyUrl:"",imageWidth:"",imageHigh:"",status:"",effectiveStartTime:"",effectiveEndTime:""},effectiveDuration:[],defaultImageIndex:0,pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},searchTxt:"",dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{name:[{required:!0,message:"此项为必填项",trigger:"change"}],goodsNumber:[{required:!0,message:"此项为必填项",trigger:"change"}],price:[{required:!0,message:"此项为必填项",trigger:"change"},{type:"number",message:"必须为数字值"}],discountPrice:[{required:!0,message:"此项为必填项",trigger:"change"},{type:"number",message:"必须为数字值"}],detailImage:[{required:!0,message:"此项为必填项",trigger:"change"},{type:"array",message:"dsds"}],coupons:[{required:!1,message:"此项为必填项",trigger:"change"}],type:[{required:!0,message:"此项为必填项",trigger:"change"}],image:[{required:!0,message:"此项为必填项",trigger:"change"}],details:[{required:!0,message:"此项为必填项",trigger:"change"}],summary:[{required:!0,message:"此项为必填项",trigger:"change"}],buyUrl:[{required:!0,message:"此项为必填项",trigger:"change"}],imageWidth:[{required:!0,message:"此项为必填项",trigger:"change"}],imageHigh:[{required:!0,message:"此项为必填项",trigger:"change"}],status:[{required:!0,message:"此项为必填项",trigger:"change"}],effectiveStartTime:[{required:!0,message:"此项为必填项",trigger:"change"}],effectiveEndTime:[{required:!0,message:"此项为必填项",trigger:"change"}],effectiveDuration:[{required:!1,message:"此项为必填项",trigger:"change"}]},downloadLoading:!1,durationFlag:!1,expandQuery:!1,portraitParams:{bucketName:"funyvalley",folderName:"icon"}}},computed:{tableHeight:function(){return this.$store.state.app.tableHeight}},watch:{effectiveDuration:function(e){console.log(e),null===e&&(e=[]),this.formData.effectiveStartTime=e[0],this.formData.effectiveEndTime=e[1]},"formData.status":function(e){console.log(e),this.durationFlag="0"!==e,this.formData.effectiveDuration=[]}},filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},mounted:function(){this.getTableData(),this.getProductTypeList()},methods:{getTableData:function(){var e=this;this.listLoading=!0,this.queryModel=o()(this.queryModel,{pageNo:this.pagination.page-1}),this.$http.post(this.$baseUrl+this.queryGoodsListAllRequest,this.queryModel).then(function(t){console.log(t),e.tableData=t.content,e.total=t.totalElements,e.listLoading=!1}).catch(function(t){e.$message.error(t.response.status.toString()+"  "+t.response.data.error)})},getProductTypeList:function(){var e=this;this.$http.get(this.$baseUrl+this.categoryListRequest).then(function(t){console.log(t),e.productTypeData=t}).catch(function(t){e.$message.error(t.response.status.toString()+"  "+t.response.data.error)})},search:function(){null===this.queryModel.type&&""===this.queryModel.type||this.getTableData()},reset:function(){this.queryModel.name="",this.queryModel.type=null,this.queryModel.goodsNumber="",this.pagination.page=1,this.getTableData()},handleFilter:function(){this.pagination.page=1,this.getTableData()},handleSizeChange:function(e){this.pagination.limit=e,this.getTableData()},handleCurrentChange:function(e){this.pagination.page=e,this.getTableData()},updateShelfStatus:function(e){console.log(e),this.$store.dispatch("updateShelfStatus",{id:e.row.id,isShow:e.row.isShow})},resetTemp:function(){this.formData={id:null,name:"",note:"",startDate:null,endDate:null,iconPath:""},this.effectiveDuration=[]},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.formData.clearValidate()})},addGoods:function(){var e=this;this.$refs.formData.validate(function(t){t&&e.$http.post(e.$baseUrl+e.addGoodsRequest+"/"+e.$store.state.user.login_id,{id:"",goodsNumber:e.formData.goodsNumber,name:e.formData.name,price:Number(e.formData.price).toFixed(2),discountPrice:Number(e.formData.discountPrice).toFixed(2),coupons:e.formData.coupons,type:e.formData.type,detailImage:e.formData.detailImage.join(","),details:e.formData.details,summary:e.formData.summary,buyUrl:e.formData.buyUrl,image:e.formData.image,imageWidth:e.formData.imageWidth,imageHigh:e.formData.imageHigh,status:e.formData.status,effectiveStartTime:e.formData.effectiveStartTime,effectiveEndTime:e.formData.effectiveEndTime}).then(function(t){console.log(t),e.dialogFormVisible=!1,e.$message.success("商品添加成功"),e.getTableData()})})},handleUpdate:function(e){var t=this;console.log(e),e.row.price=Number(e.row.price),e.row.discountPrice=Number(e.row.discountPrice),e.row.discountPrice=Number(e.row.discountPrice),this.formData=o()({},e.row),this.formData.timestamp=new Date(this.formData.timestamp),this.effectiveDuration[0]=this.formData.effectiveStartTime,this.effectiveDuration[1]=this.formData.effectiveEndTime,this.dialogStatus="update",this.dialogFormVisible=!0,this.fileList=[],this.formData.detailImage=[],null!==e.row.detailImage&&e.row.detailImage!==[]||null===e.row.image&&""===e.row.image?e.row.detailImage.split(",").forEach(function(e,a){t.formData.detailImage.push(e),t.fileList.push({name:a,url:e})}):(this.formData.detailImage.push(e.row.image),this.fileList.push({name:0,url:e.row.image})),this.formData.detailImage.forEach(function(e,a){e===t.formData.image&&(t.defaultImageIndex=a)}),console.log(this.fileList),this.$nextTick(function(){t.$refs.formData.clearValidate()})},updatedGoods:function(){var e=this;console.log(this.formData),this.$refs.formData.validate(function(t){t&&(e.formData.image=e.formData.detailImage[e.defaultImageIndex],e.$http.post(e.$baseUrl+e.updateGoodsContentRequest+"/"+e.$store.state.user.login_id,{id:e.formData.id,goodsNumber:e.formData.goodsNumber,name:e.formData.name,price:Number(e.formData.price).toFixed(2),discountPrice:Number(e.formData.discountPrice).toFixed(2),detailImage:e.formData.detailImage.join(","),coupons:e.formData.coupons,type:e.formData.type,details:e.formData.details,summary:e.formData.summary,buyUrl:e.formData.buyUrl,image:e.formData.image,imageWidth:e.formData.imageWidth,imageHigh:e.formData.imageHigh,status:e.formData.status,effectiveStartTime:e.formData.effectiveStartTime,effectiveEndTime:e.formData.effectiveEndTime}).then(function(t){e.dialogFormVisible=!1,e.$message.success("产品信息更新成功"),e.getTableData(),e.resetForm(),console.log(t)}))})},handleDelete:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.get(t.$baseUrl+t.deleteTitleTypeRequest+"/"+e.row.goodsNumber,{headers:{Authorization:"Bearer "+t.$store.state.user.token}}).then(function(e){console.log(e),t.dialogFormVisible=!1,t.$message.success("删除成功"),t.getTableData()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},changeUpload:function(e){console.log(e)},add:function(){this.dialogFormVisible=!0,this.dialogStatus="create"},expand:function(){this.expandQuery=!this.expandQuery},handleBeforeUpload:function(e){console.log(e),this.loading=!0},handlePreview:function(e){console.log(e)},handleRemove:function(e,t){var a=this;console.log(e),console.log(t);var i=null;t.forEach(function(t,a){e.uid===t&&(i=a)}),this.formData.detailImage.splice(i,1),this.formData.detailImage.forEach(function(e,t){e===a.formData.image&&(a.formData.image=e)}),this.fileList=this.fileList.filter(function(t){return t.uid!==e.uid}),console.log(this.formData.detailImage)},uploadSuccess:function(e,t,a){this.loading=!1,console.log(t),console.log(e),console.log(6,a),this.fileList.push(e),console.log(this.formData),this.formData.detailImage.push(e.url),""===this.formData.image&&(this.formData.image=this.formData.detailImage[0]),console.log(a),this.loading=!1,this.$message({message:"图片上传成功",type:"success"})},uploadAvatarExceeded:function(e,t){},cancel:function(){this.dialogFormVisible=!1,this.resetForm()},resetForm:function(){var e=this;this.formData={goodsNumber:"",name:"",price:"",discountPrice:"",coupons:"",type:"",image:"",details:"",summary:"",buyUrl:"",imageWidth:"",imageHigh:"",status:"",detailImage:[],effectiveEndTime:"",effectiveStartTime:""},this.$nextTick(function(){e.$refs.formData.clearValidate()})},deleteAvatar:function(){},setDefault:function(e){this.defaultImageIndex=e,this.formData.image=this.formData.detailImage[e]},deleteImage:function(e){this.formData.detailImage.splice(e,1),this.defaultImageIndex=this.defaultImageIndex-1>=0?this.defaultImageIndex-1:0,this.fileList.splice(e,1)}}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"common-querytable-wrapper"},[a("div",{staticClass:"queryform-wrapper"},[a("div",{staticClass:"outside"},[a("el-form",{staticClass:"basearea"},[a("ul",{staticClass:"pull-left"},[a("li",[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.add}},[e._v("\n                新增\n              ")])],1)])]),e._v(" "),a("ul",{staticClass:"operation-wrapper pull-right"},[a("li",[a("div",{staticClass:"common-search-wrapper",on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.search(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.queryModel.name,expression:"queryModel.name"}],attrs:{type:"text",placeholder:"请输入商品名称"},domProps:{value:e.queryModel.name},on:{input:function(t){t.target.composing||e.$set(e.queryModel,"name",t.target.value)}}}),e._v(" "),a("a",[a("span",{staticClass:"el-icon-search",on:{click:e.search}})])])]),e._v(" "),a("li",[a("el-button",{staticClass:"expand el-icon-arrow-down",attrs:{size:"mini",type:"text"},on:{click:e.expand}},[e._v("高级搜索"),a("i",{})])],1)])],1),e._v(" "),a("div",{staticClass:"expandarea",class:{active:e.expandQuery}},[a("el-form",{ref:"form",attrs:{model:e.queryModel,size:"mini","label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"商品类型："}},[e.productTypeData.length>0?a("el-select",{model:{value:e.queryModel.type,callback:function(t){e.$set(e.queryModel,"type",t)},expression:"queryModel.type"}},e._l(e.productTypeData,function(e){return a("el-option",{key:e.type,attrs:{label:e.title,value:e.type}})})):e._e()],1)],1),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"商品编号："}},[a("el-input",{model:{value:e.queryModel.goodsNumber,callback:function(t){e.$set(e.queryModel,"goodsNumber",t)},expression:"queryModel.goodsNumber"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:23,"pull-right":""}},[a("el-form-item",{staticClass:"pull-right"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索\n                ")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"},on:{click:e.reset}},[e._v("重置\n                ")])],1)],1)],1)],1)],1)])]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.tableData,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"",height:e.tableHeight}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.id)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商品编号",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.goodsNumber)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商品名称",align:"center",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"商品图片",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[null===t.row.image?a("div",[e._v("默认图片未选择")]):a("img",{attrs:{src:t.row.image+"-style_200x200",width:"80"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"商品价格",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.price)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"折扣价",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.discountPrice)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"优惠券链接",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.coupons)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"简介"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.summary)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"是否上架",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.groundingStatusDictionary.filter(function(e){return e.code===t.row.status})[0].name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"上架时间范围",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[null!==t.row.effectiveStartTime?a("div",[e._v("\n          "+e._s(e.$moment(t.row.effectiveStartTime).format("YYYY-MM-DD HH:mm:ss"))+" ~\n          "),a("br"),e._v(" "+e._s(e.$moment(t.row.effectiveEndTime).format("YYYY-MM-DD HH:mm:ss"))+"\n        ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"170"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"common-pagination-wrapper"},[a("el-pagination",{attrs:{background:"","current-page":e.pagination.page,"page-sizes":[10,20,30,50],"page-size":e.pagination.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,"before-close":e.cancel,width:"1200px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("el-form",{ref:"formData",attrs:{rules:e.rules,model:e.formData,"label-position":"right","label-width":"120px"}},[a("el-form-item",{attrs:{label:"商品编号",prop:"goodsNumber"}},[a("el-input",{model:{value:e.formData.goodsNumber,callback:function(t){e.$set(e.formData,"goodsNumber",t)},expression:"formData.goodsNumber"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品名称",prop:"name"}},[a("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品图片",prop:"detailImage"}},[a("div",{staticClass:"common-imguploadpreview-wrapper"},[a("el-checkbox-group",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.formData.detailImage,callback:function(t){e.$set(e.formData,"detailImage",t)},expression:"formData.detailImage"}},e._l(e.formData.detailImage,function(e){return a("el-checkbox",{key:e,attrs:{label:e}})})),e._v(" "),0===e.fileList.length?a("div",[e._v("\n                暂无图片\n                ")]):e._l(e.formData.detailImage,function(t,i){return a("div",{staticClass:"image-item"},[e.defaultImageIndex===i?a("span",{staticClass:"check el-icon-circle-check"}):e._e(),e._v(" "),a("img",{staticClass:"avatar",attrs:{src:t+"-style_100x100"}}),e._v(" "),a("ul",{staticClass:"operator"},[a("li",{on:{click:function(t){e.setDefault(i)}}},[a("a",[e._v("设为默认")])]),e._v(" "),a("li",[a("a",{staticClass:"el-icon-delete",on:{click:function(t){e.deleteImage(i)}}})])])])}),e._v(" "),a("el-upload",{ref:"uploadAvatar",attrs:{action:e.$prodBaseUrl+"image-upload-service/1.0.0/file/upload","list-type":"text",multiple:!0,"show-file-list":!1,"before-upload":e.handleBeforeUpload,"on-preview":e.handlePreview,"before-remove":e.handleRemove,"on-success":e.uploadSuccess,"on-exceed":e.uploadAvatarExceeded,"file-list":e.fileList,data:e.portraitParams}},[a("el-button",{staticClass:"add",attrs:{type:"primary"}},[e._v("上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n                  只能上传jpg/png文件，且不超过10MB\n                ")])],1)],2)]),e._v(" "),a("el-form-item",{attrs:{label:"商品价格",prop:"price"}},[a("el-input",{model:{value:e.formData.price,callback:function(t){e.$set(e.formData,"price",e._n(t))},expression:"formData.price"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"折扣价",prop:"discountPrice"}},[a("el-input",{model:{value:e.formData.discountPrice,callback:function(t){e.$set(e.formData,"discountPrice",e._n(t))},expression:"formData.discountPrice"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"优惠券链接",prop:"coupons"}},[a("el-input",{model:{value:e.formData.coupons,callback:function(t){e.$set(e.formData,"coupons",t)},expression:"formData.coupons"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"购买链接",prop:"buyUrl"}},[a("el-input",{model:{value:e.formData.buyUrl,callback:function(t){e.$set(e.formData,"buyUrl",t)},expression:"formData.buyUrl"}})],1),e._v(" "),a("el-form-item",{staticClass:"common-textareamedium-wrapper",attrs:{label:"详情",prop:"details"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.formData.details,callback:function(t){e.$set(e.formData,"details",t)},expression:"formData.details"}})],1),e._v(" "),a("el-form-item",{staticClass:"common-textareamedium-wrapper",attrs:{label:"简介",prop:"summary"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.formData.summary,callback:function(t){e.$set(e.formData,"summary",t)},expression:"formData.summary"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品类型",prop:"type"}},[a("el-select",{model:{value:e.formData.type,callback:function(t){e.$set(e.formData,"type",t)},expression:"formData.type"}},e._l(e.productTypeData,function(e){return a("el-option",{key:e.type,attrs:{label:e.title,value:e.type}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"是否上架",prop:"status"}},[a("el-select",{model:{value:e.formData.status,callback:function(t){e.$set(e.formData,"status",t)},expression:"formData.status"}},e._l(e.groundingStatusDictionary,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),e.durationFlag?a("el-form-item",{attrs:{label:"上架时间范围",prop:"effectiveDuration"}},[a("el-date-picker",{attrs:{type:"datetimerange","picker-options":e.pickerOptions2,"range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",align:"right"},model:{value:e.effectiveDuration,callback:function(t){e.effectiveDuration=t},expression:"effectiveDuration"}})],1):e._e()],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.addGoods}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:e.updatedGoods}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]},l=a("vSla")(r,s,!1,null,null,null);t.default=l.exports}});