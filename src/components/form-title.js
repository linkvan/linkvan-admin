import React from 'react'
import PropTypes from 'prop-types'

const FormTitle = ({ title, record }) => (
  <span>
    {title} - {record ? `"${record.name}"` : ''}
  </span>
)

FormTitle.propTypes = {
  title: PropTypes.string,
  record: PropTypes.object
}

FormTitle.defaultProps = {
  title: '',
  record: {}
}

export default FormTitle
