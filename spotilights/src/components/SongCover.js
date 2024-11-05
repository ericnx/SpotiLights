import SongCoverStyles from "./SongCover.module.css";

function SongCover({coverUrl}) {
  return (
    <>
        <div class="song-box" className={SongCoverStyles.SongBox}>
            <img src={coverUrl} alt=""/>
        </div>
    </>
  );
}

export default SongCover;
