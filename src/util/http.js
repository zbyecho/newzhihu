import axios from 'axios'
// axios 基础配置
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 6000;
axios.defaults.withCredentials = true

// http 拦截器
// axios.interceptors.request.use(
//   config => {
//     const token = getCookie('session');
//     config.data = JSON.stringify(config.data)
//     config.headers = {
//       'Content-type' : 'application/x-www-form-urlencoded'
//     }
//     if (token){
//       config.params = {'token': token}
//     }
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// )
// axios.interceptors.response.use(
//   response => {
//     if(response.data.errCode == 2) {
//       router.push({
//         path:'/login'
//       })
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error.response.data)
//   }
// )
export function GET(url, params = { }) {

  return new Promise((resolve, reject) => {
    this.$Loading.start();
    axios.get(url, {
      params: params
    })
      .then(response => {
        this.$Loading.finish();
        resolve(response.data);
      })
      .catch(error => {
        this.$Loading.error();
        reject(error)
      })
  })
}
  export function POST(url,data = { }) {
    return new Promise((resolve, reject) => {
      this.$Loading.start();
      axios.post(url, data)
        .then(response => {
          this.$Loading.finish();
          resolve(response.data);
        })
        .catch(error => {
          this.$Loading.error();
          reject(error)
        })
    })
}
