import React from 'react'
// import { autobind } from 'core-decorators'
// import PropTypes from 'prop-types'
import { Menu, Icon, Switch } from 'antd'
const { SubMenu } = Menu

class Sider extends React.Component {
    state: any = {
        theme: 'dark',
        current: '1',
    }

    // @autobind
    changeTheme = (value: any): void => {
        this.setState({
            theme: value ? 'dark' : 'light',
        }, () => {
            console.log('setstate异步方法执行完成之后执行的回调函数')
        })
    }

    // @autobind
    handleClick = (e: any): void => {
        console.log('click ', e, this)
        this.setState({
            current: e.key,
        });
    }

    render() {
        return (
            <div>
                <Switch
                    checked={this.state.theme === 'dark'}
                    onChange={this.changeTheme}
                    checkedChildren="Dark"
                    unCheckedChildren="Light"
                />
                <br />
                <br />
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >
                    <SubMenu
                        key="sub1"
                        title={
                            <span>
                                <Icon type="mail" />
                                <span>Navigation One</span>
                            </span>
                        }
                    >
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu
                        key="sub2"
                        title={
                            <span>
                                <Icon type="appstore" />
                                <span>Navigation Two</span>
                            </span>
                        }
                    >
                        <Menu.Item key="5">Option 5</Menu.Item>
                        <Menu.Item key="6">Option 6</Menu.Item>
                        <SubMenu key="sub3" title="Submenu">
                            <Menu.Item key="7">Option 7</Menu.Item>
                            <Menu.Item key="8">Option 8</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                    <SubMenu
                        key="sub4"
                        title={
                            <span>
                                <Icon type="setting" />
                                <span>Navigation Three</span>
                            </span>
                        }
                    >
                        <Menu.Item key="9">Option 9</Menu.Item>
                        <Menu.Item key="10">Option 10</Menu.Item>
                        <Menu.Item key="11">Option 11</Menu.Item>
                        <Menu.Item key="12">Option 12</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        )
    }
}

// Sider.propTypes = {
//     current: PropTypes.string.isRequired,
//     theme: PropTypes.object,
// }

// Sider.defaultProps = {
//     content: 'default content',
// }

export default Sider