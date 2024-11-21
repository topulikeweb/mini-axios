import adapters from "../adapters/adapters"
import { AxiosRequestConfig, AxiosResponseConfig } from "../type"


export default function AxiosRequest(config: AxiosRequestConfig) {
    return adapters(config)
}



