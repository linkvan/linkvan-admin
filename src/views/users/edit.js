import React from 'react'
import { Edit, SimpleForm, BooleanInput, TextInput } from 'react-admin'
import FormTitle from 'components/form-title'

const UserEdit = props => (
  <Edit title={<FormTitle title="User" />} {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phone_number" />
      <BooleanInput source="verified" />
    </SimpleForm>
  </Edit>
)

export default UserEdit
