import request from '../utils/request'

export default {
  pageList(page, limit){
    return request({
      url: `/edu/frontCourse/pageListCourse/${page}/${limit}`,
      method: 'get'
    })
  },
  getCourseInfo(id){
    return request({
      url: `/edu/frontCourse/getById/${id}`,
      method: 'get'
    })
  }
}
