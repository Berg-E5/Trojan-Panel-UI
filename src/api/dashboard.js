import request from '@/utils/request'

/**
 * 仪表板
 * @param data
 * @returns
 */
export function panelGroup(data) {
  return request({
    url: '/dashboard/panelGroup',
    method: 'get',
    params: data
  })
}

/**
 * 流量排行榜
 * @param data
 * @returns
 */
export function trafficRank(data) {
  return request({
    url: '/dashboard/trafficRank',
    method: 'get',
    params: data
  })
}

/**
 * 用户统计
 * @returns
 */
export function userStats() {
  return request({
    url: '/statistics/userStats',
    method: 'get'
  })
}

/**
 * 流量统计
 * @returns
 */
export function trafficStats() {
  return request({
    url: '/statistics/trafficStats',
    method: 'get'
  })
}

/**
 * 节点统计
 * @returns
 */
export function nodeStats() {
  return request({
    url: '/statistics/nodeStats',
    method: 'get'
  })
}

/**
 * 协议分布统计
 * @returns
 */
export function protocolStats() {
  return request({
    url: '/statistics/protocolStats',
    method: 'get'
  })
}
