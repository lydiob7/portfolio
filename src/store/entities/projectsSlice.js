import { createSlice } from '@reduxjs/toolkit';
import chapati from 'data/chapati';
import gabiPortfolio from 'data/gabiPortfolio';
import tierraRoja from 'data/tierraRoja';

export const setProject = (projectId) => (dispatch, getState) => {
    const stateList = getState()?.entities?.projects?.list;
    let currentProject = stateList?.filter((project) => project?.id === projectId);
    if (currentProject) dispatch(setProjectText(currentProject));
};

const slice = createSlice({
    name: 'projects',
    initialState: {
        list: [gabiPortfolio, chapati, tierraRoja],
        currentProject: {}
    },
    reducers: {
        setProjectText: (state, action) => {
            state.currentProject = action.payload;
        }
    }
});

export const { setProjectText } = slice.actions;

export default slice.reducer;
