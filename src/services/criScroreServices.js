import axios from 'axios'

export const cricScoreService = {
  cricScoreServiceApi
}

function cricScoreServiceApi() {
  return axios.get('https://assessments.reliscore.com/api/cric-scores/').then((response) => {
    return response;
  }).catch((error) => { })
}