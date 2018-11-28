import React, { Component } from "react";
import {
    Dropdown,
    Button,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";


export default class ProfileSignUp extends Component {
    render() {
        const trigger = (
            <Button animated>
                <Button.Content visible>
                    Hello
                </Button.Content>
                <Button.Content hidden>Go</Button.Content>
            </Button>
        );
        const options = [
            // {
            //     key: "user",
            //     text: <span>Who R U ?</span>,
            //     disabled: true
            // },
            { key: "signIn", text: "Sign In" },
            { key: "signUp", text: "Sign Up" },
            { key: "tuto", text: "Tutorials" }
        ];
        return <Dropdown trigger={trigger} floating pointing='top left' options={options} />;
    }
}