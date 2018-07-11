<template>
  <div class="editor" ref="editor">
    <div id="editor"></div>
    <!--<button v-on:click="getContent">查看内容</button>-->
  </div>
</template>

<script>
  import Simditor from 'simditor'

  export default {
    props: {
      editorContent: {
        type: String,
        default: '',
        required: false
      },
      imageServer: {
        type: String,
        default: '',
        required: false
      },
      config: {
        type: Array,
        default: [
          'title',
          'bold',
          'italic',
          'underline',
          'strikethrough',
          'fontScale',
          'color',
          'ol',             // ordered list
          'ul',             // unordered list
          'blockquote',
          'code',           // code block
          'table',
          'link',
          'image',
          'hr',             // horizontal ruler
          'indent',
          'outdent',
          'alignment'
        ],
        required: false
      }
    },
    data() {
      return {
        editorInstance: {},
        editorContentInner: ''
      }
    },
    computed: {
      layoutHeight() {
        return this.$store.state.layoutHeight;
      },
      editorStyle() {
        return {
          height: this.$store.state.layoutHeight - 260 + 'px',
        }
      }
    },
    watch: {
      editorContent(value) {
        console.log(value)
        this.editorInstance.setValue(value);
      },
      config(value){
        console.log(value)
        this.editorInstance = new Simditor({
          textarea: $('#editor'),
          toolbar:value
        });

      },
      layoutHeight(value) {

      }
    },
    mounted() {
      this.editorInstance = new Simditor({
        textarea: $('#editor'),

      });


      this.getHeight();

    },
    methods: {
      getContent() {

      },
      getHeight() {
        // document.querySelectorAll('.w-e-text-container')[0].style.height = this.layoutHeight - 260 + 'px'
      }
    }
  }
</script>
<style lang="css">
  /*@import 'simditor/styles/simditor.css';*/
</style>
<style lang="scss">
  /*@import 'simditor/styles/simditor.scss';*/
  /*@import 'simditor/styles/fonticon.scss';*/
  /*@import 'simditor/styles/editor.scss';*/

</style>
