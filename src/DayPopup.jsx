import React from "react";
import { PopupDiv, CloseBtn, PopupUl, PopupLi } from "./styledComponents";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

<i class="fa-solid fa-xmark"></i>;
const DayPopup = ({ data, x, y, setShow,show }) => {

  return (
    <PopupDiv style={{ bottom: `${y}px`, left: `${x}px`,  display: `${show}`}}>
      <CloseBtn  onClick={() => {
          setShow('none');
        }}>
        <FontAwesomeIcon icon={faXmark} style={{ color: "#5E5873" }}/>
      </CloseBtn>
      <PopupUl>
        <PopupLi>{data.date}</PopupLi>
        <PopupLi>예매시간: {data.time}</PopupLi>
        <PopupLi>{data.title}</PopupLi>
        
      </PopupUl>
    </PopupDiv>
  );
};

export default DayPopup;
