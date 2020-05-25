import React from 'react'
import {
  List,
  Filter,
  ReferenceField,
  Datagrid,
  TextField,
  DateField,
  BooleanField,
  TextInput,
  SelectInput,
  ReferenceInput
} from 'react-admin'

const FacilityFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="Name" source="name" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
)

const FacilityList = props => (
  <List filters={<FacilityFilter />} {...props}>
    <Datagrid rowClick="edit">
      <ReferenceField source="user_id" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="name" />
      <TextField source="phone" />
      <DateField source="updated_at" />
      <BooleanField source="verified" />
    </Datagrid>
  </List>
)

export default FacilityList
