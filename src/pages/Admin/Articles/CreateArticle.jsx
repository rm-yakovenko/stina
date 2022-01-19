import React, { useState } from 'react';
import Article from 'components/Article';
import AddArticleForm from './Form';
import { ArticlePreviewContainer, CreateArticleContainer } from './style';

function CreateArticle({ categories, onAddArticle, onEditArticle, article }) {
  const [isPreviewVisible, setPreviewVisible] = useState(false);
  const [previewValues, setPreviewValues] = useState(article);

  const handleShowPreview = (values) => {
    setPreviewValues(values);
    setPreviewVisible(true);
  };

  return (
    <CreateArticleContainer>
      <AddArticleForm
        onShowPreview={handleShowPreview}
        onAddArticle={onAddArticle}
        onEditArticle={onEditArticle}
        categories={categories}
        article={article}
      />
      <ArticlePreviewContainer>
        <Article articleData={previewValues} />
      </ArticlePreviewContainer>
    </CreateArticleContainer>
  );
}

export default CreateArticle;
