import { TextField } from '@material-ui/core'
import { useStyles } from 'components/NotFount/styles'
import React from 'react'
import { useController } from 'react-hook-form'

export default function InputField({name,control,label,fullWidthCustom,widthCustom,...inputProps}) {
    const classes = useStyles()
    const {
        field:{value,onChange,onBlur,ref},
        fieldState:{invalid, error}
    } = useController({
        name,control,
    })
  return (
    <TextField 
      style={{width:{widthCustom}}}
      className={`inputPhoneNumber ${classes.input}`}
      size="small"
      margin='normal'
      fullWidth={fullWidthCustom}
      onChange={onChange} 
      onBlur={onBlur} 
      inputRef={ref} 
      labal={label} 
      value={value} 
      error={invalid} 
      helperText={error?.message} 
      variant="outlined"
      inputProps={inputProps}
    >

    </TextField>
  )

}
