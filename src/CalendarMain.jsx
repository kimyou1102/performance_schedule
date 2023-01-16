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
} from "./styledComponents";
import DayPopup from "./DayPopup";

import { useDispatch, useSelector } from "react-redux";
import { getData } from "./dataAction";

const CalendarMain = ({
  year,
  month,
  lastDays,
  currentDays,
  nextDays,
}) => {

  const [data, setData] = useState([]);
  const [coordinate, setCoordinate] = useState({});
  const [show, setShow] = useState('none');

  const onListClick = (info, e) => {
    const wrap = e.target.closest('.wrap');
    const defaultX = document.querySelector('#side').getBoundingClientRect().right;
    const defaultY = document.querySelector('#header').getBoundingClientRect().bottom;
    const x = wrap.getBoundingClientRect().left;
    const y = window.pageYOffset + wrap.getBoundingClientRect().top;

    setCoordinate({'x': x-defaultX, 'y': y-defaultY});
    setShow('block');
    setData(info);
  }
  
  const performanceData = useSelector((state) => state.performanceData) ?? [];
  const dispatch = useDispatch();

  useEffect(() => {
    getData().then((result) => {
      dispatch(result);
    })
  },[]);

  return (
    <>
      <DatesDiv>
        {lastDays.map((day, index) => {
          const date = `${month !== 1 ? year : year - 1}.${
            month === 1 ? 12 : month < 10 ? `0${month - 1}` : month - 1
          }.${day > 9 ? day : `0${day}`}`;
          const matchs = performanceData.filter(data => data.date === date);
          return (
            <DateWrap key={index} id={date} className="wrap">
              <DateDiv opacity="0.3">
                <DateText>{day}</DateText>
                {matchs.length > 0 ?
                <OpenTitles>
                  {performanceData.map((info, i) => (
                    info.date === date ? 
                      <OpenTitleWrap key={i} onClick={(e) => {
                        onListClick(info, e);
                      }}>
                          <OpenTitleDiv>
                          <OpenTitle>{info.title}</OpenTitle>
                        </OpenTitleDiv>
                      </OpenTitleWrap> : null)) 
                  }
                </OpenTitles>
                 : null
                }
              </DateDiv>
            </DateWrap>
          );
        })}
        {currentDays.map((day, index) => {
          const date = `${year}.${String(month).padStart(2, 0)}.${
            day > 9 ? day : `0${day}`
          }`;
          const matchs = performanceData.filter(data => data.date === date);
          return (
            <DateWrap key={index} id={date} className="wrap">
              <DateDiv>
                <DateText>{day}</DateText>
                {matchs.length > 0 ?
                <OpenTitles>
                  {performanceData.map((info, i) => (
                    info.date === date ? 
                      <OpenTitleWrap key={i} onClick={(e) => {
                        onListClick(info, e);
                      }}>
                          <OpenTitleDiv>
                          <OpenTitle>{info.title}</OpenTitle>
                        </OpenTitleDiv>
                      </OpenTitleWrap> : null)) 
                  }
                </OpenTitles>
                 : null
                }
              </DateDiv>
            </DateWrap>
          );
        })}
        {nextDays.map((day, index) => {
          const date = `${month === 12 ? year + 1 : year}.${
            month === 12 ? 1 : month < 10 ? `0${month + 1}` : month + 1
          }.${day > 9 ? day : `0${day}`}`;
          const matchs = performanceData.filter(data => data.date === date);
          return (
            <DateWrap key={index} id={date} className="wrap">
              <DateDiv opacity="0.4">
                <DateText>{day}</DateText>
                {matchs.length > 0 ?
                <OpenTitles>
                  {performanceData.map((info, i) => (
                    info.date === date ? 
                      <OpenTitleWrap key={i} onClick={(e) => {
                        onListClick(info, e);
                      }}>
                          <OpenTitleDiv>
                          <OpenTitle>{info.title}</OpenTitle>
                        </OpenTitleDiv>
                      </OpenTitleWrap> : null)) 
                  }
                </OpenTitles>
                 : null
                }
              </DateDiv>
            </DateWrap>
          );
        })}
        <DayPopup data={data} x={coordinate['x']} y={coordinate['y']} setShow={setShow} show={show}/>
      </DatesDiv>
    </>
  );
};

export default CalendarMain;
