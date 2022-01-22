import React from 'react';
import { Formik, Form } from 'formik';
import CustomTextField from 'components/CustomTextField';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { RoundIconButton } from 'components/Buttons';
import * as yup from 'yup';

import { FormContainer } from './style';

const validationSchema = yup.object().shape({
  header: yup.string().required('Please provide header'),
  description: yup.string().required('Please provide description'),
});

function HowToGetTransportForm({ addTransport, transport = null, onEdit }) {
  const handleFormSubmit = async (values, props) => {
    props.resetForm();
  };

  return (
    <Formik
      validateOnChange
      initialValues={{
        header: transport ? transport.header : '',
        description: transport ? transport.description : '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {() => (
        <Form>
          <FormContainer>
            <Box marginBottom="10px">
              <CustomTextField label="Header" name="header" type="text" />
            </Box>
            <Box marginBottom="10px">
              <CustomTextField
                label="Description"
                name="description"
                type="text"
              />
            </Box>
            {!transport ? (
              <Box display="flex" justifyContent="space-between">
                <RoundIconButton type="submit" color="primary">
                  <AddIcon />
                </RoundIconButton>
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

export default HowToGetTransportForm;
