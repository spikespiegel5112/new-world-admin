import Cookies from 'js-cookie'
import request from '@/utils/request'
import {VueInstance} from "../../main";

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    actionType: [{
      name: 'native',
      code: 'native'
    }, {
      name: 'url',
      code: 'url'
    }],
    bountyType: [{
      name: '趣豆 ',
      code: 1
    }, {
      name: '积分',
      code: 0
    }],
    deviceTypeDictionary: [{
      name: '安卓',
      code: 'android'
    }, {
      name: '苹果',
      code: 'ios'
    }],
    noticeTypeDictionary: [{
      name: '视频',
      code: 1
    }, {
      name: '视频',
      code: 2
    }, {
      name: '版本更新',
      code: 3
    }, {
      name: '菠菜公告',
      code: 4
    }, {
      name: '排行榜公告',
      code: 5
    }, {
      name: '未知类型',
      code: 6
    }]
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    }
  },
  actions: {
    ToggleSideBar: ({commit}) => {
      commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar({commit}, {withoutAnimation}) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice({commit}, device) {
      commit('TOGGLE_DEVICE', device)
    },
    updateShelfStatus({commit}, options) {
      let updateShelfStatusRequest = 'task-service/1.0.0/task/bk/changeStatus/ ' + options.id + '/' + options.isShow + '';

      return new Promise((resolve, reject) => {
        request.post(VueInstance.$baseUrl + updateShelfStatusRequest).then(response => {
          VueInstance.$message({
            message: "操作成功",
            type: "success"
          });
          resolve();
        }).catch(errpr => {
          VueInstance.$message({
            message: "操作失败",
            type: "error"
          });
          reject();
        })
      });

    }
  }
};

export default app
