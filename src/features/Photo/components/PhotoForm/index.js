import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import InputField from "custom-fields/InputFieldTest";
import RandomPhotoField from "custom-fields/RandomPhotoField";
import SelectField from "custom-fields/SelectField";
import { Formik, Form, FastField } from "formik";
import PropTypes from 'prop-types';
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from 'yup';
;


PhotoForm.propTypes = {
    onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
    onSubmit: null,
}

function PhotoForm(props) {

    const {initialValue} = props
    const validationSchema = Yup.object().shape({
        title:Yup.string().required('This field is required'),
        categoryID: Yup.number().required('this is field is requierd').nullable(),
        photo: Yup.string().when('categoryID',{
            is:1,
            then: Yup.string().required('This field is required '),
            otherwise: Yup.string().notRequired(), 
        })
    })

    return (
        <Formik
            validationSchema={validationSchema}
            initialValues={initialValue}
            onSubmit={props.onSubmit}
        >
            {formikProps => {
                const { values, errors, touched, isSubmitting } = formikProps;
                console.log({ values, errors, touched })
                return (
                    <Form>
                        <FastField
                            name="title"
                            component={InputField}

                            label="Title"
                            placeholder="Eg: Wow nature ..."
                        />

                        <FastField
                        
                            name="categoryID"
                            component={SelectField}

                            options = {PHOTO_CATEGORY_OPTIONS}
                            label="Category"
                            placeholder="What's your photo category?"
                        />

                    <FastField
                        name="photo"
                        component={RandomPhotoField}
                        label='photo'
                    />      
                        
                    <FormGroup>
                    <Button type="submit">
                        {isSubmitting && <Spinner size ='sm'/>}
                        Add to album
                    </Button>
                    </FormGroup>
                    </Form>
                )
            }
            }
        </Formik>
    )

}
export default PhotoForm