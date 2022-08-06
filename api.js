export const SERVER_HOST = "http://localhost:3000"; 

const APP_APIS = {
  ROOT: "/",
  APP: "/app",
  AUTH: "/auth",
  LOGIN: "/auth/login",
  FORGOT_PASSWORD: "/auth/forgotPassword",
  GET_EMAIL_BY_TOKEN: "/auth/getEmailByToken",
  UPDATE_PASSWORD: "/auth/updatePassword",
  EDIT_PASSWORD: "/auth/editPassword",
  SIGN_UP: "/api/users/",
  GET_USER: "/api/users/",
  EMAIL_VERIFICATION: "/auth/mail-verification",
};

Object.keys(APP_APIS).map((key) => {
  APP_APIS[key] = `${SERVER_HOST}/${APP_APIS[key]}`;
  return null;
});

export const API = { ...APP_APIS };