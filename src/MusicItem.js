import { useDispatch, useSelector } from "react-redux";
import { deleteSong } from "./Slice";


function MusicItem({music}) {
    const dispatch = useDispatch();
    const songs = useSelector(store => store.song);

    const handleRemoveSong = (id) => {
        dispatch(deleteSong({ id }));
      }
  return (
    <div className="flex flex-col w-1/3 p-2" key={music.id}>
        <div className="flex flex-col p-4 justify-center rounded-xl bg-white">
            <div className="text-primary-blue text-3xl font-medium">
            {music.title}
            </div>

            <div className="flex flex-col mt-2">
            <div className="text-slate-500 text-base">
                Artist: 
            </div>
            <div className="text-primary-blue text-lg font-medium">
                {music.artist}
            </div>
            </div>

            <div className="flex flex-col mt-2">
            <div className="text-slate-500 text-base">
                Album: 
            </div>
            <div className="text-primary-blue text-lg font-medium">
                {music.album}
            </div>
            </div>

            <div className="flex flex-row gap-2 mt-3 items-center">
            <div className="text-slate-500 text-base">
                Genre: 
            </div>
            <div className="text-primary-blue text-base px-4 py-1 bg-slate-100 rounded-full">
                {music.genre}
            </div>
            </div>

            <div className="flex flex-row gap-2 mt-4 justify-start">
            <button className='flex flex-row gap-2 px-6 py-1.5 bg-primary-blue rounded-md items-center duration-200 w-full justify-center'>
                <div className='text-primary-green text-base'>
                    Update
                </div>
            </button>
            <button onClick={()=>{handleRemoveSong(music.id)}} className='flex flex-row gap-2 px-6 py-1.5 border-red-500 border-2 rounded-md items-center duration-200 w-full justify-center'>
                <div className='text-red-500 text-base'>
                    Delete
                </div>
            </button>
            </div>
        </div>
    </div>
  );
}

export default MusicItem;
