webpackJsonp([19],{ICyc:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("Edqs"),n=a.n(o),s=(a("Q3je"),{data:function(){var e=this;return{getagentpageRequest:"besttv-service/1.0.0/agent/bk/getagentpage/",getapinfopageRequest:"besttv-service/1.0.0/bk/getapinfopage",batchaddcodeRequest:"besttv-service/1.0.0/bk/batchaddcode",downloadexcelRequest:"besttv-service/1.0.0/bk/downloadexcel",productsRequest:"besttv-service/1.0.0/products",changIsSendRequest:"besttv-service/1.0.0/bk/changIsSend",value2:"",value1:"",tableKey:0,tableList:null,total:null,listLoading:!0,queryModel:{keyword:""},pagination:{page:1,limit:10},effectiveDuration:[],importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,formData:{id:"",deviceType:"",productId:"",note:"",adminId:"",num:"",agentId:"",downloadUrl:"",createDate:"",isShow:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{deviceType:[{required:!0,message:"此项为必填项",trigger:"change"}],productId:[{required:!0,message:"此项为必填项",trigger:"change"}],agentId:[{required:!0,message:"此项为必填项",trigger:"change"}],num:[{required:!0,message:"此项为必填项",trigger:"change"},{type:"number",message:"必须为数字值",trigger:"change"},{type:"number",max:1e4,message:"最大数量不超过10000个",trigger:"change"}]},downloadLoading:!1,pickerOptions0:{disabledDate:function(t){if(""!==e.value2)return t.getTime()>e.value2}},pickerOptions1:{disabledDate:function(t){return t.getTime()<e.value1}},expandQuery:!1,portraitParams:{bucketName:"funyvalley",folderName:"task"},fileList:[],productListData:[],agentListData:[],deviceType:""}},computed:{tableHeight:function(){return this.$store.state.app.tableHeight}},watch:{effectiveDuration:function(e){console.log(e),null===e&&(e=[]),this.formData.startDate=e[0],this.formData.endDate=e[1]}},filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},mounted:function(){this.getProductListData(),this.getTableData(),this.getAgentData()},methods:{getTableData:function(){var e=this;this.listLoading=!0,this.$http.get(this.$baseUrl+this.getapinfopageRequest,{params:n()(this.queryModel,this.pagination)}).then(function(t){console.log(t),e.tableList=t.content,e.total=t.totalElements,e.listLoading=!1}).catch(function(t){console.log(t),e.$message.error(t.response.status.toString()+"  "+t.response.data.error)})},getAgentData:function(){var e=this;this.$http.get(this.$baseUrl+this.getagentpageRequest,{params:n()(this.queryModel,this.pagination)}).then(function(t){console.log(t),e.agentListData=t.content})},getProductListData:function(){var e=this;this.$http.get(this.$baseUrl+this.productsRequest,{params:{deviceType:this.deviceType}}).then(function(t){console.log(t),e.productListData=t}).catch(function(t){console.log(t),e.$message.error(t.response.status.toString()+"  "+t.response.data.error)})},handleSizeChange:function(e){this.pagination.limit=e,this.getTableData()},handleCurrentChange:function(e){this.pagination.page=e,this.getTableData()},updateShelfStatus:function(e){console.log(e),this.$store.dispatch("updateShelfStatus",{id:e.row.id,isShow:e.row.isShow})},resetTemp:function(){this.formData={id:"",name:"",agentId:"",phone:"",note:""},this.effectiveDuration=[]},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.formData.clearValidate()})},createData:function(){var e=this;this.$refs.formData.validate(function(t){t&&e.$http.post(e.$baseUrl+e.batchaddcodeRequest,{agentId:e.formData.agentId,productId:e.formData.productId,num:e.formData.num}).then(function(){e.getTableData(),e.dialogFormVisible=!1,e.$message.success("创建成功")})})},handleUpdate:function(e){var t=this;this.$moment(this.startDate).format("YYYY-MM-DD");this.formData=e.row,this.effectiveDuration=[e.row.startDate,e.row.endDate],this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.formData.clearValidate()})},updateData:function(){var e=this;this.$refs.formData.validate(function(t){t&&e.$http.post(e.$baseUrl+e.saveAgentInfoRequest,{id:e.formData.id,productId:e.formData.productId,note:e.formData.note,adminId:e.formData.adminId,num:e.formData.num,agentId:e.formData.agentId,downloadUrl:e.formData.downloadUrl,createDate:e.formData.createDate,isShow:e.formData.isShow}).then(function(t){console.log(t),e.dialogFormVisible=!1,e.getTableData(),e.$message.success("信息修改成功")}).catch(function(t){console.log(t),e.$message.error(t.response.status.toString()+"  "+t.response.data.error)})})},handleDelete:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.post(t.$baseUrl+t.delAgentInfoRequest+e.row.id).then(function(e){console.log(e),t.dialogFormVisible=!1,t.$message.success("删除成功"),t.getTableData()}).catch(function(e){console.log(e),t.$message.error(e.response.status.toString()+"  "+e.response.data.error)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},changeUpload:function(e){console.log(e)},expand:function(){this.expandQuery=!this.expandQuery},search:function(){this.getTableData()},reset:function(){this.queryModel=n()(this.queryModel,{keyword:""}),this.getTableData()},handleBeforeUpload:function(e){console.log(e),this.loading=!0},handlePreview:function(e){console.log(e)},handleRemove:function(e,t){console.log(e),console.log(t);t.forEach(function(t,a){e.uid===t&&a}),this.formData.iconPath="",this.fileList=this.fileList.filter(function(t){return t.uid!==e.uid}),console.log(this.formData.iconPath)},uploadSuccess:function(e,t,a){this.loading=!1,console.log(t),console.log(e),console.log(6,a),this.fileList.push(e),console.log(this.formData),this.formData.iconPath=e.url,console.log(a),this.loading=!1,this.$message({message:"图片上传成功",type:"success"})},uploadAvatarExceeded:function(e,t){},downloadExcel:function(e){window.open(this.$baseUrl+this.downloadexcelRequest+"?filepath="+e.row.downloadUrl+"&access_token="+this.$store.state.user.token)},sendToAgent:function(e){var t=this;console.log(e),this.$confirm("请核实是否确实已给发送给代理商？此操作不可逆。","提示",{type:"warning"}).then(function(){t.$http.post(t.$baseUrl+t.changIsSendRequest+"/"+e.row.id,{}).then(function(e){console.log(e),t.$message.success("已确认发送"),t.getTableData()}).catch(function(e){t.$message.error(e.response.status.toString()+"  "+e.response.data.error)})})}}}),i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"common-querytable-wrapper"},[a("div",{staticClass:"queryform-wrapper"},[a("div",{staticClass:"outside"},[a("el-form",{staticClass:"basearea"},[a("ul",{staticClass:"pull-left"},[a("li",[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("\n                  批量生成VIP Code\n                ")])],1)])]),e._v(" "),a("ul",{staticClass:"operation-wrapper pull-right"},[a("li",[a("div",{staticClass:"common-search-wrapper",on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.search(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.queryModel.keyword,expression:"queryModel.keyword"}],attrs:{type:"text",placeholder:"请输入名称"},domProps:{value:e.queryModel.keyword},on:{input:function(t){t.target.composing||e.$set(e.queryModel,"keyword",t.target.value)}}}),e._v(" "),a("a",[a("span",{staticClass:"el-icon-search",on:{click:e.search}})])])]),e._v(" "),a("li",[a("el-button",{staticClass:"expand",attrs:{size:"mini",type:"text"},on:{click:e.expand}},[e._v("高级搜索"),a("i",{staticClass:"el-icon-arrow-down"})])],1)])],1),e._v(" "),a("div",{staticClass:"expandarea",class:{active:e.expandQuery}},[a("el-form",{ref:"form",attrs:{model:e.queryModel,size:"mini","label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:23,"pull-right":""}},[a("el-form-item",{staticClass:"pull-right"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"},on:{click:e.reset}},[e._v("重置")])],1)],1)],1)],1)],1)])]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.tableList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"",height:e.tableHeight}},[a("el-table-column",{attrs:{align:"center",label:"No",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(t.$index+1)+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"代理商ID",align:"center",prop:"agentId"}}),e._v(" "),a("el-table-column",{attrs:{label:"产品类型",align:"center",prop:"productId"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s(e.productListData.filter(function(e){return e.productId===t.row.productId}).length>0?e.productListData.filter(function(e){return e.productId===t.row.productId})[0].productDesc:"")+"\n        ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"数量",align:"center",prop:"num",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建人Id",align:"center",prop:"adminId",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{label:"创建时间",align:"center",prop:"createDate",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{label:"确认已发给代理商",align:"center",prop:"note",width:"350"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{disabled:e.$store.state.user.login_id!==t.row.adminId||1===t.row.isSend,size:"mini",type:1===t.row.isSend?"info":"primary"},on:{click:function(a){e.sendToAgent(t)}}},[e._v(e._s(1===t.row.isSend?"已发送":"发送")+"\n          ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"350"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"icon",attrs:{disabled:e.$store.state.user.login_id!==t.row.adminId,type:"primary",size:"mini"},on:{click:function(a){e.downloadExcel(t)}}},[e._v("Excel 下载\n          ")])]}}])})],1),e._v(" "),a("div",{staticClass:"common-pagination-wrapper"},[a("el-pagination",{attrs:{background:"","current-page":e.pagination.page,"page-sizes":[10,20,30,50],"page-size":e.pagination.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"width: 400px;"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("el-form",{ref:"formData",attrs:{rules:e.rules,model:e.formData,"label-position":"right","label-width":"150px"}},[a("el-form-item",{attrs:{label:"产品类型",prop:"productId"}},[a("el-select",{model:{value:e.formData.productId,callback:function(t){e.$set(e.formData,"productId",t)},expression:"formData.productId"}},e._l(e.productListData,function(e){return a("el-option",{key:e.productId,attrs:{label:e.productDesc,value:e.productId}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"代理商ID",prop:"agentId"}},[a("el-select",{model:{value:e.formData.agentId,callback:function(t){e.$set(e.formData,"agentId",t)},expression:"formData.agentId"}},e._l(e.agentListData,function(e){return a("el-option",{key:e.agentId,attrs:{label:e.adminId,value:e.agentId}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"数量",prop:"num"}},[a("el-input-number",{attrs:{min:0,label:"数量"},model:{value:e.formData.num,callback:function(t){e.$set(e.formData,"num",t)},expression:"formData.num"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm"))+"\n        ")]):a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]},r=a("D8HT")(s,i,!1,null,null,null);t.default=r.exports}});