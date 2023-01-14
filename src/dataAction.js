import axios from "axios";

export const getData = async () => {
  //API 호출
  const res = await axios.get("https://kimyugyeong.pythonanywhere.com/api/tickets");
  console.log(res.data);
  return {
    type: "GET_DATA",
    payload: res.data,
  };
};
