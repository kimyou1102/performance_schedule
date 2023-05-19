export const performanceReducer = (currentState, action) => {
  if (currentState === undefined) {
    return {
      performanceData: [],
    };
  }

  if (action.type === "GET_DATA") {
    return {
      performanceData: action.payload,
    };
  }

  if (action.type === "ARTIST_FILTER") {
    const { currentPerformanceData, selectArtists } = action.payload;

    return {
      performanceData: currentPerformanceData.filter((e) =>
        selectArtists.includes(e.artist)
      ),
    };
  }

  const newState = { ...currentState };
  return newState;
};
