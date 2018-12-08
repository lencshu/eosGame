import React, { Component } from "react";
import {
    Menu,
    Segment,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";



export default class BetBar extends Component {
    state = { activeItem: "All Bets", signInState: true };
    togglesignInState = ()=> this.setState({ signInState: !this.signInState });
    handleItemClick = (e, { name }) => this.setState({ activeItem: name });
    render() {
        const { activeItem } = this.state;

        return (
          
                <Menu inverted pointing secondary>
                    <Menu.Item
                        name="All Bets"
                        active={activeItem === "All Bets"}
                        onClick={this.handleItemClick}
                    /> 
                    <Menu.Item
                        name="My Bets"
                        active={activeItem === "My Bets"}
                        onClick={this.handleItemClick}
                    />
                </Menu>
    
        );
    }
}