import React from 'react'
import { TextField } from '@mui/material'

const MaterialInput = (props) => {

    const {
        label,
        type,
        onChange
    } = props

  return (
    <div>
        <TextField
          label={label}
          type={type}
          onChange={onChange}
        />
    </div>
  )
}

export default MaterialInput