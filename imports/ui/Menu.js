import React, { Component } from 'react'
import { Menu, Segment,Popup,Button, List,Image,Icon,Transition,Form,Header,Grid, SegmentGroup,Divider } from 'semantic-ui-react'

export default class MenuExampleSecondaryPointing extends Component {
  state = { activeItem: 'home',
            visible: false,
            VisibleWallet: false,
            VisibleHistory : false,
            PlayerEosAmount : '0',
            PlayerGameToken:'0', 
            location:'',
            KYCstate:'',
            OrderID:'',
            Nationality : '',
            OrderedTokenAmount:'',
            CreatedTime:'',
            PlayerName:''

          }
 

  toggleVisibility = () => this.setState({ visible: !this.state.visible,VisibleHistory:false,VisibleWallet:false}) 
  
  toggleWalletVisibility = () => this.setState({VisibleWallet:!this.state.VisibleWallet,visible:false,VisibleHistory:false })

  toggleHistoryVisibility = () => this.setState({VisibleHistory:!this.state.VisibleHistory,VisibleWallet:false,visible:false })

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state
    const { visible } = this.state
    const { VisibleWallet } = this.state
    const { VisibleHistory } = this.state
    const {PlayerEosAmount} = this.state
    const {PlayerGameToken} = this.state
    const {location} = this.state
    const {KYCstate} = this.state
    const {OrderID} = this.state
    const {Nationality} = this.state
    const {OrderedTokenAmount} = this.state
    const {CreatedTime,PlayerName} = this.state
    

    return (
      <div>
        <Menu pointing secondary>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Dice game'
            active={activeItem === 'Dice game'}
            onClick={this.handleItemClick}
          />
           
          <Menu.Item
            name='PVP game'
            active={activeItem === 'PVP game'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
          <Popup
                trigger={
                  <Button animated>
                  <Button.Content visible>Player :{PlayerName} </Button.Content>
                  <Button.Content hidden>
                    Dashbord
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
                    <List.Header onClick={this.toggleWalletVisibility}>wallet</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item>
                  <List.Content>
                    <List.Header onClick={this.toggleHistoryVisibility}>history</List.Header>
                  </List.Content>
                </List.Item>
              </List>}
                on='click'
                position='bottom left'
             />
          </Menu.Menu>
        </Menu>

        <Transition visible={visible} animation='scale' duration={500}>
        <Segment.Group size='small'  style={{ left: '30%', position: 'fixed', top: '30%', zIndex: 10 , width : '50%', height :'50%'}}>
            <Button style = {{position:'relative', left:'91.8%'}}  color='red' onClick = {this.toggleVisibility} >Close</Button>
            <Header style={{position: 'relative', left:'40%'}}> <p>Player profile</p></Header>
      
    <span style={{position:"relative", left:'5%'}}>Location: {location} <br/> <Divider /> Nationality : {Nationality} <br/> <Divider /> KYC state: {KYCstate} <br/> <Divider /> Refererral link: </span> 
   
        
          </Segment.Group>
        </Transition>
      
        <Transition visible={VisibleWallet} animation='scale' duration={500}>
        <Segment.Group size='small' style={{ left: '30%', position: 'fixed', top: '30%', zIndex: 10 , width : '50%', height :'50%'}}>
        <Button style = {{position:'relative', left:'91.5%'}} color='red' onClick = {this.toggleWalletVisibility} >Close</Button>
            <Header style = {{position:'relative', left:'49%', top:'2%'}}> <p>Wallet</p></Header>
            <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        EOS amount : 
      </Grid.Column>
      <Grid.Column width={10}>
        {PlayerEosAmount}
      </Grid.Column>
    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
        Game token amount: 
      </Grid.Column>
      <Grid.Column width={10}>
      {PlayerGameToken}
      </Grid.Column>
  
    </Grid.Row>

  </Grid>
 
          </Segment.Group>
        </Transition>
        
        <Transition visible={VisibleHistory} animation='scale' duration={500}>
        <Segment.Group size='small' style={{ left: '30%', position: 'fixed', top: '30%', zIndex: 10 , width : '50%', height :'50%'}}>
            <Button color='red' onClick = {this.toggleHistoryVisibility} >Close</Button>
            <Header style={{ position:'relative' , left:'40%'}}> <p>History</p></Header>
            <Grid celled>
    <Grid.Row>
      <Grid.Column width={3}>
        Order ID :  
      </Grid.Column>
      <Grid.Column width={5}>
        Ordered token amount:  
      </Grid.Column>
      <Grid.Column width={5}>
        Time:  
      </Grid.Column>

    </Grid.Row>

    <Grid.Row>
      <Grid.Column width={3}>
      {OrderID}
      </Grid.Column>
      <Grid.Column width={5}>
      {OrderedTokenAmount}
      </Grid.Column>
      <Grid.Column width={5}>
      {CreatedTime}
      </Grid.Column>
  
    </Grid.Row>

  </Grid>

        
          </Segment.Group>
        </Transition>
      </div>
    )
  }
}
