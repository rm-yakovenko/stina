import React from 'react';
import { Formik, Form } from 'formik';
import CustomTextField from 'components/CustomTextField';
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { RoundIconButton } from 'components/Buttons';
import { HeadingH6 } from 'components/Typography/style';
import * as yup from 'yup';

import { FormContainer } from './style';

const validationSchema = yup.object().shape({
  header: yup.mixed().required('Please provide header'),
  description: yup.mixed().required('Please provide description'),
});

function HowToGetTransportForm({
  onAddTransport,
  transport = null,
  onEditTransport,
  onCloseModal,
}) {
  const handleFormSubmit = async (values, props) => {
    if (transport) {
      await onEditTransport(values, transport.id);
      onCloseModal();
      return;
    }

    await onAddTransport(values);
    props.resetForm();
  };

  return (
    <Formik
      validateOnChange
      initialValues={{
        header: {
          en: transport ? transport.header.en : '',
          uk: transport ? transport.header.uk : '',
        },
        description: {
          en: transport ? transport.description.en : '',
          uk: transport ? transport.description.uk : '',
        },
      }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {() => (
        <Form>
          <FormContainer>
            <Box marginBottom="10px" display="flex" width="100%">
              <Box width="44%" marginRight="5px">
                <HeadingH6>UA</HeadingH6>
                <CustomTextField label="Header" name="header.uk" type="text" />
              </Box>
              <Box width="44%">
                <HeadingH6>EN</HeadingH6>
                <CustomTextField label="Header" name="header.en" type="text" />
              </Box>
            </Box>
            <Box marginBottom="10px" display="flex" width="100%">
              <Box width="44%" marginRight="5px">
                <CustomTextField
                  label="Description"
                  name="description.uk"
                  type="text"
                  multiline
                  rows={6}
                  rowsMax={6}
                />
              </Box>
              <Box width="44%">
                <CustomTextField
                  label="Description"
                  name="description.en"
                  type="text"
                  multiline
                  rows={6}
                  rowsMax={6}
                />
              </Box>
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
