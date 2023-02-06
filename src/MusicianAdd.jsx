import React, { useState, useEffect, useRef } from "react";
import {
  MusicianAddWrap,
  ListText,
  MusicianAddForm,
  InputInfo,
  MusicianAddInput,
  BtnWrap,
  CancleBtn,
  AddBtn,
  MusicianAddBtn,
  ArtistUl,
  ArtistLi,
  ArtistText,
  DeleteBtn,
  CalendarMoveBtn,
  CalendarLink,
  CalendarPageText,
} from "./styledComponents";
import axios from "axios";
import { getArtists } from "./dataAction";
import { useDispatch, useSelector } from "react-redux";
import { faCirclePlus, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

<i class="fa-solid fa-arrow-right-long"></i>
const MusicianAdd = () => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState("none");

  const button = useRef();

  const submit = (e) => {
    e.preventDefault();
    if (value === "") return;

    axios
      .post("http://127.0.0.1:8000/api/artist", {
        name: value,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`http://127.0.0.1:8000/getTicketDatas/${value}`)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });

    getArtists().then((result) => {
      console.log(result);
        dispatch(result);
    });

    setValue("");
  };

  const addClick = () => {
    setShow("block");
  };

  const cancleClick = () => {
    setShow("none");
    setValue("");
  };

  const artistDeleteClick = (e) => {
    const id = Number(e.target.closest('li').id);

    axios
      .delete(`http://127.0.0.1:8000/api/artist/${id}`)
      .then((res) => {
        dispatch({
            type: "DELETE_ARTIST",
            payload: id,
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  const performanceData = useSelector((state) => state.performances.performanceData) ?? [];
  const artists = useSelector((state) => state.artists.artists) ?? [];

  const dispatch = useDispatch();

  useEffect(() => {
    getArtists().then((result) => {
      dispatch(result);
    });
  }, []);

//   console.log(performanceData);
//   console.log(artists);

  return (
    <MusicianAddWrap>
      <ListText>List</ListText>
      <MusicianAddBtn onClick={addClick}>
        <FontAwesomeIcon
          icon={faCirclePlus}
          style={{ fontSize: "23px", color: "gray" }}
        />
      </MusicianAddBtn>
      <MusicianAddForm onSubmit={submit} style={{ display: `${show}` }}>
        <InputInfo>💡 한글과 영어를 다 작성하면 정확도가 올라갑니다.</InputInfo>
        <MusicianAddInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <BtnWrap>
          <CancleBtn onClick={cancleClick} type="button">취소</CancleBtn>
          <AddBtn width="49%" float="right">추가</AddBtn>
        </BtnWrap>
      </MusicianAddForm>
      <ArtistUl>
        {artists.length !== 0 ? (
          <>
            {artists.map((data, index) => (
              <ArtistLi key={index} id={data.id}>
                <ArtistText>{data.name}</ArtistText>
                <DeleteBtn onClick={artistDeleteClick}>삭제</DeleteBtn>
              </ArtistLi>
            ))}
            <CalendarMoveBtn>
              <CalendarLink to="/calendar">
                <CalendarPageText>공연예매 달력 보러 가기</CalendarPageText>
                <FontAwesomeIcon
                  icon={faArrowRightLong}
                  style={{ fontSize: "18px", color: "white" }}
                />
              </CalendarLink>
            </CalendarMoveBtn>
          </>
        ) : null}
      </ArtistUl>
    </MusicianAddWrap>
  );
};

export default MusicianAdd;

