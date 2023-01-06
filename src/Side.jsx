import React from "react";
import {
  SideDiv,
  AddBtn,
  CheckBoxs,
  CheckBoxDiv,
  CheckBox,
  Label,
} from "./styledComponents";

const Side = () => {
  return (
    <SideDiv id="side">
      <AddBtn>Add New</AddBtn>
      <CheckBoxs>
        <CheckBoxDiv>
            <CheckBox type="checkbox" id="allView" name="check" color="#7367F0" />
            <Label htmlFor="allView">모두 보기</Label>
        </CheckBoxDiv>
        <CheckBoxDiv>
            <CheckBox type="checkbox" id="ticketView" name="check" color="#00a661" />
            <Label htmlFor="ticketView">예매 일정 보기</Label>
        </CheckBoxDiv>
        <CheckBoxDiv>
            <CheckBox type="checkbox" id="concertView" name="check" color="red" />
            <Label htmlFor="concertView">콘서트 일정 보기</Label>
        </CheckBoxDiv>

      </CheckBoxs>
    </SideDiv>
  );
};

export default Side;
