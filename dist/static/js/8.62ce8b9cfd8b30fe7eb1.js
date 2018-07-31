webpackJsonp([8],{"R/+0":function(e,t,a){"use strict";t.a=function(e){return Object(i.b)({url:"/advertising-service/1.0.0/advertising/update",method:"post",data:e})};var i=a("vLgD")},"no+e":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("hRKE"),o=a.n(i),s=a("aA9S"),n=a.n(s),r=a("R/+0"),l={name:"complexTable",data:function(){return{advertisingUpdate:"advertising-service/1.0.0/advertising/update",advertisingListRequest:"advertising-service/1.0.0/advertising/list",advertisingCreateRequest:"advertising-service/1.0.0/advertising",advertisingDeleteRequest:"advertising-service/1.0.0/advertising",location_listRequest:"advertising-service/1.0.0/advertising/location_list",calendarTypeOptions:[],statusDictionary:[{code:0,type:"info",name:"草稿"},{code:1,type:"success",name:"发布"}],tableKey:0,tableList:[],total:null,listLoading:!0,queryModel:{location:"",sort:"+id"},pagination:{page:1,limit:20},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,formData:{id:"",image:"",url:"",location:"",ios:!1,android:!1,video:"",status:0,endDate:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{location:[{required:!0,message:"此项为必填项",trigger:"change"}],createDate:[{type:"date",required:!0,message:"请选择可用时间段",trigger:"change"}],image:[{required:!0,message:"此项为必填项",trigger:"change"}],url:[{required:!1,message:"此项为必填项",trigger:"change"}],ios:[{required:!0,message:"此项为必填项",trigger:"change"}],android:[{required:!0,message:"此项为必填项",trigger:"change"}],video:[{required:!1,message:"此项为必填项",trigger:"change"}],status:[{required:!0,message:"此项为必填项",trigger:"change"}],endDate:[{required:!0,message:"此项为必填项",trigger:"change"}]},downloadLoading:!1,expandQuery:!1,fileList:[],portraitParams:{bucketName:"funyvalley",folderName:"advertising",fileMaxSize:2},effectiveDuration:[],pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]}}},computed:{layoutHeight:function(){return console.log(this.$store.state.app.layoutHeight),this.$store.state.app.layoutHeight},tableHeight:function(){return this.$store.state.app.tableHeight}},watch:{effectiveDuration:function(e){console.log(e),null===e&&(e=[]),this.formData.createDate=e[0],this.formData.endDate=e[1]}},mounted:function(){this.getTableData(),this.getAdvertisingLocation()},methods:{getTableData:function(){var e=this;this.listLoading=!0,this.$http.get(this.$baseUrl+this.advertisingListRequest,{params:n()(this.queryModel,this.pagination)}).then(function(t){console.log(t),e.pagination.total=t.total,e.tableList=t.list,e.listLoading=!1}).catch(function(t){console.log(t),e.$message.error(t.response.status.toString()+"  "+t.response.data.error)})},getAdvertisingLocation:function(){var e=this;this.$http.get(this.$baseUrl+this.location_listRequest).then(function(t){console.log(t),t.forEach(function(t){e.calendarTypeOptions.push({name:t.name,code:t.location})})}).catch(function(t){console.log(t),e.$message.error(t.response.status.toString()+"  "+t.response.data.error)})},handleFilter:function(){this.pagination.page=1,this.getTableData()},handleSizeChange:function(e){this.pagination.limit=e,this.getTableData()},handleCurrentChange:function(e){this.pagination.page=e,this.getTableData()},updateShelfStatus:function(e,t){var a=this;e.status=t,Object(r.a)(e).then(function(e){a.$message({message:"操作成功",type:"success"})}).catch(function(e){console.log(e),a.$message.error(e.response.status.toString()+"  "+e.response.data.error)})},resetTemp:function(){this.formData={id:"",image:"",url:"",location:"",ios:!1,android:!1,video:"",status:0,endDate:""},this.fileList=[]},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.formData.clearValidate()})},createData:function(){var e=this;this.$refs.formData.validate(function(t){t&&e.$http.post(e.$baseUrl+e.advertisingCreateRequest,e.formData).then(function(t){e.dialogFormVisible=!1,e.$message.success("创建成功"),e.getTableData()})})},handleUpdate:function(e){var t=this;console.log(e),this.formData=n()(this.formData,{id:e.row.id,image:e.row.image,url:e.row.url,location:e.row.location,ios:e.row.ios,android:e.row.android,video:e.row.video,status:e.row.status.toString(),endDate:e.row.endDate}),this.dialogStatus="update",this.dialogFormVisible=!0,console.log(o()(e.row.status.toString())),this.$nextTick(function(){t.$refs.formData.clearValidate()})},updateData:function(){var e=this;this.$refs.formData.validate(function(t){t&&e.$http.post(e.$baseUrl+e.advertisingUpdate,e.formData).then(function(){e.getTableData(),e.dialogFormVisible=!1,e.$message.success("更新成功")})})},handleDelete:function(e){var t=this;console.log(e),this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.delete(t.$baseUrl+t.advertisingDeleteRequest+"/"+e.row.id,{}).then(function(e){console.log(e),t.$message.success("删除成功"),t.getTableData()}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e),t.$message({type:"info",message:"已取消删除"})})},expand:function(){this.expandQuery=!this.expandQuery},search:function(){this.getTableData()},reset:function(){this.queryModel.name="",this.pagination.page=1,this.queryModel.location="",this.getTableData()},changeTableSort:function(e,t){"+id"===this.queryModel.sort?this.queryModel.sort="-id":this.queryModel.sort="+id",this.getTableData()},handleBeforeUpload:function(e){console.log(e);var t=["jpg","jpeg","png"],a=e.name.lastIndexOf(".")+1,i=e.name.length,o=e.name.substring(a,i);return 0===t.filter(function(e){return e===o}).length?(this.$message({message:"文件必须为"+t.join("、")+"类型文件",type:"error"}),!1):e.size>10485760?(this.$message({message:"文件不得大于20M",type:"error"}),!1):void(this.loading=!0)},editAvailability:function(e){console.log(e.row),this.availabilityFormData=n()({},{moduleId:e.row.id,type:e.row.type,iosEnable:e.row.iosEnable,androidEnable:e.row.androidEnable,version:e.row.version}),console.log(this.availabilityFormData),this.availabilityFlag=!0},handlePreview:function(e){console.log(e),this.fileList.push(e)},uploadSuccess:function(e){this.loading=!1,console.log(e),this.formData.image=e.url,this.loading=!1,this.$message({message:"图片上传成功",type:"success"})},handleRemove:function(){},uploadAvatarExceeded:function(){},deleteImage:function(e){this.formData.image="",this.fileList.splice(e,1)}}},c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"common-querytable-wrapper"},[a("div",{staticClass:"queryform-wrapper"},[a("div",{staticClass:"outside"},[a("el-form",{staticClass:"basearea"},[a("ul",{staticClass:"pull-left"},[a("li",[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("新增")])],1)])]),e._v(" "),a("ul",{staticClass:"operation-wrapper pull-right"},[a("li"),e._v(" "),a("li",[a("el-button",{staticClass:"expand",attrs:{size:"mini",type:"text"},on:{click:e.expand}},[e._v("高级搜索"),a("i",{staticClass:"el-icon-arrow-down"})])],1)])],1),e._v(" "),a("div",{staticClass:"expandarea",class:{active:e.expandQuery}},[a("el-form",{ref:"form",attrs:{model:e.queryModel,size:"mini","label-width":"100px"}},[a("el-row",[a("el-col",{attrs:{span:8}},[a("el-form-item",{attrs:{label:"类型："}},[0!==e.calendarTypeOptions.length?a("el-select",{attrs:{clearable:"",placeholder:"请选择"},model:{value:e.queryModel.location,callback:function(t){e.$set(e.queryModel,"location",t)},expression:"queryModel.location"}},e._l(e.calendarTypeOptions,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})})):e._e()],1)],1),e._v(" "),a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}}),e._v(" "),a("el-col",{attrs:{span:8}})],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:23,"pull-right":""}},[a("el-form-item",{staticClass:"pull-right"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",size:"mini",icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索\n                ")]),e._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",size:"mini",icon:"el-icon-refresh"},on:{click:e.reset}},[e._v("重置\n                ")])],1)],1)],1)],1)],1)])]),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],key:e.tableKey,attrs:{data:e.tableList,"element-loading-text":"载入中",border:"",fit:"","highlight-current-row":"","default-sort":{prop:"id",order:"descending"},height:e.tableHeight},on:{"sort-change":e.changeTableSort}},[a("el-table-column",{attrs:{align:"center",label:"ID",width:"65",prop:"id",sortable:"custom"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"缩略图",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.image+"-style_100x100"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"类型",prop:"location"},scopedSlots:e._u([{key:"default",fn:function(t){return[0!==e.calendarTypeOptions.length?a("div",[e._v("\n          "+e._s(e.calendarTypeOptions.filter(function(e){return e.code===t.row.location})[0].name)+"\n        ")]):e._e()]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"Android可用性"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",disabled:""},model:{value:t.row.android,callback:function(a){e.$set(t.row,"android",a)},expression:"scope.row.android"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"iOS可用性"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949",disabled:""},model:{value:t.row.ios,callback:function(a){e.$set(t.row,"ios",a)},expression:"scope.row.ios"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"创建时间",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.$moment(t.row.createDate).format("YYYY-MM-DD hh:mm:ss"))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"结束时间",width:"250px"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(e.$moment(t.row.endDate).format("YYYY-MM-DD"))+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"状态",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:e.statusDictionary.filter(function(e){return e.code===t.row.status})[0].type}},[e._v("\n          "+e._s(e.statusDictionary.filter(function(e){return e.code===t.row.status})[0].name)+"\n        ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:e.$t("table.actions"),width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t)}}},[e._v("编辑")]),e._v(" "),"0"===t.row.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){e.updateShelfStatus(t.row,"1")}}},[e._v("\n          编辑\n        ")]):e._e(),e._v(" "),"1"===t.row.status?a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.updateShelfStatus(t.row,"0")}}},[e._v("草稿")]):e._e(),e._v(" "),"deleted"!==t.row.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t)}}},[e._v("\n          "+e._s(e.$t("table.delete"))+"\n        ")]):e._e()]}}])})],1),e._v(" "),a("div",{staticClass:"common-pagination-wrapper"},[a("el-pagination",{attrs:{background:"","current-page":e.pagination.page,"page-sizes":[10,20,30,50],"page-size":e.pagination.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.pagination.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"850px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("elForm",{ref:"formData",attrs:{rules:e.rules,model:e.formData,"label-position":"right","label-width":"140px"}},[a("el-form-item",{attrs:{label:"点击链接",prop:"url"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:4}},model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url",t)},expression:"formData.url"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"location"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.formData.location,callback:function(t){e.$set(e.formData,"location",t)},expression:"formData.location"}},e._l(e.calendarTypeOptions,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"结束时间",prop:"endDate"}},[a("el-date-picker",{attrs:{align:"right","value-format":"yyyy-MM-dd",placeholder:"请选择"},model:{value:e.formData.endDate,callback:function(t){e.$set(e.formData,"endDate",t)},expression:"formData.endDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"缩略图",prop:"image"}},[a("div",{staticClass:"common-imguploadpreview-wrapper"},[""===e.formData.image||null===e.formData.image?a("div",[e._v("\n                暂无图片\n              ")]):e._l([e.formData.image],function(t,i){return a("div",{staticClass:"image-item"},[a("img",{staticClass:"avatar",attrs:{src:t+"-style_100x100"}}),e._v(" "),a("ul",{staticClass:"operator"},[a("li",[a("a",{staticClass:"el-icon-delete",on:{click:function(t){e.deleteImage(i)}}})])])])})],2),e._v(" "),a("el-upload",{ref:"uploadAvatar",staticClass:"common-imguploadpreview-wrapper",attrs:{action:e.$baseUrl+"image-upload-service/1.0.0/file/upload",limit:1,"show-file-list":!1,"before-upload":e.handleBeforeUpload,"on-preview":e.handlePreview,"on-remove":e.handleRemove,"on-success":e.uploadSuccess,"on-exceed":e.uploadAvatarExceeded,"file-list":e.fileList,data:e.portraitParams}},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),e._v(" "),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过2MB")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"视频地址",prop:"video"}},[a("el-input",{model:{value:e.formData.video,callback:function(t){e.$set(e.formData,"video",t)},expression:"formData.video"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"iOS可用性",prop:"ios"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.formData.ios,callback:function(t){e.$set(e.formData,"ios",t)},expression:"formData.ios"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Android可用性",prop:"android"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.formData.android,callback:function(t){e.$set(e.formData,"android",t)},expression:"formData.android"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"上线",prop:"status"}},[a("el-switch",{attrs:{"active-value":"1","inactive-value":"0","active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.formData.status,callback:function(t){e.$set(e.formData,"status",t)},expression:"formData.status"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm"))+"\n      ")]):a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)};c._withStripped=!0;var d={render:c,staticRenderFns:[]},u=d;var p=a("vSla")(l,u,!1,null,null,null);p.options.__file="src\\views\\advertising\\advertistingList.vue";t.default=p.exports}});