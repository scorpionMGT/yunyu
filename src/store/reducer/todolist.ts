// directory目录的作用
import _ from 'lodash'
const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.'
]
const defaultState = {
    inputValue: '',
    list: data
}
export const todoListReducer = (state = defaultState, action: any) => {
    // 整个 store 的数据信息
    let _state = _.clone(state)
    if (action.type === 'change_input_value') {
        _state.inputValue = action.value
    }
    if (action.type === 'add_todo_list_item') {
        _state.list.push(action.value)
    }
    if (action.type === 'delete_todo_list_item') {
        if (_state.list.indexOf(action.value) > -1)
            _state.list.splice(_state.list.indexOf(action.value), 1)
    }
    return _state
}
