import React from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

function SongOverview() {
  return (
    <div>
      <header>
        <h1>SongSaver</h1>
      </header>
      <main>
        <SongForm />
        <SongList />
      </main>
    </div>
  );
}

export default SongOverview;
