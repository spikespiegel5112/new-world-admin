<template>
  <router-view></router-view>
</template>

<script>
  import {getTryPlayList, saveTryPlay, changeStatus} from '@/api/task'

  export default {
    data() {
      return {}
    },
    created() {
      this.fetchData()
    },
    methods: {}
  }
</script>
