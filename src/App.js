import React, {useState} from "react";

import AddNewSong from "./AddNewSong";
import MusicItem from "./MusicItem";
import { useSelector } from "react-redux";

function App() {
  const musicList=useSelector(store => store.song)
  console.log(musicList);

  return (
    <div className="flex flex-col w-full font-rubik bg-slate-100 min-h-screen">
      <div className="flex flex-row gap-2 justify-between bg-primary-blue p-4 px-6">
        <div className="text-primary-green text-3xl font-medium">
          ADDIS MUSIC
        </div>
      </div>

      <div className="flex flex-row flex-grow gap-2 justify-between">
        <div className="flex flex-col w-3/4 h-full">
          <div className="text-primary-blue text-3xl px-8 py-2">
              Musics List
          </div>
          <div className="flex flex-row flex-wrap w-full h-full p-2 px-6">
            {musicList.map((item) => {
              return (
                <MusicItem music={item}/>
              );
            }) }
          </div>
        </div>
        <AddNewSong/>
      </div>  
    </div>
  );
}

export default App;
