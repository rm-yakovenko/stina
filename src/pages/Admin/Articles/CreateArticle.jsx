import React, { useState } from 'react';
import Article from 'components/Article';
import AddArticleForm from './Form';
import ArticlePopup from './ArticlePopup';
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
      <ArticlePopup
        open={isPreviewVisible}
        onClose={() => setPreviewVisible(false)}
      >
        <ArticlePreviewContainer>
          <Article articleData={previewValues} />
        </ArticlePreviewContainer>
      </ArticlePopup>
    </CreateArticleContainer>
  );
}

export default CreateArticle;
