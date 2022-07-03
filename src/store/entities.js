import { combineReducers } from 'redux';
import projectsReducer from './entities/projectsSlice';

export default combineReducers({
    projects: projectsReducer
});
