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
  name: yup.string().required('Please provide name'),
});

function LocalTransportForm({ addTransport, transport = null, onEdit }) {
  const handleFormSubmit = async (values, props) => {
    props.resetForm();
  };

  return (
    <Formik
      validateOnChange
      initialValues={{
        name: transport ? transport.name : '',
        imageUrl: transport ? transport.imageUrl : '',
        type: transport ? transport.type : '',
        contact: transport ? transport.contact : '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {() => (
        <Form>
          <FormContainer>
            <Box marginBottom="10px">
              <CustomTextField label="Place name" name="name" type="text" />
            </Box>
            <Box marginBottom="10px">
              <CustomTextField label="Image url" name="imageUrl" type="text" />
            </Box>
            <Box marginBottom="10px">
              <CustomTextField label="Transport type" name="type" type="text" />
            </Box>
            <Box marginBottom="10px">
              <CustomTextField label="Contact" name="contact" type="text" />
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

export default LocalTransportForm;
