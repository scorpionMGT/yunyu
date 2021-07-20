const getAuth = () => {
  const token = sessionStorage.getItem('token')
  return token ? { Authorization: 'Bearer ' + sessionStorage.getItem('token') } : null
}

export default getAuth
