const express = require('express');
const dotenv = require('dotenv');
const SpotifyWebApi = require('spotify-web-api-node');

dotenv.config();
const app = express();

app.post('./login', function(req,res) {
    const credentials = {
        clientId: dotenv.CLIENT_ID,
        clientSecret: dotenv.CLIENT_SECRET,
        redirectUri: dotenv.REDIRECT_URI
    };
    const code = req.body.code;

    const spotifyWebApi = new SpotifyWebApi(credentials);
    spotifyWebApi.authorizationCodeGrant(code).then(
        function(data){

    })

})
