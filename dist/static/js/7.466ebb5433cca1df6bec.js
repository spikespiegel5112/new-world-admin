webpackJsonp([7],{"/qD2":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("aA9S"),n=a.n(i),l=a("Q3je"),s={data:function(){var t=this;return{value2:"",value1:"",tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,keyword:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,name:"",note:"",startDate:null,endDate:null,iconPath:"",packageName:""},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{name:[{required:!0,message:"name is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1,pickerOptions0:{disabledDate:function(e){if(""!==t.value2)return e.getTime()>t.value2}},pickerOptions1:{disabledDate:function(e){return e.getTime()<t.value1}}}},filters:{statusFilter:function(t){return{published:"success",draft:"gray",deleted:"danger"}[t]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.listLoading=!0,Object(l.b)(this.listQuery).then(function(e){t.list=e.content,t.total=e.totalElements,t.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.fetchData()},handleSizeChange:function(t){this.listQuery.limit=t,this.fetchData()},handleCurrentChange:function(t){this.listQuery.page=t,this.fetchData()},handleModifyStatus:function(t,e){var a=this;Object(l.a)(t.id,e).then(function(i){i?(a.$message({message:"操作成功",type:"success"}),t.isShow=e):a.$message({message:"操作失败",type:"error"})})},resetTemp:function(){this.temp={id:void 0,name:"",note:"",startDate:null,endDate:null,iconPath:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},createData:function(){},handleUpdate:function(t){var e=this;this.temp=n()({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},updateData:function(){},handleDelete:function(t){this.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3});var e=this.list.indexOf(t);this.list.splice(e,1)},changeUpload:function(t){console.log(t)}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"common-filter-wrapper"},[a("el-input",{staticClass:"filter-item",staticStyle:{width:"200px"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}}}),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],staticClass:"filter-item",attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v("查询")]),t._v(" "),a("el-button",{staticClass:"filter-item",staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v("新增\n    ")])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:t.listLoading,expression:"listLoading",modifiers:{body:!0}}],staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"Loading",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"No",width:"40"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.$index+1)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.name)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"Icon",align:"center",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.iconPath)+"\n        "),a("img",{attrs:{src:e.row.iconPath+"-style_213x144",width:"80"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center","class-name":"status-col",label:"积分",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.bounty)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"完成数",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.completedNum)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"剩余数",width:"70"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.surplusNum)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"提交时间",width:"80"},scopedSlots:t._u([{key:"default",fn:function(t){}}])}),t._v(" "),a("el-table-column",{attrs:{label:"状态",width:"50"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n        "+t._s(e.row.isShow)+"\n      ")]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"created_at",label:"添加时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("i",{staticClass:"el-icon-time"}),t._v(" "),a("span",[t._v(t._s(e.row.createDate))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){t.handleUpdate(e.row)}}},[t._v("编辑")]),t._v(" "),"0"==e.row.isShow?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){t.handleModifyStatus(e.row,1)}}},[t._v("上架\n        ")]):t._e(),t._v(" "),"1"==e.row.isShow?a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleModifyStatus(e.row,0)}}},[t._v("下架\n        ")]):t._e(),t._v(" "),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.row)}}},[t._v("删除\n        ")])]}}])})],1),t._v(" "),a("div",{staticClass:"common-pagination-wrapper"},[a("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{model:{value:t.temp.name,callback:function(e){t.$set(t.temp,"name",e)},expression:"temp.name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"iconPath",prop:"iconPath"}},[a("el-upload",{staticClass:"upload-demo",attrs:{accept:".png",action:"","auto-upload":!1,"on-change":t.changeUpload}},[a("el-button",{attrs:{size:"small",type:"primary",plain:""}},[t._v("上传")])],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"描述"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"Please input"},model:{value:t.temp.note,callback:function(e){t.$set(t.temp,"note",e)},expression:"temp.note"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("table.cancel")))]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v(t._s(t.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v(t._s(t.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]},r=a("vSla")(s,o,!1,null,null,null);e.default=r.exports}});