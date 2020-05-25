import React from 'react'
import {
  List,
  Filter,
  Datagrid,
  TextField,
  EmailField,
  BooleanField,
  TextInput,
  SelectInput,
  ReferenceInput
} from 'react-admin'
import UserNameField from './user-name-field'

const UserFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Name" source="name" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
)

const UserList = props => (
  <List filters={<UserFilter />} {...props}>
    <Datagrid rowClick="edit">
      <UserNameField source="name" />
      <EmailField source="email" />
      <TextField source="phone_number" />
      <BooleanField source="verified" />
    </Datagrid>
  </List>
)

export default UserList
