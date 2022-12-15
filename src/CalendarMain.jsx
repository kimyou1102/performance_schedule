import React, { useState, useEffect } from "react";
import {
  Main,
  DatesDiv,
  DateWrap,
  DateDiv,
  DateText,
} from "./styledComponents";

const CalendarMain = ({ lastDays, currentDays, nextDays }) => {
  return (
    <Main>
      <DatesDiv>
        {lastDays.map((date, index) => (
          <DateWrap key={index}>
            <DateDiv opacity="0.3">
              <DateText>{date}</DateText>
            </DateDiv>
          </DateWrap>
        ))}
        {currentDays.map((date, index) => (
          <DateWrap key={index}>
            <DateDiv>
              <DateText>{date}</DateText>
            </DateDiv>
          </DateWrap>
        ))}
        {nextDays.map((date, index) => (
          <DateWrap key={index}>
            <DateDiv opacity="0.4">
              <DateText>{date}</DateText>
            </DateDiv>
          </DateWrap>
        ))}
      </DatesDiv>
    </Main>
  );
};

export default CalendarMain;
