import React, { useState, useEffect, useRef } from "react";
import {
  SideDiv,
  AddBtn,
  CheckBoxContainer,
  CheckBoxDiv,
  CheckBox,
  Label,
  HomeBtn,
} from "../../styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { getArtists } from "../../stores/Actions/artistAction";
import { getData } from "../../stores/Actions/ticketAction";
import { Link } from "react-router-dom";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckBoxs } from "./CheckBoxs";

const Side = () => {
  const [selectArtists, setSelectArtists] = useState([]);
  const [selectOption, setSelectOption] = useState("전체 선택");
  const [checked, setChecked] = useState(0);
  const [tickets, setTickets] = useState([]);

  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artistReducer.artists);

  const user = useSelector((state) => state.userReducer.user);
  const optionText = useRef();

  useEffect(() => {
    getArtists(user.user_id).then((result) => {
      dispatch(result);
    });

    getData().then((result) => {
      setTickets(result.payload);
    });
  }, [dispatch]);

  useEffect(() => {
    if (checked === 0) {
      setSelectOption("전체 선택");
      optionText.current.checked = false;
    }
  }, [checked]);

  const filterChange = (e) => {
    console.log("======== filterChange ========");
    const artistName = e.target.id.replace("View", "");
    console.log(artistName);
    if (e.target.checked) {
      setSelectArtists((selectArtists) => [...selectArtists, artistName]);
      e.target.closest("#checkBoxWrap").children[0].children[0].checked = true;
      // setSelectOption("선택 해제");
      // setChecked((count) => count + 1);
    } else {
      const index = selectArtists.indexOf(artistName);
      const arr = [...selectArtists];
      arr.splice(index, 1);
      setSelectArtists(arr);
      setChecked((count) => count - 1);
    }
  };

  const filterOption = (e) => {
    const checkboxDivs = e.target.closest("#checkBoxWrap").children;
    if (e.target.value === "선택 해제") {
      for (let checkboxDiv of checkboxDivs) {
        const target = checkboxDiv.children[0];
        target.checked = false;
      }
      setSelectArtists([]);
      setSelectOption("전체 선택");
    }
    if (e.target.value === "전체 선택") {
      for (let checkboxDiv of checkboxDivs) {
        const target = checkboxDiv.children[0];
        target.checked = true;
        setSelectArtists(artists.map((artist) => artist.name));
      }
      setSelectOption("선택 해제");
    }
  };

  useEffect(() => {
    if (selectOption !== "모두 보기") {
      console.log("유즈 셋");
      console.log(tickets);
      dispatch({
        type: "ARTIST_FILTER",
        payload: {
          currentPerformanceData: tickets,
          selectArtists: selectArtists,
        },
      });
    }
  }, [selectArtists, selectOption, dispatch, tickets]);

  return (
    <SideDiv id="side">
      <AddBtn>Add New</AddBtn>
      <CheckBoxContainer id="checkBoxWrap">
        <CheckBoxDiv>
          <CheckBox
            type="checkbox"
            id="allView"
            name="check"
            color="#7367F0"
            onChange={filterOption}
            value={selectOption}
            ref={optionText}
          />
          <Label htmlFor="allView">{selectOption}</Label>
        </CheckBoxDiv>
        {artists.length > 0
          ? artists.map((artist, index) => (
              <CheckBoxs
                key={index}
                artist={artist}
                filterChange={filterChange}
              />
            ))
          : null}
      </CheckBoxContainer>
      <Link to="/">
        <HomeBtn>
          <FontAwesomeIcon
            icon={faHouse}
            style={{ fontSize: "19px", color: "#464646" }}
          />
        </HomeBtn>
      </Link>
    </SideDiv>
  );
};

export default Side;
