import { useEffect, useState } from "react";
import axios from 'axios';

export default function useAuth(code){
    const [accessToken, setAccessToken] = useState();
    const [refreshToken, setRefreshToken] = useState();
    const [expiresIn, setExpiresIn] = useState();

    useEffect(function() {
        axios.post('http://localhost:3000/login', {
            code
        }).then(function(res) {
            setAccessToken(res.data.accessToken);
            setRefreshToken(res.data.refreshToken);
            setExpiresIn(res.data.expiresIn);
        }).catch(function() {
            // window.location = '/';
        })
    }, [code])

    useEffect(function() {
        if (!refreshToken || !expiresIn){
            return;
        }
        const interval = setInterval((function(){
            axios.post('http://localhost:3000/refresh', {
                refreshToken
            }).then(function(res){
                setRefreshToken(res.data.refreshToken);
                setExpiresIn(res.data.expiresIn);
            }).catch(function(error){
                // window.location = '/';
            })
        }, (expiresIn-60)*1000)
        )
        return clearInterval(interval);
    }, [refreshToken, expiresIn])

    return accessToken;
}