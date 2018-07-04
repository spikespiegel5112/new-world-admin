import Vue from 'vue'

import axios from 'axios'

import 'normalize.css/normalize.css'// A modern alternative to CSS resets

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment';

// import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n

import '@/styles/index.scss' // global css

import App from './App'
import router from './router/router'
import {
  menu,
  layout,
  content,
  header,
  sider,
  row,
  col,
  form,
  input,
  select,
  icon,
  datePicker,
  morePanel
} from 'vue-beauty'
import 'vue-beauty/package/style/vue-beauty.min.css'

import store from './store/store'
import i18n from './lang' // Internationalization

import util from './utils/util';
import '@/icons' // icon
import '@/permission' // permission control
import waves from '@/directive/waves' // 水波纹指令
Vue.use(waves);

Vue.use(ElementUI, {
  size: 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
});
// Vue.use(menu);
Vue.use(layout);
Vue.use(row);
// Vue.use(col);
// Vue.use(form);
// Vue.use(form.item);
// Vue.use(input);
// Vue.use(select);
// Vue.use(content);
// Vue.use(header);
Vue.use(sider);
Vue.use(icon);
Vue.use(datePicker);
Vue.use(morePanel);

Vue.use(util);

// Vue.use(ElementUI, { locale })

Vue.config.productionTip = false;

Vue.prototype.$http = axios;
Vue.prototype.$moment = moment;
Vue.prototype.$moment.locale('zh-cn');

Vue.prototype.$prodBaseUrl = 'http://gateway.zan-qian.com/';
Vue.prototype.$baseUrl = process.env.NODE_ENV === 'production' ? 'http://gateway.zan-qian.com/' : 'http://testgate.zan-qian.com/';

Vue.prototype.$baseUrl = process.env.NODE_ENV === 'production' ? 'http://gateway.zan-qian.com/' : 'http://testgate.zan-qian.com/';

// Vue.prototype.$baseUrl = process.env.NODE_ENV === 'production' ? 'http://gateway.zan-qian.com/' : 'http://gateway.zan-qian.com/';
// Vue.prototype.$baseUrl = process.env.NODE_ENV === 'production' ? '/' : 'http://192.168.1.112:9002/';

import CommonUploadImage from './components/CommonUploadImage.vue'

Vue.component('CommonUploadImage', CommonUploadImage);


new Vue({
  el: '#app',
  router,
  store,
  i18n,
  template: '<App/>',
  components: { App }
})
