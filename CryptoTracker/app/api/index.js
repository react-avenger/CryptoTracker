import ApiConstants from './ApiConstants';
export default function api(path, params, method, token) {
  let options;
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-messari-api-key': '98aceb64-d756-445a-b791-f6499a2a55fc',
      // ...(token && { token: token }),
    },
    method: method,
    // ...(params && { body: JSON.stringify(params) }),
  };

  return fetch(ApiConstants.BASE_URL + path, options)
    .then(resp => resp.json())
    .then(json => {
      return json;
    })
    .catch(error => console.log('API ERROR:-', error));
}
