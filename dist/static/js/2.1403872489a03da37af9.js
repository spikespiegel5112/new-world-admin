webpackJsonp([2],{"2l5/":function(e,t,a){"use strict";t.a=function(e){return Object(i.a)({url:"meta-service/1.0.0/buildings",method:"get",params:e})};var i=a("vLgD")},IHPB:function(e,t,a){"use strict";t.__esModule=!0;var i,n=a("kfHR"),l=(i=n)&&i.__esModule?i:{default:i};t.default=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return(0,l.default)(e)}},PsEc:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},kfHR:function(e,t,a){e.exports={default:a("qQfv"),__esModule:!0}},kksE:function(e,t,a){"use strict";var i=a("lIiZ"),n=a("go9Q");e.exports=function(e,t,a){t in e?i.f(e,t,n(0,a)):e[t]=a}},oT0T:function(e,t,a){var i=a("PsEc");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("8bSs")("07a6ac55",i,!0)},qQfv:function(e,t,a){a("IsPG"),a("yrDz"),e.exports=a("AKd3").Array.from},wh1R:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("aA9S"),n=a.n(i),l=a("2l5/"),o={components:{CommonTag:a("zfRG").a},data:function(){var e=this;return{editAvailabilityRequest:"meta-service/1.0.0/availability/",versionListRequest:"meta-service/1.0.0/availability/versionList/",versionControlRequest:"meta-service/1.0.0/versionControl/",value2:"",value1:"",tableKey:0,list:null,total:null,listLoading:!0,availabilityFlag:!1,dynamicTags:["标签一","标签二","标签三"],listQuery:{name:"",available:"",actionType:"",actionParam:"",icon:"",page:1,limit:20},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,formData:{id:"",name:"",label:"",available:!1,actionType:"",actionParam:"",icon:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,availabilityFormData:{moduleId:"",type:"",iosEnable:"",androidEnable:"",version:""},rules:{label:[{required:!0,message:"请输入显示名称",trigger:"change"}],name:[{required:!0,message:"请输入唯一表示名称",trigger:"change"}],icon:[{required:!0,message:"请上传图片",trigger:"change"}],available:[{required:!0,message:"请选择是否可用",trigger:"change"}],type:[{required:!0,message:"请选择类型",trigger:"change"}],moduleId:[{required:!0,message:"请选择类型",trigger:"change"}],version:[{required:!0,message:"请输入版本号",trigger:"change"}],actionType:[{required:!0,message:"请选择反映类型",trigger:"change"}],actionParam:[{required:!0,message:"请输入actionParam",trigger:"change"}],iosAvailability:[{required:!0,message:"请输入actionParam",trigger:"change"}],androidAvailability:[{required:!0,message:"请输入actionParam",trigger:"change"}]},downloadLoading:!1,pickerOptions0:{disabledDate:function(t){if(""!==e.value2)return t.getTime()>e.value2}},pickerOptions1:{disabledDate:function(t){return t.getTime()<e.value1}},fileList:[],portraitParams:{bucketName:"funyvalley",folderName:"icon"},iosVersionListData:[],androidVersionListData:[],searchTxt:"",expandQuery:"",queryModel:{reportingUnit:"",platformId:"",status:"",name:"",gender:"",birthday:""}}},filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},created:function(){this.getControllableVersionList(),this.getTableData()},methods:{getControllableVersionList:function(){var e=this;this.$http.get(this.$baseUrl+this.versionListRequest).then(function(t){console.log(t),t=t.data,e.androidVersionListData=t.androidList,e.iosVersionListData=t.iosList})},getTableData:function(){var e=this;this.listLoading=!0,Object(l.a)(this.listQuery).then(function(t){console.log(t),e.list=t,e.total=t.totalElements,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getTableData()},handleSizeChange:function(e){this.listQuery.limit=e,this.getTableData()},handleCurrentChange:function(e){this.listQuery.page=e,this.getTableData()},resetTemp:function(){this.formData={id:"",name:"",label:"",available:!1,actionType:"",actionParam:"",icon:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.formData.clearValidate()})},createData:function(){var e=this,t=this.formData;console.log(this.$baseUrl),this.$refs.formData.validate(function(a){a&&e.$refs.formData.validate(function(a){e.$http.post(e.$baseUrl+"meta-service/1.0.0/buildings",{id:"",name:t.name,label:t.label,available:t.available,actionType:t.actionType,actionParam:t.actionParam,icon:t.icon}).then(function(t){console.log(t),e.dialogFormVisible=!1,e.$message.success("信息创建成功"),e.getTableData()})})})},handleUpdate:function(e){var t=this;console.log(e),this.formData=n()({},e.row),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.formData.clearValidate()})},updateData:function(){var e=this,t=this.formData;this.$refs.formData.validate(function(a){e.$http.post(e.$baseUrl+"meta-service/1.0.0/buildings/"+t.id,{name:t.name,label:t.label,available:t.available,actionType:t.actionType,actionParam:t.actionParam,icon:t.icon}).then(function(t){console.log(t),e.dialogFormVisible=!1,e.$message.success("信息修改成功"),e.getTableData()})})},handleDelete:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.delete(t.$baseUrl+"meta-service/1.0.0/buildings/"+e.row.id).then(function(e){console.log(e),t.dialogFormVisible=!1,t.$message.success("删除成功"),t.getTableData()})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},changeUpload:function(e){console.log(e)},handlePreview:function(e){console.log(e),this.fileList.push(e)},uploadSuccess:function(e){this.loading=!1,console.log(e),this.formData.icon=e.url,this.loading=!1,this.$message({message:"图片上传成功",type:"success"})},uploadAvatarExceeded:function(e,t){var a=this;t.length>0&&this.$confirm("当前申报已有上传图片，需先删除已有头像，请确认是否删除？","提示",{type:"warning"}).then(function(e){a.$refs.uploadAvatar.clearFiles(),a.$http.get(a.$baseUrl+"attachment/deleteAttachment/"+a.fileList[0].id).then(function(e){"200"===e.data.code?(a.fileList.splice(a.fileList.indexOf(e.id),1),a.componentModelData.uploaded="",a.$message.success("图片删除成功")):(a.fileList.splice(a.fileList.indexOf(e.id),1),a.componentModelData.uploaded="",a.$message.warning("图片删除失败"))})})},handleRemove:function(){},handleBeforeUpload:function(e){console.log(e);var t=["jpg","jpeg","png"],a=e.name.lastIndexOf(".")+1,i=e.name.length,n=e.name.substring(a,i);return 0===t.filter(function(e){return e===n}).length?(this.$message({message:"文件必须为"+t.join("、")+"类型文件",type:"error"}),!1):e.size>2097152?(this.$message({message:"文件不得大于2M",type:"error"}),!1):void(this.loading=!0)},editAvailability:function(e){console.log(e.row),this.availabilityFormData=n()({},{moduleId:e.row.id,type:e.row.type,iosEnable:e.row.iosEnable,androidEnable:e.row.androidEnable,version:e.row.version}),console.log(this.availabilityFormData),this.availabilityFlag=!0},updateAvailability:function(){var e=this;this.$ref.availabilityFormData.validate(function(t){t&&e.$http.post(e.$baseUrl+e.editAvailabilityRequest,{params:{name:formData.name,label:formData.label,available:formData.available,actionType:formData.actionType,actionParam:formData.actionParam,icon:formData.icon}})})},handleAddIosList:function(e,t){console.log(e),console.log(t),this.$http.post(this.$baseUrl+this.versionControlRequest,{deviceType:t,version:e[e.length-1]},{headers:{Authorization:"Bearer "+this.$store.state.user.token}}).then(function(e){console.log(e)})},handleDeleteIosList:function(e,t,a){this.$http.delete(this.$baseUrl+this.versionControlRequest+(a+"/")+e,{headers:{Authorization:"Bearer "+this.$store.state.user.token}}).then(function(e){console.log(e)})},handleAndroidListChange:function(e){},add:function(){},expand:function(){this.expandQuery=!this.expandQuery},search:function(){},reset:function(){}}},r={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"app-container"},[a("div",{staticClass:"common-querytable-wrapper"},[a("div",{staticClass:"queryform-wrapper"},[a("div",{staticClass:"outside"},[a("el-form",{staticClass:"basearea"},[a("ul",{staticClass:"pull-left"},[a("li",[a("el-button",{attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("\n                新增\n              ")])],1)])]),e._v(" "),a("ul",{staticClass:"operation-wrapper pull-right"},[a("li",[a("div",{staticClass:"common-search-wrapper",on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.onSearch(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTxt,expression:"searchTxt"}],attrs:{type:"text",placeholder:"请输入单位名称和姓名"},domProps:{value:e.searchTxt},on:{input:function(t){t.target.composing||(e.searchTxt=t.target.value)}}}),e._v(" "),a("a",[a("span",{staticClass:"el-icon-search",on:{click:e.search}})])])]),e._v(" "),a("li",[a("el-button",{staticClass:"expand",attrs:{size:"mini",type:"text"},on:{click:e.expand}},[e._v("高级搜索"),a("i",{staticClass:"el-icon-arrow-down"})])],1)])],1),e._v(" "),a("div",{staticClass:"expandarea",class:{active:e.expandQuery}},[a("el-form",{ref:"form",attrs:{model:e.queryModel,size:"mini","label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"填报单位："}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.queryModel.reportingUnit,callback:function(t){e.$set(e.queryModel,"reportingUnit",t)},expression:"queryModel.reportingUnit"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"姓名："}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.queryModel.name,callback:function(t){e.$set(e.queryModel,"name",t)},expression:"queryModel.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"出生年月："}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.queryModel.birthday,callback:function(t){e.$set(e.queryModel,"birthday",t)},expression:"queryModel.birthday"}})],1)],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:23,"pull-right":""}},[a("el-form-item",{staticClass:"pull-right"},[a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索\n                ")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"},on:{click:e.reset}},[e._v("重置\n                ")])],1)],1)],1)],1)],1)])]),e._v(" "),a("el-row",[a("el-form",{attrs:{"label-position":"top","label-width":"80px"}},[a("el-form-item",{attrs:{label:"审核版本"}},[a("CommonTag",{attrs:{title:"iOS",tagData:e.iosVersionListData,buttonText:"添加版本",metaData:["ios"]},on:{add:e.handleAddIosList,delete:e.handleDeleteIosList}}),e._v(" "),a("CommonTag",{attrs:{title:"Android",tagData:e.androidVersionListData,buttonText:"添加版本",metaData:["android"]},on:{add:e.handleAddIosList,delete:e.handleDeleteIosList}})],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"No",type:"index",width:"50",align:"center",fixed:""}}),e._v(" "),a("el-table-column",{attrs:{label:"ID",align:"center",prop:"id"}}),e._v(" "),a("el-table-column",{attrs:{label:"显示名称",align:"center",prop:"label"}}),e._v(" "),a("el-table-column",{attrs:{label:"唯一表示名称",align:"center",prop:"name"}}),e._v(" "),a("el-table-column",{attrs:{label:"Icon",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.icon+"-style_100x100",width:"80"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Android可用性",prop:"available"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",disabled:""},model:{value:t.row.androidEnable,callback:function(a){e.$set(t.row,"androidEnable",a)},expression:"scope.row.androidEnable"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"iOS可用性",prop:"available"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",disabled:""},model:{value:t.row.iosEnable,callback:function(a){e.$set(t.row,"iosEnable",a)},expression:"scope.row.iosEnable"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"点击反映类型",prop:"actionType"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"actionParam",prop:"actionParam"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.editAvailability(t)}}},[e._v("设置可用性")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t)}}},[e._v("删除\n        ")])]}}])})],1),e._v(" "),a("div",{staticClass:"common-pagination-wrapper"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"850px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:16}},[a("el-form",{ref:"formData",attrs:{rules:e.rules,model:e.formData,"label-position":"right","label-width":"140px"}},[a("el-form-item",{attrs:{label:"显示名称",prop:"label"}},[a("el-input",{model:{value:e.formData.label,callback:function(t){e.$set(e.formData,"label",t)},expression:"formData.label"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"唯一表示名称",prop:"name"}},[a("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Icon",prop:"icon"}},[a("el-upload",{ref:"uploadAvatar",staticClass:"common-avataruploader-wrapper",attrs:{action:this.$baseUrl+"image-upload-service/1.0.0/file/upload",limit:1,"show-file-list":!1,"before-upload":e.handleBeforeUpload,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.uploadSuccess,"on-exceed":e.uploadAvatarExceeded,"file-list":e.fileList,data:e.portraitParams}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过2MB")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"点击反映类型",prop:"actionType"}},[a("el-select",{model:{value:e.formData.actionType,callback:function(t){e.$set(e.formData,"actionType",t)},expression:"formData.actionType"}},e._l(e.$store.state.app.actionType,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"actionParam",prop:"name"}},[a("el-input",{model:{value:e.formData.actionParam,callback:function(t){e.$set(e.formData,"actionParam",t)},expression:"formData.actionParam"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"设置可用性",visible:e.availabilityFlag,width:"850px"},on:{"update:visible":function(t){e.availabilityFlag=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:16}},[a("el-form",{ref:"availabilityFormData",attrs:{rules:e.rules,model:e.availabilityFormData,"label-position":"right","label-width":"140px"}},[a("el-form-item",{attrs:{label:"iOS可用性",prop:"iosAvailability"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.availabilityFormData.iosEnable,callback:function(t){e.$set(e.availabilityFormData,"iosEnable",t)},expression:"availabilityFormData.iosEnable"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Android可用性",prop:"androidAvailability"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.availabilityFormData.androidEnable,callback:function(t){e.$set(e.availabilityFormData,"androidEnable",t)},expression:"availabilityFormData.androidEnable"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.availabilityFlag=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]},s=a("vSla")(o,r,!1,null,null,null);t.default=s.exports},yrDz:function(e,t,a){"use strict";var i=a("WwGG"),n=a("FITv"),l=a("OXaN"),o=a("kDTw"),r=a("V2W7"),s=a("CFGK"),c=a("kksE"),u=a("YW8S");n(n.S+n.F*!a("75+0")(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,n,d,p=l(e),m="function"==typeof this?this:Array,f=arguments.length,g=f>1?arguments[1]:void 0,v=void 0!==g,h=0,b=u(p);if(v&&(g=i(g,f>2?arguments[2]:void 0,2)),void 0==b||m==Array&&r(b))for(a=new m(t=s(p.length));t>h;h++)c(a,h,v?g(p[h],h):p[h]);else for(d=b.call(p),a=new m;!(n=d.next()).done;h++)c(a,h,v?o(d,g,[n.value,h],!0):n.value);return a.length=h,a}})},zfRG:function(e,t,a){"use strict";var i=a("IHPB"),n=a.n(i),l={name:"CommonTag",props:{metaData:{type:Array,default:function(){return[]},required:!1},title:{type:String,default:"",required:!1},tagData:{type:Array,default:[],required:!1},buttonText:{type:String,default:"+",required:!1}},data:function(){return{dynamicTags:[],inputVisible:!1,inputValue:""}},watch:{tagData:function(e){console.log(e),e.length>=0?this.dynamicTags=e:this.$message.error("tag列表数据类型不正确")}},created:function(){this.dynamicTags=this.tagData},methods:{handleInputConfirm:function(){var e=this.inputValue;e&&this.dynamicTags.push(e),this.inputVisible=!1,this.inputValue="",this.$emit.apply(this,["add",this.dynamicTags].concat(n()(this.metaData)))},handleClose:function(e){this.$emit.apply(this,["delete",e,this.dynamicTags.indexOf(e)].concat(n()(this.metaData))),this.dynamicTags.splice(this.dynamicTags.indexOf(e),1)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick(function(t){e.$refs.saveTagInput.$refs.input.focus()})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"common-tag-wrapper"},[a("el-col",{attrs:{span:2}},[e._v(e._s(e.title))]),e._v(" "),a("el-col",{attrs:{span:22}},[e._l(e.dynamicTags,function(t,i){return a("el-tag",{key:i,attrs:{closable:"","disable-transitions":!1},on:{close:function(a){e.handleClose(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),e._v(" "),e.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):a("el-button",{ref:"saveTagInput",staticClass:"button",attrs:{size:"small"},on:{blur:e.handleInputConfirm,click:e.showInput},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}},[e._v("添加版本\n    ")])],2)],1)},staticRenderFns:[]};var r=a("vSla")(l,o,!1,function(e){a("oT0T")},"data-v-cc188b92",null);t.a=r.exports}});