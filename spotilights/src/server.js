require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
app.use(cors({origin:'http://localhost:3001'}));
const port = 3000;

const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

console.log('client id:', clientID);
console.log('redirect uri:', redirectUri);

const authUrl = 'https://accounts.spotify.com/authorize';
const tokenUrl = 'https://accounts.spotify.com/api/token';

// Redirects the user to Spotify's auth page
app.get('/login', (req, res) => {
    const theScope = 'user-read-playback-state user-read-currently-playing';
    const authQueryParams = new URLSearchParams({
        response_type: 'code',
        client_id: clientID,
        scope: theScope,
        redirect_uri: redirectUri,
    })
    console.log('Auth URL:', `${authUrl}?${authQueryParams}`);
    res.redirect(`${authUrl}?${authQueryParams}`);
})

// Handles the callback & exchanges code for access token
app.get('/callback', async (req, res) => {
    const theCode = req.query.code;

    if (!theCode) {
        return res.status(400).send('No code found');
    }

    try {
        const response = await axios.post(tokenUrl, null, {
            params: {
                grant_type: 'authorization_code',
                code: theCode,
                redirect_uri: redirectUri,
                client_id: clientID,
                client_secret: clientSecret
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        
        const accessToken = response.data.access_token;
        if (!accessToken) {
            throw new Error('Failed to retrieve access token');
        }

        res.redirect(`http://localhost:3001/?access_token=${accessToken}`);
    } catch (error) {
        console.error('Error exchanging code for token:', error.response?.data || error.message);
        res.sendStatus(500);
    }
})

// Gets the song that's currently playing
app.get('/currently-playing', async (req, res) => {
    const accessToken = req.query.access_token;

    if (!accessToken) {
        return res.status(400).send('Missing access token');
    }

    const options = {
        method: 'GET',
        url: 'https://api.spotify.com/v1/me/player/currently-playing',
        headers: {
            'Authorization': 'Bearer ' + accessToken
        },
    }

    try {
        const response = await axios(options);
        if (response.data && response.data.item){
            const song = {
                title: response.data.item.name,
                artist: response.data.item.artists[0].name,
                cover: response.data.item.album.images[0].url,
            }
            res.json(song);
        }
        else{
            res.status(404).send('No song currently playing');
        }
    } catch (error) {
        console.error('Error getting the current song:', error.response ? error.response.data : error.message);
        res.status(500).send('Error getting current song');
    }
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
})
