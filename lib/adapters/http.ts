import { AxiosRequestConfig } from "../type";
import http from 'http'
import https from 'https'

function httpAdapter(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
        const { headers, data, method = 'GET' } = config
        const url = config.url!
        const isHttp = url.startsWith('http') as boolean
        const lib = isHttp ? http : https

        const option = {
            headers,
            method
        }
        const req = lib.request(url, option, (res) => {
            let responseData = ''
            res.on('data', (chunk) => {
                responseData += chunk
            })

            res.on('end', () => {
                return {
                    data: JSON.parse(responseData),
                    status: res.statusCode || 0,
                    statusText: res.statusMessage || '',
                    headers: res.headers as Record<any, any>,
                    config
                }
            })

            res.on('error', () => {
                reject()
            })
            if (data) {
                // 写入数据到请求体
                req.write(JSON.stringify(data))
            }

            req.end()
        })
    })
}
export default httpAdapter