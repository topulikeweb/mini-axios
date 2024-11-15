type RequireMethod = 'GET' | 'POST'

export interface AxiosRequestConfig {
    method?: RequireMethod;
    url?: string;
    params?: any;
    timeout?: number;
    headers?: Record<string, string>;
    baseUrl?: string;
    data?: any
}

export const defaultConfig = {
    method: 'GET',
    url: 'https:8080'
}

export interface AxiosResponseConfig<T = any> {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>
    config: AxiosRequestConfig
}