<template>
  <div class="common-imguploadpreview-wrapper">

    <div class="common-imguploadpreview-wrapper" v-for="item in innerFileList">
      <a v-if="innerFileList.length!==0" class="close">
        <span class="iconfont icon-crosswide"></span>
      </a>
      <div v-if="innerFileList.length===0">
        暂无图片
      </div>
      <div v-else v-for="(item, index) in innerFileList" class="image-item">
        <img :src="$checkOSS(item.url, '-style_100x100')" class="avatar"/>
        <ul class="operator">
          <li>
            <a class="el-icon-delete" @click="deleteImage(index)"></a>
          </li>
        </ul>
      </div>
    </div>

    <el-upload
      ref="uploadAvatar"
      :action="action"
      :limit='limit'
      :show-file-list='showFileList'
      :before-upload="handleBeforeUpload"
      :on-preview="handlePreview"
      :on-change="onChange"
      :on-remove="handleRemove"
      :on-success="uploadSuccess"
      :on-exceed="uploadAvatarExceeded"
      :file-list="fileListInner"
      :data="params">

      <el-button v-waves size="small" type="primary">点击上传</el-button>
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
      params: {
        type: Object,
        required: false,
        default: function () {
          return {
            bucketName: 'funyvalley',
            folderName: 'icon'
          }
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
        default: 'text'
      },
      limit: {
        type: Number,
        required: false,
        default: 1
      },
      // showFileList: {
      //   type: Boolean,
      //   required: false,
      //   default: false
      // },
      // fileList: {
      //   type: Array,
      //   required: false,
      //   default: []
      // },
      // pushFile: {
      //   type: Array,
      //   required: false,
      //   default: []
      // },
      imageUrlSubfix: {
        type: String,
        required: false,
        default: '-style_100x100'
      },
      previewUrl: {
        type: String,
        required: false,
        default: ''
      },
      newFile: {
        type: String,
        required: false,
        default: ''
      }
    },
    data() {
      return {
        portraitParams: {
          bucketName: 'funyvalley',
          folderName: 'icon'
        },
        fileList: [],
        innerFileList: [],
        showFileList: false
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

      },
      newFile(value) {
        console.log(value)
        let valueArr = [];
        if (typeof value ==='string') {
          valueArr.push(value)
        }
        console.log(valueArr)
        valueArr.forEach((item, index) => {
          this.$set(this.innerFileList, index, {
            name: this.innerFileList.length,
            url: item
          })
        });
        this.$emit('return-file-list', this.innerFileList);
        console.log(this.innerFileList)
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
        // this.loading = true;
        this.showFileList = true;
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
        this.showFileList = false;
        // this.$emit('upload-success', response);
        this.$emit('push-file', response);
      },
      uploadAvatarExceeded(files, fileList) {
        this.$emit('on-exceed', '');


      },
      onChange(file, fileList) {
        console.log(fileList)
      },
      deleteImage(index) {
        this.fileList.splice(index, 1);
        this.$emit('on-delete', '');
      },

    }

  }
</script>

<style scoped>

</style>
