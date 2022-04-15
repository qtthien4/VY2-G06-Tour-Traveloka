import { FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup, TextField } from '@material-ui/core'
import { useStyles } from 'components/NotFount/styles'
import React from 'react'
import { useController } from 'react-hook-form'

export default function RadioGroupField({options,name,control,label,disable,...inputProps}) {
    const classes = useStyles()
    const {
        field:{value,onChange,onBlur,ref},
        fieldState:{invalid, error}
    } = useController({
        name,control,
    })
  return (
    <FormControl disabled={disable}  margin="normal" component="legend" error={invalid}>
        <FormLabel>{label}</FormLabel>
        <RadioGroup
            style={{flexDirection:"row", justifyContent:"space-between"}}
            className={`d-flex `}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        >
            {
                options.map(option=>(
                    <FormControlLabel
                   
                        key={option.value}  
                        value={option.value} control={<Radio />} label={option.label} />
                ))
            }
        </RadioGroup>
        <FormHelperText>{error?.message}</FormHelperText>
  </FormControl>
  )

}
