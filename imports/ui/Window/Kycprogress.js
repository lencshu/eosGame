import React,{Component} from 'react'
import { Icon, Step } from 'semantic-ui-react'

export default class Kycprogress extends Component {
  
  render(){
      return(
    <Step.Group>
    <Step active>
      <Icon name='edit' />
      <Step.Content>
        <Step.Title>Filling the form</Step.Title>
        <Step.Description>Please fill the form and upload demanded documents</Step.Description>
      </Step.Content>
    </Step>

    <Step disabled>
      <Icon name='upload' />
      <Step.Content>
        <Step.Title>submited</Step.Title>
        <Step.Description>Submission succeded</Step.Description>
      </Step.Content>
    </Step>

    <Step disabled>
      <Icon name='check' />
      <Step.Content>
        <Step.Title>Treated</Step.Title>
      </Step.Content>
    </Step>
  </Step.Group>
      )
  }

}
