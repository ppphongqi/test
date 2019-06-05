import axios from 'axios';

axios.defaults.withCredentials=true;

export default function ajax (url ,data={},type='GET'){

    return new Promise(  (resolve,reject) => {


        let promise;

        if(type === 'GET'){

        let dataStr = '';
        Object.keys(data).forEach( key => {
            dataStr += key + '=' + data[key] + '&'
        });

        if(dataStr !== ''){
            dataStr = dataStr.substring( 0, dataStr.lastIndexOf('&'));

            url = url + '?' + dataStr
        }
            // 发送get请求
            promise = axios.get(url)
        }else{
            // 发送post请求
            promise = axios.post(url,data)
        }


        promise.then(function(response){
            // 成功的调用了resolve（）
            resolve(response.data)

        }).catch(function(error){
            // 失败了调用resolve（）
            reject(error);
            console.log('失败呀')
        })

    })

}
