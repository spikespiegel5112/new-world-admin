<template>
  <div class="common-imguploadpreview-wrapper">
    <!--<div class="common-imguploadpreview-wrapper">-->
    <!--<a v-if="fileList.length!==0" class="close">-->
    <!--<span class="iconfont icon-crosswide"></span>-->
    <!--</a>-->
    <!--<img v-if="fileList===''||fileList===[]||fileList===null"-->
    <!--src="../image/default/defaultavatar_60_60.png"-->
    <!--class="avatar">-->
    <!--<img v-else v-for="item in fileList" :src="item.url"-->
    <!--class="avatar">-->
    <!--</div>-->
    <el-upload
      ref="uploadAvatar"
      :action="action"
      :list-type="listType"
      :limit='limit'
      :show-file-list='showFileList'
      :before-upload="handleBeforeUpload"
      :on-preview="handlePreview"
      :on-change="onChange"
      :on-remove="handleRemove"
      :on-success="uploadSuccess"
      :on-exceed="uploadAvatarExceeded"
      :file-list="fileListInner"
      :data="data">

      <i class="el-icon-plus"></i>
      <div slot="tip" class="el-upload__tip">
        只能上传jpg/png文件，且不超过10MB
      </div>
    </el-upload>
  </div>

</template>

<script>
  export default {
    name: "CommonUploadImage",
    props: {
      data:{
        type:Object,
        required: false,
        default: function () {
          return {}
        }
      },
      action: {
        type: String,
        required: true,
        default: ''
      },
      listType: {
        type: String,
        required: false,
        default: 'picture-card'
      },
      limit: {
        type: Number,
        required: false,
        default: 1
      },
      showFileList: {
        type: Boolean,
        required: false,
        default: true
      },
      fileList: {
        type: Array,
        required: false,
        default: []
      },
      imageUrlSubfix: {
        type: String,
        required: false,
        default: '-style_100x100'
      }
    },
    data() {
      return {
        portraitParams: {
          bucketName: 'funyvalley',
          folderName: 'icon'
        },
        // fileList: []
      }
    },
    computed: {
      fileListInner: {
        get() {
          return this.fileList.map((item, index) => {
            return {
              name: index,
              url: item + this.imageUrlSubfix
            }
          });
        },
        set(val) {
          this.$emit("update:fileList", val);
        }
      }
    },
    watch: {
      fileList(value) {

        // this.fileListInner=value.map((item, index) => {
        //   return {
        //     name: index,
        //     url: item + this.imageUrlSubfix
        //   }
        // });
        // console.log(this.fileListInner)
        // debugger

      }
    },
    mounted() {

    },
    methods: {
      handleBeforeUpload(file) {
        console.log(file)
        let suffixDictionary = ['jpg', 'jpeg', 'png'];
        let index1 = file.name.lastIndexOf('.') + 1;
        let index2 = file.name.length;
        let fileSuffix = file.name.substring(index1, index2);
        if (suffixDictionary.filter(item => item === fileSuffix).length === 0) {
          this.$message({
            message: '文件必须为' + suffixDictionary.join('、') + '类型文件',
            type: 'error'
          });
          return false;
        }
        if (file.size > 1024 * 1024 * 2) {
          this.$message({
            message: '文件不得大于2M',
            type: 'error'
          });
          return false;
        }
        this.loading = true;
        this.$emit('before-upload', '');

      },
      handlePreview(file) {
        console.log(file);
        this.fileListInner.push(file);
        this.$emit('on-preview', this.fileListInner);

      },
      handleRemove() {
        this.$emit('on-remove', '');
      },
      uploadSuccess(response) {
        this.$emit('uploadSuccess', response);
      },
      uploadAvatarExceeded(files, fileList) {
        this.$emit('on-exceed', '');


      },
      onChange(file, fileList){
        console.log(fileList)
      }

    }

  }
</script>

<style scoped>

</style>
