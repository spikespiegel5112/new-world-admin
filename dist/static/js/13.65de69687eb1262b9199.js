webpackJsonp([13],{wh1R:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=t("aA9S"),o=t.n(i),l=t("pnga"),n=t("zQDM"),s={components:{CommonTag:l.a,CommonQuery:n.a},data:function(){var e=this;return{buildingsRequest:"meta-service/1.0.0/buildings/bk/list",editBuildingMetadata:"meta-service/1.0.0/buildings/",editAvailabilityRequest:"meta-service/1.0.0/availability/",versionListRequest:"meta-service/1.0.0/availability/versionList/",versionControlRequest:"meta-service/1.0.0/versionControl/",value2:"",value1:"",tableKey:0,list:[],total:null,listLoading:!0,availabilityFlag:!1,dynamicTags:["标签一","标签二","标签三"],queryModel:{available:!0,platformId:"",status:"",name:"",gender:"",birthday:""},pagination:{page:1,limit:20},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,formData:{id:"",name:"",label:"",available:!1,actionType:"",actionParam:"",icon:"",iosEnable:!1,androidEnable:!1},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,availabilityFormData:{moduleId:"",type:"",iosEnable:"",androidEnable:"",version:""},rules:{label:[{required:!0,message:"请输入显示名称",trigger:"change"}],name:[{required:!0,message:"请输入唯一表示名称",trigger:"change"}],icon:[{required:!0,message:"请上传图片",trigger:"change"}],available:[{required:!0,message:"请选择是否可用",trigger:"change"}],type:[{required:!0,message:"请选择类型",trigger:"change"}],moduleId:[{required:!0,message:"请选择类型",trigger:"change"}],version:[{required:!0,message:"请输入版本号",trigger:"change"}],actionType:[{required:!0,message:"请选择反映类型",trigger:"change"}],actionParam:[{required:!0,message:"请输入actionParam",trigger:"change"}],iosEnable:[{required:!0,message:"请输入actionParam",trigger:"change"}],androidEnable:[{required:!0,message:"请输入actionParam",trigger:"change"}]},downloadLoading:!1,pickerOptions0:{disabledDate:function(a){if(""!==e.value2)return a.getTime()>e.value2}},pickerOptions1:{disabledDate:function(a){return a.getTime()<e.value1}},fileList:[],portraitParams:{bucketName:"funyvalley",folderName:"icon"},iosVersionListData:[],androidVersionListData:[],searchTxt:"",expandQuery:""}},computed:{metaTableHeight:function(){return this.$store.state.app.tableHeight-140}},watch:{effectiveDuration:function(e){console.log(e),null===e&&(e=[]),this.formData.startDate=e[0],this.formData.endDate=e[1]}},mounted:function(){this.getControllableVersionList(),this.getTableData()},methods:{getControllableVersionList:function(){var e=this;this.$http.get(this.$baseUrl+this.versionListRequest).then(function(a){console.log(a),e.androidVersionListData=a.androidList,e.iosVersionListData=a.iosList}).catch(function(a){e.$message.error(a.response.data)})},getTableData:function(){var e=this;this.listLoading=!0,this.queryModel=o()(this.queryModel,this.pagination),this.$http.get(this.$baseUrl+this.buildingsRequest,{params:this.queryModel}).then(function(a){console.log(a),e.list=a.list,e.total=a.total,e.listLoading=!1})},handleFilter:function(){this.pagination.page=1,this.getTableData()},handleSizeChange:function(e){this.pagination.limit=e,this.getTableData()},handleCurrentChange:function(e){this.pagination.page=e,this.getTableData()},resetTemp:function(){this.formData={id:"",name:"",label:"",available:!1,actionType:"",actionParam:"",icon:"",iosEnable:!1,androidEnable:!1},this.fileList=[]},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,void 0!==this.$refs.formData&&(this.$refs.formData.resetFields(),this.$nextTick(function(){e.$refs.formData.clearValidate()}))},createData:function(){var e=this,a=this.formData;this.$refs.formData.validate(function(t){t&&e.$refs.formData.validate(function(t){e.$http.post(e.$baseUrl+e.editBuildingMetadata,{id:"",name:a.name,label:a.label,available:a.available,actionType:a.actionType,actionParam:a.actionParam,icon:a.icon,iosEnable:a.iosEnable,androidEnable:a.androidEnable},{headers:{Authorization:"Bearer "+e.$store.state.user.token}}).then(function(a){console.log(a),e.dialogFormVisible=!1,e.$message.success("信息创建成功"),e.getTableData()}).catch(function(a){console.log(a),e.$message.error(a.response.status.toString()+"  "+a.response.data.error)})})})},handleUpdate:function(e){var a=this;console.log(e),this.formData=o()({},e.row),this.effectiveDuration=[e.row.startDate,e.row.endDate],this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){a.$refs.formData.clearValidate()})},updateData:function(){var e=this,a=this.formData;this.$refs.formData.validate(function(t){e.$http.post(e.$baseUrl+e.editBuildingMetadata,{id:a.id,name:a.name,label:a.label,available:a.available,actionType:a.actionType,actionParam:a.actionParam,icon:a.icon,iosEnable:a.iosEnable,androidEnable:a.androidEnable},{headers:{Authorization:"Bearer "+e.$store.state.user.token}}).then(function(a){console.log(a),e.dialogFormVisible=!1,e.$message.success("信息修改成功"),e.getTableData()}).catch(function(a){console.log(a),e.$message.error(a.response.status.toString()+"  "+a.response.data.error)})})},handleDelete:function(e){var a=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.$http.delete(a.$baseUrl+"meta-service/1.0.0/buildings/"+e.row.id,{headers:{Authorization:"Bearer "+a.$store.state.user.token}}).then(function(e){console.log(e),a.dialogFormVisible=!1,a.$message.success("删除成功"),a.getTableData()}).catch(function(e){console.log(e),a.$message.error(e.response.status.toString()+"  "+e.response.data.error)})}).catch(function(){a.$message({type:"info",message:"已取消删除"})})},changeUpload:function(e){console.log(e)},handlePreview:function(e){console.log(e),this.fileList.push(e)},uploadSuccess:function(e){this.loading=!1,console.log(e),this.formData.icon=e.url,this.loading=!1,this.$message({message:"图片上传成功",type:"success"})},uploadAvatarExceeded:function(e,a){var t=this;a.length>0&&this.$confirm("当前申报已有上传图片，需先删除已有头像，请确认是否删除？","提示",{type:"warning"}).then(function(e){t.$refs.uploadAvatar.clearFiles(),t.$http.get(t.$baseUrl+"attachment/deleteAttachment/"+t.fileList[0].id).then(function(e){"200"===e.data.code?(t.fileList.splice(t.fileList.indexOf(e.id),1),t.componentModelData.uploaded="",t.$message.success("图片删除成功")):(t.fileList.splice(t.fileList.indexOf(e.id),1),t.componentModelData.uploaded="",t.$message.warning("图片删除失败"))}).catch(function(e){console.log(e),t.$message.error(e.response.status.toString()+"  "+e.response.data.error)})})},handleRemove:function(){},handleBeforeUpload:function(e){console.log(e);var a=["jpg","jpeg","png"],t=e.name.lastIndexOf(".")+1,i=e.name.length,o=e.name.substring(t,i);return 0===a.filter(function(e){return e===o}).length?(this.$message({message:"文件必须为"+a.join("、")+"类型文件",type:"error"}),!1):e.size>2097152?(this.$message({message:"文件不得大于2M",type:"error"}),!1):void(this.loading=!0)},editAvailability:function(e){console.log(e.row),this.availabilityFormData=o()({},{moduleId:e.row.id,type:e.row.type,iosEnable:e.row.iosEnable,androidEnable:e.row.androidEnable,version:e.row.version}),console.log(this.availabilityFormData),this.availabilityFlag=!0},updateAvailability:function(){var e=this;this.$ref.availabilityFormData.validate(function(a){a&&e.$http.post(e.$baseUrl+e.editAvailabilityRequest,{params:{name:formData.name,label:formData.label,available:formData.available,actionType:formData.actionType,actionParam:formData.actionParam,icon:formData.icon}}).then(function(e){console.log(e)}).catch(function(a){console.log(a),e.$message.error(a.response.status.toString()+"  "+a.response.data.error)})})},handleAddMetaDataList:function(e,a){var t=this;console.log(e),console.log(e.filter(function(a){return a===e[e.length-1]}).length),console.log(a),e.length>0&&e.filter(function(a){return a===e[e.length-1]}).length>1||this.$http.post(this.$baseUrl+this.versionControlRequest,{deviceType:a,version:e[e.length-1]}).catch(function(e){console.log(e),t.$message.error(e.response.status.toString()+"  "+e.response.data.error)})},handleDeleteMetaData:function(e,a,t){var i=this;this.$http.delete(this.$baseUrl+this.versionControlRequest+(t+"/")+e,{headers:{Authorization:"Bearer "+this.$store.state.user.token}}).catch(function(e){console.log(e),i.$message.error(e.response.status.toString()+"  "+e.response.data.error)})},handleAndroidListChange:function(e){},add:function(){},expand:function(){this.expandQuery=!this.expandQuery},search:function(){this.getTableData()},reset:function(){this.queryModel.available=!0},deleteImage:function(e){this.formData.icon="",this.fileList.splice(e,1)}}},r=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("el-row",{staticClass:"app-container"},[t("div",{staticClass:"common-querytable-wrapper"},[t("div",{staticClass:"queryform-wrapper"},[t("div",{staticClass:"outside"},[t("el-form",{staticClass:"basearea"},[t("ul",{staticClass:"pull-left"},[t("li",[t("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("\n                新增\n              ")])],1)])]),e._v(" "),t("ul",{staticClass:"operation-wrapper pull-right"},[t("li",[t("div",{staticClass:"common-search-wrapper",on:{keyup:function(a){if(!("button"in a)&&e._k(a.keyCode,"enter",13,a.key))return null;e.search(a)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.queryModel.name,expression:"queryModel.name"}],attrs:{type:"text",placeholder:"请输入元数据名称"},domProps:{value:e.queryModel.name},on:{input:function(a){a.target.composing||e.$set(e.queryModel,"name",a.target.value)}}}),e._v(" "),t("a",[t("span",{staticClass:"el-icon-search",on:{click:e.search}})])])]),e._v(" "),t("li",[t("el-button",{staticClass:"expand",attrs:{size:"mini",type:"text"},on:{click:e.expand}},[e._v("高级搜索"),t("i",{staticClass:"el-icon-arrow-down"})])],1)])],1),e._v(" "),t("div",{staticClass:"expandarea",class:{active:e.expandQuery}},[t("el-form",{ref:"form",attrs:{model:e.queryModel,size:"mini","label-width":"100px"}},[t("el-row",[t("el-col",{attrs:{span:8}},[t("el-form-item",{attrs:{label:"是否可用："}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.queryModel.available,callback:function(a){e.$set(e.queryModel,"available",a)},expression:"queryModel.available"}})],1)],1),e._v(" "),t("el-col",{attrs:{span:8}}),e._v(" "),t("el-col",{attrs:{span:8}})],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:8}}),e._v(" "),t("el-col",{attrs:{span:8}}),e._v(" "),t("el-col",{attrs:{span:8}})],1),e._v(" "),t("el-row",[t("el-col",{attrs:{span:23,"pull-right":""}},[t("el-form-item",{staticClass:"pull-right"},[t("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索\n                ")]),e._v(" "),t("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"},on:{click:e.reset}},[e._v("重置\n                ")])],1)],1)],1)],1)],1)])]),e._v(" "),t("el-row",[t("el-form",{attrs:{"label-position":"top","label-width":"80px"}},[t("el-form-item",{attrs:{label:"审核版本"}},[t("CommonTag",{attrs:{title:"iOS",tagData:e.iosVersionListData,buttonText:"添加版本",metaData:["ios"]},on:{add:e.handleAddMetaDataList,delete:e.handleDeleteMetaData}}),e._v(" "),t("CommonTag",{attrs:{title:"Android",tagData:e.androidVersionListData,buttonText:"添加版本",metaData:["android"]},on:{add:e.handleAddMetaDataList,delete:e.handleDeleteMetaData}})],1)],1)],1),e._v(" "),t("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"",height:e.metaTableHeight}},[t("el-table-column",{attrs:{label:"No",type:"index",width:"50",align:"center",fixed:""}}),e._v(" "),t("el-table-column",{attrs:{label:"显示名称",align:"center",prop:"label"}}),e._v(" "),t("el-table-column",{attrs:{label:"唯一表示名称",align:"center",prop:"name"}}),e._v(" "),t("el-table-column",{attrs:{label:"Icon",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){return[t("img",{attrs:{src:e.row.icon+"-style_100x100",width:"80"}})]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"Android可用性",prop:"available"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",disabled:""},model:{value:a.row.androidEnable,callback:function(t){e.$set(a.row,"androidEnable",t)},expression:"scope.row.androidEnable"}})]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"iOS可用性",prop:"available"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",disabled:""},model:{value:a.row.iosEnable,callback:function(t){e.$set(a.row,"iosEnable",t)},expression:"scope.row.iosEnable"}})]}}])}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"点击反映类型",prop:"actionType"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"actionParam",prop:"actionParam"}}),e._v(" "),t("el-table-column",{attrs:{align:"center",label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(t){e.handleUpdate(a)}}},[e._v("编辑")]),e._v(" "),t("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(t){e.handleDelete(a)}}},[e._v("删除")])]}}])})],1),e._v(" "),t("div",{staticClass:"common-pagination-wrapper"},[t("el-pagination",{attrs:{background:"","current-page":e.pagination.page,"page-sizes":[10,20,30,50],"page-size":e.pagination.limit,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(a){e.$set(e.pagination,"page",a)}}})],1),e._v(" "),t("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"850px"},on:{"update:visible":function(a){e.dialogFormVisible=a}}},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-col",{attrs:{span:20}},[t("el-form",{ref:"formData",attrs:{rules:e.rules,model:e.formData,"label-position":"right","label-width":"140px"}},[t("el-form-item",{attrs:{label:"显示名称",prop:"label"}},[t("el-input",{model:{value:e.formData.label,callback:function(a){e.$set(e.formData,"label",a)},expression:"formData.label"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"唯一表示名称",prop:"name"}},[t("el-input",{model:{value:e.formData.name,callback:function(a){e.$set(e.formData,"name",a)},expression:"formData.name"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"Icon",prop:"icon"}},[t("div",{staticClass:"common-imguploadpreview-wrapper"},[""!==e.formData.icon?t("a",{staticClass:"close"},[t("span",{staticClass:"iconfont icon-crosswide"})]):e._e(),e._v(" "),""===e.formData.icon||null===e.formData.icon?t("div",[e._v("\n                暂无图片\n              ")]):e._l([e.formData.icon],function(a,i){return t("div",{staticClass:"image-item"},[t("img",{staticClass:"avatar",attrs:{src:a+"-style_100x100"}}),e._v(" "),t("ul",{staticClass:"operator"},[t("li",[t("a",{staticClass:"el-icon-delete",on:{click:function(a){e.deleteImage(i)}}})])])])})],2),e._v(" "),t("el-upload",{ref:"uploadAvatar",staticClass:"common-imguploadpreview-wrapper",attrs:{action:e.$baseUrl+"image-upload-service/1.0.0/file/upload",limit:1,"show-file-list":!1,"before-upload":e.handleBeforeUpload,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.uploadSuccess,"on-exceed":e.uploadAvatarExceeded,"file-list":e.fileList,data:e.portraitParams}},[t("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),t("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过10MB")])],1)],1),e._v(" "),t("el-form-item",{attrs:{label:"点击反映类型",prop:"actionType"}},[t("el-select",{model:{value:e.formData.actionType,callback:function(a){e.$set(e.formData,"actionType",a)},expression:"formData.actionType"}},e._l(e.$store.state.app.actionType,function(e){return t("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),t("el-form-item",{attrs:{label:"actionParam",prop:"name"}},[t("el-input",{model:{value:e.formData.actionParam,callback:function(a){e.$set(e.formData,"actionParam",a)},expression:"formData.actionParam"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"iOS可用性",prop:"iosEnable"}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.formData.iosEnable,callback:function(a){e.$set(e.formData,"iosEnable",a)},expression:"formData.iosEnable"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"Android可用性",prop:"androidEnable"}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.formData.androidEnable,callback:function(a){e.$set(e.formData,"androidEnable",a)},expression:"formData.androidEnable"}})],1)],1)],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(a){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?t("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):t("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),e._v(" "),t("el-dialog",{attrs:{title:"设置可用性",visible:e.availabilityFlag,width:"1200px"},on:{"update:visible":function(a){e.availabilityFlag=a}}},[t("el-row",{attrs:{type:"flex",justify:"center"}},[t("el-col",{attrs:{span:20}},[t("el-form",{ref:"availabilityFormData",attrs:{rules:e.rules,model:e.availabilityFormData,"label-position":"right","label-width":"140px"}},[t("el-form-item",{attrs:{label:"iOS可用性",prop:"iosAvailability"}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.availabilityFormData.iosEnable,callback:function(a){e.$set(e.availabilityFormData,"iosEnable",a)},expression:"availabilityFormData.iosEnable"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"Android可用性",prop:"androidAvailability"}},[t("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.availabilityFormData.androidEnable,callback:function(a){e.$set(e.availabilityFormData,"androidEnable",a)},expression:"availabilityFormData.androidEnable"}})],1)],1)],1)],1),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.availabilityFlag=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)};r._withStripped=!0;var c={render:r,staticRenderFns:[]},d=c;var u=t("vSla")(s,d,!1,null,null,null);u.options.__file="src\\views\\metaData\\metaDataBuilding.vue";a.default=u.exports}});