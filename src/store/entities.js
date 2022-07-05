import { combineReducers } from 'redux';
import projectsReducer from './entities/projectsSlice';
import skillsReducer from './entities/skillsSlice';

export default combineReducers({
    projects: projectsReducer,
    skills: skillsReducer
});
