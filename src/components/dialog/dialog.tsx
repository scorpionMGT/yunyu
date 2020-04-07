import React from 'react'
import { DialogWrapper } from './style'

function FancyBorder(props: any) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    )
}

class Dialog extends React.Component {
    render() {
        return (
            <DialogWrapper>
                <FancyBorder color="blue">
                    <h1 className="Dialog-title">
                        Welcome
                    </h1>
                    <p className="Dialog-message">
                        Thank you for visiting our spacecraft!
                    </p>
                </FancyBorder>
            </DialogWrapper>
        )
    }
}

export default Dialog