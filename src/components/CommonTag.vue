<template>
  <el-row class="common-tag-wrapper">
    <el-col :span="2">iOS</el-col>
    <el-col :span="22">
      <el-tag
        :key="item"
        v-for="item in dynamicTags"
        closable
        :disable-transitions="false"
        @close="handleClose(item)">
        {{item}}
      </el-tag>
      <el-input
        class="input"
        v-if="inputVisible"
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button
        class="button"
        v-else
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
        @click="showInput"
      >添加版本
      </el-button>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    name: "CommonTag",
    props: {
      title: {
        type: String,
        default: '',
        required: false
      },
      tagData: {
        type: Array,
        default: [],
        required: false
      },
      buttonText: {
        type: String,
        default: '+',
        required: false
      }
    },
    data() {
      return {
        dynamicTags: [],
        inputVisible: false,
        inputValue: ''
      }
    },
    watch: {
      tagData(value) {
        console.log(value)
        if (value.length >= 0) {
          this.dynamicTags = value;
        } else {
          this.$message.error('tag列表数据类型不正确')
        }
      }
    },
    created(){
      this.dynamicTags = this.tagData;
    },
    methods: {
      handleInputConfirm() {
        let inputValue = this.inputValue;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.inputVisible = false;
        this.inputValue = '';
        this.$emit('change', this.dynamicTags)
      },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        this.$emit('change', this.dynamicTags)
      },
      showInput() {
        this.inputVisible = true;
        this.$nextTick(_ => {
          this.$refs.saveTagInput.$refs.input.focus();
        });
      },
    }
  }
</script>

<style scoped>

</style>
