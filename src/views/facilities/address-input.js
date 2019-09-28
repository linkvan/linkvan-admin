import React, { useState } from 'react'
import { change } from 'redux-form'
import { FormDataConsumer, TextInput, LongTextInput, Loading, REDUX_FORM_NAME } from 'react-admin'
import axios from 'axios'
import _ from 'lodash'
import styled from 'styled-components'
import MapView from './map-view'

// TODO: move to config file
const APP_ID_HERE = 'opMhQwcIYcvFG4yxF4Ki'
const APP_CODE_HERE = '2LD-UuhUas0C0jR3iT1CWw'

const HiddenInputs = styled.div`
	height: 0;
	overflow: hidden;
`

const getAddressAPI = _.debounce((value, onDone, onEnd) => {
	axios.get('https://autocomplete.geocoder.api.here.com/6.2/suggest.json', {
		params: {
			app_id: APP_ID_HERE,
			app_code: APP_CODE_HERE,
			query: value,
			maxresults: 1,
			country: 'CAN'
		}}).then(function (response) {
			if (response.data.suggestions && response.data.suggestions.length > 0) {
				const address = _.map(response.data.suggestions, ({ address, locationId }) => {
					return {
						locationId,
						address: `${_.join([address.houseNumber, address.street], ' ')}, ${address.city}, ${address.state}`
					}
				})
				onDone(address)
			}
	}).finally(function() {
		onEnd()
	})
}, 750)

const getGeoAPI = _.debounce((locationId, onDone, onEnd) => {
	axios.get('https://geocoder.api.here.com/6.2/geocode.json', {
		params: {
			app_id: APP_ID_HERE,
			app_code: APP_CODE_HERE,
			locationId
		}}).then(function (response) {
			const { Latitude: lat, Longitude: lng } = _.get(response.data, 'Response.View.0.Result.0.Location.DisplayPosition')
			onDone({ lat, lng })
	}).finally(function() {
		onEnd()
	})
}, 750)

const AddressInput = props => {
	const [choices, setChoices] = useState([])
	const [loading, setLoading] = useState(false)
	const [center, setCenter] = useState(null)
 
	const hideLoading = () => setLoading(false)

	const getAddressGeo = (choice, dispatch) => e => {
		e.preventDefault()
		
		const setLatLng = center => {
			setCenter(center)
			dispatch(change(REDUX_FORM_NAME, 'lat', center.lat))
			dispatch(change(REDUX_FORM_NAME, 'long', center.lng))
		}
		
		setChoices([])
		setLoading(true)
		dispatch(change(REDUX_FORM_NAME, 'address', choice.address))
		getGeoAPI(choice.locationId, setLatLng, hideLoading)
	}

	return (
		<div>
			<FormDataConsumer>
				{({ formData, dispatch, ...rest }) =>
					<>
						<LongTextInput source="address" onChange={data => {
							if(!loading) {
								setLoading(true)
								setChoices([])
								setCenter(null)
							}
							getAddressAPI(data.target.value, setChoices, hideLoading)
						}} {...rest} />

						<HiddenInputs>
							<TextInput source="lat" />
							<TextInput source="long" />
						</HiddenInputs>
						
						{loading && <Loading loadingPrimary="" loadingSecondary="" />}
						
						{_.map(choices, choice =>
							<p key={choice.locationId}>
								<a href="" onClick={getAddressGeo(choice, dispatch)}>{choice.address}</a>
							</p>
						)}

						{center && <MapView center={center} />}
					</>
				}
			</FormDataConsumer>
		</div>
	)
}

export default AddressInput
