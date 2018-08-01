webpackJsonp([17],{p0pz:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){var e=this;return{categoryListRequest:"better-discount-service/1.0.0/queryTitleTypeList",addTitleTypeRequest:"better-discount-service/1.0.0/addTitleType",updateTitleTypeRequest:"better-discount-service/1.0.0/updateTitleType",deleteTitleTypeRequest:"better-discount-service/1.0.0/deleteTitleType",statusDictionary:[{name:"不可用",code:"0"},{name:"可用",code:"1"}],value2:"",value1:"",tableKey:0,tableData:[],total:null,listLoading:!0,queryModel:{importance:null,keyword:"",type:null,sort:"+id"},pagination:{page:1,limit:20},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,formData:{id:null,title:"",summary:"",type:null,imageUrl:null,status:""},rules:{name:[{required:!0,message:"name is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"change"}],summary:[{required:!0,message:"title is required",trigger:"change"}],type:[{required:!0,message:"title is required",trigger:"change"}],imageUrl:[{required:!0,message:"title is required",trigger:"change"}],status:[{required:!0,message:"title is required",trigger:"change"}]},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],downloadLoading:!1,pickerOptions0:{disabledDate:function(t){if(""!==e.value2)return t.getTime()>e.value2}},pickerOptions1:{disabledDate:function(t){return t.getTime()<e.value1}},iosVersionListData:[],androidVersionListData:[],searchTxt:"",expandQuery:"",fileList:[],portraitParams:{bucketName:"funyvalley",folderName:"icon"}}},computed:{tableHeight:function(){return this.$store.state.app.tableHeight}},mounted:function(){this.getTableData()},methods:{getTableData:function(){var e=this;this.listLoading=!0,this.$http.get(this.$baseUrl+this.categoryListRequest).then(function(t){console.log(t),e.tableData=t,e.listLoading=!1}).catch(function(t){console.log(t),e.$message.error(t.response.status.toString()+"  "+t.response.data.error)})},handleFilter:function(){this.pagination.page=1,this.getTableData()},handleSizeChange:function(e){this.pagination.limit=e,this.getTableData()},handleCurrentChange:function(e){this.pagination.page=e,this.getTableData()},updateShelfStatus:function(e,t){var a=this;updateShelfStatusRequest(e.id,t).then(function(i){i?(a.$message({message:"操作成功",type:"success"}),e.isShow=t):a.$message({message:"操作失败",type:"error"})})},resetTemp:function(){this.formData={id:null,title:"",summary:"",type:null,imageUrl:null,status:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.formData.clearValidate()})},add:function(){var e=this;this.$refs.formData.validate(function(t){t&&(console.log(e.formData),e.$http.post(e.$baseUrl+e.addTitleTypeRequest,{title:e.formData.title,summary:e.formData.summary,imageUrl:e.formData.imageUrl,status:e.formData.status}).then(function(t){e.$message.success("产品类型创建成功"),e.dialogFormVisible=!1,e.getTableData()}).catch(function(t){console.log(t),e.$message.error(t.response.status.toString()+"  "+t.response.data.error)}))})},handleUpdate:function(e){var t=this;this.formData.id=e.row.id,this.dialogFormVisible=!0,this.dialogStatus="update",this.formData=e.row,console.log(this.formData),this.$nextTick(function(){t.$refs.formData.clearValidate()})},update:function(){var e=this;this.$refs.formData.validate(function(t){t&&e.$http.post(e.$baseUrl+e.updateTitleTypeRequest,{id:e.formData.id,type:e.formData.type,title:e.formData.title,summary:e.formData.summary,imageUrl:e.formData.imageUrl,status:e.formData.status}).then(function(t){e.$message.success("修改成功"),e.dialogFormVisible=!1}).catch(function(t){console.log(t),e.$message.error(t.response.status.toString()+"  "+t.response.data.error)})})},handleDelete:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.get(t.$baseUrl+t.deleteTitleTypeRequest+"/"+e.row.type).then(function(e){t.$message.success("删除成功"),t.getTableData()}).catch(function(e){console.log(e),t.$message.error(e.response.status.toString()+"  "+e.response.data.error)})}).catch(function(){t.$message.info("已取消删除")})},changeUpload:function(e){console.log(e)},handleAndroidListChange:function(e){},expand:function(){this.expandQuery=!this.expandQuery},search:function(){},reset:function(){this.queryModel.name="",this.queryModel.type=null,this.queryModel.goodsNumber="",this.pagination.page=1,this.getTableData()},handleBeforeUpload:function(e){console.log(e);var t=["jpg","jpeg","png"],a=e.name.lastIndexOf(".")+1,i=e.name.length,s=e.name.substring(a,i);return 0===t.filter(function(e){return e===s}).length?(this.$message({message:"文件必须为"+t.join("、")+"类型文件",type:"error"}),!1):e.size>2097152?(this.$message({message:"文件不得大于2M",type:"error"}),!1):void(this.loading=!0)},handlePreview:function(e){console.log(e),this.fileList.push(e)},handleRemove:function(){},uploadSuccess:function(e){this.loading=!1,console.log(e),this.formData.imageUrl=e.url,this.fileList.push(e),this.loading=!1,this.$message({message:"图片上传成功",type:"success"})},uploadAvatarExceeded:function(e,t){var a=this;t.length>0&&this.$confirm("当前已有上传图片，需先删除已有图片，请确认是否删除？","提示",{type:"warning"}).then(function(e){a.$refs.uploadAvatar.clearFiles(),a.$http.get(a.$baseUrl+"attachment/deleteAttachment/"+a.fileList[0].id).then(function(e){"200"===e.data.code?(a.fileList.splice(a.fileList.indexOf(e.id),1),a.componentModelData.uploaded="",a.$message.success("图片删除成功")):(a.fileList.splice(a.fileList.indexOf(e.id),1),a.componentModelData.uploaded="",a.$message.warning("图片删除失败"))}).catch(function(e){console.log(e),a.$message.error(e.response.status.toString()+"  "+e.response.data.error)})})},deleteImage:function(e){this.formData.imageUrl="",this.fileList.splice(e,1)}}},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"common-querytable-wrapper"},[a("div",{staticClass:"queryform-wrapper"},[a("div",{staticClass:"outside"},[a("el-form",{staticClass:"basearea"},[a("ul",{staticClass:"pull-left"},[a("li",[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("\n                新增\n              ")])],1)])]),e._v(" "),a("ul",{staticClass:"operation-wrapper pull-right"})],1),e._v(" "),a("div",{staticClass:"expandarea",class:{active:e.expandQuery}},[a("el-form",{ref:"form",attrs:{model:e.queryModel,size:"mini","label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:23,"pull-right":""}},[a("el-form-item",{staticClass:"pull-right"},[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索\n                ")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"},on:{click:e.reset}},[e._v("重置\n                ")])],1)],1)],1)],1)],1)])]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.tableData,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"",height:e.tableHeight}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"40",prop:"id"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品类目",align:"center",prop:"title"}}),e._v(" "),a("el-table-column",{attrs:{label:"商品类目副标题",align:"center",prop:"summary"}}),e._v(" "),a("el-table-column",{attrs:{label:"图片",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.imageUrl+"-style_100x100",width:"80"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"可用性",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s("0"===t.row.status?"不可用":"可用")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"1200px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("el-form",{ref:"formData",attrs:{rules:e.rules,model:e.formData,"label-position":"right","label-width":"130px"}},[a("el-form-item",{attrs:{label:"商品类目",prop:"title"}},[a("el-input",{model:{value:e.formData.title,callback:function(t){e.$set(e.formData,"title",t)},expression:"formData.title"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品类目副标题",prop:"summary"}},[a("el-input",{model:{value:e.formData.summary,callback:function(t){e.$set(e.formData,"summary",t)},expression:"formData.summary"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"图片",prop:"imageUrl"}},[a("div",{staticClass:"common-imguploadpreview-wrapper"},[""===e.formData.imageUrl||null===e.formData.imageUrl?a("div",[e._v("\n                暂无图片\n              ")]):e._l([e.formData.imageUrl],function(t,i){return a("div",{staticClass:"image-item"},[a("img",{staticClass:"avatar",attrs:{src:t+"-style_100x100"}}),e._v(" "),a("ul",{staticClass:"operator"},[a("li",[a("a",{staticClass:"el-icon-delete",on:{click:function(t){e.deleteImage(i)}}})])])])})],2),e._v(" "),a("el-upload",{ref:"uploadAvatar",staticClass:"common-imguploadpreview-wrapper",attrs:{action:e.$baseUrl+"image-upload-service/1.0.0/file/upload",limit:1,"show-file-list":!1,"before-upload":e.handleBeforeUpload,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.uploadSuccess,"on-exceed":e.uploadAvatarExceeded,"file-list":e.fileList,data:e.portraitParams}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("\n                只能上传jpg/png文件，且不超过10MB\n              ")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"状态",prop:"status"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0","active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.formData.status,callback:function(t){e.$set(e.formData,"status",t)},expression:"formData.status"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.add}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)};s._withStripped=!0;var r={render:s,staticRenderFns:[]},l=r;var o=a("vSla")(i,l,!1,null,null,null);o.options.__file="src\\views\\betterDiscount\\categoryList.vue";t.default=o.exports}});
