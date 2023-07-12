import React, { useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../api/user/login-api";

const KakaoAuthHandler = () => {
  let AUTHORIZE_CODE = new URL(window.location.href).searchParams.get("code");
  const [cookies, setCookie] = useCookies(["access_token"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = "http://localhost:3000/oauth";

  const login = async (access_token) => {
    await loginApi(access_token)
      .then((res) => {
        const userInfo = {
          user_id: res.data.user.p_id,
          user_nickname: res.data.user.user_nickname,
        };
        dispatch({
          type: "REGISTER_USER",
          payload: userInfo,
        });
        setCookie("access_token", res.data.token.access);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const header = { "Content-Type": "application/x-www-form-urlencoded" };
    const body = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`;
    axios
      .post("https://kauth.kakao.com/oauth/token", body, header)
      .then((res) => {
        kakaoResponse(res.data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });

    const kakaoResponse = (access_token) => {
      login(access_token);
    };
  }, []);

  return <div></div>;
};

export default KakaoAuthHandler;
