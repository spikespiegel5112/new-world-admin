webpackJsonp([6],{ElWj:function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.edifice_main_container .sortlist {\n  overflow: auto;\n  -webkit-box-shadow: 0 0 15px inset #ccc;\n          box-shadow: 0 0 15px inset #ccc;\n}\n.edifice_main_container .sortlist > li {\n    margin: 20px auto;\n    width: 98%;\n    height: 200px;\n}\n.edifice_main_container .sortlist > li .floornumber {\n      margin: 10px;\n      width: 100%;\n      position: absolute;\n      left: 0;\n}\n.edifice_main_container .sortlist > li .floornumber span {\n        display: inline-block;\n        width: 40px;\n        height: 40px;\n        line-height: 40px;\n        text-align: center;\n        border: 1px solid #ccc;\n        font-size: 25px;\n        border-radius: 50%;\n        vertical-align: middle;\n}\n.edifice_main_container .sortlist > li .floornumber span p {\n          font-size: 15px;\n}\n.edifice_main_container .buildingname {\n  margin: 10px 15px;\n  min-height: 50px;\n  font-size: 15px;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n}\n.edifice_main_container .buildingname label {\n    font-size: 15px;\n}\n.edifice_main_container .floordesc > li {\n  display: inline-block;\n}\n.edifice_main_container .advertisedesc .advertiselist li {\n  display: inline-block;\n  margin: 0 10px 0 0;\n}\n.edifice_main_container .advertisedesc .advertiselist li img {\n    display: inline-block;\n    width: 120px;\n}\n.edifice_main_container .advertisedesc .advertiselist li .advertisemeta {\n    display: inline-block;\n    vertical-align: top;\n}\n.edifice_main_container .advertisedesc .advertiselist li .advertisemeta .location {\n      width: 100px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n}\n.edifice_main_container .operation {\n  float: right;\n}\n.edifice_sortadvertise_wrapper li {\n  display: inline-block;\n  margin: 10px;\n  width: 135px;\n  height: 135px;\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  vertical-align: middle;\n}\n.edifice_sortadvertise_wrapper li img {\n    display: inline-block;\n    width: 100%;\n    vertical-align: middle;\n}\n.edifice_sortadvertise_wrapper li:before {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n}\n.edifice_sortadvertise_wrapper li:hover {\n    cursor: move;\n}\n.edifice_addminusadvertise_wrapper {\n  margin: 10px 0;\n  position: relative;\n  text-align: right;\n}\n.edifice_addminusadvertise_wrapper .minus {\n    display: inline-block;\n    width: 30px;\n    text-align: center;\n    position: absolute;\n    right: -40px;\n    top: 0;\n}\n.edifice_addminusadvertise_wrapper .minus a {\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      font-size: 20px;\n      text-align: center;\n      color: orangered;\n      vertical-align: middle;\n}\n",""])},"Hn+2":function(e,t,a){var n=a("ElWj");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a("8bSs")("0b417561",n,!1)},mJzk:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("hRKE"),i=a.n(n),r=a("aA9S"),o=a.n(r),s=a("pnga"),l=a("zQDM"),d=a("405r"),c=a.n(d),m={components:{CommonTag:s.a,CommonQuery:l.a,Draggable:c.a},data:function(){var e=this;return{brandListRequest:"building-show-service/1.0.0/bk/brand/list",brandAddOrUpdateRequest:"building-show-service/1.0.0/bk/brand/addOrUpdate",brandAdvertisementAddOrUpdateRequest:"building-show-service/1.0.0/bk/brandAdvertisement/addOrUpdate",brandDeleteRequest:"building-show-service/1.0.0/bk/brand/delete",value2:"",value1:"",tableKey:0,tableList:[],total:null,listLoading:!0,availabilityFlag:!1,dynamicTags:["标签一","标签二","标签三"],brandTypeDictionary:[{name:"16:9",code:1},{name:"9:16（一条）",code:2},{name:"9:16（三条）",code:3}],queryModel:{sort:"desc",brandName:""},natureDictionary:[{code:1,name:"app"},{code:2,name:"网页"}],statusDictionary:[{code:0,name:"未上线"},{code:1,name:"上线"}],pagination:{page:1,size:20},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,brandFormData:{brandName:"",type:"",icon:"",status:"",startDate:"",endDate:"",keyNumPerUser:"",keyTotal:"",keyReceived:"",keyEnable:"",id:"",floorID:"",createTime:""},advertisementFormDataList:[],advertisementFormData:{id:"",url:"",location:"",iosEnable:!1,androidEnable:!1,status:0,orderNum:null},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,rules:{brandName:[{required:!0,message:"此项为必填项",trigger:"change"}],type:[{required:!0,message:"此项为必填项",trigger:"change"}],icon:[{required:!0,message:"此项为必填项",trigger:"change"}],startDate:[{required:!0,message:"此项为必填项",trigger:"change"}],endDate:[{required:!0,message:"此项为必填项",trigger:"change"}],status:[{required:!0,message:"此项为必填项",trigger:"change"}],url:[{required:!0,message:"此项为必填项",trigger:"change"}],location:[{required:!0,message:"此项为必填项",trigger:"change"}],iosEnable:[{required:!0,message:"此项为必填项",trigger:"change"}],androidEnable:[{required:!0,message:"此项为必填项",trigger:"change"}],orderNum:[{required:!0,message:"此项为必填项",trigger:"change"}]},downloadLoading:!1,pickerOptions0:{disabledDate:function(t){if(""!==e.value2)return t.getTime()>e.value2}},pickerOptions1:{disabledDate:function(t){return t.getTime()<e.value1}},fileList:[],portraitParams:{bucketName:"funyvalley",folderName:"icon"},iosVersionListData:[],androidVersionListData:[],searchTxt:"",expandQuery:"",showFileListFlag:!1,newFile:"",advertisementDialogFlag:!1,currentAdvertisementTabIndex:0,currentSortData:[],effectiveDuration:[]}},computed:{tableHeight:function(){return this.$store.state.app.tableHeight}},watch:{effectiveDuration:function(e){console.log(e),null===e&&(e=[]),this.brandFormData.startDate=this.$moment(e[0]).format("YYYY-MM-DD"),this.brandFormData.endDate=this.$moment(e[1]).format("YYYY-MM-DD")},currentAdvertisementTabIndex:function(e){console.log(e)},currentSortData:function(e){var t=this;console.log(e),e.forEach(function(e,a){t.advertisementFormDataList.forEach(function(n,i){e.id===n.id&&(t.advertisementFormDataList[i].orderNum=a)})}),console.log(this.advertisementFormDataList)}},mounted:function(){this.getTableData()},methods:{getTableData:function(){var e=this;this.listLoading=!0,this.queryModel=o()(this.queryModel,this.pagination),this.$http.get(this.$baseUrl+this.brandListRequest,{params:this.queryModel}).then(function(t){console.log(t),e.tableList=t.list,e.total=t.total,e.listLoading=!1})},handleFilter:function(){this.pagination.page=1,this.getTableData()},handleSizeChange:function(e){this.pagination.size=e,this.getTableData()},handleCurrentChange:function(e){this.pagination.page=e,this.getTableData()},resetTemp:function(){this.brandFormData={id:0,name:"",title:"",description:"",iconUrl:"",bigImageUrl:"",iosDownloadUrl:"",androidDownloadUrl:"",webGameUrl:"",nature:"",ios:!1,android:!1,status:null,createTime:""},this.advertisementFormData={id:"",url:"",location:"",iosEnable:!1,androidEnable:!1,status:0,orderNum:null},this.fileList=[]},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,void 0!==this.$refs.brandFormData&&(this.$refs.brandFormData.resetFields(),this.$nextTick(function(){e.$refs.brandFormData.clearValidate()}))},createData:function(){this.brandFormData.id=0,this.updateData()},createAdvertisementData:function(){this.brandFormData.id=0,this.updateAdvertisementData()},handleUpdate:function(e){var t=this;console.log(e),this.brandFormData=o()({},e.row),this.effectiveDuration=[],this.effectiveDuration=[this.$moment(e.row.startDate).format("YYYY-MM-DD"),this.$moment(e.row.endDate).format("YYYY-MM-DD")],this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.brandFormData.clearValidate()})},handleUpdateAdvertisement:function(e){var t=e.row.advertisements;this.brandFormData.id=e.row.id,this.refreshData(t),this.dialogStatus="update",this.advertisementDialogFlag=!0},refreshData:function(e){var t=this;console.log(e);var a=[];this.advertisementFormDataList=[],e.length>0&&(e.forEach(function(e,a){t.$set(t.advertisementFormDataList,a,e)}),console.log(this.advertisementFormDataList),this.advertisementFormData=this.advertisementFormDataList[0]),console.log(111,this.advertisementFormDataList),this.currentAdvertisementTabIndex=0;for(var n=0;n<e.length;n++)if(console.log(444,e[n]),"number"==typeof e[n].orderNum&&e[n].orderNum<this.advertisementFormDataList.length)a[e[n].orderNum]=e[n];else for(var r=!0,o=0;o<3;o++)"object"!==i()(a[o])&&!0===r&&(a[o]=e[n],r=!1);console.log(444,a);for(var s=0;s<a.length;s++)console.log(222,a.length),void 0===a[s]&&(a[s]=e[0]),a[s].isCurrent=!1,a[s].orderNum=s;console.log(333,a),this.currentSortData=a},switchAdvertisementData:function(e){console.log(e),console.log(this.currentAdvertisementTabIndex),""!==e&&(this.advertisementFormDataList[this.currentAdvertisementTabIndex]=this.advertisementFormData,this.advertisementFormData=this.advertisementFormDataList[e],this.currentAdvertisementTabIndex=e),console.log(this.advertisementFormDataList),console.log(this.advertisementFormData)},editAdvertisementCount:function(e,t){},updateData:function(){var e=this;this.$refs.brandFormData.validate(function(t){t&&e.$http.post(e.$baseUrl+e.brandAddOrUpdateRequest,{brandName:e.brandFormData.brandName,type:e.brandFormData.type,icon:e.brandFormData.icon,status:e.brandFormData.status,startDate:e.brandFormData.startDate,endDate:e.brandFormData.endDate,keyNumPerUser:e.brandFormData.keyNumPerUser,keyTotal:e.brandFormData.keyTotal,keyReceived:e.brandFormData.keyReceived,keyEnable:e.brandFormData.keyEnable,id:e.brandFormData.id,floorID:e.brandFormData.floorID,createTime:e.brandFormData.createTime}).then(function(t){console.log(t),e.dialogFormVisible=!1,e.$message.success("信息修改成功"),e.getTableData()}).catch(function(t){console.log(t),e.$message.error(t.response.status.toString()+"  "+t.response.data.error)})})},updateAdvertisementData:function(){var e=this;console.log(this.$refs.advertisementFormData);var t=!0;this.$refs.advertisementFormData.forEach(function(a,n){e.$refs.advertisementFormData[n].validate(function(a){a||(e.$message.warning("其他广告位表单输入不正确"),t=!1)})}),t&&(this.advertisementFormDataList[this.currentAdvertisementTabIndex]=this.advertisementFormData,this.$http.post(this.$baseUrl+this.brandAdvertisementAddOrUpdateRequest+"/"+this.brandFormData.id,this.advertisementFormDataList).then(function(t){switch(console.log(t),e.advertisementDialogFlag=!1,t.code){case 1e4:e.$message.success("信息修改成功"),e.getTableData();break;case 30002:e.$message.error(t.message);break;case 30003:e.$message.success("信息修改成功"),setTimeout(function(){e.$message.warning(t.message)},1e3);break;default:e.$message.success(t.message),e.getTableData()}}).catch(function(t){console.log(t),e.$message.error(t.response.status.toString()+"  "+t.response.data.error)}))},handleDragEnd:function(e){console.log(e)},handleDelete:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.delete(t.$baseUrl+t.brandDeleteRequest+"/"+e.row.id).then(function(e){console.log(e),t.dialogFormVisible=!1,t.$message.success("删除成功"),t.getTableData()}).catch(function(e){console.log(e),t.$message.error(e.response.status.toString()+"  "+e.response.data.error)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},changeUpload:function(e){console.log(e)},handlePreview:function(e){console.log(e),this.fileList.push(e)},uploadSuccess1:function(e){console.log(e),this.brandFormData.icon=e.url},uploadSuccess2:function(e){this.advertisementFormDataList[this.currentAdvertisementTabIndex].url=e.url,this.advertisementFormData.url=e.url},uploadAvatarExceeded:function(e,t){var a=this;t.length>0&&this.$confirm("当前已有上传图片，需先删除已有图片，请确认是否删除？","提示",{type:"warning"}).then(function(e){a.$refs.uploadAvatar.clearFiles(),a.fileList.splice(t.length-1,1)})},handleRemove:function(){},handleBeforeUpload:function(e){console.log(e),this.showFileListFlag=!0;var t=["jpg","jpeg","png"],a=e.name.lastIndexOf(".")+1,n=e.name.length,i=e.name.substring(a,n);return 0===t.filter(function(e){return e===i}).length?(this.$message({message:"文件必须为"+t.join("、")+"类型文件",type:"error"}),!1):e.size>2097152?(this.$message({message:"文件不得大于2M",type:"error"}),!1):void(this.loading=!0)},expand:function(){this.expandQuery=!this.expandQuery},search:function(){this.getTableData()},reset:function(){this.queryModel.available=!0},deleteAdvertise:function(e,t){var a=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){a.advertisementFormDataList.splice(t,1),a.refreshData(a.advertisementFormDataList),a.currentAdvertisementTabIndex=0})},addAdvertise:function(){this.advertisementFormDataList.push({url:"",location:"",iosEnable:!1,androidEnable:!1,status:0,orderNum:null}),this.refreshData(this.advertisementFormDataList)}}},u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"app-container"},[a("CommonQuery",[a("template",{slot:"button1"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("\n        新增\n      ")])],1),e._v(" "),a("template",{slot:"query1"},[a("div",{staticClass:"common-search-wrapper",on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.search(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.queryModel.brandName,expression:"queryModel.brandName"}],attrs:{type:"text",placeholder:"请输入游戏名称"},domProps:{value:e.queryModel.brandName},on:{input:function(t){t.target.composing||e.$set(e.queryModel,"brandName",t.target.value)}}}),e._v(" "),a("a",[a("span",{staticClass:"el-icon-search",on:{click:e.search}})])])])],2),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.tableList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"",height:e.tableHeight}},[a("el-table-column",{attrs:{label:"No",type:"index",width:"50",align:"center",fixed:""}}),e._v(" "),a("el-table-column",{attrs:{label:"名称",align:"center",prop:"brandName"}}),e._v(" "),a("el-table-column",{attrs:{label:"Icon",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.icon+"-style_100x100",width:"80"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"类型"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(""!==t.row.type&&null!==t.row.type?e.brandTypeDictionary.filter(function(e){return e.code===t.row.type})[0].name:"")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"是否有钥匙",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-tag",{attrs:{type:1===t.row.keyEnable?"success":"info"}},[e._v("\n          "+e._s(1===t.row.keyEnable?"有":"无")+"\n        ")])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdateAdvertisement(t)}}},[e._v("编辑广告")]),e._v(" "),a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t)}}},[e._v("编辑品牌")]),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"common-pagination-wrapper"},[a("el-pagination",{attrs:{background:"","current-page":e.pagination.page,"page-sizes":[10,20,30,50],"page-size":e.pagination.size,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.pagination,"page",t)}}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"850px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("el-form",{ref:"brandFormData",attrs:{rules:e.rules,model:e.brandFormData,"label-position":"right","label-width":"140px"}},[a("el-form-item",{attrs:{label:"品牌名称",prop:"brandName"}},[a("el-input",{model:{value:e.brandFormData.brandName,callback:function(t){e.$set(e.brandFormData,"brandName",t)},expression:"brandFormData.brandName"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"类型",prop:"type"}},[a("el-select",{model:{value:e.brandFormData.type,callback:function(t){e.$set(e.brandFormData,"type",t)},expression:"brandFormData.type"}},e._l(e.brandTypeDictionary,function(e){return a("el-option",{key:e.code,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"Icon",prop:"icon"}},[a("CommonUploadImage",{attrs:{action:e.$baseUrl+"image-upload-service/1.0.0/file/upload",returnUrlList:e.brandFormData.icon},on:{"on-success":e.uploadSuccess1,"update:returnUrlList":function(t){e.$set(e.brandFormData,"icon",t)}}}),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.brandFormData.icon,callback:function(t){e.$set(e.brandFormData,"icon",t)},expression:"brandFormData.icon"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否上线",prop:"status"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.brandFormData.status,callback:function(t){e.$set(e.brandFormData,"status",t)},expression:"brandFormData.status"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否有钥匙",prop:"keyEnable"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.brandFormData.keyEnable,callback:function(t){e.$set(e.brandFormData,"keyEnable",t)},expression:"brandFormData.keyEnable"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"钥匙每次发放数",prop:"keyNumPerUser"}},[a("el-input-number",{model:{value:e.brandFormData.keyNumPerUser,callback:function(t){e.$set(e.brandFormData,"keyNumPerUser",t)},expression:"brandFormData.keyNumPerUser"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"总钥匙数",prop:"keyTotal"}},[a("el-input-number",{model:{value:e.brandFormData.keyTotal,callback:function(t){e.$set(e.brandFormData,"keyTotal",t)},expression:"brandFormData.keyTotal"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"钥匙被领取数"}},[a("label",[e._v(e._s(e.brandFormData.keyReceived))])]),e._v(" "),a("el-form-item",{attrs:{label:"合同时间范围",prop:"startDate"}},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:e.effectiveDuration,callback:function(t){e.effectiveDuration=t},expression:"effectiveDuration"}})],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.advertisementDialogFlag,width:"850px"},on:{"update:visible":function(t){e.advertisementDialogFlag=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("div",{staticClass:"edifice_addminusadvertise_wrapper"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"添加广告",placement:"right"}},[a("el-button",{attrs:{type:"primary",icon:"el-icon-plus",circle:""},on:{click:e.addAdvertise}})],1)],1),e._v(" "),a("el-collapse",{attrs:{accordion:""},on:{change:e.switchAdvertisementData}},e._l(e.advertisementFormDataList,function(t,n){return a("el-collapse-item",{key:n,attrs:{title:"广告位"+(n+1),label:"广告位",name:n}},[a("div",{staticClass:"edifice_addminusadvertise_wrapper"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"删除广告",placement:"right"}},[a("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""},on:{click:function(a){e.deleteAdvertise(t,n)}}})],1)],1),e._v(" "),a("el-form",{ref:"advertisementFormData",refInFor:!0,attrs:{rules:e.rules,model:e.advertisementFormData,"label-position":"right","label-width":"140px"}},[a("el-form-item",{attrs:{label:"Icon",prop:"url"}},[a("CommonUploadImage",{attrs:{action:e.$baseUrl+"image-upload-service/1.0.0/file/upload",returnUrlList:e.advertisementFormData.url},on:{"on-success":e.uploadSuccess2,"update:returnUrlList":function(t){e.$set(e.advertisementFormData,"url",t)}}}),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.advertisementFormData.url,callback:function(t){e.$set(e.advertisementFormData,"url",t)},expression:"advertisementFormData.url"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"广告链接",prop:"location"}},[a("el-input",{model:{value:e.advertisementFormData.location,callback:function(t){e.$set(e.advertisementFormData,"location",t)},expression:"advertisementFormData.location"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"iOS可用性",prop:"iosEnable"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.advertisementFormData.iosEnable,callback:function(t){e.$set(e.advertisementFormData,"iosEnable",t)},expression:"advertisementFormData.iosEnable"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Android可用性",prop:"androidEnable"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.advertisementFormData.androidEnable,callback:function(t){e.$set(e.advertisementFormData,"androidEnable",t)},expression:"advertisementFormData.androidEnable"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"是否上线",prop:"status"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.advertisementFormData.status,callback:function(t){e.$set(e.advertisementFormData,"status",t)},expression:"advertisementFormData.status"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"广告顺序",prop:"orderNum"}},[a("ul",{staticClass:"edifice_sortadvertise_wrapper"},[a("Draggable",{attrs:{options:{}},on:{start:function(t){e.drag=!0},end:e.handleDragEnd},model:{value:e.currentSortData,callback:function(t){e.currentSortData=t},expression:"currentSortData"}},e._l(e.currentSortData,function(n,i){return a("li",[a("img",{attrs:{src:""!==n.url?n.url+"-style_100x100":"/static/img/default/empty_700_700.jpg"}}),e._v(" "),a("a",[e._v(e._s(t.isCurrent?"当前广告位":"")+e._s(n.name))])])}))],1)])],1)],1)}))],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.advertisementDialogFlag=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createAdvertisementData}},[e._v("\n        创建广告\n      ")]):a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.updateAdvertisementData}},[e._v("\n        更新广告\n      ")])],1)],1)],1)};u._withStripped=!0;var p={render:u,staticRenderFns:[]},v=p;var g=!1;var b=a("vSla")(m,v,!1,function(e){g||a("Hn+2")},null,null);b.options.__file="src\\views\\edifice\\brandManagement.vue";t.default=b.exports}});