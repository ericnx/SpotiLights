import React from 'react';
import {Container} from 'react-bootstrap';
import style from './Login.module.css';

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=94f97f0915724c79991bb666fc55352c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-private%20user-read-email%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export default function Login(){
    return (
        <>
            <a className={`${style.btn}`} href={AUTH_URL}>Login with Spotify</a>
            <button className='loginbtn' href={AUTH_URL}>Login</button>
        </>
    );
}
