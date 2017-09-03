import restApi from '../shared/restApi';

/**
 * Get
 * @param -
 */
exports.getBuildings = function(_params) {

  var params = {
    url: "https://randomuser.me/api/?page=" + 1 + "&results=20",
    httpObj: {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      //body:JSON.stringify({page: _params && _params.page ? _params.page : 1})
    }


  }

  return restApi.httpCall(params);
};

/**
 * Making http call
 * @param - params{object}:url{string}, method{string}, headers{object}, body{object}
 */
 /*
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
*/
