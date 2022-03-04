const DEFAULT_API_LOCATION = 'http://localhost:3000/api/v1';

export const home = `${DEFAULT_API_LOCATION}/`;
export const indexOrCreate = `${DEFAULT_API_LOCATION}/habits`;
export const showOrEditOrDelete = (habitId) => `${DEFAULT_API_LOCATION}/habits/${habitId}`;
