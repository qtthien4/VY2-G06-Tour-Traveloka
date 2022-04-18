//import Select from "react-select/dist/declarations/src/Select"
import { ErrorMessage } from "formik";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";

function SelectField(props) {
  const { field, form, label, placehoder, options, type, disabled } = props;
  const { errors, touched } = form;
  const { name, value } = field;

  const showError = errors[name] && touched[name];

  const selectedOption = options.find((option) => option.value === value);
  const handleSelectOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}
      <Select
        id={name}
        {...field}
        type={type}
        value={selectedOption}
        onChange={handleSelectOptionChange}
        placeholder={placehoder}
        options={options}
        className={showError ? "is-invalid" : ""}
        isDisabled={disabled}
      />
      <div className={showError ? "is-invalid" : ""}></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
}
export default SelectField;
