

/**
 * Making http call
 * @param - params{object}:url{string}, method{string}, headers{object}, body{object}
 */
var httpCall = (params) => {

  return new Promise((resolve, reject) => {
    fetch(params.url, params.httpObj).then((response) => response.json())
      .then((responseJson) => {
        resolve(responseJson);
      })
      .catch((error) => {
        reject(error);
      });
  })

}
