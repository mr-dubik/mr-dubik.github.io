/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
    name: 'search',
    initialState: { searchValue: '' },
    reducers: {
        search: (state, action) => {
            state.searchValue = action.payload
        },
    },
})

export const { search } = searchSlice.actions

export default searchSlice.reducer
