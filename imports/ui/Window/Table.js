import React , { Component }from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'

export default class Ordertable extends Component {
  state={
    OrderID:'1',
    OrderedTokenAmount:'1000',
    CreatedTime:'01/12/2018'
 }
 render(){
  const {OrderID,OrderedTokenAmount,CreatedTime} = this.state

  return(
      <div className= 'container'>
        <Table celled inverted >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell> Order ID :  </Table.HeaderCell>
              <Table.HeaderCell>Ordered token amount:  </Table.HeaderCell>
              <Table.HeaderCell>Time:  </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                {OrderID}
              </Table.Cell>
              <Table.Cell>{OrderedTokenAmount}</Table.Cell>
              <Table.Cell>{CreatedTime}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
              <Table.Cell></Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        </div>
    );
  }
}
