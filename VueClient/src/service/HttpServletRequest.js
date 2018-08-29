import axios from "axios";
var qs = require('qs');
import { message } from 'ant-design-vue'
export default function HttpServletRequest(options) {
    return new Promise((resolve, reject) => {
        //instance创建一个axios实例，可以自定义配置，可在 axios文档中查看详情
        const instance = axios.create({
            //所有的请求都会带上这些配置，比如全局都要用的身份信息等。
            headers: {
                'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                'Accept': 'application/json',
                'Accept': 'text/plain;',
                'mode': "cors",
            },
            //baseURL: 'https://some-domain.com/api/',
            //超时时间 30秒
            timeout: 30 * 1000,

            // 对传递给服务端的数据可以进行修改格式
            transformRequest: [function (data) {
                var parms = new URLSearchParams();
                for (const key in data) {
                    parms.append(key, data[key])
                }
                return parms;
            }],

            // 服务端返回数据可以进行格式化
            transformResponse: [function (data) {
                return data;
            }],
            responseType: 'json', // 默认的
        });
        instance(options)
            .then(response => {
                console.log(response)
                //全局统一处理数据
                if (response.status == 200) {
                    resolve(response);
                } else {
                    message.error(response.msg)
                }
            })
            .catch(error => {
                message.error(error)
                reject(error);
            });
    });
}