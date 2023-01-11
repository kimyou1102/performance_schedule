import React, { useState, useEffect } from "react";
import { CalendarDiv } from './styledComponents'

import CalendarHeader from "./CalendarHeader";
import CalendarMain from "./CalendarMain";

import { Provider } from "react-redux";
import store from "./store";

const Calendar = () => {
  const [lastDayNum, setLastDayNum] = useState(0);
  const [lastDay, setLastDay] = useState(0);
  const [lastDays, setLastDays] = useState([]);
  const [currentLastDay, setCurrentLastDay] = useState(0);
  const [currentDays, setCurrertDays] = useState([]);
  const [currentYear, setCurrentYear] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [nextDays, setNextDays] = useState([]);

  const next = () => {
    const date = new Date(currentYear, currentMonth, 1);
    renderDates(date);
  };

  const before = () => {
    const date = new Date(currentYear, currentMonth - 2, 1);
    renderDates(date);
  };

  const renderDates = (date) => {
    const currentYear = date.getFullYear();
    setCurrentYear(currentYear);
    const currentMonth = date.getMonth(); //현재월보다 1작게나온다(0부터 시작하기 때문)
    setCurrentMonth(currentMonth + 1);
    const lastEndDay = new Date(currentYear, currentMonth, 0);
    const currentEndDay = new Date(currentYear, currentMonth + 1, 0);
    const nextLastDay = currentEndDay.getDay();
    setNextDays(Array.from({ length: 6 - nextLastDay }, (v, i) => i + 1));
    setCurrentLastDay(currentEndDay.getDate());
    setLastDayNum(lastEndDay.getDay());
    setLastDay(lastEndDay.getDate());
  };

  useEffect(() => {
    const today = new Date();
    renderDates(today);
  }, []);

  useEffect(() => {
    setLastDays(
      Array.from({ length: lastDayNum + 1 }, (v, i) => i + lastDay - lastDayNum)
    );
  }, [lastDayNum]);

  useEffect(() => {
    setCurrertDays(Array.from({ length: currentLastDay }, (v, i) => i + 1));
  }, [currentLastDay]);

  return (
    <CalendarDiv>
      <CalendarHeader
        year={currentYear}
        month={currentMonth}
        before={before}
        next={next}
      />
      <Provider store={store}>
        <CalendarMain
          year={currentYear}
          month={currentMonth}
          lastDays={lastDays}
          currentDays={currentDays}
          nextDays={nextDays}
        />
      </Provider>
      
    </CalendarDiv>
  );
};

export default Calendar;
