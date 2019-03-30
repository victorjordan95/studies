import { combineReducers } from 'redux';

const songsReducer = () => {

    return [
        { title: 'Title One', duration: '4:05'},
        { title: 'Title Two', duration: '2:05'},
        { title: 'Title Three', duration: '3:15'},
        { title: 'Title Four', duration: '5:15'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})