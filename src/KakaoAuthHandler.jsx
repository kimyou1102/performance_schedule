import React from 'react';
import axios from 'axios';

const KakaoAuthHandler = () => {
    let AUTHORIZE_CODE = new URL(window.location.href).searchParams.get('code');
    console.log(AUTHORIZE_CODE);

    const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
    const REDIRECT_URI = 'https://localhost:3000/oauth';

    const header = {'Content-Type': 'application/x-www-form-urlencoded'};
    const body = `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${AUTHORIZE_CODE}`;
    axios.post('https://kauth.kakao.com/oauth/token', body, header)
    .then(res => {
        console.log(res.data);
        kakaoResponse(res.data.access_token);
    })
    .catch((error) => {
        console.log(error)
    })


    const kakaoResponse = async(access_token)=>{
        console.log('access_token :', access_token);
        // axios.post('http://127.0.0.1:8000/account/login/', {
        axios.post('https://127.0.0.1/account/login/', {
            'access_token': access_token
        }, { withCredentials: true })
        .then(res => {
            console.log(res.data);
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            
        </div>
    );
};

export default KakaoAuthHandler;

