import { AxiosRequestConfig } from "./type"
import AxiosRequest from "./core/axiosRequest"

/**
 * @param url string
 * 补全url
 */
export function buildUrl(url: string, params: Record<any, any> = {}) {
    const query = Object.keys(params).map(item => {
        `${encodeURIComponent(item)}=${encodeURIComponent(params[item])}`
    }).join('&')
    return `${url}${query}`
}
/**
 * 合并config
 * @param config1 用户传递的config
 * @param config2 默认的config 
 * @returns 
 */

export function mergeConfig(config1: AxiosRequestConfig, config2: AxiosRequestConfig) {
    config2 = config2 || {}
    const mergeMap = {
        url: config2.url || config1.url, // 接口
        method: config2.method || config1.method, // 请求方法
        data: config2.data || config1.data, // 请求数据
        params: config2.params || config1.params, // 请求参数
        Headers: config2.headers || config1.headers
        // adapter: config2.adapter || config1.adapter, // 适配器
        // transformRequest: config2.transformRequest || config1.transformRequest, // 请求数据转换
        // transformResponse: config2.transformResponse || config1.transformResponse, // 响应数据转换
        // cancelToken: config2.cancelToken || config1.cancelToken, // 取消请求
        // validateStatus: config2.validateStatus || config1.validateStatus // 有效状态码
    };
    const mergeConfig = {}
    Object.keys(mergeMap).forEach((item) => {
        const key = item as keyof typeof AxiosRequest;
        if (mergeMap[key] !== undefined) {
            mergeConfig[key] = mergeMap[key];
        }
    });
    return mergeConfig
}
