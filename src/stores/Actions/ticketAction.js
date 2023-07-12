import { getTicketApi } from "../../api/ticket/get-ticket-api";

export const getData = async () => {
  const res = await getTicketApi();
  return {
    type: "GET_DATA",
    payload: res.data,
  };
};