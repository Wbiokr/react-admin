import axios from './axios';

export const FetchMenu = data => {
  return axios({
    method:'get',
    url:'/ames/menu/getMenuTreeList',
    params:data
  })
}