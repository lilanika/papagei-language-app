import axios from 'axios';

const signup = (username, password, name, nativeLanguages, learningLanguages, location, age, gender, description, goal ) => {
  console.log('CHECK EROOR PASS', signup)
  return axios.
    post('/api/auth/signup', {username, password, name, nativeLanguages, learningLanguages, location, age, gender, description, goal })
    .then(response => {
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
}

const login = (username, password) => {
  console.log('STEP 2', username, password)
  return axios.
    post('/api/auth/login', { username, password })
    .then(response => {
      console.log('RESPONSE STEP', response.data)
      return response.data
    })
    .catch(err => {
      return err.response.data
    })
}

const logout = () => {
  return axios.
    delete('/api/auth/logout')
    .then(response => {
      return response.data;
    })
    .catch(err => {
      return err.response.data
    })
}

export { signup, login, logout };