webpackJsonp([1],{"2l5/":function(e,t,a){"use strict";a("vLgD")},"770I":function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},IHPB:function(e,t,a){"use strict";t.__esModule=!0;var n,i=a("kfHR"),s=(n=i)&&n.__esModule?n:{default:n};t.default=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return(0,s.default)(e)}},Ktu4:function(e,t,a){var n=a("770I");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("5da320b5",n,!0)},kfHR:function(e,t,a){e.exports={default:a("qQfv"),__esModule:!0}},kksE:function(e,t,a){"use strict";var n=a("lIiZ"),i=a("go9Q");e.exports=function(e,t,a){t in e?n.f(e,t,i(0,a)):e[t]=a}},qQfv:function(e,t,a){a("IsPG"),a("yrDz"),e.exports=a("AKd3").Array.from},vzM4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("aA9S"),i=a.n(n),s=a("a3Yh"),o=a.n(s),r=(a("2l5/"),{components:{CommonTag:a("zfRG").a},data:function(){var e,t=this;return e={editFeatureMetadata:"meta-service/1.0.0/feature/",featureListRequest:"meta-service/1.0.0/feature/bk/list",featureAvailabilityRequest:"meta-service/1.0.0/availability",versionListRequest:"meta-service/1.0.0/availability/versionList/",versionControlRequest:"meta-service/1.0.0/versionControl/",dialogFormVisible:!1,editFlag:!0,value2:"",value1:"",tableKey:0,list:null,total:null,listLoading:!0,queryModel:{name:"",available:"",actionType:"",actionParam:"",icon:"",page:1,limit:20},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,formData:{id:"",name:"",iosEnable:!1,androidEnable:!1},dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{id:[{required:!0,message:"请输入ID",trigger:"change"}],name:[{required:!0,message:"请输入名称",trigger:"change"}],moduleId:[{required:!0,message:"请输入名称",trigger:"change"}],type:[{required:!0,message:"请输入名称",trigger:"change"}],iosEnable:[{required:!0,message:"请输入名称",trigger:"change"}],androidEnable:[{required:!0,message:"请输入名称",trigger:"change"}],version:[{required:!0,message:"请输入名称",trigger:"change"}]},downloadLoading:!1,pickerOptions0:{disabledDate:function(e){if(""!==t.value2)return e.getTime()>t.value2}},pickerOptions1:{disabledDate:function(e){return e.getTime()<t.value1}},fileList:[],portraitParams:{bucketName:"funyvalley",folderName:"icon"},iosVersionListData:[],androidVersionListData:[],searchTxt:"",expandQuery:""},o()(e,"queryModel",{name:""}),o()(e,"pagination",{page:1,limit:20,total:0}),e},filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},mounted:function(){this.getTableData(),this.getControllableVersionList()},methods:{getTableData:function(){var e=this;this.listLoading=!0,this.queryModel=i()(this.queryModel,this.pagination),this.$http.get(this.$baseUrl+this.featureListRequest,{params:this.queryModel}).then(function(t){console.log(t),e.list=t.data.list,e.pagination.total=t.data.total,e.listLoading=!1}).catch(function(t){e.$message.error(t.data)})},getControllableVersionList:function(){var e=this;this.$http.get(this.$baseUrl+this.versionListRequest).then(function(t){console.log(t),t=t.data,e.androidVersionListData=t.androidList,e.iosVersionListData=t.iosList}).catch(function(t){e.$message.error(t.response.data)})},handleFilter:function(){this.queryModel.page=1,this.getTableData()},handleSizeChange:function(e){this.queryModel.limit=e,this.getTableData()},handleCurrentChange:function(e){this.queryModel.page=e,this.getTableData()},resetTemp:function(){this.formData={id:"",name:""}},handleCreate:function(){var e=this;this.dialogStatus="create",this.dialogFormVisible=!0,void 0!==this.$refs.formData&&(this.$refs.formData.resetFields(),this.$nextTick(function(){e.$refs.formData.clearValidate()}))},createData:function(){var e=this,t=this.formData;this.$refs.formData.validate(function(a){a&&e.$http.post(e.$baseUrl+e.editFeatureMetadata,{name:t.name,id:"",iosEnable:t.iosEnable,androidEnable:t.androidEnable},{headers:{Authorization:"Bearer "+e.$store.state.user.token}}).then(function(t){console.log(t),e.dialogFormVisible=!1,e.$message.success("信息创建成功"),e.getTableData()}).catch(function(t){e.$message.error(t.response.data)})})},handleUpdate:function(e){var t=this;this.formData=i()({},e.row),console.log(this.formData),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.formData.clearValidate()})},updateData:function(){var e=this,t=this.formData;this.$refs.formData.validate(function(a){e.$http.post(e.$baseUrl+e.editFeatureMetadata,{name:t.name,id:t.id,iosEnable:t.iosEnable,androidEnable:t.androidEnable},{headers:{Authorization:"Bearer "+e.$store.state.user.token}}).then(function(t){console.log(t),e.dialogFormVisible=!1,e.$message.success("信息修改成功"),e.getTableData()}).catch(function(t){e.$message.error(t.response.data)})})},handleDelete:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.delete(t.$baseUrl+"meta-service/1.0.0/feature/"+e.row.id,{headers:{Authorization:"Bearer "+t.$store.state.user.token}}).then(function(e){console.log(e),t.dialogFormVisible=!1,t.$message.success("删除成功"),t.getTableData()}).catch(function(){t.$message({type:"info",message:"已取消删除"})})})},changeUpload:function(e){console.log(e)},handlePreview:function(e){console.log(e),this.fileList.push(e)},uploadSuccess:function(e){this.loading=!1,console.log(e),this.formData.icon=e.url,this.loading=!1,this.$message({message:"图片上传成功",type:"success"})},uploadAvatarExceeded:function(e,t){var a=this;t.length>0&&this.$confirm("当前申报已有上传图片，需先删除已有头像，请确认是否删除？","提示",{type:"warning"}).then(function(e){a.$refs.uploadAvatar.clearFiles(),a.$http.get(a.$baseUrl+"attachment/deleteAttachment/"+a.fileList[0].id).then(function(e){"200"===e.data.code?(a.fileList.splice(a.fileList.indexOf(e.id),1),a.componentModelData.uploaded="",a.$message.success("图片删除成功")):(a.fileList.splice(a.fileList.indexOf(e.id),1),a.componentModelData.uploaded="",a.$message.warning("图片删除失败"))}).catch(function(e){a.$message.error(e.response.data)})})},handleRemove:function(){},handleBeforeUpload:function(e){console.log(e);var t=["jpg","jpeg","png"],a=e.name.lastIndexOf(".")+1,n=e.name.length,i=e.name.substring(a,n);return 0===t.filter(function(e){return e===i}).length?(this.$message({message:"文件必须为"+t.join("、")+"类型文件",type:"error"}),!1):e.size>2097152?(this.$message({message:"文件不得大于2M",type:"error"}),!1):void(this.loading=!0)},editAvailability:function(){this.dialogFormVisible=!0},handleAddIosList:function(e,t){var a=this;console.log(e),console.log(t),0!==e.length&&this.$http.post(this.$baseUrl+this.versionControlRequest,{deviceType:t,version:e[e.length-1]},{headers:{Authorization:"Bearer "+this.$store.state.user.token}}).then(function(e){console.log(e),a.$message.success(e.response.data)}).catch(function(e){a.$message.error(e.response.data)})},handleDeleteIosList:function(){this.$http.delete(this.$baseUrl+this.versionControlRequest+(type+"/")+data,{headers:{"Content-Type":"application/x-www-form-urlencoded",Authorization:"Bearer "+this.$store.state.user.token}}).then(function(e){console.log(e)})},handleAndroidListChange:function(e){},add:function(){},expand:function(){this.expandQuery=!this.expandQuery},search:function(){this.getTableData()},reset:function(){}}}),l={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"app-container"},[a("div",{staticClass:"common-querytable-wrapper"},[a("div",{staticClass:"queryform-wrapper"},[a("div",{staticClass:"outside"},[a("el-form",{staticClass:"basearea"},[a("ul",{staticClass:"pull-left"},[a("li",[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("\n                新增\n              ")])],1)])]),e._v(" "),a("ul",{staticClass:"operation-wrapper pull-right"},[a("li",[a("div",{staticClass:"common-search-wrapper",on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.search(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.queryModel.name,expression:"queryModel.name"}],attrs:{type:"text",placeholder:"请输入元数据名称"},domProps:{value:e.queryModel.name},on:{input:function(t){t.target.composing||e.$set(e.queryModel,"name",t.target.value)}}}),e._v(" "),a("a",[a("span",{staticClass:"el-icon-search",on:{click:e.search}})])])]),e._v(" "),a("li",[a("el-button",{staticClass:"expand",attrs:{size:"mini",type:"text"},on:{click:e.expand}},[e._v("高级搜索"),a("i",{staticClass:"el-icon-arrow-down"})])],1)])],1),e._v(" "),a("div",{staticClass:"expandarea",class:{active:e.expandQuery}},[a("el-form",{ref:"form",attrs:{model:e.queryModel,size:"mini","label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"feature名称："}},[a("el-input",{attrs:{placeholder:"请输入"},model:{value:e.queryModel.name,callback:function(t){e.$set(e.queryModel,"name",t)},expression:"queryModel.name"}})],1)],1),e._v(" "),a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:23,"pull-right":""}},[a("el-form-item",{staticClass:"pull-right"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索\n                ")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"},on:{click:e.reset}},[e._v("重置\n                ")])],1)],1)],1)],1)],1)])]),e._v(" "),a("el-row",[a("el-form",{attrs:{"label-position":"top","label-width":"80px"}},[a("el-form-item",{attrs:{label:"审核版本"}},[a("CommonTag",{attrs:{title:"iOS",tagData:e.iosVersionListData,buttonText:"添加版本",metaData:["ios"]},on:{add:e.handleAddIosList,delete:e.handleDeleteIosList}}),e._v(" "),a("CommonTag",{attrs:{title:"Android",tagData:e.androidVersionListData,buttonText:"添加版本",metaData:["android"]},on:{add:e.handleAddIosList,delete:e.handleDeleteIosList}})],1)],1)],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{label:"No",type:"index",width:"50",align:"center",fixed:""}}),e._v(" "),a("el-table-column",{attrs:{label:"名称",align:"center",prop:"name"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Android可用性",prop:"available"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",disabled:""},model:{value:t.row.androidEnable,callback:function(a){e.$set(t.row,"androidEnable",a)},expression:"scope.row.androidEnable"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"iOS可用性",prop:"available"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",disabled:""},model:{value:t.row.iosEnable,callback:function(a){e.$set(t.row,"iosEnable",a)},expression:"scope.row.iosEnable"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"common-pagination-wrapper"},[a("el-pagination",{attrs:{background:"","current-page":e.pagination.page,"page-sizes":[10,20,30,50],"page-size":e.pagination.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.pagination.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:e.dialogFormVisible,width:"1200px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("el-form",{ref:"formData",attrs:{rules:e.rules,model:e.formData,"label-position":"right","label-width":"140px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"iOS可用性",prop:"iosEnable"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.formData.iosEnable,callback:function(t){e.$set(e.formData,"iosEnable",t)},expression:"formData.iosEnable"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Android可用性",prop:"androidEnable"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.formData.androidEnable,callback:function(t){e.$set(e.formData,"androidEnable",t)},expression:"formData.androidEnable"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]},c=a("vSla")(r,l,!1,null,null,null);t.default=c.exports},yrDz:function(e,t,a){"use strict";var n=a("WwGG"),i=a("FITv"),s=a("OXaN"),o=a("kDTw"),r=a("V2W7"),l=a("CFGK"),c=a("kksE"),u=a("YW8S");i(i.S+i.F*!a("75+0")(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,i,d,f=s(e),p="function"==typeof this?this:Array,m=arguments.length,h=m>1?arguments[1]:void 0,g=void 0!==h,v=0,b=u(f);if(g&&(h=n(h,m>2?arguments[2]:void 0,2)),void 0==b||p==Array&&r(b))for(a=new p(t=l(f.length));t>v;v++)c(a,v,g?h(f[v],v):f[v]);else for(d=b.call(f),a=new p;!(i=d.next()).done;v++)c(a,v,g?o(d,h,[i.value,v],!0):i.value);return a.length=v,a}})},zfRG:function(e,t,a){"use strict";var n=a("IHPB"),i=a.n(n),s={name:"CommonTag",props:{metaData:{type:Array,default:function(){return[]},required:!1},title:{type:String,default:"",required:!1},tagData:{type:Array,default:[],required:!1},buttonText:{type:String,default:"+",required:!1}},data:function(){return{dynamicTags:[],inputVisible:!1,inputValue:""}},watch:{tagData:function(e){console.log(e),e.length>=0?this.dynamicTags=e:this.$message.error("tag列表数据类型不正确")}},mounted:function(){this.dynamicTags=this.tagData},methods:{handleInputConfirm:function(){var e=this.inputValue;e&&this.dynamicTags.push(e),this.inputVisible=!1,this.inputValue="",this.$emit.apply(this,["add",this.dynamicTags].concat(i()(this.metaData)))},handleClose:function(e){this.$emit.apply(this,["delete",e,this.dynamicTags.indexOf(e)].concat(i()(this.metaData))),this.dynamicTags.splice(this.dynamicTags.indexOf(e),1)},showInput:function(){var e=this;this.inputVisible=!0,this.$nextTick(function(t){e.$refs.saveTagInput.$refs.input.focus()})}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"common-tag-wrapper"},[a("el-col",{attrs:{span:2}},[e._v(e._s(e.title))]),e._v(" "),a("el-col",{attrs:{span:22}},[e._l(e.dynamicTags,function(t,n){return a("el-tag",{key:n,attrs:{closable:"","disable-transitions":!1},on:{close:function(a){e.handleClose(t)}}},[e._v("\n      "+e._s(t)+"\n    ")])}),e._v(" "),e.inputVisible?a("el-input",{ref:"saveTagInput",staticClass:"input",attrs:{size:"small"},on:{blur:e.handleInputConfirm},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}}):a("el-button",{ref:"saveTagInput",staticClass:"button",attrs:{size:"small"},on:{blur:e.handleInputConfirm,click:e.showInput},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleInputConfirm(t)}},model:{value:e.inputValue,callback:function(t){e.inputValue=t},expression:"inputValue"}},[e._v("添加版本\n    ")])],2)],1)},staticRenderFns:[]};var r=a("vSla")(s,o,!1,function(e){a("Ktu4")},"data-v-9328e472",null);t.a=r.exports}});