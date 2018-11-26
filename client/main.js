import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Input, Menu, Segment } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

class ProfileLogin extends Component {
  render() {
    const trigger = (
      <span>
        <Icon name='user' /> Hello, Bob
      </span>
    )
    const options = [
      {
        key: 'user',
        text: (
          <span>
            Signed in as <strong>Bob Smith</strong>
          </span>
        ),
        disabled: true,
      },
      { key: 'profile', text: 'Your Profile' },
      { key: 'stars', text: 'Your Stars' },
      { key: 'explore', text: 'Explore' },
      { key: 'integrations', text: 'Integrations' },
      { key: 'help', text: 'Help' },
      { key: 'settings', text: 'Settings' },
      { key: 'sign-out', text: 'Sign Out' },
    ]
    const profileDropdown = () => <Dropdown trigger={trigger} options={options} />
    return (
      { profileDropdown }
    );
  }
}

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
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
          <Menu.Item
            position="right"
            name="ID"
            active={activeItem === "ID"}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}

const navElement = document.getElementById("nav");
ReactDOM.render(<MenuExampleSecondary />, navElement);
