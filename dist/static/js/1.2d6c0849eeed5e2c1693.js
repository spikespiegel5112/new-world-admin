webpackJsonp([1],{HzJ8:function(t,e,a){t.exports={default:a("oMO2"),__esModule:!0}},SiQU:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("HzJ8"),l=a.n(i),s=a("aA9S"),n=a.n(s),r=a("vLgD");function o(t){return Object(r.a)({url:"/advertising-service/1.0.0/advertising/update",method:"post",data:t})}a("ctMr");var c={bind:function(t,e){t.addEventListener("click",function(a){var i=n()({},e.value),l=n()({ele:t,type:"hit",color:"rgba(0, 0, 0, 0.15)"},i),s=l.ele;if(s){s.style.position="relative",s.style.overflow="hidden";var r=s.getBoundingClientRect(),o=s.querySelector(".waves-ripple");switch(o?o.className="waves-ripple":((o=document.createElement("span")).className="waves-ripple",o.style.height=o.style.width=Math.max(r.width,r.height)+"px",s.appendChild(o)),l.type){case"center":o.style.top=r.height/2-o.offsetHeight/2+"px",o.style.left=r.width/2-o.offsetWidth/2+"px";break;default:o.style.top=a.pageY-r.top-o.offsetHeight/2-document.body.scrollTop+"px",o.style.left=a.pageX-r.left-o.offsetWidth/2-document.body.scrollLeft+"px"}return o.style.backgroundColor=l.color,o.className="waves-ripple z-active",!1}},!1)}},u=function(t){t.directive("waves",c)};window.Vue&&(window.waves=c,Vue.use(u)),c.install=u;var p=c,d=[{key:"start_the",display_name:"启动页"},{key:"sign_in",display_name:"签到"},{key:"notice",display_name:"公告"},{key:"better_discount",display_name:"好折扣"}],m=d.reduce(function(t,e){return t[e.key]=e.display_name,t},{}),f={name:"complexTable",directives:{waves:p},data:function(){return{tableKey:0,list:null,total:null,listLoading:!0,listQuery:{page:1,limit:20,importance:void 0,title:void 0,type:void 0,sort:"+id"},importanceOptions:[1,2,3],calendarTypeOptions:d,sortOptions:[{label:"ID Ascending",key:"+id"},{label:"ID Descending",key:"-id"}],statusOptions:["published","draft","deleted"],showReviewer:!1,temp:{id:void 0,importance:1,remark:"",timestamp:new Date,title:"",type:"",status:"published"},dialogFormVisible:!1,dialogStatus:"",textMap:{update:"Edit",create:"Create"},dialogPvVisible:!1,pvData:[],rules:{type:[{required:!0,message:"type is required",trigger:"change"}],timestamp:[{type:"date",required:!0,message:"timestamp is required",trigger:"change"}],title:[{required:!0,message:"title is required",trigger:"blur"}]},downloadLoading:!1}},filters:{statusFilter:function(t){return{0:"info",1:"success"}[t]},statusFilterName:function(t){return{0:"草稿",1:"发布"}[t]},typeFilter:function(t){return m[t]}},created:function(){this.getList()},methods:{getList:function(){var t,e=this;this.listLoading=!0,(t=this.listQuery,Object(r.a)({url:"/advertising-service/1.0.0/advertising/list",method:"get",params:t})).then(function(t){e.list=t.list,e.total=t.total,e.listLoading=!1})},handleFilter:function(){this.listQuery.page=1,this.getList()},handleSizeChange:function(t){this.listQuery.limit=t,this.getList()},handleCurrentChange:function(t){this.listQuery.page=t,this.getList()},handleModifyStatus:function(t,e){var a=this;t.status=e,o(t).then(function(t){a.$message({message:"操作成功",type:"success"})})},resetTemp:function(){this.temp={id:void 0,importance:1,remark:"",timestamp:new Date,title:"",status:"published",type:""}},handleCreate:function(){var t=this;this.resetTemp(),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs.dataForm.clearValidate()})},createData:function(){var t=this;this.$refs.dataForm.validate(function(e){var a;e&&(t.temp.id=parseInt(100*Math.random())+1024,t.temp.author="vue-element-admin",(a=t.temp,Object(r.a)({url:"/advertising/create",method:"post",data:a})).then(function(){t.list.unshift(t.temp),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"创建成功",type:"success",duration:2e3})}))})},handleUpdate:function(t){var e=this;this.temp=n()({},t),this.temp.timestamp=new Date(this.temp.timestamp),this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){e.$refs.dataForm.clearValidate()})},updateData:function(){var t=this;this.$refs.dataForm.validate(function(e){if(e){var a=n()({},t.temp);a.timestamp=+new Date(a.timestamp),o(a).then(function(){var e=!0,a=!1,i=void 0;try{for(var s,n=l()(t.list);!(e=(s=n.next()).done);e=!0){var r=s.value;if(r.id===t.temp.id){var o=t.list.indexOf(r);t.list.splice(o,1,t.temp);break}}}catch(t){a=!0,i=t}finally{try{!e&&n.return&&n.return()}finally{if(a)throw i}}t.dialogFormVisible=!1,t.$notify({title:"成功",message:"更新成功",type:"success",duration:2e3})})}})},handleDelete:function(t){var e,a=this;(e=t.id,Object(r.a)({url:"/advertising-service/1.0.0/advertising/"+e,method:"delete"})).then(function(t){a.$notify({title:"成功",message:"删除成功",type:"success",duration:2e3})});var i=this.list.indexOf(t);this.list.splice(i,1)}}},v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"common-filter-wrapper"},[a("el-input",{staticStyle:{width:"200px"},attrs:{placeholder:t.$t("table.title")},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.handleFilter(e)}},model:{value:t.listQuery.keyword,callback:function(e){t.$set(t.listQuery,"keyword",e)},expression:"listQuery.keyword"}}),t._v(" "),a("el-select",{staticStyle:{width:"220px"},attrs:{clearable:"",placeholder:t.$t("table.type")},model:{value:t.listQuery.location,callback:function(e){t.$set(t.listQuery,"location",e)},expression:"listQuery.location"}},t._l(t.calendarTypeOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name+"("+t.key+")",value:t.key}})})),t._v(" "),a("el-select",{staticStyle:{width:"140px"},on:{change:t.handleFilter},model:{value:t.listQuery.sort,callback:function(e){t.$set(t.listQuery,"sort",e)},expression:"listQuery.sort"}},t._l(t.sortOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})})),t._v(" "),a("el-button",{directives:[{name:"waves",rawName:"v-waves"}],attrs:{type:"primary",icon:"el-icon-search"},on:{click:t.handleFilter}},[t._v(t._s(t.$t("table.search")))]),t._v(" "),a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",icon:"el-icon-edit"},on:{click:t.handleCreate}},[t._v(t._s(t.$t("table.add")))])],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],key:t.tableKey,staticStyle:{width:"100%"},attrs:{data:t.list,"element-loading-text":"给我一点时间",border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:t.$t("table.id"),width:"65"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.id))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:t.$t("table.image"),width:"100px"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("img",{attrs:{src:t.row.image+"-style_25x25"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",height:"10px",label:t.$t("table.url")},scopedSlots:t._u([{key:"default",fn:function(t){return[a("span",{staticClass:"link-type"})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:t.$t("table.video")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",{staticClass:"link-type"},[t._v(t._s(e.row.video))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:t.$t("table.type")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",[t._v(t._s(t._f("typeFilter")(e.row.location)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:t.$t("table.endDate")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.endDate))])]}}])}),t._v(" "),a("el-table-column",{attrs:{"class-name":"status-col",label:t.$t("table.status"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:t._f("statusFilter")(e.row.status)}},[t._v(t._s(t._f("statusFilterName")(e.row.status)))])]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",label:t.$t("table.actions"),"class-name":"small-padding fixed-width"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("router-link",{attrs:{to:"/advertising/edit/"+e.row.id}},[a("el-button",{attrs:{type:"primary",size:"mini"}},[t._v(t._s(t.$t("table.edit")))])],1),t._v(" "),"0"==e.row.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){t.handleModifyStatus(e.row,"1")}}},[t._v(t._s(t.$t("table.publish"))+"\n        ")]):t._e(),t._v(" "),"1"==e.row.status?a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.handleModifyStatus(e.row,"0")}}},[t._v(t._s(t.$t("table.draft"))+"\n        ")]):t._e(),t._v(" "),"deleted"!=e.row.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.handleDelete(e.row)}}},[t._v(t._s(t.$t("table.delete"))+"\n        ")]):t._e()]}}])})],1),t._v(" "),a("div",{staticClass:"common-pagination-wrapper"},[a("el-pagination",{attrs:{background:"","current-page":t.listQuery.page,"page-sizes":[10,20,30,50],"page-size":t.listQuery.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1),t._v(" "),a("el-dialog",{attrs:{title:t.textMap[t.dialogStatus],visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[a("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:t.rules,model:t.temp,"label-position":"left","label-width":"70px"}},[a("el-form-item",{attrs:{label:t.$t("table.type"),prop:"type"}},[a("el-select",{attrs:{placeholder:"Please select"},model:{value:t.temp.type,callback:function(e){t.$set(t.temp,"type",e)},expression:"temp.type"}},t._l(t.calendarTypeOptions,function(t){return a("el-option",{key:t.key,attrs:{label:t.display_name,value:t.key}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.date"),prop:"timestamp"}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"Please pick a date"},model:{value:t.temp.timestamp,callback:function(e){t.$set(t.temp,"timestamp",e)},expression:"temp.timestamp"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.title"),prop:"title"}},[a("el-input",{model:{value:t.temp.title,callback:function(e){t.$set(t.temp,"title",e)},expression:"temp.title"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.status")}},[a("el-select",{attrs:{placeholder:"Please select"},model:{value:t.temp.status,callback:function(e){t.$set(t.temp,"status",e)},expression:"temp.status"}},t._l(t.statusOptions,function(t){return a("el-option",{key:t,attrs:{label:t,value:t}})}))],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.importance")}},[a("el-rate",{staticStyle:{"margin-top":"8px"},attrs:{colors:["#99A9BF","#F7BA2A","#FF9900"],max:3},model:{value:t.temp.importance,callback:function(e){t.$set(t.temp,"importance",e)},expression:"temp.importance"}})],1),t._v(" "),a("el-form-item",{attrs:{label:t.$t("table.remark")}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"Please input"},model:{value:t.temp.remark,callback:function(e){t.$set(t.temp,"remark",e)},expression:"temp.remark"}})],1)],1),t._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(t._s(t.$t("table.cancel")))]),t._v(" "),"create"==t.dialogStatus?a("el-button",{attrs:{type:"primary"},on:{click:t.createData}},[t._v(t._s(t.$t("table.confirm")))]):a("el-button",{attrs:{type:"primary"},on:{click:t.updateData}},[t._v(t._s(t.$t("table.confirm")))])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"Reading statistics",visible:t.dialogPvVisible},on:{"update:visible":function(e){t.dialogPvVisible=e}}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.pvData,border:"",fit:"","highlight-current-row":""}},[a("el-table-column",{attrs:{prop:"key",label:"Channel"}}),t._v(" "),a("el-table-column",{attrs:{prop:"pv",label:"Pv"}})],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogPvVisible=!1}}},[t._v(t._s(t.$t("table.confirm")))])],1)],1)],1)},staticRenderFns:[]},y=a("vSla")(f,v,!1,null,null,null);e.default=y.exports},ctMr:function(t,e,a){var i=a("hm3A");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("8bSs")("7d6e33d6",i,!0)},hm3A:function(t,e,a){(t.exports=a("BkJT")(!1)).push([t.i,".waves-ripple {\r\n    position: absolute;\r\n    border-radius: 100%;\r\n    background-color: rgba(0, 0, 0, 0.15);\r\n    background-clip: padding-box;\r\n    pointer-events: none;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n    -webkit-transform: scale(0);\r\n    transform: scale(0);\r\n    opacity: 1;\r\n}\r\n\r\n.waves-ripple.z-active {\r\n    opacity: 0;\r\n    -webkit-transform: scale(2);\r\n    transform: scale(2);\r\n    -webkit-transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, -webkit-transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out;\r\n    transition: opacity 1.2s ease-out, transform 0.6s ease-out, -webkit-transform 0.6s ease-out;\r\n}",""])},oMO2:function(t,e,a){a("A1pn"),a("IsPG"),t.exports=a("tcIe")},tcIe:function(t,e,a){var i=a("93K8"),l=a("YW8S");t.exports=a("AKd3").getIterator=function(t){var e=l(t);if("function"!=typeof e)throw TypeError(t+" is not iterable!");return i(e.call(t))}}});