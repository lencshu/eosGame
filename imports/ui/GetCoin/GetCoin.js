import React from 'react';
import { Input, Button, Modal, Header, Icon } from 'semantic-ui-react';
import "./GetCoin.css";

export default class GetCoin extends React.Component {
  state = { modalOpen: false };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  checkout = () => {
    this.handleOpen();
    console.log('click');
  };
  render() {
    return (
      <div className="center">
        <Input
          action={

            <Modal
              trigger={
                <Button
                  color="teal"
                  content="Checkout"
                  onClick={this.checkout}
                />
              }
              open={this.state.modalOpen}
              onClose={this.handleClose}
              basic
              size='small'
            >
              <Header icon='browser' content='Confirm transfer' />
              <Modal.Content>
                <h3>Thanks for your participation.</h3>
              </Modal.Content>
              <Modal.Actions>
                <Button color='green' onClick={this.handleClose} inverted>
                  <Icon name='checkmark' /> Got it
                </Button>
              </Modal.Actions>
            </Modal>
          }
          actionPosition='left'
          placeholder='EOS'
          defaultValue='52.03'
        />
      </div>
    );
  }
}