type RequireMethod = 'GET' | 'POST'

export interface AxiosRequestConfig {
    url?: string;
    method?: Method;
    baseURL?: string;
    headers?: Record<string, any>;
    params?: Record<string, any>;
    data?: any;
    timeout?: number;
    responseType?: 'json' | 'text' | 'blob' | 'arraybuffer';

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