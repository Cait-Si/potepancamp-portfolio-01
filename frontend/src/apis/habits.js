import axios from 'axios'
import { indexOrCreate } from '../urls'

export const fetchHabits = () => {
  return axios.get(indexOrCreate)
    .then(res => {
      return res.data
    })
    .catch((e) => console.error(e));
};

export const postHabit = (params) => {
  return axios.post(indexOrCreate,
    {
      email: params.email,
      title: params.title,
      detail: params.detail
    }
  ).then(res => {
    return res.data
  })
  .catch((e) => console.error(e));
};
