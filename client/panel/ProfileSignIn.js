import React, { Component } from "react";
import {
    Dropdown,
    Button,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class ProfileSignIn extends Component {
    state = { userName: "bob" };
    render() {
        const { userName } = this.state;
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
                disabled: true
            },
            { key: "profile", text: "Your Profile" },
            { key: "account", text: "Account" },
            { key: "tuto", text: "Tutorials" },
            { key: "sign-out", text: "Sign Out" }
        ];
        return <Dropdown trigger={trigger} floating pointing='top left' options={options} />;
    }
}