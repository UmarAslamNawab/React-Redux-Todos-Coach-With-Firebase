import { SET_COMPLETED } from '../constants/constants'

export default (state = [] , action) => {
    switch(action.type){
        case SET_COMPLETED:
        const { completeTodos } = action;
        return completeTodos;
        default:
        return state;
    }
}