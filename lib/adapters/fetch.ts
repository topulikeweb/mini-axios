import { buildUrl } from "../tool";
import { AxiosRequestConfig, AxiosResponseConfig } from "../type";

function fetchAdapter(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
        const fetchUrl = buildUrl(config.url!, config.data!)
        return fetch(fetchUrl, {
            method: config.method,
            headers: config.headers,
            body: config.data ? JSON.stringify(config.data) : undefined
        }).then(response => {
            const data = JSON.stringify(response)
            resolve({
                data,
                status: response.status,
                statusText: response.statusText,
                ...config
            })
        }).catch(error => {
            reject(error)
        })
    })
}
export default fetchAdapter