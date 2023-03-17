// import { createSlice } from '@reduxjs/toolkit'

// export const songSlice = createSlice({
//   name: 'song',
//   initialState: {
//     songList:[],
//     song:{}
//     // id: 0,
//     // title: '',
//     // artist: '',
//     // genre: '',
//     // album:''
//   },
//   reducers:{
//     addSong:(state, action)=>{
//       state=action.payload;
//       console.log(state);
//     },
//     editSong:(state,action)=>{
//       const {id,title,artist,album,genre}=action.payload;
//       const existingSong = state.find(song => song.id === id);
//       if(existingSong) {
//         existingSong.title = title;
//         existingSong.artist = artist;
//         existingSong.album=album;
//         existingSong.genre=genre;
//       }
//     },
//     deleteSong: (state, action) => {
//       const { id } = action.payload;
//       const existingSong = state.find(song => song.id === id);
//       if(existingSong) {
//         return state.filter(song => song.id !== id);
//       }
//     },
//     getSong:(state,action)=>{
//       state=action.payload;
//       console.log(state)
//     },
//     getSong1:(state,action)=>{
//       state=action.payload
//     },  
//     setSong1: (state, action) => {
//       const songData = action.payload;
//       return { ...state, ...songData}
//     },
//     getSongStatus:(state,action)=>{
//       state.push(action.payload);
//     }
//   }
// })

// export const {addSong,editSong,deleteSong,getSong,getSongStatus,getSong1,setSong1}= songSlice.actions;
// export default songSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

export const musicSlice = createSlice({
  name: 'music',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchMusicStart: state => {
      state.loading = true;
      state.error = null;
    },
    fetchMusicSuccess: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    fetchMusicFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteMusicStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    deleteMusicSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.filter(music => music.id !== action.payload);
    },
    deleteMusicFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateMusicStart: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    updateMusicSuccess: (state, action) => {
      state.loading = false;
      state.data = state.data.map(music => {
        if (music.id === action.payload.id) {
          return {...music,...action.payload };
        }
        return music;
      });
    },
    updateMusicFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    createMusicStart: state => {
      state.loading = true;
      state.error = null;
    },
    createMusicSuccess: (state, action) => {
      state.loading = false;
      state.data.push(action.payload);
    },
    createMusicFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});


export const {
  fetchMusicStart,
  fetchMusicSuccess,
  fetchMusicFailure,
  deleteMusicStart,
  deleteMusicSuccess,
  deleteMusicFailure,
  updateMusicStart,
  updateMusicSuccess,
  updateMusicFailure,
  createMusicStart,
  createMusicSuccess,
  createMusicFailure,
} = musicSlice.actions;

export const selectMusic = (state) => state?.data?.data;
export const selectIsLoading = (state) => state.music.isLoading;
export const selectError = (state) => state.music.error;

export default musicSlice.reducer;

