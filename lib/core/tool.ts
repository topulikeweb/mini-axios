/**
 * @param url string
 * 补全url
 */
export function buildUrl(url: string, params: Record<any, any>) {
    const query = Object.keys(params).map(item => {
        `${encodeURIComponent(item)}=${encodeURIComponent(params[item])}`
    }).join('&')
    return `${url}${query}`
}
