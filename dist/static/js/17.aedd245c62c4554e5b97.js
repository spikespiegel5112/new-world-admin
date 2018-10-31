webpackJsonp([17],{xoap:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("aA9S"),s=a.n(o),r={components:{CommonQuery:a("zQDM").a},data:function(){var e=this;return{getBlackTaskPageRequest:"task-service/2.0.0/task/bk/getBlackTaskPage/",saveBlackCardTaskRequest:"task-service/2.0.0/task/bk/saveBlackCardTask",exportUserTaskRequest:"task-service/2.0.0/task/bk/exportUserTask",importUserTaskRequest:"task-service/2.0.0/task/bk/importUserTask",value2:"",value1:"",tableKey:0,tableList:null,total:null,listLoading:!0,queryModel:{keyword:"",category:""},pagination:{page:1,limit:10},effectiveDuration:[],importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,formData:{id:"",name:"",iconPath:"",startDate:"",endDate:"",submitPath:"",description:"",isIosEnable:"",isAndroidEnable:"",category:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,categoryDictionary:[{name:"年卡任务",code:4},{name:"月卡任务",code:5}],pvData:[],rules:{name:[{required:!0,message:"此项为必填项",trigger:"change"}],note:[{required:!1,message:"此项为必填项",trigger:"change"}],iconPath:[{required:!0,message:"此项为必填项",trigger:"change"}],bounty:[{required:!0,message:"此项为必填项",trigger:"change"},{type:"number",message:"必须为数字值",trigger:"change"},{type:"number",max:999999,message:"赏金不得大于999999",trigger:"change"}],surplusNum:[{required:!0,message:"此项为必填项",trigger:"change"},{type:"number",message:"必须为数字值"}],startDate:[{required:!0,message:"此项为必填项",trigger:"change"}],endDate:[{required:!0,message:"此项为必填项",trigger:"change"}],submitPath:[{required:!0,message:"此项为必填项",trigger:"change"}],apkPath:[{required:!0,message:"此项为必填项",trigger:"change"}],packageName:[{required:!0,message:"此项为必填项",trigger:"change"}],tryplayTimeLength:[{required:!0,message:"此项为必填项",trigger:"change"},{type:"number",message:"必须为数字值"}],effectiveDuration:[{required:!0,message:"此项为必填项",trigger:"change"}]},downloadLoading:!1,pickerOptions0:{disabledDate:function(t){if(""!==e.value2)return t.getTime()>e.value2}},pickerOptions1:{disabledDate:function(t){return t.getTime()<e.value1}},expandQuery:!1,portraitParams:{bucketName:"funyvalley",folderName:"task"},fileList:[],importCsvFlag:!1,temporaryCsv:"",exportCsvFlag:!1,taskEffectiveDuration:[]}},computed:{tableHeight:function(){return this.$store.state.app.tableHeight}},watch:{effectiveDuration:function(e){console.log(e),null===e&&(e=[]),this.formData.startDate=this.$moment(e[0]).format("YYYY-MM-DD"),this.formData.endDate=this.$moment(e[1]).format("YYYY-MM-DD")},taskEffectiveDuration:function(e){console.log(e),null===e&&(e=[]),this.formData.startDate=this.$moment(e[0]).format("YYYY-MM-DD"),this.formData.endDate=this.$moment(e[1]).format("YYYY-MM-DD")}},filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},mounted:function(){this.getTableData()},methods:{getTableData:function(){var e=this;this.listLoading=!0,this.$http.get(this.$baseUrl+this.getBlackTaskPageRequest,{params:s()(this.queryModel,this.pagination)}).then(function(t){console.log(t),e.tableList=t.content,e.total=t.totalElements,e.listLoading=!1}).catch(function(t){console.log(t),e.$message.error(t.response.status.toString()+"  "+t.response.data.error)})},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.formData.clearValidate()})},handleUpdate:function(e){var t=this;this.formData=s()(this.formData,e.row),this.effectiveDuration=[e.row.startDate,e.row.endDate],this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.formData.clearValidate()})},createData:function(){this.updateData()},updateData:function(){var e=this;"create"===this.dialogStatus?delete this.formData.id:this.formData,this.$refs.formData.validate(function(t){t&&e.$http.post(e.$baseUrl+e.saveBlackCardTaskRequest,{id:e.formData.id,name:e.formData.name,iconPath:e.formData.iconPath,startDate:e.$moment(e.formData.startDate).format("YYYY-MM-DD"),endDate:e.$moment(e.formData.endDate).format("YYYY-MM-DD"),submitPath:e.formData.submitPath,description:e.formData.description,isIosEnable:e.formData.isIosEnable,isAndroidEnable:e.formData.isAndroidEnable,category:e.formData.category}).then(function(t){console.log(t),e.dialogFormVisible=!1,e.getTableData(),e.$message.success("信息修改成功")}).catch(function(t){console.log(t),e.$message.error(t.response.status.toString()+"  "+t.response.data.error)})})},handleSizeChange:function(e){this.pagination.limit=e,this.getTableData()},handleCurrentChange:function(e){this.pagination.page=e,this.getTableData()},updateShelfStatus:function(e){console.log(e),this.$store.dispatch("updateShelfStatus",{id:e.row.id,isShow:e.row.isShow})},resetTemp:function(){this.formData={id:"",name:"",iconPath:"",startDate:"",endDate:"",submitPath:"",description:"",isIosEnable:"",isAndroidEnable:"",category:""},this.effectiveDuration=[],this.fileList=[]},handleDelete:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.post(t.$baseUrl+t.delTaskRequest+e.row.id).then(function(e){console.log(e),t.dialogFormVisible=!1,t.$message.success("删除成功"),t.getTableData()}).catch(function(e){console.log(e),t.$message.error(e.response.status.toString()+"  "+e.response.data.error)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},search:function(){this.getTableData()},reset:function(){this.queryModel.keyword="",this.queryModel.category="",this.pagination.page=1,this.getTableData()},uploadSuccess:function(e,t,a){this.loading=!1,console.log(e),console.log(6,a),this.formData.iconPath=e.url,console.log(a),this.loading=!1,this.$message({message:"图片上传成功",type:"success"})},uploadSuccess2:function(e,t,a){console.log("uploadSuccess2",e),e.operation?this.$message({message:"CSV上传成功",type:"success"}):(this.$message({message:e.message,type:"error"}),this.temporaryCsv="")},exportCsv:function(){var e=this,t={startDate:this.taskEffectiveDuration[0],endDate:this.taskEffectiveDuration[1],access_token:this.$store.getters.token};this.$http.get(this.$baseUrl+this.exportUserTaskRequest,{params:t}).then(function(a){console.log(a),window.open(e.$baseUrl+e.exportUserTaskRequest+"?startDate="+t.startDate+"&endDate="+t.endDate+"&access_token="+t.access_token)}).catch(function(e){console.log(e)})},importCsv:function(){this.temporaryCsv="",this.importCsvFlag=!0}}},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("CommonQuery",{on:{reset:e.reset}},[a("template",{slot:"button1"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("\n        新增\n      ")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:function(t){e.exportCsvFlag=!0}}},[e._v("\n        导出任务完成流水\n      ")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.importCsv}},[e._v("\n        导入任务完成流水\n\n      ")])],1),e._v(" "),a("template",{slot:"query1"},[a("div",{staticClass:"common-search-wrapper",on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.search(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.queryModel.keyword,expression:"queryModel.keyword"}],attrs:{type:"text",placeholder:"请输入任务名称"},domProps:{value:e.queryModel.keyword},on:{input:function(t){t.target.composing||e.$set(e.queryModel,"keyword",t.target.value)}}}),e._v(" "),a("a",[a("span",{staticClass:"el-icon-search",on:{click:e.search}})])])]),e._v(" "),a("template",{slot:"query4"},[a("el-form-item",{attrs:{label:"类型："}},[0!==e.categoryDictionary.length?a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.queryModel.category,callback:function(t){e.$set(e.queryModel,"category",t)},expression:"queryModel.category"}},e._l(e.categoryDictionary,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})})):e._e()],1)],1)],2),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.tableList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"",height:e.tableHeight}},[a("el-table-column",{attrs:{align:"center",label:"No",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Icon",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){return[""!==t.row.iconPath&&null!==t.row.iconPath?a("img",{attrs:{src:t.row.iconPath+"-style_100x100",width:"100px",height:"100px"}}):a("p",[e._v("无")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"备注",width:"200"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.description)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"isIosEnable",label:"iOS可用性"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",disabled:""},model:{value:t.row.isIosEnable,callback:function(a){e.$set(t.row,"isIosEnable",a)},expression:"scope.row.isIosEnable"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"isAndroidEnable",label:"安卓可用性"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",disabled:""},model:{value:t.row.isAndroidEnable,callback:function(a){e.$set(t.row,"isAndroidEnable",a)},expression:"scope.row.isAndroidEnable"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"第三方提交地址",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.submitPath)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"开始/结束时间",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.startDate)+"\n        "),a("br"),e._v(" "+e._s(t.row.endDate)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"category",label:"任务类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(""!==t.row.category&&null!==t.row.category?e.categoryDictionary.filter(function(e){return e.code===t.row.category})[0].name:"")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t)}}},[e._v("编辑")])]}}])})],1),e._v(" "),a("div",{staticClass:"common-pagination-wrapper"},[a("el-pagination",{attrs:{background:"","current-page":e.pagination.page,"page-sizes":[10,20,30,50],"page-size":e.pagination.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"width: 400px;"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("el-form",{ref:"formData",attrs:{rules:e.rules,model:e.formData,"label-position":"right","label-width":"150px"}},[a("el-form-item",{attrs:{label:"任务名称",prop:"name"}},[a("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"任务图片",prop:"iconPath"}},[a("CommonUploadImage",{attrs:{action:e.$baseUrl+"image-upload-service/1.0.0/file/upload","return-url-list":e.formData.iconPath,fileType:"image"},on:{"on-success":e.uploadSuccess,"update:returnUrlList":function(t){e.$set(e.formData,"iconPath",t)}}}),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.formData.iconPath,callback:function(t){e.$set(e.formData,"iconPath",t)},expression:"formData.iconPath"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"note"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:4}},model:{value:e.formData.description,callback:function(t){e.$set(e.formData,"description",t)},expression:"formData.description"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"第三方提交地址",prop:"submitPath"}},[a("el-input",{model:{value:e.formData.submitPath,callback:function(t){e.$set(e.formData,"submitPath",t)},expression:"formData.submitPath"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"iOS可用性",prop:"isIosEnable"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.formData.isIosEnable,callback:function(t){e.$set(e.formData,"isIosEnable",t)},expression:"formData.isIosEnable"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Android可用性",prop:"isAndroidEnable"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.formData.isAndroidEnable,callback:function(t){e.$set(e.formData,"isAndroidEnable",t)},expression:"formData.isAndroidEnable"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"有效时间",prop:"startDate"}},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.effectiveDuration,callback:function(t){e.effectiveDuration=t},expression:"effectiveDuration"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"任务类型",prop:"category"}},[a("el-select",{model:{value:e.formData.category,callback:function(t){e.$set(e.formData,"category",t)},expression:"formData.category"}},e._l(e.categoryDictionary,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm"))+"\n      ")]):a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"导出任务完成流水",visible:e.exportCsvFlag,width:"width: 400px;"},on:{"update:visible":function(t){e.exportCsvFlag=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("el-date-picker",{attrs:{type:"daterange","value-format":"yyyy-MM-dd","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.taskEffectiveDuration,callback:function(t){e.taskEffectiveDuration=t},expression:"taskEffectiveDuration"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.exportCsvFlag=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.exportCsv}},[e._v("导出")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"导入任务完成流水",visible:e.importCsvFlag,width:"width: 400px;"},on:{"update:visible":function(t){e.importCsvFlag=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("CommonUploadImage",{attrs:{action:e.$baseUrl+e.importUserTaskRequest,fileType:"excel",returnUrlList:e.temporaryCsv},on:{"on-success":e.uploadSuccess2,"update:returnUrlList":function(t){e.temporaryCsv=t}}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.importCsvFlag=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm"))+"\n      ")]):e._e()],1)],1)],1)};i._withStripped=!0;var n={render:i,staticRenderFns:[]},l=n;var c=a("vSla")(r,l,!1,null,null,null);c.options.__file="src\\views\\task\\BlackCard.vue";t.default=c.exports}});
//# sourceMappingURL=17.aedd245c62c4554e5b97.js.map