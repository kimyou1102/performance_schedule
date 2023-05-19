export const artistReducer = (currentState, action) => {
  if (currentState === undefined) {
    return {
      artists: [],
    };
  }

  if (action.type === "GET_ARTIST") {
    return {
      artists: action.payload,
    };
  }

  if (action.type === "DELETE_ARTIST") {
    return {
      artists: currentState.artists.filter(
        (artist) => artist.id !== action.payload
      ),
    };
  }

  const newState = { ...currentState };
  return newState;
};
