webpackJsonp([17],{TJTI:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("aA9S"),n=a.n(i),s=a("pnga"),o=a("zQDM"),r={components:{CommonTag:s.a,CommonQuery:o.a},data:function(){var e=this;return{game_typeListRequest:"game-service/1.0.0/game_type/list",game_typeAddOrUpdateRequest:"game-service/1.0.0/game_type/addOrUpdate",game_typeDeleteRequest:"game-service/1.0.0/game_type/delete",value2:"",value1:"",tableKey:0,tableList:[],total:null,listLoading:!0,availabilityFlag:!1,dynamicTags:["标签一","标签二","标签三"],queryModel:{title:"",status:"",name:"",gender:"",birthday:""},natureDictionary:[{code:1,name:"app"},{code:2,name:"网页"}],statusDictionary:[{code:0,name:"未上线"},{code:1,name:"上线"}],pagination:{page:1,limit:20},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,formData:{id:0,name:"",title:"",description:"",iconUrl:"",bigImageUrl:"",iosDownloadUrl:"",androidDownloadUrl:"",webGameUrl:"",nature:"",ios:!1,android:!1,status:null},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,availabilityFormData:{moduleId:"",type:"",iosEnable:"",androidEnable:"",version:""},rules:{title:[{required:!0,message:"请输入显示名称",trigger:"change"}],name:[{required:!0,message:"请输入唯一表示名称",trigger:"change"}],description:[{required:!0,message:"请输入游戏描述",trigger:"change"}],iconUrl:[{required:!0,message:"请上传图片",trigger:"change"}],bigImageUrl:[{required:!0,message:"请上传图片",trigger:"change"}],iosDownloadUrl:[{required:!0,message:"此项为必填项",trigger:"change"}],androidDownloadUrl:[{required:!0,message:"此项为必填项",trigger:"change"}],webGameUrl:[{required:!0,message:"此项为必填项",trigger:"change"}],nature:[{required:!0,message:"此项为必填项",trigger:"change"}],ios:[{required:!0,message:"此项为必填项",trigger:"change"}],android:[{required:!0,message:"此项为必填项",trigger:"change"}],status:[{required:!0,message:"此项为必填项",trigger:"change"}]},downloadLoading:!1,pickerOptions0:{disabledDate:function(t){if(""!==e.value2)return t.getTime()>e.value2}},pickerOptions1:{disabledDate:function(t){return t.getTime()<e.value1}},fileList:[],portraitParams:{bucketName:"funyvalley",folderName:"icon"},iosVersionListData:[],androidVersionListData:[],searchTxt:"",expandQuery:""}},computed:{tableHeight:function(){return this.$store.state.app.tableHeight}},watch:{effectiveDuration:function(e){console.log(e),null===e&&(e=[]),this.formData.startDate=this.$moment(e[0]).format("YYYY-MM-DD"),this.formData.endDate=this.$moment(e[1]).format("YYYY-MM-DD")}},mounted:function(){this.getTableData()},methods:{getTableData:function(){var e=this;this.listLoading=!0,this.queryModel=n()(this.queryModel,this.pagination),this.$http.get(this.$baseUrl+this.game_typeListRequest,{params:this.queryModel}).then(function(t){console.log(t),e.tableList=t.list,e.total=t.total,e.listLoading=!1})},handleFilter:function(){this.pagination.page=1,this.getTableData()},handleSizeChange:function(e){this.pagination.limit=e,this.getTableData()},handleCurrentChange:function(e){this.pagination.page=e,this.getTableData()},resetTemp:function(){this.formData={id:0,name:"",title:"",description:"",iconUrl:"",bigImageUrl:"",iosDownloadUrl:"",androidDownloadUrl:"",webGameUrl:"",nature:"",ios:!1,android:!1,status:null},this.fileList=[]},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,void 0!==this.$refs.formData&&(this.$refs.formData.resetFields(),this.$nextTick(function(){e.$refs.formData.clearValidate()}))},createData:function(){this.formData.id=0,this.updateData()},handleUpdate:function(e){var t=this;console.log(e),this.formData=n()({},e.row),this.effectiveDuration=[e.row.startDate,e.row.endDate],this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.formData.clearValidate()})},updateData:function(){var e=this;this.$refs.formData.validate(function(t){t&&e.$http.post(e.$baseUrl+e.game_typeAddOrUpdateRequest,{id:e.formData.id,name:e.formData.name,status:e.formData.status,topNumber:e.formData.topNumber}).then(function(t){console.log(t),e.dialogFormVisible=!1,e.$message.success("信息修改成功"),e.getTableData()}).catch(function(t){console.log(t),e.$message.error(t.response.status.toString()+"  "+t.response.data.error)})})},handleDelete:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.delete(t.$baseUrl+t.game_typeDeleteRequest+"/"+e.row.id).then(function(e){console.log(e),t.dialogFormVisible=!1,t.$message.success("删除成功"),t.getTableData()}).catch(function(e){console.log(e),t.$message.error(e.response.status.toString()+"  "+e.response.data.error)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},changeUpload:function(e){console.log(e)},handlePreview:function(e){console.log(e),this.fileList.push(e)},uploadSuccess1:function(e){this.loading=!1,console.log(e),this.formData.iconUrl=e.url,this.loading=!1,this.$message({message:"图片上传成功",type:"success"})},uploadSuccess2:function(e){this.loading=!1,console.log(e),this.formData.bigImageUrl=e.url,this.loading=!1,this.$message({message:"图片上传成功",type:"success"})},uploadAvatarExceeded:function(e,t){var a=this;t.length>0&&this.$confirm("当前已有上传图片，需先删除已有图片，请确认是否删除？","提示",{type:"warning"}).then(function(e){a.$refs.uploadAvatar.clearFiles(),a.$http.get(a.$baseUrl+"attachment/deleteAttachment/"+a.fileList[0].id).then(function(e){"200"===e.data.code?(a.fileList.splice(a.fileList.indexOf(e.id),1),a.componentModelData.uploaded="",a.$message.success("图片删除成功")):(a.fileList.splice(a.fileList.indexOf(e.id),1),a.componentModelData.uploaded="",a.$message.warning("图片删除失败"))}).catch(function(e){console.log(e),a.$message.error(e.response.status.toString()+"  "+e.response.data.error)})})},handleRemove:function(){},handleBeforeUpload:function(e){console.log(e);var t=["jpg","jpeg","png"],a=e.name.lastIndexOf(".")+1,i=e.name.length,n=e.name.substring(a,i);return 0===t.filter(function(e){return e===n}).length?(this.$message({message:"文件必须为"+t.join("、")+"类型文件",type:"error"}),!1):e.size>2097152?(this.$message({message:"文件不得大于2M",type:"error"}),!1):void(this.loading=!0)},editAvailability:function(e){console.log(e.row),this.availabilityFormData=n()({},{moduleId:e.row.id,type:e.row.type,iosEnable:e.row.iosEnable,androidEnable:e.row.androidEnable,version:e.row.version}),console.log(this.availabilityFormData),this.availabilityFlag=!0},expand:function(){this.expandQuery=!this.expandQuery},search:function(){this.getTableData()},reset:function(){this.queryModel.available=!0},deleteImage:function(e){this.formData.icon="",this.fileList.splice(e,1)}}},l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"app-container"},[a("CommonQuery",[a("template",{slot:"button1"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("\n        新增\n      ")])],1),e._v(" "),a("template",{slot:"query1"},[a("div",{staticClass:"common-search-wrapper",on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.search(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.queryModel.name,expression:"queryModel.name"}],attrs:{type:"text",placeholder:"请输入游戏名称"},domProps:{value:e.queryModel.name},on:{input:function(t){t.target.composing||e.$set(e.queryModel,"name",t.target.value)}}}),e._v(" "),a("a",[a("span",{staticClass:"el-icon-search",on:{click:e.search}})])])])],2),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.tableList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"",height:e.tableHeight}},[a("el-table-column",{attrs:{label:"No",type:"index",width:"50",align:"center",fixed:""}}),e._v(" "),a("el-table-column",{attrs:{label:"名称",align:"center",prop:"name"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"游戏状态",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:0===t.row.status?"info":"success"}},[e._v("\n          "+e._s(""!==t.row.status&&null!==t.row.status?e.statusDictionary.filter(function(e){return e.code===t.row.status})[0].name:"")+"\n        ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini",disabled:""},on:{click:function(a){e.handleUpdate(t)}}},[e._v("编辑")])]}}])})],1),e._v(" "),a("div",{staticClass:"common-pagination-wrapper"},[a("el-pagination",{attrs:{background:"","current-page":e.pagination.page,"page-sizes":[10,20,30,50],"page-size":e.pagination.limit,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.pagination,"page",t)}}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"850px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("el-form",{ref:"formData",attrs:{rules:e.rules,model:e.formData,"label-position":"right","label-width":"140px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"status",prop:"status"}},[a("el-select",{model:{value:e.formData.status,callback:function(t){e.$set(e.formData,"status",t)},expression:"formData.status"}},e._l(e.statusDictionary,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"置顶数",prop:"topNumber"}},[a("el-input-number",{attrs:{min:0,label:"描述文字"},model:{value:e.formData.topNumber,callback:function(t){e.$set(e.formData,"topNumber",t)},expression:"formData.topNumber"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)};l._withStripped=!0;var c={render:l,staticRenderFns:[]},u=c;var d=a("vSla")(r,u,!1,null,null,null);d.options.__file="src\\views\\game\\gameType.vue";t.default=d.exports}});