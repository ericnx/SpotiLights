const express = require('express');
const dotenv = require('dotenv');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors');
const bodyParser = require('body-parser');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('./login', function(req,res){
    const spotifyWebApi = new SpotifyWebApi({
        clientId: dotenv.CLIENT_ID,
        clientSecret: dotenv.CLIENT_SECRET,
        redirectUri: dotenv.REDIRECT_URI
    });
    
    const code = req.body.code;

    spotifyWebApi.authorizationCodeGrant(code).then(
        function(data){
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in
            })
        })
        .catch((error) => {
            console.log(error);
            res.sendStatus(400);
        })

    app.listen(3001);
})
