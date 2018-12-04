import React, { Component } from "react";
import {
    Dropdown,
    Button,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import WalletWindow from "../Window/Wallet profile";
import PlayerProfileWindow from "../Window/Profilewindow";

export default class ProfileSignIn extends Component {
    constructor(props){
        super(props)
        this.state = { userName: "bob",
        VisibleWallet:false,
        visiblePlayerProfile:false
        };
        this.handleChange = this.handleChange.bind(this)
        this.WalletWindowbtn=this.WalletWindowbtn.bind(this)
        this.PlayerProfileWindowbtn=this.PlayerProfileWindowbtn.bind(this)
    }
   
    WalletWindowbtn = () => this.setState({VisibleWallet:false} )
    PlayerProfileWindowbtn(){ this.setState({ visiblePlayerProfile: false})}
    handleChange=(e, {value}) => {
        if (value =="account") {
        this.setState({VisibleWallet : true})}
        if (value =="profile") {
            this.setState({visiblePlayerProfile : true})}
       
   
    }

    render() {
        const { userName,VisibleWallet,key,visiblePlayerProfile } = this.state;
        const trigger = (
            <Button animated>
                <Button.Content visible>
                    Hello, <strong>{userName}</strong>
                </Button.Content>
                <Button.Content hidden>Dashbord</Button.Content>
            </Button>
        );
        const options = [
            {
                key: "user",
                text: (
                    <span>
                        Welcome <strong>Bob Sm</strong>
                    </span>
                ),
                disabled: true,
                value : "user"
            },
            { key: "profile", text: "Your Profile", value : "profile"},
            { key: "account", text: "Account", value : "account"},
            { key: "tuto", text: "Tutorials" , value :"tuto"},
            { key: "sign-out", text: "Sign Out", value :"sign-out" }
        ];
        return (
        <div>
            <Dropdown trigger={trigger} floating pointing='top left' options={options}  onChange={
            this.handleChange}/> 
        <WalletWindow VisibleWallet = {VisibleWallet} CloseWalletWindow= {this.WalletWindowbtn} /> 
        <PlayerProfileWindow visiblePlayerProfile = {visiblePlayerProfile} ClosePlayerWindow = {this.PlayerProfileWindowbtn}/>  
        </div>);
    }
}