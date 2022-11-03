export const addSong = (song) => {
  return {
    type: "ADDSONG",
    payload: song,
  };
};

export const deleteSong = (id) => {
  return {
    type: "DELETESONG",
    payload: id,
  };
};
