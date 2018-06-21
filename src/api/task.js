import request from '@/utils/request'

/**
 * 获取试玩下载列表
 */
export function getTryPlayList(params) {
  return request({
    url: '/task-service/1.0.0/task/getalltasklist/13120998513/1',
    method: 'get',
    params
  })
}

/**
 * 获取 银行办卡列表
 */
export function getBankCardList(params) {
  return request({
    url: '/task-service/1.0.0/cardtask/getalltasklist/13120998513/1',
    method: 'get',
    params
  })
}

/**
 * 获取 注册赚钱任务列表
 */
export function getResterList(params) {
  return request({
    url: '/task-service/1.0.0/register/getalltasklist/13120998513/1',
    method: 'get',
    params
  })
}