import styled from "styled-components";

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
`;

export const CheckBoxs = styled.div`
  margin-top: 20px;
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

export const MusicianAddInput = styled.input`
  display: block;
`



// MusicianAdd 끝