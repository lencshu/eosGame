import React, { Component } from 'react'
import { Modal,Button, Header,Grid,Divider} from 'semantic-ui-react'
import Ordertable from './Table';
import {Line} from 'react-chartjs-2'


export default class WalletWindow extends Component {
  state={
   PlayerEosAmount:'0',
   PlayerGameToken:'0',
}

 render(){
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'EOS amount evolution',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: 'rgb(13, 9, 77)',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };
    const { PlayerEosAmount,PlayerGameToken} = this.state
    const {VisibleWallet}=this.props

     return (
        <Modal  open={VisibleWallet}>
        {/* Wallet container   */ }
          <div className="container"  >
            <div className="AnimatedBackGround" style={{height :'50%'}}> {/*  Class defined in CSS to have a animated background change  */ }
              <Button style = {{position:'relative', left:'86.8%'}} color='red' onClick = {this.props.CloseWalletWindow} >Close</Button>
              <Header style = {{position:'relative', left:'40%', top:'1%', color:'white', fontSize:'20px'}}> <p>Wallet</p></Header>
              
              <Divider />

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
              <Ordertable />
              </div>  
              <div style={{backgroundColor:'rgb(13, 9, 77)'}}>
              <Line data={data} />
              </div>    
          </div>
        </Modal>
     );   
    }
}