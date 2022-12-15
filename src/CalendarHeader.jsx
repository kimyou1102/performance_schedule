import React from 'react';
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderDiv, Header, YearAndMonthText, MonthMoveBtn, Week, Day, DayText } from './styledComponents'

const CalendarHeader = ({year, month, before, next}) => {
    // const month = 'August';
    return (
        <HeaderDiv>
            <Header>
                <MonthMoveBtn marginRight="30px" onClick={before}>
                    <FontAwesomeIcon icon={faChevronLeft} style={{fontSize: '15px'}} />
                </MonthMoveBtn>
                <MonthMoveBtn marginRight="18px" onClick={next}>
                    <FontAwesomeIcon icon={faChevronRight} style={{fontSize: '15px'}} />
                </MonthMoveBtn>
                <YearAndMonthText>{month}월 {year}</YearAndMonthText>
            </Header>
            <Week>
              <Day><DayText>Sun</DayText></Day>
              <Day><DayText>Mon</DayText></Day>
              <Day><DayText>Tue</DayText></Day>
              <Day><DayText>Wed</DayText></Day>
              <Day><DayText>Thu</DayText></Day>
              <Day><DayText>Fri</DayText></Day>
              <Day><DayText>Sat</DayText></Day>
            </Week>
        </HeaderDiv>
    );
};

export default CalendarHeader;