import React, {useState} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import {addSong} from './Slice'
import { useDispatch } from 'react-redux';

function AddNewSong() {
    const  dispatch = useDispatch()
    const [song, setSong] = useState({
        title: "",
        artist:"",
        album:"",
        genre:""
    })
    const options = ['Pop music', 'Rock', 'Jazz', 'Hip Hop', 'Country', 'Electronic'];

    const addNewSong = () => {
        dispatch(addSong({
            title: song.title,
            artist: song.artist,
            album:song.album,
            genre:song.genre
        }))
        console.log(song);       
    }
    const clearSong = () => {
            setSong({title:"",artist: "",album:"",genre:""})
        }     

    return (
    <div className="flex flex-col w-1/4 bg-slate-50 p-4 px-6">
        <div className="text-primary-blue text-2xl font-medium mb-6">
            Add New Song
        </div>

        <div className="text-primary-blue text-lg mb-1">
            Title:
        </div>
        <input type="text" value={song.title} onChange={(val) => setSong({...song, title:val.currentTarget.value})} 
        placeholder="Title" className="bg-slate-100 rounded-md px-4 py-3 border-2 border-primary-blue mb-4"/>

        <div className="text-primary-blue text-lg mb-1">
            Artist:
        </div>
        <input type="text" value={song.artist} onChange={(val) => setSong({...song, artist:val.currentTarget.value})} 
        placeholder="Artist Name" className="bg-slate-100 rounded-md px-4 py-3 border-2 border-primary-blue mb-4"/>

        <div className="text-primary-blue text-lg mb-1">
            Album:
        </div>
        <input type="text" value={song.album} onChange={(val) => setSong({...song, album: val.currentTarget.value})} 
        placeholder="Album" className="bg-slate-100 rounded-md px-4 py-3 border-2 border-primary-blue mb-4"/>

        <div className="text-primary-blue text-lg mb-1">
            Genre:
        </div>
        <Dropdown className='w-full'
        options={options} 
        value={song.genre}
        onChange={(val) => setSong({...song, genre: val.value})} 
        placeholder="Choose Genre Type" />


        <div className="flex flex-row gap-2 mt-6">
            <button onClick={addNewSong} className='flex flex-row gap-2 px-6 py-2 bg-primary-blue rounded-md items-center duration-200 w-full justify-center'>
                <div className='text-primary-green text-lg font-rubik'>
                    Add Song
                </div>
            </button>
            <button onClick={clearSong}className='flex flex-row gap-2 px-6 py-2 border-primary-blue border-2 rounded-md items-center duration-200 w-full justify-center'>
                <div className='text-primary-blue text-lg font-rubik'>
                    Clear
                </div>
            </button>
        </div>
    </div>
    );
  }
  
  export default AddNewSong;
  