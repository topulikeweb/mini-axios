import { buildUrl } from "../tool";
import { AxiosRequestConfig } from "../type";

function fetchAdapter(config: AxiosRequestConfig) {
    return new Promise((resolve, reject) => {
        const fetchUrl = buildUrl(config.url!, config.data!)
        return fetch(fetchUrl, {
            method: config.method,
            headers: config.headers,
            body: config.data ? JSON.stringify(config.data) : undefined
        }).then(response => {
            return response.json().then(data => {
                resolve({
                    data,
                    status: data.status,
                    statusText: response.statusText,
                    url: response.url,
                    headers: response.headers,
                    method: config.method,
                    ...config
                })
            })
        }).catch(error => {
            reject(error)
        })
    })
}
export default fetchAdapter