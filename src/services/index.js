import { Rest, Expert } from './base'

export default {
  getGejala () {
    return Rest.get('gejala')
      .then(resp => resp.data._embedded.gejala)
  },
  diagnose (gejalaIds) {
    return Expert.post('diagnose', {
      gejala: gejalaIds
    })
      .then(resp => resp.data)
  }
}
