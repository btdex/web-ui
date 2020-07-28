
const toQueryString = json => Object.keys(json).map( k => `${k}=${encodeURIComponent(json[k])}`).join('&')

export const withQuery = jsonArgs => route => {
    return `${route}?${toQueryString(jsonArgs)}`
}

export const RouteHome = () => '/'
export const RouteAbout = () => '/about'
export const RouteTrades = () => '/trades'
export const RouteMarkets = () => '/markets'

