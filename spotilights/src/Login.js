import React from 'react';
import {Container} from 'react-bootstrap';
// const SpotifyWebApi = require('spotify-web-api-node');

// const dotenv = require('dotenv');
// dotenv.config();

// const scopes = ['user-read-private', 'user-read-email', 'streaming', 'user-library-read', 'user-library-modify', 'user-read-playback-state', 'user-modify-playback-state']
// const redirecturi = dotenv.REDIRECT_URI;
// const clientId = dotenv.CLIENT_ID;
// const state = '21'

// const spotifyWebApi = new SpotifyWebApi({
//     clientId: dotenv.CLIENT_ID,
//     clientSecret: dotenv.CLIENT_SECRET,
//     redirectUri: dotenv.REDIRECT_URI
// });
// const authUrl = spotifyWebApi.createAuthorizeURL(scopes, state);


const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=94f97f0915724c79991bb666fc55352c&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-private%20user-read-email%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export default function Login(){
    return (
        <Container className='d-flex justify-content-center align-items-center flex-column vh-100 text-center'>
            <h1><b>SpotiLights</b></h1> 
            <p>Enjoy your music's lights.</p> 
            <a href={AUTH_URL} className='btn btn-dark btn-lg'>Login with Spotify</a>
        </Container>
    );
}
