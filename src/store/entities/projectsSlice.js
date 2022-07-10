import { createSlice } from '@reduxjs/toolkit';
import projects from 'data/projects';

export const setProject = (projectId) => (dispatch, getState) => {
    const currentLanguage = getState()?.ui?.appSettings?.currentLanguage;
    const stateList = getState()?.entities?.projects?.list;
    let currentProject = stateList?.filter((project) => project?.id === projectId)?.[0];
    if (currentProject) dispatch(setProjectText({ ...currentProject, data: currentProject[currentLanguage] }));
};

export const filterResultsBySkills = (skills) => (dispatch, getState) => {
    const results = projects.getBySkills(skills);

    dispatch(setMatchingProjects(results));
};

const slice = createSlice({
    name: 'projects',
    initialState: {
        list: projects.getFeatured(),
        currentProject: {},
        matchingProjects: []
    },
    reducers: {
        resetState: (state, action) => {
            state.currentProject = {};
            state.matchingProjects = [];
        },
        setProjectText: (state, action) => {
            state.currentProject = action.payload;
        },
        setMatchingProjects: (state, action) => {
            state.matchingProjects = action.payload;
        }
    }
});

export const { resetState, setMatchingProjects, setProjectText } = slice.actions;

export default slice.reducer;
