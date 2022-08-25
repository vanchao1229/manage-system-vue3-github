import { API_BASE_URL, IS_PROD, API_URI_CONFIG } from '@/config'

const uriProd = (uri:Record< string, string >): Record< string, string > => {
  for (const k in uri) {
    uri[k] = uri[k].substring(0, uri[k].lastIndexOf('.'))
  }
  return uri
}

const API_URI = IS_PROD ? uriProd(API_URI_CONFIG) : API_URI_CONFIG

const API_LIST = {
  login: API_BASE_URL + API_URI.login,
  auth: API_BASE_URL + API_URI.auth,
  data_01: API_BASE_URL + API_URI.data_01,
  test: API_BASE_URL + API_URI.test
}

export {
  API_LIST
}
