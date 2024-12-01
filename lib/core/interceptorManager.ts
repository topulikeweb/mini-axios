import { keyFn, OnFulfilledMethod, OnRejectedMethod } from "../type"

export class InterceptorManager<T> {
    handlers: Array<Record<keyFn, OnFulfilledMethod<T> | OnRejectedMethod>> = []

    use(onFulfilled: OnFulfilledMethod<T>, onRejected: OnRejectedMethod) {
        this.handlers.push({ onFulfilled, onRejected })
    }
    /**
     * 遍历handlers
     * @param fn
     */
    forEach(fn: (handler: { onFulfilled: OnFulfilledMethod<T>, onRejected: OnRejectedMethod }) => void) {
        for (let i = 0; i < this.handlers.length; i++) {
            const handler = this.handlers[i]; // 获取当前的拦截器
            fn(handler); // 调用传入的回调函数，对当前拦截器执行操作
        }
    }
}
