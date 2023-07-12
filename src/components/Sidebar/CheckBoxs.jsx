import React from "react";
import styled from "styled-components";

export function CheckBoxs({ artist, filterChange }) {
  return (
    <CheckBoxDiv>
      <CheckBox
        type="checkbox"
        id={`${artist.name}`}
        name="check"
        color={artist.color}
        onChange={(e) => filterChange(e)}
      />
      <label htmlFor={`${artist.name}`}>{artist.name}</label>
    </CheckBoxDiv>
  );
}

const CheckBoxDiv = styled.li`
  margin-bottom: 16px;
`;

const CheckBox = styled.input`
  accent-color: ${(props) => props.color};
  filter: drop-shadow(0px 2px 4px rgba(115, 103, 240, 0.4));
`;
