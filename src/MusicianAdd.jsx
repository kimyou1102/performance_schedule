import React, { useState, useEffect, useRef } from "react";
import {
  MusicianAddWrap,
  ListText,
  MusicianAddForm,
  MusicianAddInfo,
  InputInfo,
  MusicianAddInput,
  MusicianColorWrap,
  MusicianColorLabel,
  MusicianColorInput,
  BtnWrap,
  CancleBtn,
  AddBtn,
  MusicianAddBtn,
  ArtistUl,
  ArtistLi,
  ArtistNameWrap,
  ArtistNameText,
  ArtistColor,
  DeleteBtn,
  ArtistEmptyWrap,
  ArtistEmptyText,
  ArtistEmptySubText,
  CalendarMoveBtn,
  CalendarLink,
  CalendarPageText,
} from "./styledComponents";
import axios from "axios";
import { getArtists } from "./dataAction";
import { useDispatch, useSelector } from "react-redux";
import { faCirclePlus, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MusicianAdd = () => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState("none");
  const [emptyTextShow, setEmptyTextShow] = useState('block');
  const [color, setColor] = useState('');

  const colorInput = useRef();

  const submit = (e) => {
    e.preventDefault();
    if (value === "") return;
    const colorValue = colorInput.current.value === '#000000' ? color : colorInput.current.value
    
    axios
      .post("http://127.0.0.1:8000/api/artist", {
        name: value,
        color: colorValue
      })
      .then((res) => {
        console.log(res.data);
        getArtists().then((result) => {
            dispatch(result);
        });
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
    if(artists.length === 0) {
      setEmptyTextShow('none');
    }
  };

  const cancleClick = () => {
    setShow("none");
    setValue("");
    if(artists.length === 0) {
      setEmptyTextShow('block');
    }
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
  
  const colorChange = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  }
  const performanceData = useSelector((state) => state.performances.performanceData) ?? [];
  const artists = useSelector((state) => state.artists.artists) ?? [];

  const dispatch = useDispatch();

  useEffect(() => {
    getArtists().then((result) => {
      dispatch(result);
    });

    setColor('#' + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, '0'));
  }, []);

//   console.log(performanceData);
  // console.log(artists);

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
        <MusicianAddInfo>가수명</MusicianAddInfo>
        <InputInfo>💡 한글과 영어를 각각 작성하면 정확도가 올라갑니다.</InputInfo>
        <MusicianAddInput
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <MusicianAddInfo>색상</MusicianAddInfo>
        <MusicianColorWrap>
          <MusicianColorLabel htmlFor="colorPicker" color={color}/>
          <MusicianColorInput type="color" name="color" id="colorPicker" onChange={colorChange} ref={colorInput}/>
        </MusicianColorWrap>
        <BtnWrap>
          <CancleBtn onClick={cancleClick} type="button">취소</CancleBtn>
          <AddBtn width="49%" float="right">추가</AddBtn>
        </BtnWrap>
      </MusicianAddForm>
      {artists.length !== 0 ? (
        <>
          <ArtistUl>
            {artists.map((artist, index) => (
              <ArtistLi key={index} id={artist.id}>
                <ArtistNameWrap>
                  <ArtistColor color={artist.color} />
                  <ArtistNameText>{artist.name}</ArtistNameText>
                </ArtistNameWrap>
                <DeleteBtn onClick={artistDeleteClick}>삭제</DeleteBtn>
              </ArtistLi>
            ))}
          </ArtistUl>
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
      ) :
        <ArtistEmptyWrap show={emptyTextShow}>
          <ArtistEmptyText>관심있는 가수가 없어요.</ArtistEmptyText>
          <ArtistEmptySubText>예매정보를 받고 싶은 가수를 추가해주세요.</ArtistEmptySubText>    
        </ArtistEmptyWrap>
      }
    </MusicianAddWrap>
  );
};

export default MusicianAdd;

