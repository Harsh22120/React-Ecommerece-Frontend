import API from "../axios/API";
import Auth from "../modules/Auth";

export const login = async (email, password) => {
  const body = {
    credential: {
      email: email,
      password: password
    }
  };
  return await API({
    method: "POST",
    url: "/api/login",
    data: body
  }).then(res => {
    Auth.setUserToken(res.data.user_token);
    return res;
  });
};
export const register = async (fullname, lastname, email, password, Password2) => {
  return await API({
    method: "POST",
    url: "/api/register",
    data: {
      fullname,
      lastname,
      email,
      password,
      Password2
    }
  }).then(res => {
    // Auth.setUserToken(res.data.user_token);
    console.log(res);
    return res;
  });
};
