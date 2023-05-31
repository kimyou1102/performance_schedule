import React, { useEffect, useState } from "react";
import {
  DatesDiv,
  DateWrap,
  DateDiv,
  DateText,
  OpenTitles,
  OpenTitleWrap,
  OpenTitleDiv,
  OpenTitle,
} from "../../styledComponents";
import DayPopup from "./DayPopup";
import CalendarDate from "./CalendarDate";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../stores/Actions/ticketAction";
import { getArtists } from "../../stores/Actions/artistAction";

const CalendarMain = ({ year, month, lastDays, currentDays, nextDays }) => {
  const [data, setData] = useState([]);
  const [coordinate, setCoordinate] = useState({});
  const [show, setShow] = useState("none");
  const user = useSelector((state) => state.userReducer.user) ?? [];

  const onListClick = (info, e) => {
    const wrap = e.target.closest(".wrap");
    const defaultX = document
      .querySelector("#side")
      .getBoundingClientRect().right;
    // const defaultY = document.querySelector('#header').getBoundingClientRect().height;
    const x = wrap.getBoundingClientRect().left;
    const bodyHeight = document.body.offsetHeight;

    const y =
      bodyHeight - (window.pageYOffset + wrap.getBoundingClientRect().bottom);

    setCoordinate({ x: x - defaultX, y: y });
    setShow("block");
    setData(info);
  };

  const performanceData = useSelector(
    (state) => state.performanceReducer.performanceData
  );
  const artists = useSelector((state) => state.artistReducer.artists);
  // console.log("캘린더메인 artists : ", artists);
  // console.log("캘린더메인 performanceData : ", performanceData);

  const dispatch = useDispatch();

  useEffect(() => {
    getData()
      .then((result) => {
        dispatch(result);
      })
      .catch((e) => console.log(e));

    getArtists(user.user_id).then((result) => {
      console.log(result);
      dispatch(result);
    });
  }, []);

  // console.log(performanceData);

  return (
    <>
      <DatesDiv>
        <CalendarDate
          dates={lastDays}
          type="last"
          year={year}
          month={month}
          onListClick={onListClick}
          performanceData={performanceData}
          artists={artists}
          opacity={0.3}
        />
        <CalendarDate
          dates={currentDays}
          type="current"
          year={year}
          month={month}
          onListClick={onListClick}
          performanceData={performanceData}
          artists={artists}
        />

        {/* {lastDays.map((day, index) => {
          const date = `${month !== 1 ? year : year - 1}.${
            month === 1 ? 12 : month < 10 ? `0${month - 1}` : month - 1
          }.${day > 9 ? day : `0${day}`}`;
          const matchs = performanceData.filter((data) => data.date === date);
          return (
            <DateWrap key={index} id={date} className="wrap">
              <DateDiv opacity="0.3">
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
        })} */}
        {/* {currentDays.map((day, index) => {
          const date = `${year}.${String(month).padStart(2, 0)}.${
            day > 9 ? day : `0${day}`
          }`;
          const matchs = performanceData.filter((data) => data.date === date);

          return (
            <DateWrap key={index} id={date} className="wrap">
              <DateDiv>
                <DateText>{day}</DateText>
                {matchs.length > 0 ? (
                  <OpenTitles>
                    {performanceData.map((info, i) =>
                      info.date === date ? (
                        <OpenTitleWrap
                          className="OpenTitleWrap"
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
        })} */}
        <CalendarDate
          dates={nextDays}
          type="next"
          year={year}
          month={month}
          onListClick={onListClick}
          performanceData={performanceData}
          artists={artists}
          opacity={0.4}
        />
        {/* {nextDays.map((day, index) => {
          const date = `${month === 12 ? year + 1 : year}.${
            month === 12 ? 1 : month < 10 ? `0${month + 1}` : month + 1
          }.${day > 9 ? day : `0${day}`}`;
          const matchs = performanceData.filter((data) => data.date === date);
          return (
            <DateWrap key={index} id={date} className="wrap">
              <DateDiv opacity="0.4">
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
        })} */}
        <DayPopup
          data={data}
          x={coordinate["x"]}
          y={coordinate["y"]}
          setShow={setShow}
          show={show}
        />
      </DatesDiv>
    </>
  );
};

export default CalendarMain;
