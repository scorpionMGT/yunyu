import Cookie from 'js-cookie'

const getAuth = () => {
  const token = Cookie.get('token')
  return token ? { Authorization: 'Bearer ' + token } : null
}

export default getAuth
