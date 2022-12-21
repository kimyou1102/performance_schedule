import styled from "styled-components";

export const CalendarDiv = styled.div`
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
`;

export const DateDiv = styled.div`
  opacity: ${(props) => props.opacity || "1"};
`;

export const DateText = styled.span`
  color: #6E6B7B;
`;

export const OpenTitleWrap = styled.div`
  background: #7367F0;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
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
