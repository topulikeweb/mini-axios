import adapters from "../adapters/adapters";
import { AxiosRequestConfig } from "../type";
import miniAxios from "../mini-axios";


/**
 * 调度请求
 *
 * @export
 * @param {AxiosRequestConfig} config
 * @return {*}
 */
export default function AxiosRequest(config: AxiosRequestConfig): any {
  return miniAxios.request(config).then((processedConfig:AxiosRequestConfig) => {
    // 经过拦截器处理后的配置，传递给适配器
    return adapters(processedConfig);
  });
}
