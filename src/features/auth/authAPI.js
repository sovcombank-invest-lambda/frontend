const URL = 'https://hack.invest-open.ru'

function handleResponse(response) {
  if (!response.ok) {
    throw response
  }
  return response.json()
}

export function authorizationRequest({ login, password }) {
  return fetch(URL + '/auth', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login,
      password: password,
    }),
  }).then(handleResponse)
}

export function checkAuthorizationTokenRequest(token) {
  return fetch(URL + '/jwt/verify', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      jwt: token,
    }),
  }).then(handleResponse)
}
