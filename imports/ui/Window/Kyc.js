import React, {Component} from 'react'
import { Form, Input, TextArea, Button, Select,Segment , Header,Icon,Divider,Progress,Container } from 'semantic-ui-react'
import { countryOptions } from './contry' //Contry selection option
import {Datepicker} from "./Datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Kycprogress from './Kycprogress';


// gender option
const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]

  export default class Kyc extends Component {
    state = { percent : 10  }
  render() {
    const {percent} = this.state
    return(
      
       <div style={{backgroundColor: 'transparent'}}>
        <Header style={{position:'relative', color :'black',fontSize:'24px', left:'45%'}}> Know our partner </Header>
        
        <p style={{fontSize:'17px'}}>
          In order to imporve our service and the security, we need to check your information as our investor. Please fill the following form and prepare the following documents and upload it. We will treat your demand as soon as possible.
          thanks for your cooperation. <br/>
        </p>
        <Divider />
        <Container>
        <Form>
        {/* First group*/}
          <Form.Group widths='equal'>
            <Form.Field
              id='form-input-control-first-name'
              control={Input}
              label='First name'
              placeholder='First name'
            />
            <Form.Field
              id='form-input-control-last-name'
              control={Input}
              label='Last name'
              placeholder='Last name'
            />
            <Form.Field
              control={Select}
              options={genderOptions}
              label={{ children: 'Gender', htmlFor: 'form-select-control-gender' }}
              placeholder='Gender'
              search
              searchInput={{ id: 'form-select-control-gender' }}
            />
          </Form.Group>
          {/* Seconde group*/}
          <Form.Group>
            <Form.Field
                id='form-input-control- Contry'
                control={Select}
                options={countryOptions}
                label='Nationality'
                placeholder='Your nationality'
            />
            <Form.Field
                id='form-input-control- actuel contry'
                control={Select}
                options={countryOptions}
                label='Contry of residence'
                placeholder='your actuel contry'
            />
            <Form.Field
                id='form-input-control- Age'
                control={Datepicker}
                label='Birthday (Month/Day/Year)'
                placeholder='Date of birth'
            />
          </Form.Group>
          {/* third part*/}
          <Form.Field
            id='form-button-control-public'
            control={Button}
            content='Confirm'
            label='Label with htmlFor'
            
          />
        </Form>
      
         <Segment placeholder>
            <Header icon>
              <Icon name='pdf file outline' />
              Please add the listed documents below.
            </Header>
            <Button primary >Add Document</Button> {/* Document to store in the database*/}
          </Segment>
          <text>Progress:</text> 
          <Progress percent={percent} progress/>
          <Kycprogress />
          </Container>
          </div>
    );
  }
 }

