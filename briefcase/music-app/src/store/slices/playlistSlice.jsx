/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const playlistSlice = createSlice({
    name: 'playlists',
    initialState: { id: '1', name: '' },
    reducers: {
        getPlaylistId: (state, action) => {
            state.id = action.payload
        },
        getPlaylistName: (state, action) => {
            state.name = action.payload
        },
    },
})

export const { getPlaylistId, getPlaylistName } = playlistSlice.actions

export default playlistSlice.reducer
