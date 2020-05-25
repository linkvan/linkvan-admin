import React from 'react'
import PropTypes from 'prop-types'

const UserNameField = ({ record }) => (
  <span>
    {record.name} {record.admin ? <strong>(Admin)</strong> : ''}
  </span>
)

UserNameField.propTypes = {
  record: PropTypes.shape({
    name: PropTypes.string.isRequired,
    admin: PropTypes.string
  })
}

UserNameField.defaultProps = {
  record: {
    admin: ''
  }
}

export default UserNameField
