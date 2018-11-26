import React, { Component } from 'react'; 
import { Segment } from 'semantic-ui-react';
import Kyc from './Kyc';
import MenuBarPlusPlayerProfile from './Menu';
 
// App component - represents the whole app
export default class App extends Component {

 

 
  render() {
    return (
      <div className='App' style = {{backgroundColor : '#00B1E1'}} >
        <div className="container" style = {{backgroundColor : '#00B1E1'}} >
          <header><b style={{fontSize:'20px', color:'white', position:'relative',left:'45%'}}> 
          Angel City</b>
          </header>
          <MenuBarPlusPlayerProfile />
          <Segment>
            <Kyc />
          </Segment>
        </div>
      </div>

    );
  }
}
