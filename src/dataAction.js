import axios from "axios";

export const getData = async () => {
  //API 호출
  const res = await axios.get("http://kimyugyeong.pythonanywhere.com/api/tickets");
  return {
    type: "GET_DATA",
    payload: res.data,
  };
};

export const getArtists = async () => {
  //API 호출
  const res = await axios.get("http://kimyugyeong.pythonanywhere.com/api/artists");
  return {
    type: "GET_ARTIST",
    payload: res.data,
  };
};

//