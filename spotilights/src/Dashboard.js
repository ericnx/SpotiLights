import React, { useState, useEffect } from 'react';
import { Container, Form } from 'react-bootstrap';
import useAuth from './useAuth';
import SpotifyWebApi from 'spotify-web-api-node';

const dotenv = require('dotenv');
dotenv.config();
const spotifyWebApi = new SpotifyWebApi({
    clientId: dotenv.CLIENT_ID
})

export default function Dashboard({code}){
    const accessToken = useAuth(code);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    
    useEffect(function(){
        if (!accessToken){
            return;
        }
        spotifyWebApi.setAccessToken(accessToken);
    }, [accessToken])

    useEffect(function(){
        if (!search){
            return setSearchResults([]);
        }
        if(!accessToken){
            return;
        }
        spotifyWebApi.searchTracks(search).then(function(res){
            
        });
    }, [search, accessToken])

     return (
        <Container className='d-flex flex-column py-5 width-40% justify-content-center align-items-center ' style={{height: '100vh'}}>
            <Form.Control 
                type='search' 
                placeholder='Search' 
                value={search} 
                onChange={function(e){setSearch(e.target.value)}}/>
            <div className='flex-grow-1 my-2' style={{overflowY: 'auto'}}>Songs</div>
        </Container>
     );
}