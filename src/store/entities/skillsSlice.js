import { createSlice } from '@reduxjs/toolkit';
import skills from 'data/skills';

const slice = createSlice({
    name: 'skills',
    initialState: {
        list: skills,
        matchingProjects: []
    },
    reducers: {}
});

// export const {  } = slice.actions;

export default slice.reducer;
