import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const loginApi = async (access_token) => {
  const response = axios.post(
    `${API_URL}/account/login/`,
    {
      access_token: access_token,
    },
    { withCredentials: true }
  );

  return response;
};
