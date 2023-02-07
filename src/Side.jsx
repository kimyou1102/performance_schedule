import React, { useState, useEffect, useRef }  from "react";
import {
  SideDiv,
  AddBtn,
  CheckBoxs,
  CheckBoxDiv,
  CheckBox,
  Label,
  HomeBtn
} from "./styledComponents";
import { useDispatch, useSelector } from "react-redux";
import { getArtists, getData } from "./dataAction";
import { Link } from 'react-router-dom'
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Side = () => {
  const [selectArtists, setSelectArtists] = useState([]);
  const [selectOption, setSelectOption] = useState('전체 선택');
  const [checked, setChecked] = useState(0)

  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artists.artists);

  const optionText = useRef();

  useEffect(() => {
    getArtists().then((result) => {
      dispatch(result);
    })
  }, [dispatch])

  useEffect(() => {
    if(checked === 0) {
      setSelectOption('전체 선택');
      optionText.current.checked = false;
    }
  }, [checked])

  const filterChange = (e) => {
    const artistName = e.target.id.replace('View', '');
    if(e.target.checked) {
      setSelectArtists((selectArtists) => [...selectArtists, artistName]);
      e.target.closest("#checkBoxWrap").children[0].children[0].checked = true;
      setSelectOption('선택 해제');
      setChecked((count) => count + 1);
    } else {
      const index = selectArtists.indexOf(artistName);
      const arr = [...selectArtists];
      arr.splice(index, 1);
      setSelectArtists(arr);
      setChecked((count) => count - 1);
    }
  }

  const filterOption = (e) => {
    const checkboxDivs = e.target.closest("#checkBoxWrap").children;
    if(e.target.value === '선택 해제') {
      for (let checkboxDiv of checkboxDivs) {
        const target = checkboxDiv.children[0];
        target.checked = false;
      }
      setSelectArtists([]);
      setSelectOption('전체 선택');
    }
    if(e.target.value === '전체 선택') {
      for (let checkboxDiv of checkboxDivs) {
        const target = checkboxDiv.children[0];
        target.checked = true;
        setSelectArtists(artists.map((artist) => artist.name));
      }
      setSelectOption('선택 해제');
    }
  }

  useEffect(() => {
    if(selectOption !== '모두 보기') {
      getData().then((result) => {
        dispatch({
          type: "ARTIST_FILTER",
          payload: { currentPerformanceData: result.payload, selectArtists: selectArtists },
        })
      })
    }
  }, [selectArtists, selectOption, dispatch]);

  return (
    <SideDiv id="side">
      <AddBtn>Add New</AddBtn>
      <CheckBoxs id="checkBoxWrap">
        <CheckBoxDiv>
          <CheckBox type="checkbox" id="allView" name="check" color="#7367F0" onChange={filterOption} value={selectOption} ref={optionText} />
          <Label htmlFor="allView">{selectOption}</Label>
        </CheckBoxDiv>
        {artists.length > 0 ? 
          artists.map((artist, index) => (
            <CheckBoxDiv key={index}>
              <CheckBox type="checkbox" id={`${artist.name}View`} name="check" color="#7367F0" onChange={filterChange}/>
              <Label htmlFor={`${artist.name}View`}>{artist.name}</Label>
            </CheckBoxDiv>
          )) : null}
      </CheckBoxs>
      <Link to='/'>
        <HomeBtn>
          <FontAwesomeIcon icon={faHouse} style={{ fontSize: "19px", color: '#464646'}} />
        </HomeBtn>
      </Link>

    </SideDiv>
  );
};

export default Side;
