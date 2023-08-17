import React, { useState, useRef, useEffect } from "react";
import {
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
} from "../../styledComponents";
import { useDispatch } from "react-redux";
import { getArtists } from "../../stores/Actions/artistAction";
import { postArtistApi } from "../../api/artist/post-artist-api";
import { getTicketByArtistApi } from "../../api/ticket/get-ticket-by-artist-api";

const MusicianAddSection = ({ artists, user, setEmptyTextShow, setShow }) => {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");
  const dispatch = useDispatch();

  const colorInput = useRef();

  useEffect(() => {
    setColor(
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0")
    );
  }, []);

  const postArtist = async (user_id, name, color) => {
    return await postArtistApi(user_id, name, color)
      .then((res) => {
        console.log(res.data);
        getArtists(user.user_id).then((result) => {
          dispatch(result);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTicekts = async () => {
    return await getTicketByArtistApi(value)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const submit = (e) => {
    e.preventDefault();
    if (value === "") return;
    const colorValue =
      colorInput.current.value === "#000000" ? color : colorInput.current.value;

    postArtist(user.user_id, value, colorValue);
    // getTicekts(value);
    // axios
    //   .get(`http://127.0.0.1:8000/api/getTicketDatas/${value}`)
    //   .then((res) => {
    //     // alert띄우기(?)
    //     console.log(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // getArtists().then((result) => {
    //   console.log(result);
    //     dispatch(result);
    // });

    setValue("");
  };

  const colorChange = (e) => {
    console.log(e.target.value);
    setColor(e.target.value);
  };

  const cancleClick = () => {
    setShow(false);
    setValue("");
    if (artists.length === 0) {
      setEmptyTextShow("block");
    }
  };

  return (
    <MusicianAddForm onSubmit={submit}>
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
        <MusicianColorLabel htmlFor="colorPicker" color={color} />
        <MusicianColorInput
          type="color"
          name="color"
          id="colorPicker"
          onChange={colorChange}
          ref={colorInput}
        />
      </MusicianColorWrap>
      <BtnWrap>
        <CancleBtn onClick={cancleClick} type="button">
          취소
        </CancleBtn>
        <AddBtn width="49%" float="right">
          추가
        </AddBtn>
      </BtnWrap>
    </MusicianAddForm>
  );
};

export default MusicianAddSection;
