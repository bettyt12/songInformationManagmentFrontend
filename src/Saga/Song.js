import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import {getSongsAPI,deleteSongAPI,updateSongAPI,createSongAPI,getSongsStatusAPI} from "../api"
import {fetchMusicFailure,fetchMusicStart,fetchMusicSuccess,deleteMusicFailure,deleteMusicStart,deleteMusicSuccess,updateMusicFailure,updateMusicStart,updateMusicSuccess,createMusicFailure,createMusicStart,createMusicSuccess} from '../Slice/songs'
const apiUrl = 'http://localhost:5001/api/songs';
function* fetchMusicSaga() {
    try {
        console.log(updateSongAPI);
      const data = yield call(getSongsAPI);
      yield put(fetchMusicSuccess(data));
    } catch (error) {
      yield put(fetchMusicFailure(error));
    }
  }
  
  
  function* deleteMusicSaga(action) {
    try {
      yield call(deleteSongAPI, action.payload);
      yield put(deleteMusicSuccess(action.payload));
    } catch (error) {
      yield put(deleteMusicFailure(error));
    }
  }
  
  
  function* updateMusicSaga(action) {
    try {
      const data = yield call(updateSongAPI, action.payload);
      yield put(updateMusicSuccess(data));
    } catch (error) {
      yield put(updateMusicFailure(error));
    }
  }
  
  
  function* createMusicSaga(action) {
    try {
      const data = yield call(createSongAPI, action.payload);
      yield put(createMusicSuccess(data));
    } catch (error) {
      yield put(createMusicFailure(error));
    }
  }
  
  
  export function* musicSaga() {
    yield takeLatest(fetchMusicStart.type, fetchMusicSaga);
    yield takeLatest(deleteMusicStart.type, deleteMusicSaga);
    yield takeLatest(updateMusicStart.type, updateMusicSaga);
    yield takeLatest(createMusicStart.type, createMusicSaga);
  }
  
  