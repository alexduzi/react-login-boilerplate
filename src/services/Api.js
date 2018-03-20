import apisauce from 'apisauce';

const create = (baseURL = 'Config.API_URL') => {

  const api = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache'
    },
    timeout: 10000
  })

  // const getUsers = () => api.get('/user')

  const loginUser = (user) => api.post('/login', { ...user })

  return {
    loginUser,
    // getUsers
  }
}

export default {
  create
}
