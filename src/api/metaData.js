import request from '@/utils/request'


/**
 * 查询所有建筑元数据
 */
export function getMetaDataBuildListRequest(params) {
  return request({
    url: 'meta-service/1.0.0/buildings',
    method: 'get',
    params: params
  })
}

/**
 * 修改城市建筑元数据
 */
export function updateMetaDataBuildListRequest(params, body) {
  console.log(params)
  console.log(body)
  return request({
    url: `meta-service/1.0.0/buildings/${params.id}`,

    // url: `meta-service/1.0.0/buildings/${params.id}`,
    method: 'post',
    body
  })
}
