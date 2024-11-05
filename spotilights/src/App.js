import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AppStyles from './App.module.css';
import SongCover from './components/SongCover';
import SongDetails from './components/SongDetails';
import Login from './Login';

export default function App() {
    return (
      <>
        <h1><b>SpotiLights</b></h1>
        <Login/>
      </>
    )
    // const [song, setSong] = useState(null);
    // const [accessToken, setAccessToken] = useState('');

    // useEffect(() => {
    //     const urlParams = new URLSearchParams(window.location.search);
    //     const token = urlParams.get('access_token');
    //     console.log("Access token2: "+token);
    //     if (token) {
    //         setAccessToken(token);
    //         fetchCurrentSong(token);
    //         window.history.replaceState({}, document.title, "/");
    //     }
    //     else{
    //       console.log("no token");
    //     }
    // }, []);

    // const fetchCurrentSong = async (token) => {
    //     try {
    //         const response = await fetch(`http://localhost:3000/currently-playing?access_token=${token}`);
    //         const data = await response.json();
    //         setSong(data);
    //     } catch (error) {
    //         console.error('Error fetching current song:', error);
    //     }
    // };

    // return (
    //     <div className="container">
    //         <h1 className={AppStyles.title}><b>SpotiLights</b></h1>
    //         {accessToken ? 
    //           (song ? (
    //                 <div>
    //                     <SongCover coverUrl={song.cover} />
    //                     <SongDetails title={song.title} artist={song.artist} />
    //                 </div>
    //             ) : (
    //                 <p>Loading song...</p>
    //             )
    //           ) : (
    //             <LoginButton/>
    //           )}
    //     </div>
    // );
}

