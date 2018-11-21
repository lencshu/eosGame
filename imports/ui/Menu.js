import React, { Component } from 'react'
import { Menu, Segment,Popup,Button, List,Image,Icon,Transition,Form,Header,Grid, SegmentGroup } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home',
            visible: false
          }
 

  toggleVisibility = () => this.setState({ visible: !this.state.visible })


  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    const { visible } = this.state
    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='messages'
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
           
          <Menu.Item
            name='friends'
            active={activeItem === 'friends'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
          <Popup
                trigger={
                  <Button animated>
                  <Button.Content visible>Profile</Button.Content>
                  <Button.Content hidden>
                    <Icon name='arrow right' />
                  </Button.Content>
                </Button>
              
                }
                content={  <List animated verticalAlign='middle'>
                <List.Item>
                  <List.Content>
                    <List.Header onClick={this.toggleVisibility}>Profile</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header onClick={this.toggleVisibility}>wallet</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header onClick={this.toggleVisibility}>history</List.Header>
                  </List.Content>
                </List.Item>
              </List>}
                on='click'
                position='bottom left'
             />
          </Menu.Menu>
        </Menu>
        <Transition visible={visible} animation='scale' duration={500}>
        <Segment.Group size='small' style={{ left: '30%', position: 'fixed', top: '40%', zIndex: 10 , width : '18', height :'18'}}>
            <Button position = 'right' color='red' onClick = {this.toggleVisibility} >Close</Button>
            <Header>Player profile</Header>
           
            <Segment.Group horizontal> 
            <Segment>Amount of EOS :                  </Segment> 
            <Segment>test</Segment>
            </Segment.Group>
            <Segment><p>Amount of Token:                      </p></Segment>
          </Segment.Group>
          
        </Transition>
        <Segment >
        
        </Segment>

      </div>
    )
  }
}
