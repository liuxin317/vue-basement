
/**
 * 
 * @url {*请求的地址} url 
 * @method {*请求的方式，POST, GET} method 
 * @body {*请求参数} params 
 * @successBack {*成功的回调} successBack 
 * @errorBack {*失败的回调} errorBack 
 * @credentials {*请求是否带上cookie}
 * @mode {*是否允许跨域}
 */
function HttpRequest (url, { method = "POST", body = {}, successBack, errorBack = null, credentials = "omit", mode = "no-cors" } = {}) {
  let paramsArray = []

  for (let val in body) {
    paramsArray.push(`${encodeURIComponent(val)}=${encodeURIComponent(body[val])}`)
  }

  let params = paramsArray.join('&')

  fetch(url, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method,
    credentials,
    mode,
    body: params
  })
  .then(response => {
    return response.json()
  })
  .then(data => {
    successBack && successBack(data)
  })
  .catch(error => {
    errorBack && errorBack()
  })
}

export default HttpRequest;