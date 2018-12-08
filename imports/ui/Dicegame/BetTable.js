import React,{Component} from 'react'
import { Table } from 'semantic-ui-react'

export default class BetTable extends Component  {
 
 
render(){

return(
 <Table fixed style={{backgroundColor:'#3a5998', color:'white'}}>
    <Table.Header   >
      <Table.Row style={{fontSize:'16px',color:'gray'}} >
        <Table.Cell>Time</Table.Cell>
        <Table.Cell>Better</Table.Cell>
        <Table.Cell>Roll under</Table.Cell>
        <Table.Cell>Bet</Table.Cell>
        <Table.Cell>Roll</Table.Cell>
        <Table.Cell>Payout</Table.Cell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>21:17:08</Table.Cell>
        <Table.Cell>Sakuraki</Table.Cell>
        <Table.Cell>
          50
        </Table.Cell>
        <Table.Cell>
          1
        </Table.Cell>
        <Table.Cell>
         24
        </Table.Cell>
        <Table.Cell>
          2
        </Table.Cell>
      </Table.Row>

           <Table.Row>
        <Table.Cell>21:17:03</Table.Cell>
        <Table.Cell>Sakuraki</Table.Cell>
        <Table.Cell>
          50
        </Table.Cell>
        <Table.Cell>
          1
        </Table.Cell>
        <Table.Cell>
          38
        </Table.Cell>
        <Table.Cell>
          2
        </Table.Cell>
      </Table.Row>
      
      <Table.Row>
        <Table.Cell>21:17:01</Table.Cell>
        <Table.Cell>Sakuraki</Table.Cell>
        <Table.Cell>
          50
        </Table.Cell>
        <Table.Cell>
          1
        </Table.Cell>
        <Table.Cell>
         78
        </Table.Cell>
        <Table.Cell>
          0
        </Table.Cell>
      </Table.Row>
      
      
    </Table.Body>
  </Table>
)
}
}


