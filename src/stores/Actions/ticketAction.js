import axios from "axios";

export const getData = async () => {
  //API 호출
  const res = await axios.get("http://kimyugyeong.pythonanywhere.com/api/tickets");
  // const res = await axios.get("http://127.0.0.1:8000/api/tickets");
  return {
    type: "GET_DATA",
    payload: res.data,
  };
};