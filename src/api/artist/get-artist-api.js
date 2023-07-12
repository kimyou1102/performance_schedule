import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getArtistApi = async (user_id) => {
  const response = await axios.get(`${API_URL}/api/artists`, {
    params: { user_value: user_id },
  });
  
  return response;
};
