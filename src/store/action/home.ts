interface Params {
    type: string
    content: any
}
export const setHomeInfo = (params: Params) => {
    return {
        type: 'SET_HOME_INFO',
        content: params.content
    }
}
