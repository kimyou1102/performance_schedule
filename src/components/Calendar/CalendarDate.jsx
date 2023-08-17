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
import { getDate } from "../../utils/getDate";
import { useIsMobile } from "../../hooks/useIsMobile";

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
  const isMobile = useIsMobile();

  return (
    <>
      {dates.map((day, index) => {
        const date = getDate(type, year, month, day);
        const matchs = performanceData.filter((data) => data.date === date);
        return (
          <DateWrap key={index} id={date} className="wrap" isMobile={isMobile}>
            <DateDiv opacity={opacity}>
              <DateText isMobile={isMobile}>{day}</DateText>
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
                        isMobile={isMobile}
                      >
                        <OpenTitleDiv>
                          <OpenTitle isMobile={isMobile}>
                            {info.title}
                          </OpenTitle>
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
