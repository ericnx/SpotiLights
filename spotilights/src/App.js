import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Title from './Title';
import Login from './Login';

export default function App() {
    return (
      <Container 
        className='d-flex justify-content-center align-items-center flex-column'
        style={{minHeight:'100vh'}}
      >
        <Title/>    
        <Login/>
      </Container>
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

