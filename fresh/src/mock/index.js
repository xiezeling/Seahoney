import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import buy from './api/buy'

var mock = new MockAdapter(axios)

mock.onGet('/api/buy').reply(config => {
  return [200, buy]
})
