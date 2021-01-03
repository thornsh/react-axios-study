const devBsaeURL = "https://httpbin.org"
const proBaseURL = "https://httpbin.org"

export const BASE_URL = process.env.NODE_ENV === 'development' ? devBsaeURL : proBaseURL;

export const TIMEOUT = 5000;