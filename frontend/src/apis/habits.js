import Cookies from 'js-cookie';
import { client } from './client';
import { indexOrCreate, showOrEditOrDelete } from '../urls'

export const fetchHabits = () => {
  return client.get(indexOrCreate, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  })
    .then(res => {
      return res.data
    })
    .catch((e) => console.error(e));
};

export const postHabit = (params) => {
  return client.post(indexOrCreate,
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
  return client.get(showOrEditOrDelete(params.habitId))
  .then(res => {
    return res.data
  })
  .catch((e) => console.error(e));
};

export const putHabit = (params) => {
  return client.put(showOrEditOrDelete(params.habitId),
    {
      email: params.email,
      title: params.title,
      detail: params.detail,
      count: params.count
    }
  ).then(res => {
    return res.data
  })
  .catch((e) => console.error(e));
};

export const deleteHabit = (params) => {
  console.log(params.habitId)
  return client.delete(showOrEditOrDelete(params.habitId))
  .then(res =>{
    return res.data
  })
  .catch((e) => console.error(e));
};
