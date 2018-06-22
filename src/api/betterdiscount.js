import request from '@/utils/request'

/**
 * 获取好折扣商品列表
 */
export function getDiscountGoodsList(params) {
  return request({
    url: '/better-discount-service/1.0.0/queryGoodsList/0',
    method: 'get',
    params
  })
}
