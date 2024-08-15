import ky from 'ky'

const apiInstance = ky.extend({
  prefixUrl: 'http://localhost:4000/api',
})

export default apiInstance
