webpackJsonp([10],{tFff:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a("aA9S"),s=a.n(o),r=a("Q3je"),n={data:function(){var e=this;return{gettryplaylistRequest:"task-service/1.0.0/task/bk/gettryplaylist",saveTryPlayRequest:"task-service/1.0.0/task/bk/saveTryPlay",value2:"",value1:"",tableKey:0,tableList:null,total:null,listLoading:!0,queryModel:{keyword:""},pagination:{page:1,limit:10},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,formData:{id:"",name:"",note:"",iconPath:"",bounty:"",surplusNum:"",startDate:"",endDate:"",isShow:"",ApkPath:"",packageName:"",tryplayTimeLength:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{name:[{required:!0,message:"此项为必填项",trigger:"change"}],note:[{required:!0,message:"此项为必填项",trigger:"change"}],iconPath:[{required:!0,message:"此项为必填项",trigger:"change"}],bounty:[{required:!0,message:"此项为必填项",trigger:"change"},{type:"number",message:"必须为数字值"}],surplusNum:[{required:!0,message:"此项为必填项",trigger:"change"},{type:"number",message:"必须为数字值"}],startDate:[{required:!0,message:"此项为必填项",trigger:"change"}],endDate:[{required:!0,message:"此项为必填项",trigger:"change"}],isShow:[{required:!0,message:"此项为必填项",trigger:"change"}],ApkPath:[{required:!0,message:"此项为必填项",trigger:"change"}],packageName:[{required:!0,message:"此项为必填项",trigger:"change"}],tryplayTimeLength:[{required:!0,message:"此项为必填项",trigger:"change"},{type:"number",message:"必须为数字值"}]},downloadLoading:!1,pickerOptions0:{disabledDate:function(t){if(""!==e.value2)return t.getTime()>e.value2}},pickerOptions1:{disabledDate:function(t){return t.getTime()<e.value1}},expandQuery:!1,portraitParams:{bucketName:"funyvalley",folderName:"task"},fileList:[]}},filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},mounted:function(){this.getTableData()},methods:{getTableData:function(){var e=this;this.listLoading=!0,this.$http.get(this.$baseUrl+this.gettryplaylistRequest,{params:s()(this.queryModel,this.pagination)}).then(function(t){console.log(t),t=t.data,e.tableList=t.content,e.total=t.totalElements,e.listLoading=!1})},handleSizeChange:function(e){this.pagination.limit=e,this.getTableData()},handleCurrentChange:function(e){this.pagination.page=e,this.getTableData()},updateShelfStatus:function(e){var t=this;console.log(e),Object(r.a)(e.row.id,e.row.isShow).then(function(e){e?t.$message({message:"操作成功",type:"success"}):t.$message({message:"操作失败",type:"error"})})},resetTemp:function(){this.formData={id:"",name:"",note:"",iconPath:"",bounty:"",surplusNum:"",startDate:"",endDate:"",isShow:"",ApkPath:"",packageName:"",tryplayTimeLength:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&e.$http.post("http://192.168.1.192:9006/1.0.0/task/bk/saveTryPlay",{id:"",name:e.formData.name,note:e.formData.note,iconPath:e.formData.iconPath,bounty:e.formData.bounty,surplusNum:e.formData.surplusNum,startDate:e.$moment(e.formData.startDate).format("YYYY-MM-DD"),endDate:e.$moment(e.formData.endDate).format("YYYY-MM-DD"),isShow:e.formData.isShow,ApkPath:e.formData.ApkPath,packageName:e.formData.packageName,tryplayTimeLength:e.formData.tryplayTimeLength},{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer "+e.$store.state.user.token}}).then(function(){e.tableList.unshift(e.formData),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})})})},handleUpdate:function(e){var t=this;this.$moment(this.startDate).format("YYYY-MM-DD");this.formData=s()(this.formData,{id:"",name:e.row.name,note:e.row.note,iconPath:e.row.iconPath,bounty:e.row.bounty,surplusNum:e.row.surplusNum,startDate:e.row.startDate,endDate:e.row.endDate,isShow:e.row.isShow,ApkPath:e.row.ApkPath,packageName:e.row.packageName,tryplayTimeLength:e.row.tryplayTimeLength}),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},updateData:function(){var e=this;this.$refs.formData.validate(function(t){t&&e.$http.post(e.$baseUrl+"http://192.168.1.192:9006/1.0.0/task/bk/saveTryPlay",{id:"",name:e.formData.name,note:e.formData.note,iconPath:e.formData.iconPath,bounty:e.formData.bounty,surplusNum:e.formData.surplusNum,startDate:e.formData.startDate,endDate:e.formData.endDate,isShow:e.formData.isShow,ApkPath:e.formData.ApkPath,packageName:e.formData.packageName,tryplayTimeLength:e.formData.tryplayTimeLength}).then(function(t){console.log(t),t=t.data,e.$message.success("信息修改成功")}).catch(function(t){e.$message.error(t)})})},handleDelete:function(e){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});this.tableList.indexOf(e);this.tableList.splice(demoGame,1)},changeUpload:function(e){console.log(e)},expand:function(){this.expandQuery=!this.expandQuery},search:function(){this.getTableData()},reset:function(){},handleBeforeUpload:function(e){console.log(e),this.loading=!0},handlePreview:function(e){console.log(e)},handleRemove:function(e,t){console.log(e),console.log(t);t.forEach(function(t,a){e.uid===t&&a}),this.formData.iconPath="",this.fileList=this.fileList.filter(function(t){return t.uid!==e.uid}),console.log(this.formData.iconPath)},uploadSuccess:function(e,t,a){this.loading=!1,console.log(t),console.log(e),console.log(6,a),this.fileList.push(e),console.log(this.formData),this.formData.iconPath=e.url,console.log(a),this.loading=!1,this.$message({message:"图片上传成功",type:"success"})},uploadAvatarExceeded:function(e,t){}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"common-querytable-wrapper"},[a("div",{staticClass:"queryform-wrapper"},[a("div",{staticClass:"outside"},[a("el-form",{staticClass:"basearea"},[a("ul",{staticClass:"pull-left"},[a("li",[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("\n                新增\n              ")])],1)])]),e._v(" "),a("ul",{staticClass:"operation-wrapper pull-right"},[a("li",[a("div",{staticClass:"common-search-wrapper",on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.search(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.queryModel.keyword,expression:"queryModel.keyword"}],attrs:{type:"text",placeholder:"请输入名称"},domProps:{value:e.queryModel.keyword},on:{input:function(t){t.target.composing||e.$set(e.queryModel,"keyword",t.target.value)}}}),e._v(" "),a("a",[a("span",{staticClass:"el-icon-search",on:{click:e.search}})])])]),e._v(" "),a("li",[a("el-button",{staticClass:"expand",attrs:{size:"mini",type:"text"},on:{click:e.expand}},[e._v("高级搜索"),a("i",{staticClass:"el-icon-arrow-down"})])],1)])],1),e._v(" "),a("div",{staticClass:"expandarea",class:{active:e.expandQuery}},[a("el-form",{ref:"form",attrs:{model:e.queryModel,size:"mini","label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:23,"pull-right":""}},[a("el-form-item",{staticClass:"pull-right"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"},on:{click:e.reset}},[e._v("重置")])],1)],1)],1)],1)],1)])]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.tableList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"No",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Icon",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.iconPath+"-style_100x100",width:"80"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","class-name":"status-col",label:"积分",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.bounty)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"完成数",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.completedNum)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"剩余数",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.surplusNum)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"试玩时长",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.tryplayTimeLength)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"开始/结束时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.startDate)+"\n        "),a("br"),e._v(" "+e._s(t.row.endDate)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"APK下载地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.ApkPath)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"应用包名"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.packageName)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"添加时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",[e._v(e._s(t.row.createDate))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"isShow",label:"上架"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:function(a){e.updateShelfStatus(t)}},model:{value:t.row.isShow,callback:function(a){e.$set(t.row,"isShow",a)},expression:"scope.row.isShow"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t)}}},[e._v("编辑")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"common-pagination-wrapper"},[a("el-pagination",{attrs:{background:"","current-page":e.pagination.page,"page-sizes":[10,20,30,50],"page-size":e.pagination.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.formData,"label-position":"right","label-width":"120px"}},[a("el-form-item",{attrs:{label:"任务名称",prop:"name"}},[a("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"任务图片",prop:"iconPath"}},[a("div",{staticClass:"avatar-wrapper"},[""!==e.formData.iconPath?a("a",{staticClass:"close"},[a("span",{staticClass:"iconfont icon-crosswide"})]):e._e(),e._v(" "),""===e.formData.iconPath?a("div",[e._v("\n            暂无图片\n            ")]):a("img",{staticClass:"avatar",attrs:{src:e.formData.iconPath+"-style_100x100"}})]),e._v(" "),a("el-upload",{ref:"uploadAvatar",staticClass:"common-avataruploader-wrapper",attrs:{action:e.$prodBaseUrl+"image-upload-service/1.0.0/file/upload",limit:1,"show-file-list":!1,"before-upload":e.handleBeforeUpload,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.uploadSuccess,"on-exceed":e.uploadAvatarExceeded,"file-list":e.fileList,data:e.portraitParams}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过2MB")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"备注",prop:"note"}},[a("el-input",{model:{value:e.formData.note,callback:function(t){e.$set(e.formData,"note",t)},expression:"formData.note"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"积分/趣币",prop:"bounty"}},[a("el-input",{model:{value:e.formData.bounty,callback:function(t){e.$set(e.formData,"bounty",e._n(t))},expression:"formData.bounty"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"剩余数",prop:"surplusNum"}},[a("el-input",{model:{value:e.formData.surplusNum,callback:function(t){e.$set(e.formData,"surplusNum",e._n(t))},expression:"formData.surplusNum"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"apk 下载地址",prop:"ApkPath"}},[a("el-input",{model:{value:e.formData.ApkPath,callback:function(t){e.$set(e.formData,"ApkPath",t)},expression:"formData.ApkPath"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"包名",prop:"packageName"}},[a("el-input",{model:{value:e.formData.packageName,callback:function(t){e.$set(e.formData,"packageName",t)},expression:"formData.packageName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否上架",prop:"isShow"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.formData.isShow,callback:function(t){e.$set(e.formData,"isShow",t)},expression:"formData.isShow"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"开始时间",prop:"startDate"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"开始日期","picker-options":e.pickerOptions0},model:{value:e.formData.startDate,callback:function(t){e.$set(e.formData,"startDate",t)},expression:"formData.startDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结束时间",prop:"endDate"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"结束日期","picker-options":e.pickerOptions1},model:{value:e.formData.endDate,callback:function(t){e.$set(e.formData,"endDate",t)},expression:"formData.endDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"试玩时长",prop:"tryplayTimeLength"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"Please input"},model:{value:e.formData.tryplayTimeLength,callback:function(t){e.$set(e.formData,"tryplayTimeLength",e._n(t))},expression:"formData.tryplayTimeLength"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"==e.dialogStatus?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm"))+"\n      ")]):a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]},l=a("vSla")(n,i,!1,null,null,null);t.default=l.exports}});