import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import CustomTextField from 'components/CustomTextField';
import HeaderLight from 'components/HeaderLight';
import { Body1 } from 'components/Typography';
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
  const [loginError, setLoginError] = useState(null);
  const handleFormSubmit = async (values) => {
    try {
      setLoginError(null);
      await signIn(values.email, values.password);
      history.push('/gospodar');
    } catch (error) {
      setLoginError(error);
    }
  };

  return (
    <>
      <HeaderLight />
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
          {loginError && (
            <Box marginTop="10px" color="red">
              <Body1>*Invalid email or password</Body1>
            </Box>
          )}
        </FormContainer>
      </PageContainer>
    </>
  );
}

export default Login;
