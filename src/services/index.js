import { Axios } from './base'

export default {
  getGejala () {
    return Axios.get('gejala')
      .then(resp => resp.data._embedded.gejala)
  }
}
