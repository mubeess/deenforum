import {combineReducers} from 'redux';
import QuestionReducers from './question';
import UserReducers from './users';

const allReducers=combineReducers({
    questions:QuestionReducers,
    users:UserReducers
});
export default allReducers;
