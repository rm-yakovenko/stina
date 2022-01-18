import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import CustomTextField from 'components/CustomTextField';
import SelectInput from 'components/Select';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import { RoundIconButton } from 'components/Buttons';
import { generate } from 'shortid';

import { FormContainer } from './style';

function getCategoriesOptions(categories) {
  return categories.map((category) => ({
    label: category.name,
    value: category.id,
  }));
}

function AddArticleForm({ onShowPreview, categories, onAddArticle }) {
  const handleFormSubmit = async (values, props) => {
    const articleBody = {
      ...values,
      categories: values.categories.map((category) => category.value),
    };

    await onAddArticle(articleBody);
    props.resetForm();
  };

  const showPreview = (values) => {
    onShowPreview(values);
  };

  return (
    <Formik
      validateOnChange
      initialValues={{
        categories: null,
        thumb: '',
        header: '',
        blocks: [],
      }}
      onSubmit={handleFormSubmit}
    >
      {({ values, setValues, setFieldValue }) => (
        <Form>
          <FormContainer>
            <Box marginBottom="10px">
              <SelectInput
                name="categories"
                options={getCategoriesOptions(categories)}
                setFieldValue={setFieldValue}
                values={values}
                placeholder="Categories"
                isMulti
              />
            </Box>
            <Box marginBottom="10px">
              <CustomTextField label="Thumb image" name="thumb" type="text" />
            </Box>
            <Box marginBottom="10px">
              <CustomTextField label="Header" name="header" type="text" />
            </Box>
            <FieldArray name="blocks">
              {({ push }) => (
                <>
                  {values.blocks.map((block, index) => (
                    <Box
                      key={block.id}
                      marginBottom="10px"
                      display="flex"
                      alignItems="center"
                    >
                      <CustomTextField
                        label={block.type}
                        name={`blocks[${index}].value`}
                        type="text"
                      />
                      <Box marginLeft="10px">
                        <RoundIconButton
                          type="button"
                          onClick={() => {
                            const newBlocks = values.blocks.filter(
                              (el) => el.id !== block.id,
                            );
                            setValues({
                              ...values,
                              blocks: newBlocks,
                            });
                          }}
                        >
                          <DeleteIcon />
                        </RoundIconButton>
                      </Box>
                    </Box>
                  ))}
                  <Box display="flex">
                    <Button
                      type="button"
                      onClick={() =>
                        push({ id: generate(), type: 'text', value: '' })
                      }
                    >
                      Add text
                    </Button>
                    <Button
                      type="button"
                      onClick={() =>
                        push({ id: generate(), type: 'video', value: '' })
                      }
                    >
                      Add video
                    </Button>
                    <Button
                      type="button"
                      onClick={() =>
                        push({ id: generate(), type: 'image', value: '' })
                      }
                    >
                      Add image
                    </Button>
                  </Box>
                </>
              )}
            </FieldArray>
            <Box display="flex" justifyContent="space-between">
              <RoundIconButton type="submit" color="primary">
                <AddIcon />
              </RoundIconButton>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => showPreview(values)}
              >
                Preview
              </Button>
            </Box>
          </FormContainer>
        </Form>
      )}
    </Formik>
  );
}

export default AddArticleForm;
