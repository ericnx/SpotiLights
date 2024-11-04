import SongCoverStyles from "./SongCover.module.css";

function SongCover() {
  return (
    <>
    <div id="song-cover">
      <img id="song-img" alt="Song Cover"/>
      <h1 className={SongCoverStyles.h1}>eric</h1>
    </div>
    </>
  );
}

export default SongCover;
