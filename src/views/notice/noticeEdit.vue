<template xmlns="">
  <el-container class="management-dashboard-container">
    <el-container class="common-maincontent-wrapper">
      <el-main class="common-notice-wrapper">
        <el-card class="noticeedit" :body-style="{padding:'5px'}">
          <div slot="header">
            <el-row :gutter="20">
              <el-col :span="24">
                <el-form ref="editNoticeFromTitle" :model="formData.notice"
                         :rules="rules"
                         label-width="100px"
                         size="small">
                  <el-form-item label="标题" prop="noticeTile">
                    <el-input v-model="formData.noticeTile"></el-input>
                  </el-form-item>
                  <el-form-item label="设备类型" prop="title">
                    <el-select v-model="formData.deviceType">
                      <el-option v-for="item in $store.state.app.deviceType" :value="item.code" :label="item.name"
                                 :key="item.code"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
          </div>
          <div class="management-noticeedit-wrapper" :style="{height:layoutHeight-190+'px'}">

            <el-form ref="editNoticeFromContent"
                     :model="formData.content"
                     :rules="rules"
                     label-width="0"
                     size="small">
              <el-form-item label="" prop="content">
                <!--<CommonTinyMCE :value="formData.noticeContent.content"-->
                <!--v-model="formData.noticeContent.content"-->
                <!--:config='editorConfig'-->
                <!--/>-->
                <CommonSimditor :config="simditorConfig" :editorContent="formData.noticeContent" @change="changeEditorContent"/>

              </el-form-item>
            </el-form>
          </div>
          <el-row class="footer">
            <el-col class="operator-wrapper" :span="15">
              <el-button class="" type="primary" size="small" @click="publish">发布</el-button>
              <el-button class="" type="info" size="small" @click="cancelEdit">取消</el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-main>

    </el-container>
  </el-container>
</template>

<script>
  import CommonWangEditor from '@/views/common/CommonWangEditor.vue'
  import CommonSimditor from '@/views/common/CommonSimditor.vue'
  // import noticeMockData from '../../../static/mock/noticeDetail.json'

  export default {
    name: "dashboard",
    components: {
      CommonSimditor
    },
    data() {
      return {
        queryNoticedetailRequest: 'notice-service/1.0.0/queryNoticedetail',
        updateNoticeRequest: 'notice-service/1.0.0/updateNotice',
        loading: false,
        submitting: false,
        activated: false,
        expandQuery: false,
        defaultProps: {
          children: 'children',
          label: 'label'
        },
        noticeDetailData: {},
        editorConfig: {
          height: Number(this.$store.state.layoutHeight - 290)
        },
        formData: {
          deviceType: '',


        },
        simditorConfig:[],
        rules: {
          title: [{
            required: true,
            message: '请输入标题',
            trigger: 'change'
          }],
          content: [{
            required: true,
            message: '公告内容不能为空',
            trigger: 'change'
          }],

        },
      };
    },
    computed: {
      noticeId() {
        return this.$route.query.noticeId;
      },
      layoutHeight() {
        return this.$store.state.layoutHeight;
      },
      tableHeight() {
        let height = {};
        if (this.currentUserType !== '1') {
          height = {
            height: this.$store.state.layoutHeight - 280 + 'px'
          }
        } else {
          height = {
            height: this.$store.state.layoutHeight - 170 + 'px'
          }
        }
        return height
      },
      currentUserType() {
        return this.$store.state.personalProfile.user.userType;
      }
    },
    watch: {
      queryDateRange(value) {

      }
    },
    mounted() {
      this.activated = true;
      this.getDetailData();
      setTimeout(()=>{
        this.simditorConfig=[
          'title',
          'bold',
          'italic',
          'underline',
        ]
      },500)
    },
    methods: {
      initTinyMCE() {
        tinymce.init({
          selector: 'textarea'
          //or
          // target: document.querySelector('textarea')
        });

      },
      getDetailData() {
        console.log(this.noticeId)
        this.$http.post(this.$baseUrl + this.queryNoticedetailRequest, {
          "id": Number(this.$route.query.id),
          "deviceType": this.$route.query.deviceType
        }).then(response => {
          console.log(response)
          response = response.resultlist[0];
          this.formData.noticeContent = response.content;

        })
      },
      publish() {
        this.$refs['editNoticeFromTitle'].validate(valid1 => {
          if (valid1) {

          }
        });
      },
      cancelEdit() {
        this.$confirm('确认取消编辑？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({
            name: 'notice'
          });
          this.$message({
            message: '已取消编辑'
          });
        });

      },
      changeEditorContent(data) {
        this.formData.noticeContent.content = data
      }
    }
  }

</script>
