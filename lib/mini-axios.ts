import AxiosRequest from "./core/axiosRequest"
import { AxiosRequestConfig } from "./type"
import defaults from './default/defaults'
import { mergeConfig } from "./tool"
class MiniAxios {
    private defaults
    constructor() {
        this.defaults = defaults
    }
    // get 请求
    get(config: AxiosRequestConfig) {
        config = mergeConfig(defaults, config)
        console.log(defaults,22)
        return AxiosRequest({ ...config, method: 'GET' })
    }
    // post 请求
    post(config: AxiosRequestConfig) {
        config = mergeConfig(defaults, config)
        return AxiosRequest({ ...config, method: 'POST' })
    }
}

const miniAxios = new MiniAxios()

export default miniAxios