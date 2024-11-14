import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function useAuth(code){
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(function() {
        axios.post('http://localhost:3001/login', {
            code,
        }).then(function(res) {
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
        }).catch(function() {
            // window.location = "/";
        })
    }, [code])

    useEffect(function() {
        
    }, [refreshToken, expiresIn])

    return accessToken;
}