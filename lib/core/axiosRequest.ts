import defaults from "../default/defaults"
import { buildUrl, mergeConfig } from "../tool"
import { AxiosRequestConfig, AxiosResponseConfig } from "../type"


export default function AxiosRequest(config: AxiosRequestConfig) {
    const { transformRequest, transformResponse, data, headers } = config
    return new Promise((resolve, reject) => {
        // 处理请求数据
        let requestData = data
        transformRequest?.forEach(fn => {
            requestData = fn(requestData, headers)
        })

        const request = new XMLHttpRequest()
        console.log(config)
        request.open(config.method!.toUpperCase(), buildUrl(config.url!, config.params))
        request.timeout = config.timeout!

        // 设置请求头
        Object.keys(config.headers!).forEach(item => {
            request.setRequestHeader(item, config.headers![item])
        })

        request.onreadystatechange = () => {
            if (request.readyState !== 4) {
                return
            }
            if (request.status >= 200 && request.status < 300) {
                let requestStatusText = request.responseText
                let response: AxiosResponseConfig = {
                    status: request.status,
                    data: transformResponse?.forEach(fn => {
                        requestStatusText = fn(requestStatusText)
                    }),
                    statusText: request.statusText,
                    config: config,
                    headers: request.getAllResponseHeaders().split('/n').reduce((prev, curr) => {
                        let [key, value] = curr.split(': ')
                        if (key as unknown) {
                            prev[key] = value
                        }
                        return prev
                    }, {} as Record<string, string>)
                }

                resolve(response)
            } else {
                reject(new Error('failed'))
            }
        }
    })
}




