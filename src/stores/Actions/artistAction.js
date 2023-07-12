import { getArtistApi } from "../../api/artist/get-artist-api";

export const getArtists = async (user_id) => {
  const res = await getArtistApi(user_id);
  return {
    type: "GET_ARTIST",
    payload: res.data,
  };
};
