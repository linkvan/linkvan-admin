import React from 'react'
import { FormDataConsumer, List, Edit, Create, Filter, SimpleForm, ReferenceField, Datagrid, TextField, DateField, BooleanField, BooleanInput, TextInput, SelectInput, ReferenceInput, CheckboxGroupInput, LongTextInput, RadioButtonGroupInput } from 'react-admin'
import styled from 'styled-components'
import AddressInput from './address-input'

const LegendWrap = styled.div`
	position: relative;
	width: auto !important;
`

const LegendWrapOutline = styled(LegendWrap)`
	border: 1px solid #e0e0e0;
	border-radius: 4px;
	padding: 16px;

	> legend {
		margin-top: 0;
	}
` 

const Legend = styled.legend`
	margin-top: 16px;
	transform: translate(0, 1.5px) scale(0.75);
`

const welcomes = [
	{ id: 'Male', name: 'Male' },
	{ id: 'Female', name: 'Female' },
	{ id: 'Transgender', name: 'Transgender' },
	{ id: 'Children', name: 'Children' },
	{ id: 'Youth', name: 'Youth' },
	{ id: 'Adult', name: 'Adult' },
	{ id: 'Senior', name: 'Senior' },
]

const services = [
	{ id: 'Shelter', name: 'Shelter'},
	{ id: 'Food', name: 'Food'},
	{ id: 'Medical', name: 'Medical'},
	{ id: 'Hygiene', name: 'Hygiene'},
	{ id: 'Technology', name: 'Technology'},
	{ id: 'Legal', name: 'Legal'},
	{ id: 'Learning', name: 'Learning'},
]

const UserTitle = ({ record }) => {
	return <span>User {record ? `"${record.name}"` : ''}</span>
}

// const UserNameField = ({ record }) => {
// 	return <span>{record.name} {record.admin ? <strong>(Admin)</strong> : ''}</span>
// }

const FacilityFilter = (props) => (
	<Filter {...props}>
		<TextInput label="Search" source="q" alwaysOn />
		<ReferenceInput label="Name" source="name" reference="users" allowEmpty>
			<SelectInput optionText="name" />
		</ReferenceInput> 
	</Filter>
);

export const FacilityList = props => (
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

export const FacilityEdit = props => (
	<Edit title={<UserTitle />} {...props}>
		<SimpleForm>
			<ReferenceInput source="user_id" reference="users">
				<SelectInput optionText="name" />
			</ReferenceInput>
			<TextInput source="name" />
			<TextInput source="phone"/>
			<BooleanInput source="verified"/>
			<CheckboxGroupInput source="welcomes" choices={welcomes} />
			<CheckboxGroupInput source="services" choices={services} label="Services - Select all relevant categories" />
			<LegendWrapOutline>
				<Legend className="MuiFormlegend-root-173 CheckboxGroupInput-label-235">
					<span>
						<strong>Services Notes:</strong> add any notes relevant to specific services such as special hours, or eligibility concerns.
						<br/>
						Eg: "Lunch served between 11:30am and 1:30pm"
					</span>
				</Legend>
				<FormDataConsumer>
					{({formData, ...rest}) => formData.services.includes('Shelter') &&
						<LongTextInput source="shelter_note" label="Shelter" {...rest} />
					}
				</FormDataConsumer>
				<FormDataConsumer>
					{({formData, ...rest}) => formData.services.includes('Food') &&
						<LongTextInput source="food_note" label="Food" {...rest} />
					}
				</FormDataConsumer>
				<FormDataConsumer>
					{({formData, ...rest}) => formData.services.includes('Medical') &&
						<LongTextInput source="medical_note" label="Medical" {...rest} />
					}
				</FormDataConsumer>
				<FormDataConsumer>
					{({formData, ...rest}) => formData.services.includes('Hygiene') &&
						<LongTextInput source="hygiene_note" label="Hygiene" {...rest} />
					}
				</FormDataConsumer>
				<FormDataConsumer>
					{({formData, ...rest}) => formData.services.includes('Technology') &&
						<LongTextInput source="technology_note" label="Technology" {...rest} />
					}
				</FormDataConsumer>
				<FormDataConsumer>
					{({formData, ...rest}) => formData.services.includes('Legal') &&
						<LongTextInput source="legal_note" label="Legal" {...rest} />
					}
				</FormDataConsumer>
				<FormDataConsumer>
					{({formData, ...rest}) => formData.services.includes('Learning') &&
						<LongTextInput source="learning_note" label="Learning" {...rest} />
					}
				</FormDataConsumer>
			</LegendWrapOutline>
			<AddressInput />
			<TextInput source="website"/>
			<LegendWrap>
				<Legend className="MuiFormlegend-root-173 CheckboxGroupInput-label-235">
					<span>
						<strong>Hours:</strong> The start time and end time for a day cannot be identical. Check the "Second time" option to specify a second time range.
					</span>
				</Legend>
				<LegendWrapOutline>
				<RadioButtonGroupInput source="open_all_day_mon" choices={[
						{ id: 'programming', name: 'Programming' },
						{ id: 'lifestyle', name: 'Lifestyle' },
						{ id: 'photography', name: 'Photography' },
				]} />
				</LegendWrapOutline>
			</LegendWrap>
			<LongTextInput source="notes" label="Notes - Examples: special events, facility rules, etc."/>
			{/*
			<BooleanField source="open_all_day_mon" />
			<BooleanField source="open_all_day_tues" />
			<BooleanField source="open_all_day_wed" />
			<BooleanField source="open_all_day_thurs" />
			<BooleanField source="open_all_day_fri" />
			<BooleanField source="open_all_day_sat" />
			<BooleanField source="open_all_day_sun" />
			<TextField source="startsmon_at" />
			<TextField source="endsmon_at" />
			<TextField source="startstues_at" />
			<TextField source="endstues_at" />
			<TextField source="startswed_at" />
			<TextField source="endswed_at" />
			<TextField source="startsthurs_at" />
			<TextField source="endsthurs_at" />
			<TextField source="startsfri_at" />
			<TextField source="endsfri_at" />
			<TextField source="startssat_at" />
			<TextField source="endssat_at" />
			<TextField source="startssun_at" />
			<TextField source="endssun_at" />
			<TextField source="startsmon_at2" />
			<TextField source="endsmon_at2" />
			<TextField source="startstues_at2" />
			<TextField source="endstues_at2" />
			<TextField source="startswed_at2" />
			<TextField source="endswed_at2" />
			<TextField source="startsthurs_at2" />
			<TextField source="endsthurs_at2" />
			<TextField source="startsfri_at2" />
			<TextField source="endsfri_at2" />
			<TextField source="startssat_at2" />
			<TextField source="endssat_at2" />
			<TextField source="startssun_at2" />
			<TextField source="endssun_at2" />
			<BooleanField source="closed_all_day_mon" />
			<BooleanField source="closed_all_day_tues" />
			<BooleanField source="closed_all_day_wed" />
			<BooleanField source="closed_all_day_thurs" />
			<BooleanField source="closed_all_day_fri" />
			<BooleanField source="closed_all_day_sat" />
			<BooleanField source="closed_all_day_sun" />
			<BooleanField source="second_time_mon" />
			<BooleanField source="second_time_tues" />
			<BooleanField source="second_time_wed" />
			<BooleanField source="second_time_thurs" />
			<BooleanField source="second_time_fri" />
			<BooleanField source="second_time_sat" />
			<BooleanField source="second_time_sun" />
			 */}
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
