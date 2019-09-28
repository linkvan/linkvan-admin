import React, { Component } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

// TODO: move to config file
const GOOGLE_MAPS_API_KEY = "AIzaSyDSLM-Bv5YwI1Ecw2OrMDQF8fZxik6FTzs"

const MapView = props =>
	<LoadScript
		id="script-loader"
		googleMapsApiKey={GOOGLE_MAPS_API_KEY}
	>
		<GoogleMap
			id="circle-example"
			mapContainerStyle={{
				height: "400px",
				width: "100%"
			}}
			zoom={16}
			center={props.center}
		>
			<Marker position={props.center} /> 
		</GoogleMap>
	</LoadScript>

export default MapView