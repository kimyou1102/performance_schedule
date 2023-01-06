import React, { useState } from "react";
import { PopupDiv, CloseBtn, PopupUl, PopupLi } from "./styledComponents";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

<i class="fa-solid fa-xmark"></i>;
const DayPopup = ({ data, x, y, setShow,show }) => {
  console.log(data);

  return (
    <PopupDiv style={{ top: `${y}px`, left: `${x}px`,  display: `${show}`}}>
      <CloseBtn>
        <FontAwesomeIcon icon={faXmark} style={{ color: "#5E5873" }} onClick={() => {
          setShow('none');
        }}/>
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
