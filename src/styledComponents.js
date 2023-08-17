import styled from "styled-components";
import { Link } from "react-router-dom";

export const CalendarDiv = styled.div`
  padding-left: ${(props) => (props.isMobile ? "0px" : "20%")};
`;

// CalendarHeader.jsx 시작
export const HeaderDiv = styled.div`
  flex-direction: column;
  height: 97px;
  display: flex;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70%;
  padding: 0px 30px;
`;

export const IconButton = styled.button`
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const YearAndMonthText = styled.span`
  color: #232325;
  font-size: 18px;
  font-weight: bold;
`;

export const MonthMoveBtn = styled.button`
  padding: 0;
  border: none;
  margin-right: ${(props) => props.marginRight};
  background: transparent;
  color: #6c757d;
  cursor: pointer;
`;

export const Main = styled.main``;

export const Week = styled.div`
  display: flex;
  height: 30%;
  align-items: center;
  border-top: 1px solid #e9eaec;
  border-bottom: 1px solid #e9eaec;
  font-size: ${(props) => (props.isMobile ? "0.7rem" : "1rem")};
`;

export const DatesDiv = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  flex-wrap: wrap;
`;

export const Day = styled.div`
  width: calc(100% / 7);
  text-align: center;
`;

export const DayText = styled.span`
  color: #6e6b7b;
  font-weight: 600;
`;
// CalendarHeader.jsx 끝

// CalendarMain.jsx 시작
export const DateWrap = styled.div`
  box-sizing: border-box;
  width: calc(100% / 7);
  min-height: calc((100vh - 97px) / 5);
  text-align: left;
  border-bottom: 1px solid #e9eaec;
  border-right: 1px solid #e9eaec;
  padding: ${(props) => (props.isMobile ? "4px 2px" : "4px 8px")};
  cursor: pointer;
`;

export const DateDiv = styled.div`
  opacity: ${(props) => props.opacity || "1"};
`;

export const DateText = styled.span`
  color: #6e6b7b;
  font-size: ${(props) => (props.isMobile ? "0.7rem" : "1rem")};
  font-weight: bold;
`;

export const OpenTitles = styled.ul`
  list-style: none;
  padding-left: 0px;
`;

export const OpenTitleWrap = styled.li`
  background: ${(props) => props.color || "#7367F0"};
  padding: ${(props) => (props.isMobile ? "2px 4px" : "4px 8px")};
  border-radius: 4px;
  margin-top: 10px;
`;

export const OpenTitleDiv = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
`;

export const OpenTitle = styled.p`
  color: white;
  font-size: ${(props) => (props.isMobile ? "0.6rem" : "0.875rem")};
  margin: 0;
`;

export const NavBackground = styled.div`
  display: none;
  &.show {
    display: block;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0px;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
  }
`;
// CalendarMain.jsx 끝

// Side.jsx 시작
export const SideDiv = styled.div`
  position: absolute;
  width: 20%;
  height: 100%;
  border-right: 1px solid #ebe9f1;
  box-sizing: border-box;
  padding: 20px;

  &.mobile {
    width: 50%;
    z-index: 15;
    height: 80%;
    top: 0px;
    background: #f4f4f4;
    right: 0px;
    border-radius: 8px 0px 0px 8px;
  }
`;

export const AddBtn = styled.button`
  background: #7367f0;
  border-radius: 5px;
  width: ${(props) => props.width || "100%"};
  height: 38px;
  color: white;
  border: none;
  float: ${(props) => props.float || ""};
`;

export const CheckBoxContainer = styled.div`
  margin: 20px 0;
  height: 85%;
  overflow-y: auto;
`;

export const CheckBoxDiv = styled.div`
  margin-bottom: 16px;

  &.all {
    border-bottom: 1px solid #8d8d8d;
    padding-bottom: 10px;
  }
`;

export const CheckBox = styled.input`
  accent-color: ${(props) => props.color};
  filter: drop-shadow(0px 2px 4px rgba(115, 103, 240, 0.4));
`;

export const Label = styled.label``;

export const HomeBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`;

export const CheckBoxListWrap = styled.ul`
  list-style-type: none;
  padding: 0px;
`;

