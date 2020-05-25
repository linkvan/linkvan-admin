import React from 'react'
import { Create, SimpleForm, BooleanInput, TextInput } from 'react-admin'

const UserCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone_number" />
      <BooleanInput source="verified" />
    </SimpleForm>
  </Create>
)

export default UserCreate
