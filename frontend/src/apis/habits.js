import axios from 'axios'
import { indexOrCreate, showOrEditOrDelete } from '../urls'

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

export const fetchHabit = (params) => {
  return axios.get(showOrEditOrDelete(params.habitId))
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e));
};

export const putHabit = (params) => {
  return axios.put(showOrEditOrDelete(params.habitId),
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

export const deleteHabit = (params) => {
  console.log(params.habitId)
  return axios.delete(showOrEditOrDelete(params.habitId))
  .then(res =>{
    return res.data
  })
}
