import request from '../utils/request'

export default {
  pageList(page, limit){
    return request({
      url: `/edu/frontTeacher/pageList/${page}/${limit}`,
      method: 'get'
    })
  },
  getTeacherInfo(id){
    return request({
      url: `/edu/frontTeacher/getTeacherAndCourse/${id}`,
      method: 'get'
    })
  }
}
