import React, { useEffect, useState } from "react";
import { DatesDiv } from "../../styledComponents";
import DayPopup from "./DayPopup";
import CalendarDate from "./CalendarDate";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../stores/Actions/ticketAction";
import { getArtists } from "../../stores/Actions/artistAction";
import { useIsMobile } from "../../hooks/useIsMobile";

const CalendarMain = ({ year, month, lastDays, currentDays, nextDays }) => {
  const [data, setData] = useState([]);
  const [coordinate, setCoordinate] = useState({});
  const [show, setShow] = useState("none");
  const user = useSelector((state) => state.userReducer.user) ?? [];

  const isMobile = useIsMobile();

  const onListClick = (info, e) => {
    const wrap = e.target.closest(".wrap");

    const defaultX = isMobile
      ? 0
      : document.querySelector("#side").getBoundingClientRect().right;
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
        <CalendarDate
          dates={nextDays}
          type="next"
          year={year}
          month={month}
          onListClick={onListClick}
          performanceData={performanceData}
          artists={artists}
          opacity={0.4}
        />{" "}
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