export const SelectBtn = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  /* font-weight: bold; */

  /* background: #7367f0;
  border-radius: 5px;
  height: 38px;
  color: white;
  border: none; */

  &.select {
    border: none;
    color: white;
    background: #7367f0;
  }

  &.clear {
    border: none;
    color: white;
    background: red;
    /* border: 1px solid red;
    color: red;
    background: white; */
  }
`;
// Side 끝

// DayPopup 시작

export const PopupDiv = styled.div`
  display: none;
  position: absolute;
  width: calc((100% / 7) * 1.3);
  min-height: 192px;
  background: white;
  // border: 1px solid #e9eaec;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`;
export const CloseBtn = styled.button`
  float: right;
  margin: 5px;
  border: none;
  background: transparent;
`;

export const PopupUl = styled.ul`
  float: left;
  list-style: none;
  padding-left: 0px;
  padding: 15px;
  margin: 0;
`;

export const PopupLi = styled.li`
  margin-bottom: 10px;
  overflow: hidden;
`;
export const ReserveBtn = styled.button`
  border: none;
  float: right;
  padding: 5px;
  cursor: pointer;
`;

// DayPopup 끝

// MusicianAdd 시작
export const MusicianAddWrap = styled.div`
  width: ${(props) => (props.isMobile ? "100%" : "400px")};
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
`;

export const ListText = styled.h1`
  margin: 30px 0;
  text-align: center;
`;
export const MusicianAddBtn = styled.button`
  background: transparent;
  border: none;
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

export const MusicianAddForm = styled.form`
  padding: 16px;
  margin: 0 auto;
  overflow: hidden;
`;

export const MusicianAddInfo = styled.p`
  margin: 10px 0;
  color: #b6b6b6;
`;

export const InputInfo = styled.p`
  margin: 20px 0;
  font-size: 14px;
`;

export const MusicianAddInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 30px;
  margin-bottom: 10px;
  &:focus {
    outline: none;
  }
`;

export const MusicianColorWrap = styled.div`
  position: relative;
  margin-bottom: 30px;
`;

export const MusicianColorLabel = styled.label`
  display: inline-block;
  width: 50px;
  height: 50px;
  background: ${(props) => props.color};
  border-radius: 10px;
  cursor: pointer;
`;

export const MusicianColorInput = styled.input`
  left: 0;
  position: absolute;
  height: 50px;
  pointer-events: none;
  opacity: 0;
`;

export const BtnWrap = styled.div`
  float: right;
  width: 65%;
`;

export const CancleBtn = styled.button`
  background: transparent;
  border: none;
  width: 49%;
  height: 38px;
  cursor: pointer;
  color: #7367f0;
`;

export const ArtistEmptyWrap = styled.div`
  margin: 50px 0;
  text-align: center;
  display: ${(props) => props.show};
`;

export const ArtistEmptyText = styled.h2`
  margin-bottom: 20px;
`;

export const ArtistEmptySubText = styled.p`
  margin: 0;
`;

export const ArtistUl = styled.ul`
  list-style: none;
  padding: 16px;
  margin: 35px 0 0 0;
  overflow-y: auto;
  height: 55vh;
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* 스크롤바 막대 설정*/
  &::-webkit-scrollbar-thumb {
    background-color: #eee;
    border-radius: 10px;
  }

  /* 스크롤바 뒷 배경 설정*/
  &::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0);
  }
`;

export const ArtistLi = styled.li`
  font-size: 18px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ArtistNameWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const ArtistColor = styled.div`
  display: inline-block;
  width: 20px;
  height: 20px;
  background: ${(props) => props.color};
  border-radius: 5px;
  margin-right: 10px;
`;

export const ArtistNameText = styled.span``;
export const DeleteBtn = styled.button`
  cursor: pointer;
  border: none;
`;

export const CalendarMoveBtn = styled.button`
  width: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 45px;
  background: hsl(245, 82%, 67%);
  padding: 19px 32px;
  font-size: 18px;
  margin: 30px auto;
  color: white;
  cursor: pointer;
  &:hover {
    background: hsl(245, 82%, 72%);
  }
`;

export const CalendarPageText = styled.h3`
  margin: 0px;
  margin-right: 10px;
`;
// MusicianAdd 끝
