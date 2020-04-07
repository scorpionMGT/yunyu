import React from 'react'
import { connect } from 'react-redux'
import { HomeWrapper } from './style'
import { bindActionCreators, Dispatch } from 'redux'

const mapStateToProps = (state: any, ownProps: Props) => {
    console.log('state', state, ownProps)
    return {
        state: state,
        ownProps: ownProps
    }
}
const deleteList = () => {
    console.log('deleteList')
    return {
        type: 'DELETE_LIST',
        content: 'deleteList'
    }
}
const addList = () => {
    console.log('addList')
    return {
        type: 'ADD_LIST',
        content: 'addList'
    }
}
// const mapDispatchToProps = { addList, deleteList }

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            deleteList,
            addList
        },
        dispatch
    )

interface Props {
    type: string
    [propname: string]: any
}
class Home extends React.Component<Props> {
    componentDidMount() {
        console.log('props', this.props)
    }
    render() {
        return <HomeWrapper>Home</HomeWrapper>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
