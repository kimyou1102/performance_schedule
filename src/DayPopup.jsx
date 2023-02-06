import React from "react";
import { PopupDiv, CloseBtn, PopupUl, PopupLi, ReserveBtn } from "./styledComponents";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DayPopup = ({ data, x, y, setShow,show }) => {
  return (
    <PopupDiv style={{ bottom: `${y}px`, left: `${x}px`,  display: `${show}`}}>
      <CloseBtn  onClick={() => {
          setShow('none');
        }}>
        <FontAwesomeIcon icon={faXmark} style={{ color: "#5E5873", fontSize: "15px" }}/>
      </CloseBtn>
      <PopupUl>
        <PopupLi>{data.title}</PopupLi>
        <PopupLi>{data.date_full}</PopupLi>
        <PopupLi>
          <ReserveBtn onClick={()=>{window.open(data.link)}}>예매정보 보기</ReserveBtn>  
        </PopupLi>
      </PopupUl>
    </PopupDiv>
  );
};

export default DayPopup;
