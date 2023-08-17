import React from "react";
import {
  faChevronLeft,
  faChevronRight,
  faBars,
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
  IconButton,
} from "../../styledComponents";
import Side from "../Sidebar/Side";
import { useIsMobile } from "../../hooks/useIsMobile";
import { useDispatch, useSelector } from "react-redux";
import { visible } from "../../stores/Actions/navShowAction";

const CalendarHeader = ({ year, month, before, next }) => {
  const isMobile = useIsMobile();

  const dispatch = useDispatch();
  const show = useSelector((state) => state.navShowReducer);

  const onClick = () => {
    dispatch(visible());
  };

  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  // const weeks = ["일", "월", "화", "수", "목", "금", "토"];
  return (
    <HeaderDiv id="header">
      <Header>
        <div>
          <MonthMoveBtn marginRight="30px" onClick={before}>
            <FontAwesomeIcon
              icon={faChevronLeft}
              style={{ fontSize: "15px" }}
            />
          </MonthMoveBtn>
          <MonthMoveBtn marginRight="18px" onClick={next}>
            <FontAwesomeIcon
              icon={faChevronRight}
              style={{ fontSize: "15px" }}
            />
          </MonthMoveBtn>
          <YearAndMonthText>
            {month}월 {year}
          </YearAndMonthText>
        </div>
        {isMobile ? (
          <IconButton onClick={onClick}>
            <FontAwesomeIcon icon={faBars} style={{ fontSize: "15px" }} />
          </IconButton>
        ) : null}
        {show ? <Side /> : null}
      </Header>
      <Week isMobile={isMobile}>
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
