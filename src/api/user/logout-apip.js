import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const logoutApi = async () => {
  const response = axios.get(`${API_URL}/account/logout/`)

  return response;
};