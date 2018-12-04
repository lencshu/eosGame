import React, { Component } from "react";
import {
    Menu,
    Segment,
    Button
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

import ProfileSignIn from "./ProfileSignIn"
import ProfileSignUp from "./ProfileSignUp"

export default class NaviBar extends Component {
    state = { activeItem: "home", signInState: true };
    togglesignInState = ()=> this.setState({ signInState: !this.signInState });
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeItem } = this.state;
        const { signInState } = this.state;

        return (
            <Segment inverted>
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
                    <Menu.Menu>
                    <Button 
                        circular color='twitter' icon='paper plane' 
                    />
                    <Button 
                        circular color='twitter' icon='twitter' 
                    />
                    </Menu.Menu>  
                    <Menu.Item position="right" />
                    {signInState ? <ProfileSignIn togglesignInState={() => this.togglesignInState} /> : <ProfileSignUp togglesignInState={() => this.togglesignInState}/>}
                               
                </Menu>
            </Segment>
        );
    }
}