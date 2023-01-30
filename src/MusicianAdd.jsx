import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MusicianAddInput, AddBtn } from './styledComponents';
import axios from 'axios';

const MusicianAdd = () => {
    const [value, setValue] = useState('');
    const submit = (e) => {
        e.preventDefault();
        if(value === '') return;

        axios.post('http://127.0.0.1:8000/api/artist', {
            name: value
        })
        .then((res) => {
            console.log(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
        setValue('');
    }

    return (
        <div>
            <h1>가수들 추가하는 페이지</h1>
            <Link to="/calendar">
                <h2>공연예매 달력 보러 가기🌹</h2>
            </Link>
            <form onSubmit={submit}>
                <MusicianAddInput value={value} onChange={(e) => {
                    setValue(e.target.value);
                }}/>
                <AddBtn width={'50%'}>추가하기</AddBtn>
            </form>
            <br></br>           
        </div>
    );
};

export default MusicianAdd;