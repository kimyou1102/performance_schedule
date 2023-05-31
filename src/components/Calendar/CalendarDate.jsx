import React from "react";
import {
  DateWrap,
  DateDiv,
  DateText,
  OpenTitles,
  OpenTitleWrap,
  OpenTitleDiv,
  OpenTitle,
} from "../../styledComponents";
import { getDate } from "../../hooks/getDate";

function CalendarDate({
  dates,
  type,
  year,
  month,
  onListClick,
  performanceData,
  artists,
  opacity,
}) {
  return (
    <>
      {dates.map((day, index) => {
        const date = getDate(type, year, month, day);
        console.log(date);
        const matchs = performanceData.filter((data) => data.date === date);
        console.log(dates, performanceData);
        return (
          <DateWrap key={index} id={date} className="wrap">
            <DateDiv opacity={opacity}>
              <DateText>{day}</DateText>
              {matchs.length > 0 ? (
                <OpenTitles>
                  {performanceData.map((info, i) =>
                    info.date === date ? (
                      <OpenTitleWrap
                        key={i}
                        onClick={(e) => {
                          onListClick(info, e);
                        }}
                        color={
                          artists.find(
                            (artist) => artist.id === info.artist_id
                          )["color"]
                        }
                      >
                        <OpenTitleDiv>
                          <OpenTitle>{info.title}</OpenTitle>
                        </OpenTitleDiv>
                      </OpenTitleWrap>
                    ) : null
                  )}
                </OpenTitles>
              ) : null}
            </DateDiv>
          </DateWrap>
        );
      })}
    </>
  );
}

export default CalendarDate;
