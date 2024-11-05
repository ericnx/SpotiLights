import style from './SongDetails.module.css';

function SongDetails({title, artist}){
    return(
        <>
            <h2 class='song-name' className={style.SongName}>{title}</h2>
            <h4 class='artist-name' className={style.ArtistName}>{artist}</h4>
        </>
    );
}

export default SongDetails;