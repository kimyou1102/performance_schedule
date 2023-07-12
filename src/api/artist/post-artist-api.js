import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const postArtistApi = async (user_id, name, color) => {
  const response = axios.post(`${API_URL}/api/artist`, {
    user_value: user_id,
    name: name,
    color: color,
  });

  return response;
};
