import React from 'react'
import { List, Edit, Create, Filter, SimpleForm, Datagrid, TextField, EmailField, BooleanField, BooleanInput, TextInput, SelectInput, ReferenceInput } from 'react-admin'

const UserTitle = ({ record }) => {
	return <span>User {record ? `"${record.name}"` : ''}</span>
}

const UserNameField = ({ record }) => {
	return <span>{record.name} {record.admin ? <strong>(Admin)</strong> : ''}</span>
}

const UserFilter = (props) => (
	<Filter {...props}>
		<TextInput label="Search" source="q" alwaysOn />
		<ReferenceInput label="Name" source="name" reference="users" allowEmpty>
			<SelectInput optionText="name" />
		</ReferenceInput> 
	</Filter>
);

export const UserList = props => (
	<List filters={<UserFilter />} {...props}>
		<Datagrid rowClick="edit">
			<UserNameField source="name" />
			<EmailField source="email" />
			<TextField source="phone_number" />
			<BooleanField source="verified" />
		</Datagrid>
	</List>
)

export const UserEdit = props => (
	<Edit title={<UserTitle />} {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<TextInput source="email" />
			<TextInput source="phone_number"/>
			<BooleanInput source="verified"/>
		</SimpleForm>
	</Edit>
)

export const UserCreate = props => (
	<Create {...props}>
		<SimpleForm>
			<TextInput source="name" />
			<TextInput source="email" />
			<TextInput source="phone_number"/>
			<BooleanInput source="verified"/>
		</SimpleForm>
	</Create>
)
