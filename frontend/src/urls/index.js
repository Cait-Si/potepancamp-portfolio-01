export const DEFAULT_API_LOCATION = 'http://localhost:3000/api/v1';

export const home = `${DEFAULT_API_LOCATION}/`;
export const indexOrCreate = `${DEFAULT_API_LOCATION}/habits`;
export const showOrEditOrDelete = (habitId) => `${DEFAULT_API_LOCATION}/habits/${habitId}`;
export const indexSignUp = `/auth`;
export const indexSignIn = `/auth/sign_in`;
export const indexSignOut =`/auth/sign_out`;
export const indexSession = `/auth/sessions`;
