import { createSlice } from '@reduxjs/toolkit';
import chapati from 'data/chapati';
import gabiPortfolio from 'data/gabiPortfolio';
import tierraRoja from 'data/tierraRoja';

export const setProject = (projectId) => (dispatch, getState) => {
    const currentLanguage = getState()?.ui?.appSettings?.currentLanguage;
    const stateList = getState()?.entities?.projects?.list;
    let currentProject = stateList?.filter((project) => project?.id === projectId)?.[0];
    if (currentProject) dispatch(setProjectText({ ...currentProject, data: currentProject[currentLanguage] }));
};

const slice = createSlice({
    name: 'projects',
    initialState: {
        list: [gabiPortfolio, chapati, tierraRoja],
        currentProject: {}
    },
    reducers: {
        resetState: (state, action) => {
            state.currentProject = {};
        },
        setProjectText: (state, action) => {
            state.currentProject = action.payload;
        }
    }
});

export const { resetState, setProjectText } = slice.actions;

export default slice.reducer;
