import React, { useEffect } from "react";
import {
  Main,
  DatesDiv,
  DateWrap,
  DateDiv,
  DateText,
  OpenTitleWrap,
  OpenTitleDiv,
  OpenTitle,
} from "./styledComponents";

const CalendarMain = ({
  year,
  month,
  lastDays,
  currentDays,
  nextDays,
  performanceData,
}) => {
  useEffect(() => {
    setTimeout(() => {}, 2000);
  }, []);

  return (
    <Main>
      <DatesDiv>
        {lastDays.map((day, index) => {
          const date = `${month !== 1 ? year : year - 1}.${
            month === 1 ? 12 : month < 10 ? `0${month - 1}` : month - 1
          }.${day > 9 ? day : `0${day}`}`;
          return (
            <DateWrap key={index} id={date}>
              <DateDiv opacity="0.3">
                <DateText>{day}</DateText>
                {performanceData[date] ? (
                  <OpenTitleWrap>
                      <OpenTitleDiv>
                      <OpenTitle>{performanceData[date].title}</OpenTitle>
                    </OpenTitleDiv>
                  </OpenTitleWrap>
                  
                ) : null}
              </DateDiv>
            </DateWrap>
          );
        })}
        {currentDays.map((day, index) => {
          const date = `${year}.${String(month).padStart(2, 0)}.${
            day > 9 ? day : `0${day}`
          }`;
          return (
            <DateWrap key={index} id={date}>
              <DateDiv>
                <DateText>{day}</DateText>
                {performanceData[date] ? (
                  <OpenTitleWrap>
                      <OpenTitleDiv>
                      <OpenTitle>{performanceData[date].title}</OpenTitle>
                    </OpenTitleDiv>
                  </OpenTitleWrap>
                ) : null}
              </DateDiv>
            </DateWrap>
          );
        })}
        {nextDays.map((day, index) => {
          const date = `${month === 12 ? year + 1 : year}.${
            month === 12 ? 1 : month < 10 ? `0${month + 1}` : month + 1
          }.${day > 9 ? day : `0${day}`}`;
          return (
            <DateWrap key={index} id={date}>
              <DateDiv opacity="0.4">
                <DateText>{day}</DateText>
                {performanceData[date] ? (
                  <OpenTitleWrap>
                      <OpenTitleDiv>
                      <OpenTitle>{performanceData[date].title}</OpenTitle>
                    </OpenTitleDiv>
                  </OpenTitleWrap>
                ) : null}
              </DateDiv>
            </DateWrap>
          );
        })}
      </DatesDiv>
    </Main>
  );
};

export default CalendarMain;
