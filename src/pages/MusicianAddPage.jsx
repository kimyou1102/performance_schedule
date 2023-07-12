import React, { useState, useEffect } from "react";
import {
  MusicianAddWrap,
  ListText,
  MusicianAddBtn,
  ArtistEmptyWrap,
  ArtistEmptyText,
  ArtistEmptySubText,
} from "../styledComponents";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MusicianAddSection from "../components/MusicianAdd/MusicianAddSection";
import MusicianList from "../components/MusicianAdd/MusicianList";
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from "react-cookie";
import { getArtists } from "../stores/Actions/artistAction";
import { logoutApi } from "../api/user/logout-apip";

const MusicianAddPage = () => {
  const [show, setShow] = useState(false);
  const [emptyTextShow, setEmptyTextShow] = useState("block");
  const [color, setColor] = useState("");
  const [loginState, setLoginState] = useState(false);
  const [nickname, setNickname] = useState("");
  const COOKIE_KEY = "access_token";
  const [cookies, setCookie, removeCookie] = useCookies([COOKIE_KEY]);

  const dispatch = useDispatch();
  const artists = useSelector((state) => state.artistReducer.artists) ?? [];
  const user = useSelector((state) => state.userReducer.user) ?? [];

  useEffect(() => {
    if (cookies[COOKIE_KEY]) {
      setLoginState(true);
      if (user.length !== 0) {
        setNickname(user.user_nickname);
        getArtists(user.user_id).then((result) => {
          console.log(result);
          dispatch(result);
        });
      }
    }

    setColor(
      "#" + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, "0")
    );
  }, []);

  const addClick = () => {
    setShow("block");
    if (artists.length === 0) {
      setEmptyTextShow("none");
    }
  };

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/oauth";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const kakaoLoginClick = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  const logoutClick = async () => {
    await logoutApi()
      .then((res) => {
        removeCookie(COOKIE_KEY);
        dispatch({
          type: "DELETE_USER",
        });
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <MusicianAddWrap>
      <ListText>List</ListText>
      {loginState ? (
        <>
          <h2>{nickname}</h2>
          <button onClick={logoutClick}>로그아웃</button>
        </>
      ) : (
        <button onClick={kakaoLoginClick}>로그인</button>
      )}
      <MusicianAddBtn onClick={addClick}>
        <FontAwesomeIcon
          icon={faCirclePlus}
          style={{ fontSize: "23px", color: "gray" }}
        />
      </MusicianAddBtn>
      {show ? (
        <MusicianAddSection
          artists={artists}
          user={user}
          setEmptyTextShow={setEmptyTextShow}
          setShow={setShow}
        />
      ) : null}
      {artists.length !== 0 ? (
        <MusicianList artists={artists} />
      ) : (
        <ArtistEmptyWrap show={emptyTextShow}>
          <ArtistEmptyText>관심있는 가수가 없어요.</ArtistEmptyText>
          <ArtistEmptySubText>
            예매정보를 받고 싶은 가수를 추가해주세요.
          </ArtistEmptySubText>
        </ArtistEmptyWrap>
      )}
    </MusicianAddWrap>
  );
};

export default MusicianAddPage;
