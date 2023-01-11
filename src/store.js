import { createStore } from "redux";

const data = [
  {
    year: 2022,
    month: 12,
    day: 20,
    date: "2022.12.20",
    time: "19:00",
    title: "검정치마 연말 공연 - Christmas & New Year’s Eve 티켓오픈",
    link: "",
  },
  {
    date: "2022.12.01",
    time: "13:00",
    title: "검정치마 다른 공연",
    link: "",
  },
  {
    date: "2022.11.29",
    time: "13:00",
    title: "김형중 콘서트",
    link: "",
  },
  {
    date: "2023.02.02",
    time: "13:00",
    title: "surl 콘서트",
    link: "",
  },
  {
    date: "2023.02.02",
    time: "13:00",
    title: "루시 어썸 콘서트",
    link: "",
  },
  {
    date: "2022.08.31",
    time: "16:00",
    title: "그렌드 민트 페스티벌",
    link: "",
  },
];

const reducer = (currentState, action) => {
  if (currentState === undefined) {
    return {
      performanceData: data,
    };
  }
  const newState = { ...currentState };
  return newState;
};

const store = createStore(reducer);
export default store;
