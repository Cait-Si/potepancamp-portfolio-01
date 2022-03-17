export const DEFAULT_API_LOCATION = 'http://localhost:3000/api/v1';

export const home = `/`;
export const indexOrCreate = `/habits`;
export const showOrEditOrDelete = (habitId) => `/habits/${habitId}`;
export const indexSignUp = `/auth`;
export const indexSignIn = `/auth/sign_in`;
export const indexSignOut =`/auth/sign_out`;
export const indexSession = `/auth/sessions`;
