import React from 'react'
import { ContactBarWrapper, ContactBarList, ContactBarItem, ContactBarItemIcon } from './style'

import top from './images/top.svg'
import customerService from './images/customer-service.svg'
import mini from './images/mini.svg'


class ContactBar extends React.Component {
    constructor(props: any) {
        super(props)
        this.state = {
            topstate: false,
        }
    }
    protected returnTop(item: any, e: any) {
        console.log('e', item, e)
    }
    render() {
        let contactBarList = [
            {
                icon: top,
                handleClick: this.returnTop,
            },
            {
                icon: customerService,
                handleClick: this.returnTop,
            },
            {
                icon: mini,
                handleClick: this.returnTop,
            },
        ]
        return (
            <ContactBarWrapper>
                <ContactBarList>
                    {
                        contactBarList.map((item, index) => {
                            return (
                                <ContactBarItem key={index} onClick={(e) => item.handleClick(item, e)}>
                                    <ContactBarItemIcon src={item.icon} />
                                </ContactBarItem>
                            )
                        })
                    }
                </ContactBarList>
            </ContactBarWrapper>
        )
    }
}

export default ContactBar