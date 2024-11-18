import { AxiosRequestConfig } from "../type";
// @ts-ignore
import utils from '../utils.js'
const defaults = {
    baseUrl: '',
    timeout: 0,
    method: 'get',
    headers: {
        common: {
            Accept: 'application/json, text/plain, */*'
        }
    },
    // 对请求数据转换，对于post/put
    // 数组形式方便进行链式调用
    transformRequest: [
        function (data: any, headers?: any) {
            if (
                utils.isFormData(data) ||
                utils.isArrayBuffer(data) ||
                utils.isBuffer(data) ||
                utils.isStream(data)
            ) {
                return data;
            }
            if (utils.isURLSearchParams(data)) {
                return data.toString();
            }
            if (utils.isObject(data)) {
                headers['Content-Type'] = 'application/json';
                return JSON.stringify(data);
            }
            return data;
        },
    ],
    transformResponse: [
        function (data: any) {
            try {
                data = JSON.parse(data)
                return data
            } catch {
                throw new Error('error')
            }
        }
    ]
}



export default defaults