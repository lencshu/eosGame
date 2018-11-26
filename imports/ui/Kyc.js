import React from 'react'
import { Form, Input, TextArea, Button, Select,Segment , Header,Icon } from 'semantic-ui-react'
import { countryOptions } from '../common'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const genderOptions = [
    { key: 'm', text: 'Male', value: 'male' },
    { key: 'f', text: 'Female', value: 'female' },
  ]
const Kyc = () => (
  
    <div>
  <Form>
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
    <Form.Group>
    <Form.Field
        id='form-input-control- Contry'
        control={Select}
        options={countryOptions}
        label='nationality'
        placeholder='Your nationality'
      />
    <Form.Field
        id='form-input-control- actuel contry'
        control={Input}
        options={countryOptions}
        label='contry'
        placeholder='your actuel contry'
      />
      <Form.Field
        id='form-input-control- Age'
        control={DatePicker}
        label='Birthday (xxxx/xx/xx)'
        placeholder='Your birthday'
      />
    </Form.Group>
    <Form.Field
      id='form-textarea-control-opinion'
      control={TextArea}
      label='Opinion'
      placeholder='Opinion'
    />
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
     <Button primary>Add Document</Button>
   </Segment>
   </div>
 
)

export default Kyc