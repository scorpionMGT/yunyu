interface Params {
    type: string
    permission: string
    content: any
}
export const setPermission = (params: Params) => {
    return {
        type: 'SET_PERMISSION',
        permission: params.permission,
        content: params.content
    }
}
