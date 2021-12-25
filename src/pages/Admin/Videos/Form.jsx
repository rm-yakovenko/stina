import React from 'react';
import { Formik, Form } from 'formik';
import CustomTextField from 'components/CustomTextField';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import { RoundIconButton } from 'components/Buttons';
import * as validation from 'helpers/validationHelper';
import * as yup from 'yup';

import { FormContainer } from './style';

const validationSchema = yup.object().shape({
  url: validation.youTubeUrl,
});

function AddVideoForm({ addVideo }) {
  const handleFormSubmit = async (values, props) => {
    const body = {
      url: values.url,
    };

    await addVideo(body);

    props.resetForm();
  };

  return (
    <Formik
      validateOnChange
      initialValues={{
        url: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {() => (
        <Form>
          <FormContainer>
            <Box marginRight="10px">
              <CustomTextField label="Video url" name="url" type="text" />
            </Box>
            <RoundIconButton type="submit" color="primary">
              <AddIcon />
            </RoundIconButton>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
}

export default AddVideoForm;
