webpackJsonp([6],{"1Yv3":function(e,t,a){(e.exports=a("BkJT")(!1)).push([e.i,"\n.edifice_main_container .sortlist {\n  overflow: auto;\n  -webkit-box-shadow: 0 0 15px inset #ccc;\n          box-shadow: 0 0 15px inset #ccc;\n}\n.edifice_main_container .sortlist > li {\n    margin: 20px auto;\n    width: 98%;\n    height: 230px;\n}\n.edifice_main_container .sortlist > li .floornumber {\n      margin: 20px auto;\n      text-align: center;\n}\n.edifice_main_container .sortlist > li .floornumber span {\n        display: inline-block;\n        width: 40px;\n        height: 40px;\n        line-height: 40px;\n        text-align: center;\n        border: 1px solid #ccc;\n        font-size: 25px;\n        border-radius: 50%;\n        vertical-align: middle;\n}\n.edifice_main_container .sortlist > li .floornumber span p {\n          font-size: 15px;\n}\n.edifice_main_container .sortlist .minus {\n    display: block;\n    margin: 30px 0 0 0;\n}\n.edifice_main_container .buildingname {\n  margin: 10px 15px;\n  min-height: 50px;\n  font-size: 15px;\n  position: absolute;\n  top: 0;\n  z-index: 1;\n}\n.edifice_main_container .buildingname label {\n    font-size: 15px;\n}\n.edifice_main_container .floordesc > li {\n  display: inline-block;\n}\n.edifice_main_container .floordesc .brandmeta {\n  display: inline-block;\n  width: 240px;\n  height: 40px;\n}\n.edifice_main_container .floordesc .brandmeta label {\n    display: inline-block;\n    width: 120px;\n    text-align: right;\n    vertical-align: middle;\n}\n.edifice_main_container .advertisedesc {\n  display: block;\n  width: 100%;\n}\n.edifice_main_container .advertisedesc .brandicon {\n    display: inline-block;\n    width: 300px;\n    vertical-align: top;\n}\n.edifice_main_container .advertisedesc .advertiselist {\n    display: inline-block;\n    width: 1150px;\n    vertical-align: top;\n}\n.edifice_main_container .advertisedesc .advertiselist > label {\n      display: inline-block;\n      vertical-align: top;\n}\n.edifice_main_container .advertisedesc .advertiselist .content {\n      display: inline-block;\n      vertical-align: top;\n}\n.edifice_main_container .advertisedesc .advertiselist .content > ul .brandmeta {\n        display: inline-block;\n        margin: 0 10px 0 0;\n        width: 360px;\n}\n.edifice_main_container .advertisedesc .advertiselist .content > ul .brandmeta img {\n          display: inline-block;\n          width: 120px;\n}\n.edifice_main_container .advertisedesc .advertiselist .content > ul .brandmeta .advertisemeta {\n          display: inline-block;\n          vertical-align: top;\n}\n.edifice_main_container .advertisedesc .advertiselist .content > ul .brandmeta .advertisemeta .location {\n            width: 100px;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n}\n.edifice_main_container .operation {\n  float: right;\n}\n.edifice_sortadvertise_wrapper li {\n  display: inline-block;\n  margin: 10px;\n  width: 135px;\n  height: 135px;\n  text-align: center;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  vertical-align: middle;\n}\n.edifice_sortadvertise_wrapper li img {\n    display: inline-block;\n    width: 100%;\n    vertical-align: middle;\n}\n.edifice_sortadvertise_wrapper li:before {\n    content: '';\n    display: inline-block;\n    vertical-align: middle;\n}\n.edifice_sortadvertise_wrapper li:hover {\n    cursor: move;\n}\n.edifice_addminusadvertise_wrapper {\n  margin: 10px 0;\n  position: relative;\n  text-align: right;\n}\n.edifice_addminusadvertise_wrapper .minus {\n    display: inline-block;\n    width: 30px;\n    text-align: center;\n    position: absolute;\n    right: -40px;\n    top: 0;\n}\n.edifice_addminusadvertise_wrapper .minus a {\n      display: inline-block;\n      width: 20px;\n      height: 20px;\n      font-size: 20px;\n      text-align: center;\n      color: orangered;\n      vertical-align: middle;\n}\n",""])},"42jv":function(e,t,a){var i=a("1Yv3");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a("8bSs")("5a044746",i,!0)},fRcj:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("aA9S"),n=a.n(i),r=a("pnga"),o=a("zQDM"),l=a("405r"),s=a.n(l),c={components:{CommonTag:r.a,CommonQuery:o.a,Draggable:s.a},data:function(){var e=this;return{queryRewardProductAllRequest:"promotion-service/1.0.0/queryRewardProductAll",addAndUpdateRewardProductRequest:"promotion-service/1.0.0/addAndUpdateRewardProduct",brandAdvertisementAddOrUpdateRequest:"building-show-service/1.0.0/bk/brandAdvertisement/addOrUpdate",brandDeleteRequest:"building-show-service/1.0.0/bk/brand/delete",value2:"",value1:"",tableKey:0,tableList:[],total:null,listLoading:!0,availabilityFlag:!1,dynamicTags:["标签一","标签二","标签三"],rewardTypeDictionary:[{name:"积分",code:"point"},{name:"趣豆",code:"coin"},{name:"百视通会员",code:"bes_tv"},{name:"第三方链接",code:"third_link"}],queryModel:{sort:"desc",brandName:""},natureDictionary:[{code:1,name:"app"},{code:2,name:"网页"}],statusDictionary:[{code:0,name:"未上线"},{code:1,name:"上线"}],pagination:{page:1,size:20},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,formData:{id:"",companyName:"",name:"",desc:"",icon:"",image:"",originalPrice:"",url:"",status:"",price:"",productId:"",rewardType:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,rules:{id:[{required:!0,message:"此项为必填项",trigger:"change"}],companyName:[{required:!0,message:"此项为必填项",trigger:"change"}],name:[{required:!0,message:"此项为必填项",trigger:"change"}],price:[{required:!0,message:"此项为必填项",trigger:"change"}],productId:[{required:!0,message:"此项为必填项",trigger:"change"}],rewardType:[{required:!0,message:"此项为必填项",trigger:"change"}],desc:[{required:!0,message:"此项为必填项",trigger:"change"}],image:[{required:!0,message:"此项为必填项",trigger:"change"}],icon:[{required:!0,message:"此项为必填项",trigger:"change"}],originalPrice:[{required:!0,message:"此项为必填项",trigger:"change"},{type:"number",message:"必须为数字值",trigger:"change"}],status:[{required:!0,message:"此项为必填项",trigger:"change"}],url:[{required:!0,message:"此项为必填项",trigger:"change"}]},downloadLoading:!1,pickerOptions0:{disabledDate:function(t){if(""!==e.value2)return t.getTime()>e.value2}},pickerOptions1:{disabledDate:function(t){return t.getTime()<e.value1}},fileList:[],portraitParams:{bucketName:"funyvalley",folderName:"icon"},iosVersionListData:[],androidVersionListData:[],searchTxt:"",expandQuery:"",showFileListFlag:!1,newFile:"",advertisementDialogFlag:!1,currentAdvertisementTabIndex:0,currentSortData:[],effectiveDuration:[]}},computed:{tableHeight:function(){return this.$store.state.app.tableHeight}},watch:{effectiveDuration:function(e){console.log(e),null===e&&(e=[]),this.formData.startDate=this.$moment(e[0]).format("YYYY-MM-DD"),this.formData.endDate=this.$moment(e[1]).format("YYYY-MM-DD")},currentAdvertisementTabIndex:function(e){console.log(e)},currentSortData:function(e){var t=this;console.log(e),e.forEach(function(e,a){t.tableList.forEach(function(i,n){e.id===i.id&&(t.tableList[n].orderNum=a)})}),console.log(this.tableList)}},mounted:function(){this.getTableData()},methods:{getTableData:function(){var e=this;this.listLoading=!0,this.queryModel=n()(this.queryModel,this.pagination),this.$http.get(this.$baseUrl+this.queryRewardProductAllRequest+"/"+this.pagination.page).then(function(t){console.log(t),e.tableList=t.data,e.total=t.total,e.listLoading=!1})},handleFilter:function(){this.pagination.page=1,this.getTableData()},handleSizeChange:function(e){this.pagination.size=e,this.getTableData()},handleCurrentChange:function(e){this.pagination.page=e,this.getTableData()},resetTemp:function(){this.formData={desc:"",icon:"",image:"",title:"",originalPrice:"",url:"",status:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,void 0!==this.$refs.formData&&(this.$refs.formData.resetFields(),this.$nextTick(function(){e.$refs.formData.clearValidate()}))},createData:function(){this.formData.id="",this.updateData()},handleUpdate:function(e){var t=this;console.log(e),this.formData=n()({},e.row),this.effectiveDuration=[],this.effectiveDuration=[this.$moment(e.row.startDate).format("YYYY-MM-DD"),this.$moment(e.row.endDate).format("YYYY-MM-DD")],this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.formData.clearValidate()})},updateData:function(){var e=this;this.$refs.formData.validate(function(t){t&&e.$http.post(e.$baseUrl+e.addAndUpdateRewardProductRequest,{id:e.formData.id,desc:e.formData.desc,icon:e.formData.icon,image:e.formData.image,originalPrice:e.formData.originalPrice,url:e.formData.url,status:e.formData.status,companyName:e.formData.companyName,name:e.formData.name,price:e.formData.price,productId:e.formData.productId,rewardType:e.formData.rewardType}).then(function(t){console.log(t),e.dialogFormVisible=!1,e.$message.success("信息修改成功"),e.getTableData()}).catch(function(t){console.log(t),e.$message.error(t.response.status.toString()+"  "+t.response.data.error)})})},handleDelete:function(e){var t=this;this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$http.delete(t.$baseUrl+t.brandDeleteRequest+"/"+e.row.id).then(function(e){console.log(e),t.dialogFormVisible=!1,t.$message.success("删除成功"),t.getTableData()}).catch(function(e){console.log(e),t.$message.error(e.response.status.toString()+"  "+e.response.data.error)})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},expand:function(){this.expandQuery=!this.expandQuery},search:function(){this.getTableData()},reset:function(){this.queryModel.available=!0},deleteAdvertise:function(e,t){this.$confirm("确认删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){})},uploadSuccess1:function(e){console.log(e),this.formData.icon=e.url},uploadSuccess2:function(e){this.formData.image=e.url}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",{staticClass:"app-container"},[a("CommonQuery",[a("template",{slot:"button1"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{size:"mini",type:"primary",icon:"el-icon-plus"},on:{click:e.handleCreate}},[e._v("\n        新增\n      ")])],1),e._v(" "),a("template",{slot:"query1"},[a("div",{staticClass:"common-search-wrapper",on:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.search(t)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.queryModel.brandName,expression:"queryModel.brandName"}],attrs:{type:"text",placeholder:"请输入游戏名称"},domProps:{value:e.queryModel.brandName},on:{input:function(t){t.target.composing||e.$set(e.queryModel,"brandName",t.target.value)}}}),e._v(" "),a("a",[a("span",{staticClass:"el-icon-search",on:{click:e.search}})])])])],2),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.tableList,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":"",height:e.tableHeight}},[a("el-table-column",{attrs:{label:"No",type:"index",width:"50",align:"center",fixed:""}}),e._v(" "),a("el-table-column",{attrs:{label:"公司名称",align:"center",prop:"companyName"}}),e._v(" "),a("el-table-column",{attrs:{label:"产品ID",align:"center",prop:"productId"}}),e._v(" "),a("el-table-column",{attrs:{label:"产品名称",align:"center",prop:"name"}}),e._v(" "),a("el-table-column",{attrs:{label:"Icon",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.icon+"-style_100x100",width:"80"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"图片",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.image+"-style_100x100",width:"80"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"描述",prop:"desc"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"原价",prop:"originalPrice"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"现价",prop:"price"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"奖励类型",prop:"rewardType"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(null!==t.row.rewardType?e.rewardTypeDictionary.filter(function(e){return e.code===t.row.rewardType})[0].name:"")+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"是否可用",prop:"status"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949",disabled:""},model:{value:t.row.status,callback:function(a){e.$set(t.row,"status",a)},expression:"scope.row.status"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作",width:"300px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(a){e.handleDelete(t)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("div",{staticClass:"common-pagination-wrapper"},[a("el-pagination",{attrs:{background:"","current-page":e.pagination.page,"page-sizes":[10,20,30,50],"page-size":e.pagination.size,total:e.total,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.$set(e.pagination,"page",t)}}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible,width:"850px"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-row",{attrs:{type:"flex",justify:"center"}},[a("el-col",{attrs:{span:20}},[a("el-form",{ref:"formData",attrs:{rules:e.rules,model:e.formData,"label-position":"right","label-width":"140px"}},[a("el-form-item",{attrs:{label:"Icon",prop:"icon"}},[a("CommonUploadImage",{attrs:{action:e.$baseUrl+"image-upload-service/1.0.0/file/upload",returnUrlList:e.formData.icon},on:{"on-success":e.uploadSuccess1,"update:returnUrlList":function(t){e.$set(e.formData,"icon",t)}}}),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.formData.icon,callback:function(t){e.$set(e.formData,"icon",t)},expression:"formData.icon"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"image",prop:"image"}},[a("CommonUploadImage",{attrs:{action:e.$baseUrl+"image-upload-service/1.0.0/file/upload",returnUrlList:e.formData.image},on:{"on-success":e.uploadSuccess2,"update:returnUrlList":function(t){e.$set(e.formData,"image",t)}}}),e._v(" "),a("el-input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],model:{value:e.formData.image,callback:function(t){e.$set(e.formData,"image",t)},expression:"formData.image"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述",prop:"desc"}},[a("el-input",{attrs:{type:"textarea"},model:{value:e.formData.desc,callback:function(t){e.$set(e.formData,"desc",t)},expression:"formData.desc"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"产品名称",prop:"name"}},[a("el-input",{model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"原价",prop:"originalPrice"}},[a("el-input",{model:{value:e.formData.originalPrice,callback:function(t){e.$set(e.formData,"originalPrice",e._n(t))},expression:"formData.originalPrice"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"地址",prop:"url"}},[a("el-input",{model:{value:e.formData.url,callback:function(t){e.$set(e.formData,"url",t)},expression:"formData.url"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"可用性",prop:"status"}},[a("el-switch",{attrs:{"active-value":1,"inactive-value":0,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.formData.status,callback:function(t){e.$set(e.formData,"status",t)},expression:"formData.status"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"奖励类型",prop:"rewardType"}},[a("el-select",{attrs:{placeholder:""},model:{value:e.formData.rewardType,callback:function(t){e.$set(e.formData,"rewardType",t)},expression:"formData.rewardType"}},e._l(e.rewardTypeDictionary,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1)],1)],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"===e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]};var u=a("vSla")(c,d,!1,function(e){a("42jv")},null,null);t.default=u.exports}});