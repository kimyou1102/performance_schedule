import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const getTicketApi = async (user_id) => {
  const response = await axios.get(`${API_URL}/api/tickets`);
  
  return response;
};
