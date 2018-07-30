<template>
  <div class="common-querytable-wrapper">
    <div class="queryform-wrapper">
      <div class="outside">
        <el-form class="basearea">
          <ul class="pull-left">
            <li>
              <slot name="button1">
                <!--<el-button size="mini" type="primary" icon="el-icon-plus" @click="handleCreate" v-waves>-->
                  <!--新增-->
                <!--</el-button>-->
              </slot>
            </li>
          </ul>
        </el-form>
        <ul class="operation-wrapper pull-right">
          <li>
            <slot name="query1"></slot>

          </li>
          <li>
            <slot name="query2"></slot>
          </li>
          <li>
            <slot name="query3"></slot>
          </li>
          <li>
            <el-button size="mini" class="expand" type="text" @click='expand'>高级搜索<i
              class="el-icon-arrow-down"></i></el-button>
          </li>
        </ul>
      </div>
      <div class="expandarea" :class="{active:expandQuery}">
        <el-form ref="form" :model="queryModel" size="mini" label-width="100px">
          <el-row>
            <el-col :span="8">
              <!--<el-form-item label="是否可用：">-->
                <!--<el-switch-->
                  <!--v-model="queryModel.available"-->
                  <!--active-color="#13ce66"-->
                  <!--inactive-color="#ff4949"-->
                <!--&gt;-->
                <!--</el-switch>-->
              <!--</el-form-item>-->
            </el-col>
            <el-col :span="8">

            </el-col>
            <el-col :span="8">

            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">

            </el-col>
            <el-col :span="8">

            </el-col>
            <el-col :span="8">

            </el-col>
          </el-row>
          <el-row>
            <el-col :span="23" pull-right>
              <!--<el-form-item class="pull-right">-->
                <!--<el-button type="primary" size="mini" icon="el-icon-search"-->
                           <!--@click="search">搜索-->
                <!--</el-button>-->
                <!--<el-button type="primary" size="mini" icon="el-icon-refresh"-->
                           <!--@click="reset">重置-->
                <!--</el-button>-->
              <!--</el-form-item>-->
            </el-col>
          </el-row>
        </el-form>
      </div>
    </div>
  </div>

</template>

<script>
	export default {
		name: "CommonQuery",
    props:{
		  queryModel:{
		    type:Object,
        default:function () {
          return {}
        }
      }
    },
    watch:{
      queryModel(){

      }
    },
    methods:{
      search(){

      },
      reset(){

      }
    }
	}
</script>

<style scoped>

</style>
