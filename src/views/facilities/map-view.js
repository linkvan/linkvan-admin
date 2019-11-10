import React from 'react'
import PropTypes from 'prop-types'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

// TODO: move to config file
const GOOGLE_MAPS_API_KEY = 'AIzaSyDSLM-Bv5YwI1Ecw2OrMDQF8fZxik6FTzs'

const MapView = ({ center }) => (
  <LoadScript id="script-loader" googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
    <GoogleMap
      id="circle-example"
      mapContainerStyle={{
        height: '400px',
        width: '100%'
      }}
      zoom={16}
      center={center}
    >
      <Marker position={center} />
    </GoogleMap>
  </LoadScript>
)

MapView.propTypes = {
  center: PropTypes.shape({
    lat: PropTypes.number,
    long: PropTypes.number
  }).isRequired
}

export default MapView
