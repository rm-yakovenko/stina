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
  name: yup.mixed().required('Please provide name'),
});

function LocalTransportForm({
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
        name: {
          en: transport ? transport.name.en : '',
          uk: transport ? transport.name.uk : '',
        },
        imageUrl: transport ? transport.imageUrl : '',
        type: {
          en: transport ? transport.type.en : '',
          uk: transport ? transport.type.uk : '',
        },
        contact: {
          en: transport ? transport.contact.en : '',
          uk: transport ? transport.contact.uk : '',
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
                <CustomTextField label="Name" name="name.uk" type="text" />
              </Box>
              <Box width="44%">
                <HeadingH6>EN</HeadingH6>
                <CustomTextField label="Name" name="name.en" type="text" />
              </Box>
            </Box>
            <Box marginBottom="10px" width="89%">
              <CustomTextField label="Image url" name="imageUrl" type="text" />
            </Box>
            <Box marginBottom="10px" display="flex" width="100%">
              <Box width="44%" marginRight="5px">
                <CustomTextField
                  label="Transport type"
                  name="type.uk"
                  type="text"
                />
              </Box>
              <Box width="44%">
                <CustomTextField
                  label="Transport type"
                  name="type.en"
                  type="text"
                />
              </Box>
            </Box>

            <Box marginBottom="10px" display="flex" width="100%">
              <Box width="44%" marginRight="5px">
                <CustomTextField
                  label="Contact"
                  name="contact.uk"
                  type="text"
                />
              </Box>
              <Box width="44%">
                <CustomTextField
                  label="Contact"
                  name="contact.en"
                  type="text"
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

export default LocalTransportForm;
