import {baseUrl} from "../config";
import axios from 'axios'
import {getAcessToken} from '../api/auth'; 

let headers = { 
       'Accept': 'application/json',
       'Content-Type':'application/json'
  } 
let client = axios.create({ 
  baseURL:baseUrl, 
  headers,
  withCredentials:false   
})
client.interceptors.request.use(async (config) => {
  let token = await getAcessToken().then(token => token).catch(err => false);
  
  config.headers['Authorization'] = `Bearer ${token}`;

  console.log("CONFIG ", config);
  return config    
});


// client.interceptors.response.use( async function  (response) {
//   // let session_key =false
//   let session_key = await _getSessionToken().then(session_key=>session_key).catch(err=>false);
//   if(session_key === false){
//    await _setSessionToken(response.headers.session_key)   
//   }
//   // console.log("----response----",response)
//   return response.data;
// }, function ({response}) { 
//   return Promise.reject({status:response.status,...response.data});
// });  

export default {
  get: async function(url,data){
    return new Promise((resolve,reject)=>{
      client.get(url,{params:data}).then(res => {
          resolve(res)
      }).catch(error => { 
          reject(error);
      })
    })
  },
  post: async function(url,data){
    return new Promise((resolve,reject)=>{
      client.post(url,data).then(res => {
          resolve(res)
      }).catch(error => {
          reject(error)
      })
    })
  },
  put: async function(url,data){
    return new Promise((resolve,reject)=>{
      client.put(url,data).then(res => {
          resolve(res)
      }).catch(error => {
          reject(error)
      })
    })
  },
  delete: async function(url,data){
    return new Promise((resolve,reject)=>{
      client.delete(url,data).then(res => {
          resolve(res)
      }).catch(error => {
          reject(error)
      })
    })
  }
}