import Cookies from "js-cookie"
import { indexSession, indexSignIn, indexSignOut, indexSignUp } from "../urls"
import { client } from "./client";

export const signUp = (params) => {
  return client.post(indexSignUp, params)
};

export const signIn = (params) => {
  return client.post(indexSignIn, params)
};

export const signOut = () => {
  return client.delete(indexSignOut, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};

export const getCurrentUser = () => {
  if (
    !Cookies.get("_access_token") ||
    !Cookies.get("_client") ||
    !Cookies.get("_uid")
  )
    return;

  return client.get(indexSession, {
    headers: {
      "access-token": Cookies.get("_access_token"),
      client: Cookies.get("_client"),
      uid: Cookies.get("_uid"),
    },
  });
};
