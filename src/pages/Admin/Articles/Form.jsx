import React from 'react';
import { Formik, Form, FieldArray } from 'formik';
import CustomTextField from 'components/CustomTextField';
import SelectInput from 'components/Select';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';
import { RoundIconButton } from 'components/Buttons';
import { HeadingH6 } from 'components/Typography/style';
import { generate } from 'shortid';

import { FormContainer } from './style';

function getCategoriesOptions(categories) {
  return categories.map((category) => ({
    label: category.name,
    value: category.id,
  }));
}

function AddArticleForm({
  onShowPreview,
  categories,
  onAddArticle,
  onEditArticle,
  article,
}) {
  const handleFormSubmit = async (values, props) => {
    const articleBody = {
      ...values,
      categories: values.categories.map((category) => category.value),
    };

    if (article) {
      await onEditArticle(articleBody);
      return;
    }

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
        categories: article
          ? getCategoriesOptions(categories).filter((cat) =>
              article.categories.includes(cat.value),
            )
          : null,
        thumb: article ? article.thumb : '',
        header: {
          uk: article ? article.header.uk : '',
          en: article ? article.header.en : '',
        },
        description: {
          uk: article ? article.description.uk : '',
          en: article ? article.description.en : '',
        },
        blocks: article ? article.blocks : [],
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
                  label="Short description"
                  name="description.uk"
                  type="text"
                  multiline
                  rows={6}
                  rowsMax={6}
                />
              </Box>
              <Box width="44%">
                <CustomTextField
                  label="Short description"
                  name="description.en"
                  type="text"
                  multiline
                  rows={6}
                  rowsMax={6}
                />
              </Box>
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
                      {block.type === 'text' ? (
                        <Box display="flex">
                          <Box marginRight="5px">
                            <CustomTextField
                              label={block.type}
                              name={`blocks[${index}].value.uk`}
                              type="text"
                              multiline
                              rows={6}
                              rowsMax={6}
                            />
                          </Box>
                          <Box>
                            <CustomTextField
                              label={block.type}
                              name={`blocks[${index}].value.en`}
                              type="text"
                              multiline
                              rows={6}
                              rowsMax={6}
                            />
                          </Box>
                        </Box>
                      ) : (
                        <CustomTextField
                          label={block.type}
                          name={`blocks[${index}].value`}
                          type="text"
                        />
                      )}
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
                        push({
                          id: generate(),
                          type: 'text',
                          value: { uk: '', en: '' },
                        })
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
