import React, { Component } from 'react'
import { Menu, Segment,Popup,Button, List,Image,Icon,Transition,Form,Header,Grid, SegmentGroup,Divider,Container } from 'semantic-ui-react'
import { connect } from 'react-redux'
import {SetPage} from '../actions/UserAction'


export default class MenuBarPlusPlayerProfile extends Component {
 /*  Declare the initial state, state can be stored in the redux store when we are famillared to use redux   */ 
  state = { activeItem: 'home',
            visiblePlayerProfile: false,
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
            PlayerName:'',
            visibleKYC:false

          }

//----------------------------------------------Event handler------------------------------------------------------------------------
  togglePlayerProfileVisibility = () => this.setState({ visiblePlayerProfile: !this.state.visiblePlayerProfile,VisibleHistory:false,VisibleWallet:false}) // Player profile window trigger event
  
  toggleWalletVisibility = () => this.setState({VisibleWallet:!this.state.VisibleWallet,visible:false,VisibleHistory:false }) //Wallet window trigger event

  toggleHistoryVisibility = () => this.setState({VisibleHistory:!this.state.VisibleHistory,VisibleWallet:false,visible:false }) // History window trigger event

 handleItemClick = (e, { name }) => { this.setState({ activeItem: name }) } // to modify
  
// -------------------------------------render----------------------------------------------------------------------------------------------
  render() {
  const { activeItem } = this.state
  const { visiblePlayerProfile } = this.state
  const { VisibleWallet } = this.state
  const { VisibleHistory,visibleKYC } = this.state
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
      {/*  Menu select bar  */ }
      <Menu pointing secondary>
      {/* left side  */ }
          <Menu.Item 
          name= 'home'
          active={activeItem === 'home'} onClick={this.handleItemClick} />
          
          <Menu.Item
            name='Dice game'
            active={activeItem === 'Dice game'}
            onClick={this.handleItemClick}
          />
          
          <Menu.Item
            name='More game'
            active={activeItem === 'More game'}
            onClick={this.handleItemClick}
          />

          <Menu.Item
            name='KYC'
            active={activeItem === 'KYC'}
            onClick={this.handleItemClick}
          />

          <Menu.Menu>
            <Button circular color='twitter' icon='paper plane' />
            <Button circular color='twitter' icon='twitter' />
            
          </Menu.Menu>

        {/*  right side player dashbord button with popup list */ }
          <Menu.Menu position='right'>
          {/*  Popup element with list element integrated  */ }
            <Popup
              trigger={
                        <Button animated>
                          <Button.Content visible>Player :{PlayerName} </Button.Content>  {/*  First display content  */ }
                          <Button.Content hidden>Dashbord</Button.Content>  {/*  Second display content  */ }
                        </Button>
                      }
                      
              content={   
                        <List animated verticalAlign='middle'> {/*  List of possible choice : Profile, Wallet, History. Which can trigger the visible state  */ }
                          <List.Item>
                            <List.Content>
                              <List.Header onClick={this.togglePlayerProfileVisibility}>Profile</List.Header> {/*  trigger the visibility state of transistion element for Profile container   */ }
                            </List.Content>
                          </List.Item>

                          <List.Item>
                            <List.Content>
                              <List.Header onClick={this.toggleWalletVisibility}>Wallet</List.Header> {/*  trigger the visibility state of transistion element for Wallet container   */ }
                            </List.Content>
                          </List.Item>

                          <List.Item>
                            <List.Content>
                              <List.Header onClick={this.toggleHistoryVisibility}>History</List.Header> {/*  trigger the visibility state of transistion element for History container   */ }
                            </List.Content>
                          </List.Item>
                        </List>
                      }
              on='click'
              position='bottom left'
              /> 
            </Menu.Menu>
      </Menu>

      {/* ------------------------------------------POPUP Window realised by Transition element---------------------------------------------------------------------------------------------------------------------  */ }
      
      {/* 1 : Popup window for Player's profile   */ }
      <Transition visible={visiblePlayerProfile} animation='scale' duration={500}>
        {/*  Player profile Container  */ }
        <div className="container"   style={{ left: '30%', position: 'fixed', top: '20%', zIndex: 10 , width : '50%', height :'50%'}}>
          <div className="AnimatedBackGround"> {/*  Class defined in CSS to have a animated background change  */ }
            <Button style = {{position:'relative', left:'91.8%'}}  color='red' onClick = {this.toggleVisibility} >Close</Button>
            <Header style={{position: 'relative', left:'40%'}}> <p>Player profile</p></Header>
            <b style={{position:"relative", left:'5%', color:'white', fontSize:'18px'}}>Location: {location} <br/> <br/>  
            Nationality : {Nationality} <br/>  <br/>  
            KYC state: {KYCstate} <br/>  <br/>  
            Refererral:  {/* link state to declare  */ }
            </b> 
          </div>
        </div>
      </Transition>
    
      {/* 2 : Popup window for Wallet  */ }
      <Transition visible={VisibleWallet} animation='scale' duration={500}>
      {/* Wallet container   */ }
        <div className="container"  style={{ left: '30%', position: 'fixed', top: '20%', zIndex: 10 , width : '50%', height :'50%'}}>
          <div className="AnimatedBackGround"> {/*  Class defined in CSS to have a animated background change  */ }
            <Button style = {{position:'relative', left:'91.5%'}} color='red' onClick = {this.toggleWalletVisibility} >Close</Button>
            <Header style = {{position:'relative', left:'49%', top:'2%'}}> <p>Wallet</p></Header>
            {/*  Grid to arrange the space as a table  */ }
            <Grid celled>
                  {/*  First row  */ }
                  <Grid.Row> 
                    <Grid.Column width={3}> {/*  First column*/ }
                      EOS amount : 
                    </Grid.Column>
                    <Grid.Column width={10}>  {/*  seconde column*/ }
                      {PlayerEosAmount}
                    </Grid.Column>
                  </Grid.Row>
                  
                  {/* Second row  */ }
                  <Grid.Row> 
                    <Grid.Column width={3}> {/*  First column*/ }
                      Game token amount: 
                    </Grid.Column>
                    <Grid.Column width={10}>{ /*  seconde column*/ }
                    {PlayerGameToken}
                    </Grid.Column>
                  </Grid.Row>

            </Grid>
          </div>
        </div>
      </Transition>

      {/* 3: Popup window for History  */ }
      <Transition visible={VisibleHistory} animation='scale' duration={500}>
        <div className="container"  style={{ backgroundColor:'rgb(255, 255, 0)', left: '30%', position: 'fixed', top: '20%', zIndex: 10 , width : '50%', height :'50%'}}>
          <div className = "AnimatedBackGround"> {/*  Class defined in CSS to have a animated background change  */ }
            <Button color='red' onClick = {this.toggleHistoryVisibility} >Close</Button>
            <Header style={{ position:'relative' , left:'40%'}}> <p>History</p></Header>
            <Grid celled>
            {/* First row */ }
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
            {/* Second row */ }
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
          </div>
        </div>
      </Transition>
    </div>
          )
  }
}
