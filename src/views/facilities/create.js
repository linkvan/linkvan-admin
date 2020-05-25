import React from 'react'
import {
  FormDataConsumer,
  Create,
  SimpleForm,
  BooleanInput,
  TextInput,
  SelectInput,
  ReferenceInput,
  CheckboxGroupInput
} from 'react-admin'
import styled from 'styled-components'
import FormTitle from 'components/form-title'
import AddressInput from './address-input'
import ScheduleInput from './schedule-input'

const LegendWrap = styled.div`
  position: relative;
  width: auto !important;
`

const LegendWrapOutline = styled(LegendWrap)`
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  padding: 16px;
  text-align: left;

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
  { id: 'Senior', name: 'Senior' }
]

const services = [
  { id: 'Shelter', name: 'Shelter' },
  { id: 'Food', name: 'Food' },
  { id: 'Medical', name: 'Medical' },
  { id: 'Hygiene', name: 'Hygiene' },
  { id: 'Technology', name: 'Technology' },
  { id: 'Legal', name: 'Legal' },
  { id: 'Learning', name: 'Learning' }
]

const defaultValue = {
  services: [],
  schedule_monday: {
    availability: 'open'
  },
  schedule_tuesday: {
    availability: 'open'
  },
  schedule_wednesday: {
    availability: 'open'
  },
  schedule_thursday: {
    availability: 'open'
  },
  schedule_friday: {
    availability: 'open'
  },
  schedule_saturday: {
    availability: 'open'
  },
  schedule_sunday: {
    availability: 'open'
  }
}

const FacilityCreate = props => (
  <Create title={<FormTitle title="Facility" />} {...props}>
    <SimpleForm defaultValue={defaultValue}>
      <ReferenceInput source="user_id" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <TextInput source="name" />
      <TextInput source="phone" />
      <BooleanInput source="verified" />
      <CheckboxGroupInput source="welcomes" choices={welcomes} />
      <CheckboxGroupInput
        source="services"
        choices={services}
        label="Services - Select all relevant categories"
      />
      <LegendWrapOutline>
        <Legend className="MuiFormlegend-root-173 CheckboxGroupInput-label-235">
          <span>
            <strong>Services Notes:</strong> add any notes relevant to specific
            services such as special hours, or eligibility concerns.
            <br />
            Eg: &quot;Lunch served between 11:30am and 1:30pm&quot;
          </span>
        </Legend>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.services.includes('Shelter') && (
              <TextInput
                multiline
                source="shelter_note"
                label="Shelter"
                {...rest}
              />
            )
          }
        </FormDataConsumer>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.services.includes('Food') && (
              <TextInput multiline source="food_note" label="Food" {...rest} />
            )
          }
        </FormDataConsumer>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.services.includes('Medical') && (
              <TextInput
                multiline
                source="medical_note"
                label="Medical"
                {...rest}
              />
            )
          }
        </FormDataConsumer>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.services.includes('Hygiene') && (
              <TextInput
                multiline
                source="hygiene_note"
                label="Hygiene"
                {...rest}
              />
            )
          }
        </FormDataConsumer>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.services.includes('Technology') && (
              <TextInput
                multiline
                source="technology_note"
                label="Technology"
                {...rest}
              />
            )
          }
        </FormDataConsumer>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.services.includes('Legal') && (
              <TextInput
                multiline
                source="legal_note"
                label="Legal"
                {...rest}
              />
            )
          }
        </FormDataConsumer>
        <FormDataConsumer>
          {({ formData, ...rest }) =>
            formData.services.includes('Learning') && (
              <TextInput
                multiline
                source="learning_note"
                label="Learning"
                {...rest}
              />
            )
          }
        </FormDataConsumer>
      </LegendWrapOutline>
      <AddressInput />
      <TextInput source="website" />
      <LegendWrap>
        <Legend className="MuiFormlegend-root-173 CheckboxGroupInput-label-235">
          <span>
            <strong>Hours:</strong> The start time and end time for a day cannot
            be identical. Check the &quot;Second time&quot; option to specify a
            second time range.
          </span>
        </Legend>
        <LegendWrapOutline>
          <ScheduleInput id="schedule_monday" label="Monday" />
        </LegendWrapOutline>
        <LegendWrapOutline>
          <ScheduleInput id="schedule_tuesday" label="Tuesday" />
        </LegendWrapOutline>
        <LegendWrapOutline>
          <ScheduleInput id="schedule_wednesday" label="Wednesday" />
        </LegendWrapOutline>
        <LegendWrapOutline>
          <ScheduleInput id="schedule_thursday" label="Thursday" />
        </LegendWrapOutline>
        <LegendWrapOutline>
          <ScheduleInput id="schedule_friday" label="Friday" />
        </LegendWrapOutline>
        <LegendWrapOutline>
          <ScheduleInput id="schedule_saturday" label="Saturday" />
        </LegendWrapOutline>
        <LegendWrapOutline>
          <ScheduleInput id="schedule_sunday" label="Sunday" />
        </LegendWrapOutline>
      </LegendWrap>
      <TextInput
        multiline
        source="notes"
        label="Notes - Examples: special events, facility rules, etc."
      />
    </SimpleForm>
  </Create>
)

export default FacilityCreate
