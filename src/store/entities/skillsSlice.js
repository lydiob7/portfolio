import { createSlice } from '@reduxjs/toolkit';
import skills from 'data/skills';

const slice = createSlice({
    name: 'projects',
    initialState: {
        list: skills
    },
    reducers: {}
});

// export const { } = slice.actions;

export default slice.reducer;
