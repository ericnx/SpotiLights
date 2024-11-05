import style from './LoginButton.module.css';

function LoginButton() {
    const handleLogin = () => {
        // const clientId = process.env.CLIENT_ID;
        // const redirectUri = encodeURIComponent('http://localhost:3001/callback');
        // const scopes = 'user-read-playback-state user-read-currently-playing'; 

        window.location.href = 'http://localhost:3000/login';
    };
    return (
        <>
            <button className={style.LoginButton} onClick={handleLogin}>
                Login with Spotify
            </button>
        </>
    );
}

export default LoginButton;
