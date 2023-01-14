import React from 'react';
import { Link } from 'react-router-dom';
import { MusicianAddInput, AddBtn } from './styledComponents';

const MusicianAdd = () => {
    return (
        <div>
            <h1>가수들 추가하는 페이지</h1>
            <Link to="/calendar">
                <h2>공연예매 달력 보러 가기🌹</h2>
            </Link>
            <MusicianAddInput/>
            <AddBtn width={'50%'}>추가하기</AddBtn>
        </div>
    );
};

export default MusicianAdd;