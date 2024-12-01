import MiniAxios from "./mini-axios";

type RequireMethod = 'GET' | 'POST'
type Adapter = (config: AxiosRequestConfig) => Promise<AxiosResponseConfig>


export type OnFulfilledMethod<T> = (config: T) => T | Promise<T>
export type OnRejectedMethod = (error: any) => any

export type keyFn = 'onFulfilled' | 'onRejected'
export type HybridInstance = ((config: AxiosRequestConfig) => any) & MiniAxios

export interface AxiosRequestConfig {
  url?: string;
  method?: Method;
  baseURL?: string;
  headers?: Record<string, any>;
  params?: Record<string, any>;
  data?: any;
  timeout?: number;
  responseType?: 'json' | 'text' | 'blob' | 'arraybuffer';
  adapter?: Adapter
  // 用于请求前的数据转换
  transformRequest?: Array<(data: any, headers?: any) => any>;

  // 用于响应后的数据转换
  transformResponse?: Array<(data: any) => any>;

  // 其他配置项
  withCredentials?: boolean;
  validateStatus?: (status: number) => boolean;
}


export interface AxiosResponseConfig<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>
  config: AxiosRequestConfig
}
