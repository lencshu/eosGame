import React from "react";
import {
  Icon,
  Menu,
} from 'semantic-ui-react'
const overlayMenuStyle = {
  position: 'relative',
  left: 0,
  transition: 'left 0.5s ease',
}
export default class Subscribe extends React.Component {
  state = {
    overlayFixed: false,
  }
  render() {
    const { overlayFixed } = this.state
    return (
      <Menu
        icon='labeled'
        style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
        vertical
      >
        <Menu.Item>
          <Icon name='twitter' />
          Twitter
              </Menu.Item>

        <Menu.Item>
          <Icon name='facebook' />
          Share
              </Menu.Item>

        <Menu.Item>
          <Icon name='mail' />
          Email
              </Menu.Item>
      </Menu>
    )
  }
}