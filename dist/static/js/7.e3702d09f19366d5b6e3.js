webpackJsonp([7],{JLYA:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("aA9S"),i=a.n(n),l=a("Q3je"),s={data:function(){var e=this;return{value2:"",value1:"",tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,keyword:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,name:"",note:"",startDate:null,endDate:null,iconPath:"",packageName:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{name:[{required:!0,message:"name is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1,pickerOptions0:{disabledDate:function(t){if(""!==e.value2)return t.getTime()>e.value2}},pickerOptions1:{disabledDate:function(t){return t.getTime()<e.value1}}}},filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},created:function(){this.fetchData()},methods:{fetchData:function(){var e=this;this.listLoading=!0,Object(l.d)(this.listQuery).then(function(t){e.list=t.content,e.total=t.totalElements,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.fetchData()},handleSizeChange:function(e){this.listQuery.limit=e,this.fetchData()},handleCurrentChange:function(e){this.listQuery.page=e,this.fetchData()},handleModifyStatus:function(e,t){var a=this;Object(l.a)(e.id,t).then(function(n){n?(a.$message({message:"操作成功",type:"success"}),e.isShow=t):a.$message({message:"操作失败",type:"error"})})},resetTemp:function(){this.temp={id:void 0,name:"",note:"",startDate:null,endDate:null,iconPath:""}},handleCreate:function(){var e=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},createData:function(){var e=this;this.$refs.dataForm.validate(function(t){t&&(e.temp.id=parseInt(100*Math.random())+1024,e.temp.author="vue-element-admin",Object(l.e)(e.temp).then(function(){e.list.unshift(e.temp),e.dialogFormVisible=!1,e.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))})},handleUpdate:function(e){var t=this;this.temp=i()({},e),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},updateData:function(){},handleDelete:function(e){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var t=this.list.indexOf(e);this.list.splice(t,1)},changeUpload:function(e){console.log(e)}}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"common-filter-wrapper"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},attrs:{placeholder:"任务名称"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key))return null;e.handleFilter(t)}},model:{value:e.listQuery.keyword,callback:function(t){e.$set(e.listQuery,"keyword",t)},expression:"listQuery.keyword"}}),e._v(" "),a("el-button",{staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.handleFilter}},[e._v("查询")]),e._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.handleCreate}},[e._v("新增")])],1),e._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:e.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"No",width:"40"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.$index+1)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.name)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"Icon",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{attrs:{src:e.row.iconPath+"-style_100x100",width:"80"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center","class-name":"status-col",label:"积分",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.bounty)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"完成数",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.completedNum)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"剩余数",width:"70"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.surplusNum)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"试玩时长",width:"80"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.tryplayTimeLength)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"开始/结束时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.startDate)),a("br"),e._v(" "+e._s(t.row.endDate)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"APK下载地址"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.ApkPath)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"应用包名"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.packageName)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"状态",width:"50"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n        "+e._s(t.row.isShow)+"\n      ")]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"添加时间"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("i",{staticClass:"el-icon-time"}),e._v(" "),a("span",[e._v(e._s(t.row.createDate))])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){e.handleUpdate(t.row)}}},[e._v("编辑")]),e._v(" "),"0"==t.row.isShow?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){e.handleModifyStatus(t.row,1)}}},[e._v("上架\n        ")]):e._e(),e._v(" "),"1"==t.row.isShow?a("el-button",{attrs:{size:"mini"},on:{click:function(a){e.handleModifyStatus(t.row,0)}}},[e._v("下架\n        ")]):e._e(),e._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){e.handleDelete(t.row)}}},[e._v("删除\n        ")])]}}])})],1),e._v(" "),a("div",{staticClass:"pagination-container"},[a("el-pagination",{attrs:{background:"","current-page":e.listQuery.page,"page-sizes":[10,20,30,50],"page-size":e.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1),e._v(" "),a("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"iconPath",prop:"iconPath"}},[a("el-upload",{staticClass:"upload-demo",attrs:{accept:".png",action:"","auto-upload":!1,"on-change":e.changeUpload}},[a("el-button",{attrs:{size:"small",type:"primary",plain:""}},[e._v("上传")])],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"Apk下载地址",prop:"name"}},[a("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Apk包名",prop:"name"}},[a("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"开始时间",prop:"startDate"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"开始日期","picker-options":e.pickerOptions0},model:{value:e.temp.startDate,callback:function(t){e.$set(e.temp,"startDate",t)},expression:"temp.startDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"结束时间",prop:"endDate"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"结束日期","picker-options":e.pickerOptions1},model:{value:e.temp.endDate,callback:function(t){e.$set(e.temp,"endDate",t)},expression:"temp.endDate"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"Please input"},model:{value:e.temp.note,callback:function(t){e.$set(e.temp,"note",t)},expression:"temp.note"}})],1)],1),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("table.cancel")))]),e._v(" "),"create"==e.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:e.createData}},[e._v(e._s(e.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:e.updateData}},[e._v(e._s(e.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]},r=a("vSla")(s,o,!1,null,null,null);t.default=r.exports}});