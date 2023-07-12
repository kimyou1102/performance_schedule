import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getTicketByArtistApi = async (artist_name) => {
  const response = await axios.get(`${API_URL}/api/getTicketDatas/${artist_name}`);
  
  return response;
};