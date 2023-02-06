import styled from "styled-components";
import {Link} from "react-router-dom";

export const CalendarDiv = styled.div`
  padding-left: 20%;
`

// CalendarHeader.jsx 시작
export const HeaderDiv = styled.div`
  flex-direction: column;
  height: 97px;
  display: flex;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  height: 70%;
  padding-left: 30px;
`;

export const YearAndMonthText = styled.span`
  color: #5e5873;
  font-size: 18px;
`;

export const MonthMoveBtn = styled.button`
  padding: 0;
  border: none;
  margin-right: ${(props) => props.marginRight};
  background: transparent;
  color: #6c757d;
  cursor: pointer;
`;

export const Main = styled.main`
`;

export const Week = styled.div`
  display: flex;
  height: 30%;
  align-items: center;
  border-top: 1px solid #e9eaec;
  border-bottom: 1px solid #e9eaec;
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
    height: calc((100vh - 97px) / 5);
    text-align: left;
    border-bottom: 1px solid #e9eaec;
    border-right: 1px solid #e9eaec;
    padding: 4px 8px;
    cursor: pointer;
`;

export const DateDiv = styled.div`
  opacity: ${(props) => props.opacity || "1"};
`;

export const DateText = styled.span`
  color: #6E6B7B;
`;

export const OpenTitles = styled.ul`
  list-style: none;
  padding-left: 0px;
`

export const OpenTitleWrap = styled.li`
  background: #7367F0;
  padding: 4px 8px;
  border-radius: 4px;
  margin-top: 10px;
`

export const OpenTitleDiv = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
`

export const OpenTitle = styled.p`
  color: white;
  font-size: 14px;
  margin: 0;
`;
// CalendarMain.jsx 끝


// Side.jsx 시작
export const SideDiv = styled.div`
  position: absolute;
  width: 20%;
  height: 100%;
  border-right: 1px solid #EBE9F1;
  box-sizing: border-box;
  padding: 20px;
`;

export const AddBtn = styled.button`
  background: #7367F0;
  border-radius: 5px;
  width: ${(props) => props.width || '100%'};
  height: 38px;
  color: white;
  border: none;
  float: ${(props) => props.float || ''};
`;

export const CheckBoxs = styled.div`
  margin: 20px 0;
  height: 85%;
  overflow-y: auto;
`;

export const CheckBoxDiv = styled.div`
  margin-bottom: 16px;
`;

export const CheckBox = styled.input`
  accent-color: ${(props) => props.color };
  filter: drop-shadow(0px 2px 4px rgba(115, 103, 240, 0.4));
`;

export const Label = styled.label`

`;

export const HomeBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
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
`
export const CloseBtn = styled.button`
  float: right;
  margin: 5px;
  border: none;
  background: transparent;
`

export const PopupUl = styled.ul`
  float: left;
  list-style: none;
  padding-left: 0px;
  padding: 15px;
  margin: 0;
`

export const PopupLi = styled.li`
  margin-bottom: 10px;
  overflow: hidden;
`
export const ReserveBtn = styled.button`
  border: none;
  float: right;
  padding: 5px;
  cursor: pointer;
`

// DayPopup 끝

// MusicianAdd 시작
export const MusicianAddWrap = styled.div`
  width: 400px;
  min-height: 100vh;
  margin: 0 auto;
  overflow: hidden;
`

export const ListText = styled.h1`
  margin: 30px 0;
  text-align: center;
`
export const MusicianAddBtn = styled.button`
  background: transparent;
  border: none;
  display: block;
  margin: 0 auto;
  cursor: pointer;
`;

export const MusicianAddForm = styled.form`
  margin: 0 auto;
  overflow: hidden;
`;

export const InputInfo = styled.h2`
  margin: 20px 0;
  font-size: 14px;
`

export const MusicianAddInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  height: 30px;
  margin-bottom: 10px;
`

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

export const ArtistUl = styled.ul`
  list-style: none;
  padding: 10px;
  margin-top: 15px;
  overflow-y: auto;
  height: 55%;
  &::-webkit-scrollbar{
    width: 10px;
  }

  /* 스크롤바 막대 설정*/
  &::-webkit-scrollbar-thumb{
      background-color: #eee;
      border-radius: 10px;    
  }

  /* 스크롤바 뒷 배경 설정*/
  &::-webkit-scrollbar-track{
      background-color: rgba(0,0,0,0);
  }
`;

export const ArtistLi = styled.li`
  font-size: 18px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const ArtistText = styled.span`

`
export const DeleteBtn = styled.button`
  cursor: pointer;
  border: none;
`

export const CalendarMoveBtn = styled.button`
  border: none;
  border-radius: 45px;
  // background: #7367F0;
  background: hsl(245,82%,67%);
  padding: 19px 32px;
  font-size: 18px;
  display: block;
  margin: 30px auto;
  &:hover {
    background: hsl(245,82%,72%);
  }
`

export const CalendarLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  // color: #433b3b;
  color: white;

  &visited {
    // color: #433b3b;
    color: white;
  }

  &:active {
    // color: #433b3b;
    color: white;
  }
`;

export const CalendarPageText = styled.h3`
  margin: 0 3px 0 0;
`
// MusicianAdd 끝