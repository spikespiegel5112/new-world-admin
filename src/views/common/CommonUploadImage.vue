<template>
  <div class="">
    <div class="common-imguploadpreview-wrapper">
      <div v-if="innerFileList.length===0">
        暂无图片
      </div>
      <a v-if="innerFileList.length!==0" class="close">
        <span class="iconfont icon-crosswide"></span>
      </a>
      <div v-for="(item, index) in innerFileList" class="image-item">

        <!--<img :src="$checkOSS(item.url, '-style_100x100')" class="avatar"/>-->
        <img v-if="checkFileType(item.url)==='image'" :src="$checkOSS(item.url, '-style_100x100')" class="avatar"/>
        <div v-else-if="checkFileType(item.url)==='word'">
          <img src="/src/img/filetype/doc2.png"/>
        </div>
        <div v-else-if="checkFileType(item.url)==='excel'">
          <img src="/src/img/filetype/xls.png"/>
        </div>
        <div v-else-if="checkFileType(item.url)==='pdf'">
          <img src="/src/img/filetype/pdf.png"/>
        </div>
        <div v-else-if="checkFileType(item.url)==='file'">
          <img src="/src/img/filetype/file.png"/>
        </div>
        <ul class="operator">
          <li :class="{disabled:disabled===true}">
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
      :file-list="innerFileList"
      :data="params"
      :disabled="disabled">

      <el-button v-waves size="small" type="primary" :disabled="disabled">点击上传</el-button>
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
      },
      multiple: {
        type: Boolean,
        required: false,
        default: false
      },
      returnUrlList: {
        type: String,
        required: false,
        default: ''
      },
      disabled: {
        type: Boolean,
        required: false,
        default: false
      },
      fileType: {
        type: String,
        required: false,
        default: ''
      },
    },
    data() {
      return {
        portraitParams: {
          bucketName: 'funyvalley',
          folderName: 'icon'
        },
        fileList: [],
        innerFileType: '',
        innerFileList: [],
        showFileList: false,
        fileTypeDictionary: [{
          name: 'image',
          suffixList: ['jpg', 'jpeg', 'png']
        }, {
          name: 'excel',
          suffixList: ['csv', 'xls', 'xlsx']
        }, {
          name: 'word',
          suffixList: ['doc']
        }, {
          name: 'pdf',
          suffixList: ['pdf']
        }]
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
      },
    },
    watch: {
      fileList(value) {

      },
      newFile(value) {
      },
      returnUrlList(value) {
        console.log(value)
        this.updateFile(value)

      },
    },

    mounted() {
      this.updateFile(this.returnUrlList);
      // this.fileType = '';
    },
    methods: {
      updateFile(value) {
        // console.log(value)
        let valueArr = [];
        if (typeof value === 'string' && value !== '' && value !== null) {
          valueArr.push(value)
          // debugger
        }
        this.innerFileList = [];
        // console.log(valueArr)
        valueArr.forEach((item, index) => {
          this.$set(this.innerFileList, index, {
            name: this.innerFileList.length,
            url: item,
            type: this.fileTypeDictionary.filter(item2 => item2 === this.checkFileType(item)).name
          })
        });

        this.$emit('update:return-file-list', this.innerFileList);
        this.updateUrlList();
        // console.log(this.innerFileList)
      },
      updateUrlList() {
        if (this.multiple) {
          this.$emit('update:returnUrlList', this.innerFileList.map(item => {
            return item.url;
          }))
        } else {
          if (this.innerFileList.length === 0) {
            this.$emit('update:returnUrlList', '')
          } else {
            this.$emit('update:returnUrlList', this.innerFileList.map(item => {
              return item.url;
            })[0])
          }

        }
        // console.log(this.innerFileList.map(item => {
        //   return item.url;
        // })[0])
      },
      handleBeforeUpload(file) {
        console.log('handleBeforeUpload', file)
        let suffixDictionary = ['jpg', 'jpeg', 'png'];

        let currentFileType = '';


        if (this.fileType !== this.checkFileType(file.name) && this.fileType !== '') {
          this.$message({
            message: '文件必须为' + this.fileTypeDictionary.filter(item => item.name === this.checkFileType(file.name))[0].suffixList.join('、') + '类型文件',
            type: 'error'
          });
          return false;
        }
        // if (suffixDictionary.filter(item => item === fileSuffix).length === 0) {
        //   this.$message({
        //     message: '文件必须为' + suffixDictionary.join('、') + '类型文件',
        //     type: 'error'
        //   });
        //   return false;
        // }
        if (file.size > 1024 * 1024 * 2) {
          this.$message({
            message: '文件不得大于2M',
            type: 'error'
          });
          return false;
        }
        this.showFileList = true;
        this.$emit('before-upload', '');

      },
      handlePreview(file) {
        console.log(file);
        this.fileListInner.push(file);
        this.$emit('on-preview', this.fileListInner);

      },
      handleRemove() {
        if (!this.disabled) {
          this.$emit('on-remove', '');
        }
      },
      uploadSuccess(response) {
        this.showFileList = false;
        this.$emit('on-success', response);
      },
      uploadAvatarExceeded(files, fileList) {
        this.$emit('on-exceed', '');
        this.$message({
          message: `当前上传模块最多接受${this.limit}个文件，请删除已上传文件重新上传`,
          type: 'error'
        });
      },
      onChange(file, fileList) {
        console.log(fileList)
      },
      deleteImage(index) {
        if (!this.disabled) {
          this.innerFileList.splice(index, 1);
          console.log(this.innerFileList)
          console.log(this.innerFileList.length)
          this.updateUrlList();
          this.$emit('update:return-file-list', this.innerFileList);
        }

      },
      checkFileType(url) {

        let index1 = url.lastIndexOf('.') + 1;
        let index2 = url.length;
        let resultFileType = '';
        let fileSuffix = url.substring(index1, index2);

        let fileTypeMatchFlag = false;
        this.fileTypeDictionary.forEach((item1, index1) => {
          item1.suffixList.forEach((item2, index2) => {
            if (item2 === fileSuffix) {
              resultFileType = this.fileTypeDictionary[index1].name;

              fileTypeMatchFlag = true;
            }
          });
          if (!fileTypeMatchFlag && index1 === this.fileTypeDictionary.length - 1) {
            resultFileType = 'file';
          }
        });
        return resultFileType;
      }

    }

  }
</script>

<style scoped>

</style>
