import axios from "axios";

export const getArtists = async (user_id) => {
  // const res = await axios.get("http://kimyugyeong.pythonanywhere.com/api/artists");
  // const res = await axios.get("http://127.0.0.1:8000/api/artists");
  // const res = await axios.get("https://127.0.0.1/api/artists");
  const res = await axios.get("https://127.0.0.1/api/artists", {
    params: { user_id: user_id },
  });
  return {
    type: "GET_ARTIST",
    payload: res.data,
  };
};
