import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export const deleteArtistApi = async(id) => {
    const response = axios.delete(`${API_URL}/api/artist/${id}`)

    return response;
}