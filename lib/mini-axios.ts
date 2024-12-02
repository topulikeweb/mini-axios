import AxiosRequest from "./core/axiosRequest"
import {
  AxiosRequestConfig,
  HybridInstance,
  OnFulfilledMethod,
  OnRejectedMethod
} from "./type"
import defaults from './default/defaults'
import {mergeConfig} from "./tool"
import {InterceptorManager} from "./core/interceptorManager"

class MiniAxios {
  defaults: Record<string, any>
  AxiosRequest
  interceptors = {
    request: new InterceptorManager<AxiosRequestConfig>(),
    response: new InterceptorManager<any>()
  }

  constructor(defaults: AxiosRequestConfig) {
    this.AxiosRequest = AxiosRequest
    this.defaults = defaults
  }

  // 拦截器逻辑
  request(config: AxiosRequestConfig) {

    let requestChain: Array<{
      onFulfilled?: OnFulfilledMethod<any> | undefined;
      onRejected?: OnRejectedMethod | undefined;
    }> = [];

    let responseChain: Array<{
      onFulfilled?: OnFulfilledMethod<any> | undefined;
      onRejected?: OnRejectedMethod | undefined;
    }> = []

    // 用户在调用的时候，会将拦截器函数放入handlers数组中，源码中需要遍历出来然后放入队列中
    this.interceptors.request.forEach((interceptor) => {
      requestChain.push(interceptor)
    })


    this.interceptors.response.forEach(interceptors => {
      responseChain.unshift(interceptors)
    })

    let chain = [...requestChain, ...responseChain]

    let promise = Promise.resolve(config)

    while (chain.length !== 0) {
      const {onFulfilled, onRejected} = chain.shift()!;
      promise = promise.then(onFulfilled, onRejected)
    }

    return promise
  }


  // get 请求
  get(config: AxiosRequestConfig) {
    config = mergeConfig(defaults, config)
    return AxiosRequest({...config, method: 'GET'})
  }

  // post 请求
  post(config: AxiosRequestConfig) {
    config = mergeConfig(defaults, config)
    return AxiosRequest({...config, method: 'POST'})
  }
}

function createInstance(defaultConfig: AxiosRequestConfig) {
  const context = new MiniAxios(defaultConfig);
  const instance = context.AxiosRequest.bind(context);

  // 将类原型上的方法绑定到 instance
  Object.getOwnPropertyNames(MiniAxios.prototype).forEach((key) => {
    if (key !== "constructor") {
      const typedKey = key as keyof MiniAxios;
      if (typeof context[typedKey] === "function") {
        // @ts-ignore
        instance[typedKey] = context[typedKey].bind(context)
        ;
      }
    }
  });

  // 复制实例上的属性
  Object.entries(context).forEach(([key, value]) => {
    // @ts-ignore
    instance[key] = value;
  });

  return instance;
}


const miniAxios: HybridInstance = createInstance(defaults)

export default miniAxios
