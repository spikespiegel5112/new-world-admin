<template>
  <div class="menu-wrapper">
    <template v-for="item in routerInner" v-if="!item.hidden&&item.children">

      <router-link v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow"
                   :to="item.path+'/'+item.children[0].path"
                   :key="item.children[0].name">
        <el-menu-item :index="item.path+'/'+item.children[0].path" :class="{'submenu-title-noDropdown':!isNest}">
          <svg-icon v-if="item.children[0].meta&&item.children[0].meta.icon" :icon-class="item.children[0].meta.icon">

          </svg-icon>
          <span v-if="item.children[0].meta&&item.children[0].meta.title"
                slot="title">{{item.children[0].meta.title}}{{typeof item.hidden}}</span>
        </el-menu-item>
      </router-link>

      <el-submenu v-else :index="item.name||item.path" :key="item.name">
        <template slot="title">
          <svg-icon v-if="item.meta&&item.meta.icon" :icon-class="item.meta.icon"></svg-icon>
          <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
        </template>

        <template v-for="child in item.children">
          <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0"
                        :routes="[child]" :key="child.path"></sidebar-item>
          <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
            <el-menu-item :index="item.path+'/'+child.path">

              <svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
              <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}{{child}}
</span>
            </el-menu-item>
          </router-link>
        </template>
      </el-submenu>

    </template>
  </div>
</template>

<script>
  export default {
    name: 'SidebarItem',
    props: {
      routes: {
        type: Array,
        default: [],
        required: false
      },
      isNest: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        routerInner: []
      }
    },
    watch: {
      routes(value) {
        let result = [];
        value.forEach((item1, index1) => {
          console.log(item1)
          console.log(typeof item1.hidden)
          console.log(!item1.hidden)
          if (item1.hidden === undefined || !item1.hidden) {
            result.push(item1)
            debugger
            if (result[result.length].children) {
              result[result.length].children=result[result.length].children.filter(item2=>item2.hidden === undefined || !item2.hidden)
              console.log(result)
            }
          }
          console.log(result)


        });
        console.log(result)

        this.routerInner = result;
      }
    },
    methods: {
      hasOneShowingChildren(children) {
        let showingChildren = [];
        children.forEach(item => {
          if (!item.hidden || item.hidden !== true) {
            showingChildren.push(item)
          }
        });
        console.log(showingChildren)
        // debugger
        return showingChildren.length === 1;
      }
    }
  }
</script>
