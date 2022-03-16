import Cookise from "js-cookie"
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
      "access-token": Cookise.get("_access_token"),
      client: Cookise.get("_client"),
      uid: Cookise.get("_uid"),
    },
  });
};

export const getCurrentUser = () => {
  if (
    !Cookise.get("_access_token") ||
    !Cookise.get("_client") ||
    !Cookise.get("_uid")
  )
    return;

  return client.get(indexSession, {
    headers: {
      "access-token": Cookise.get("_access_token"),
      client: Cookise.get("_client"),
      uid: Cookise.get("_uid"),
    },
  });
};
