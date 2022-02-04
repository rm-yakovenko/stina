import React from 'react';
import { Formik, Form } from 'formik';
import CustomTextField from 'components/CustomTextField';
import { HeadingH6 } from 'components/Typography';
import SelectInput from 'components/Select';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { RoundIconButton } from 'components/Buttons';
import * as yup from 'yup';

import { FormContainer } from './style';

const validationSchema = yup.object().shape({
  category: yup.mixed().required('Please select category'),
});

function getCategoriesOptions(categoriesMap) {
  return categoriesMap.map((category) => ({
    value: category.documentId,
    label: category.name,
  }));
}

function AddPlaceForm({
  addPlace,
  categoriesMap,
  onPreview,
  place = null,
  onEdit,
}) {
  const handleFormSubmit = async (values, props) => {
    if (place) {
      await onEdit({
        ...values,
        id: place.id,
      });
      return;
    }
    await addPlace(values);

    props.resetForm();
  };

  return (
    <Formik
      validateOnChange
      initialValues={{
        category: place ? place.category : null,
        name: {
          uk: place ? place.name.uk : '',
          en: place ? place.name.en : '',
        },
        imageUrl: place ? place.imageUrl : '',
        pageLink: place ? place.pageLink : '',
        lat: place ? place.lat : '',
        long: place ? place.long : '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <FormContainer>
            {!place && (
              <Box marginBottom="10px">
                <SelectInput
                  name="category"
                  options={getCategoriesOptions(categoriesMap)}
                  setFieldValue={setFieldValue}
                  values={values}
                />
              </Box>
            )}
            <Box marginBottom="10px" display="flex">
              <Box marginRight="5px">
                <HeadingH6>UA</HeadingH6>
                <CustomTextField
                  label="Place name"
                  name="name.uk"
                  type="text"
                />
              </Box>
              <Box>
                <HeadingH6>EN</HeadingH6>
                <CustomTextField
                  label="Place name"
                  name="name.en"
                  type="text"
                />
              </Box>
            </Box>
            <Box marginBottom="10px">
              <CustomTextField label="Image url" name="imageUrl" type="text" />
            </Box>
            <Box marginBottom="10px">
              <CustomTextField label="Page link" name="pageLink" type="text" />
            </Box>
            <Box marginBottom="10px">
              <CustomTextField label="Lat" name="lat" type="text" />
            </Box>
            <Box marginBottom="10px">
              <CustomTextField label="Long" name="long" type="text" />
            </Box>
            {!place ? (
              <Box display="flex" justifyContent="space-between">
                <RoundIconButton type="submit" color="primary">
                  <AddIcon />
                </RoundIconButton>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={() => onPreview(values)}
                >
                  Preview
                </Button>
              </Box>
            ) : (
              <Box>
                <Button color="primary" type="submit" variant="outlined">
                  Save
                </Button>
              </Box>
            )}
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
}

export default AddPlaceForm;
