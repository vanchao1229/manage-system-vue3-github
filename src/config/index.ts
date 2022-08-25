// API base url
let API_BASE_URL = 'http://localhost:3500/' as string

const IS_PROD = false as boolean

if (IS_PROD) {
  API_BASE_URL = 'http://api01.vanchao.com/'
}

const API_URI_CONFIG = {
  login: 'login.php',
  auth: 'auth.php',
  data_01: 'data/data_01.php',
  test: 'test.php'
}

export {

  API_BASE_URL,

  IS_PROD,

  API_URI_CONFIG

}
