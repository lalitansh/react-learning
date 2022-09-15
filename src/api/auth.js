export function getUser(){
  return new Promise((resolve,reject) => {
       localStorage.getItem('user').then(res => {
         if(res)resolve(res ? JSON.parse(res):{})
          else resolve(null)         
       }).catch(err => {
           reject(err)
       });
  })
}

export function getAcessToken(){
  return new Promise((resolve,reject) => {
      getUser().then(res => {
          if(res && res.token) resolve(res.token.token);
          else resolve(false)
      }).catch(err => {
          reject(err)
      });
  })  
}
