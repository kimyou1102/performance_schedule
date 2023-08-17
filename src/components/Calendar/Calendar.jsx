import React, { useState, useEffect } from "react";
import { CalendarDiv, NavBackground } from "../../styledComponents";
import CalendarHeader from "./CalendarHeader";
import CalendarMain from "./CalendarMain";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useDispatch, useSelector } from "react-redux";
import { invisible } from "../../stores/Actions/navShowAction";

const Calendar = () => {
  const [lastDayNum, setLastDayNum] = useState(0);
  const [lastDay, setLastDay] = useState(0);
  const [lastDays, setLastDays] = useState([]);
  const [currentLastDay, setCurrentLastDay] = useState(0);
  const [currentDays, setCurrertDays] = useState([]);
  const [currentYear, setCurrentYear] = useState("");
  const [currentMonth, setCurrentMonth] = useState("");
  const [nextDays, setNextDays] = useState([]);

  const isMobile = useIsMobile();

  const dispatch = useDispatch();
  const show = useSelector((state) => state.navShowReducer);

  const onClick = (e) => {
    if (show && !e.target.closest("#side")) {
      dispatch(invisible());
    }
  };

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
  }, [lastDayNum, lastDay]);

  useEffect(() => {
    setCurrertDays(Array.from({ length: currentLastDay }, (v, i) => i + 1));
  }, [currentLastDay]);

  return (
    <CalendarDiv isMobile={isMobile} onClick={onClick}>
      <CalendarHeader
        year={currentYear}
        month={currentMonth}
        before={before}
        next={next}
      />
      <CalendarMain
        year={currentYear}
        month={currentMonth}
        lastDays={lastDays}
        currentDays={currentDays}
        nextDays={nextDays}
      />
      <NavBackground className={show ? "show" : ""} />
    </CalendarDiv>
  );
};

export default Calendar;
