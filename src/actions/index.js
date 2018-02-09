
import { SIGNED_IN , SET_TODOS , SET_COMPLETED} from '../constants/constants'

export function logUser(email){
    const action ={
        type: SIGNED_IN,
        email
    }
    return action;
}


export function setTodos(todos) {
    const action ={
        type: "SET_TODOS",
        todos
    }
    return action
}

export function setCompleted(completeTodos) {
    const action ={
        type : "SET_COMPLETED",
        completeTodos
    }
    return action
}

