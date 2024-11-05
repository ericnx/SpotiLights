import React from 'react';
import {Container} from 'react-bootstrap';

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=94f97f0915724c79991bb666fc55352c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-private%20user-read-email%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export default function Login(){
    return (
        <Container>
            <a href={AUTH_URL} className='btn btn-dark btn-lg'>Login with Spotify</a>
        </Container>
    );
}
