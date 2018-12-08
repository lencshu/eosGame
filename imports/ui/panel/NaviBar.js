import React, { Component } from "react";
import {
    Menu,
    Segment
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import ProfileSignIn from "./ProfileSignIn"
import ProfileSignUp from "./ProfileSignUp"

const menuStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    border: 'none',
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: '1em',
    marginTop: '4em',
    transition: 'box-shadow 0.5s ease, padding 0.5s ease',
}

export default class NaviBar extends Component {
    constructor(props) {
        super(props);
        this.state = { activeItem: "home", signInState: true };
    }
    togglesignInState = () => this.setState({ signInState: !this.signInState });
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeItem } = this.state;
        const { signInState } = this.state;

        return (
            <Segment inverted style={menuStyle}>
                <Menu inverted pointing secondary>
                    <Menu.Item
                        name="home"
                        active={activeItem === "home"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="dice"
                        active={activeItem === "dice"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name="PVP"
                        active={activeItem === "PVP"}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item position="right" />
                    {signInState ? <ProfileSignIn togglesignInState={() => this.togglesignInState} /> : <ProfileSignUp togglesignInState={() => this.togglesignInState} />}
                </Menu>
            </Segment>
        );
    }
}