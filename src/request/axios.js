import axios from 'axios'
// import formatParams from '../utils/formData';
axios.defaults.method = 'post';
axios.defaults.baseURL = window.config && window.config.apiHost;
axios.defaults.transformRequest = [(data={},res) =>{
  return formatParams(Object.assign({},data,{
    access_token:sessionStorage.token||''
  }))
} 
];

const {
  message,
  notification
} = antd;

const formatParams = (data) => {
  var arr = [];
  for (var name in data) {
    arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
  }
  arr.push(("v=" + Math.random()).replace(".", ""));
  return arr.join("&");
}

axios.interceptors.request.use(res=>{
  message.loading('数据请求中...',0)
  return res;
})


axios.interceptors.response.use((res)=>{

  setTimeout(()=>{
    message.destroy();
  },500)

  
  const data = res.data ;

  if( data.code == 200  ){
    return data;
  };
  
  notification.error({
    message: '提示',
    description: data.message||'网络错误，抛出异常'
  })


  return Promise.reject(data)
  


},(err)=>{
  
  notification.error({
    message: '提示',
    description: '网络错误，抛出异常'
  })

  setTimeout(()=>{
    message.destroy();
  },500)


  return Promise.reject(err)
})


export default axios;

export const FetchLogin = data => {
  return axios({
    method:'post',
    url:'/ames/login',
    data
  })
}
