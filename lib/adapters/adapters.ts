import { AxiosRequestConfig } from "../type";
import fetchAdapter from "./fetch";
import httpAdapter from "./http";
import xhrAdapter from "./xhr";

function adapters(config: AxiosRequestConfig) {
    if (typeof fetch !== 'undefined') {
        return fetchAdapter(config); // 优先使用 fetch
    } else if (typeof XMLHttpRequest !== 'undefined') {
        return xhrAdapter(config);
    } else if (typeof process !== 'undefined') {
        return httpAdapter(config);
    } else {
        throw new Error('No suitable adapter found');
    }
}
export default adapters 