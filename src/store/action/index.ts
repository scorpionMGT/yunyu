import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from '../actionType'

export function addTodo(text: any) {
    return { type: ADD_TODO, text }
}

export function toggleTodo(index: any) {
    return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter: any) {
    return { type: SET_VISIBILITY_FILTER, filter }
}
