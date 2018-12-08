import React, { Component } from 'react'; 
import NaviBar from './panel/NaviBar';
import Gamepage from '../ui/Dicegame/mainbody'


 
// App component - represents the whole app
 class App extends Component {

  render() {

    return (
      <div className='App'>
        <NaviBar/>
        <Gamepage />

    
       
        
      </div>

    );
  }
}

export default App 