import request from '../utils/request'

export default {
  getPlayAuth(vid){
    return request({
      url: `/video/getPlayAuth/${vid}`,
      method: 'get'
    })
  }
}
