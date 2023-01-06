import React from "react";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  HeaderDiv,
  Header,
  YearAndMonthText,
  MonthMoveBtn,
  Week,
  Day,
  DayText,
} from "./styledComponents";

const CalendarHeader = ({ year, month, before, next }) => {
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return (
    <HeaderDiv id="header">
      <Header>
        <MonthMoveBtn marginRight="30px" onClick={before}>
          <FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: "15px" }} />
        </MonthMoveBtn>
        <MonthMoveBtn marginRight="18px" onClick={next}>
          <FontAwesomeIcon icon={faChevronRight} style={{ fontSize: "15px" }} />
        </MonthMoveBtn>
        <YearAndMonthText>
          {month}월 {year}
        </YearAndMonthText>
      </Header>
      <Week>
        {weeks.map((week, i) => (
          <Day key={i}>
            <DayText>{week}</DayText>
          </Day>
        ))}
      </Week>
    </HeaderDiv>
  );
};

export default CalendarHeader;
