interface Params {
  token: string
}
export const setToken = (params: Params) => {
  return {
    type: 'SET_TOKEN',
    token: params.token,
  }
}
