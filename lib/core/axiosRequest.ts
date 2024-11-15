import { buildUrl } from "./tool"
import { AxiosRequestConfig, AxiosResponseConfig } from "../type"

const defaultConfig: AxiosRequestConfig = {
    url: 'http://api.example.com',
    method: 'GET'
}
function AxiosRequest(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
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
                let response: AxiosResponseConfig = {
                    status: request.status,
                    data: JSON.parse(request.responseText),
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




