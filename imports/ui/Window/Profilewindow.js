import React, { Component } from 'react'
import { Modal,Button, Header,Image,Divider,Icon } from 'semantic-ui-react'


export default class PlayerProfileWindow extends Component {
   constructor(props){
       super(props)
    this.state={
        Nationality:'French',
        KYCstate:'Unverified',
        location:'France',
        Rank:'Diamand',
        Username:'Sakuragi',
        visiblePlayerProfile:false
    }}
    


 render(){
    const {Nationality,KYCstate,location,Rank,Username } = this.state
    const {visiblePlayerProfile} = this.props
     return (
        <Modal open={visiblePlayerProfile}  style={{width :'30%'}}>
        {/*  Player profile Container  */ }
            <div className="container">
                <div className="AnimatedBackGround"> {/*  Class defined in CSS to have a animated background change  */ }
                    <Button style = {{position:'relative', left:'86.8%'}}  color='red' onClick = {this.props.ClosePlayerWindow} >Close</Button>
                    <Header style={{position: 'relative', left:'40%', color:'white', fontSize:'20px'}}> <p>Player profile</p>  
                    </Header>
                    <Image src='https://i.ebayimg.com/images/g/jN8AAMXQROxRfmg5/s-l300.jpg' size='small' circular style={{position: 'relative',left:'2%'}} />
                   
                     <Button size='tiny' inverted style={{position:'relative',left:'3%'}}>
                        <Button.Content visible>Image upload  <Icon name='upload' /></Button.Content>
                    </Button>
                    <Divider />

                    <b style={{position:"relative",  color:'white', fontSize:'18px'}}> 
                    &ensp; Username: {Username} <br/> <br/>  <Divider />
                    &ensp;Location: {location} <br/> <br/>  <Divider />
                    &ensp;Nationality : {Nationality} <br/>  <br/>  <Divider />
                    &ensp;KYC state: {KYCstate} <br/>  <br/>  <Divider />
                    &ensp;Rank: {Rank} <br/>  <br/>  <Divider />
                    &ensp;Refererral:  {/* link state to declare  */ } 
                    </b> 
                </div>
            </div>
        </Modal> 
     );   
    }
}