import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteSong } from "../actions/index";

function SongList() {
  const songs = useSelector((state) => state.songs.songs);

  const dispatch = useDispatch();

  const songRow = songs.map((song) => (
    <tr key={song.id}>
      <td>{song.songTitle}</td>
      <td>{song.artistName}</td>
      <td>{song.genre}</td>
      <td>{song.rating}</td>
      <td>
        <button
          onClick={(e) => {
            console.log(`Deleting ${song.id}`);
            dispatch(deleteSong(song.id));
          }}
        >
          Delete Song
        </button>
      </td>
    </tr>
  ));

  return (
    <table className="SongList">
      <tr className="song-header">
        <th className="song-row__item">Song</th>
        <th className="song-row__item">Artist</th>
        <th className="song-row__item">Genre</th>
        <th className="song-row__item">Rating</th>
        <th className="song-row__item">Delete item</th>
      </tr>

      <tbody>{songRow}</tbody>
    </table>
  );
}

export default SongList;
