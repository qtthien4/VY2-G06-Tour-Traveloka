import { FormControl, makeStyles, MenuItem, Select } from "@material-ui/core";
import React from "react";
import { useController } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  areaPhoneNumber: {
    fontSize: "16px",
    marginTop: "-5px",
    padding: "7px",
    border: "1px solid #ccc",
    borderRadius: "5px 0px 0px 5px",
  },
}));

export default function SelectFiled({
  options,
  name,
  control,
  disable,
  className,
  style,
  ...inputProps
}) {
  const classes = useStyles();
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { invalid, error },
  } = useController({
    name,
    control,
  });
  return (
    <FormControl
      sx={{ m: 1, minWidth: 120 }}
      size="small"
      margin="normal"
      error={invalid}
    >
      <Select
        style={style || { width: "75px" }}
        className={className || `${classes.areaPhoneNumber}`}
        name={name}
        value={options.value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {/* <FormHelperText>Without label</FormHelperText> */}
    </FormControl>
  );
}
