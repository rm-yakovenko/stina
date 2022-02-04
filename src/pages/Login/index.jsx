import React from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import CustomTextField from 'components/CustomTextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import * as yup from 'yup';
import { signIn } from 'firebase';
import { PageContainer, FormContainer } from './style';

const validationSchema = yup.object().shape({
  email: yup.string().required('Please provide email'),
  password: yup.string().required('Please provide password'),
});

function Login() {
  const history = useHistory();
  const handleFormSubmit = async (values) => {
    try {
      await signIn(values.email, values.password);
      history.push('/gospodar');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageContainer>
      <FormContainer>
        <Formik
          validateOnChange
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {() => (
            <Form>
              <Box marginBottom="10px">
                <CustomTextField label="Email" name="email" type="text" />
              </Box>
              <Box marginBottom="10px">
                <CustomTextField
                  label="Password"
                  name="password"
                  type="password"
                />
              </Box>
              <Button color="primary" type="submit" variant="outlined">
                Log In
              </Button>
            </Form>
          )}
        </Formik>
      </FormContainer>
    </PageContainer>
  );
}

export default Login;
