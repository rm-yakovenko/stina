import React from 'react';
import { useParams } from 'react-router-dom';
import { useAriclesState } from 'components/useArticles';
import HeaderLight from 'components/HeaderLight';
import Article from 'components/Article';
import { PageContainer } from './style';

function ArticlePage() {
  const params = useParams();
  const { articles } = useAriclesState();

  const article = articles.find((el) => el.id === params.articleId);

  return (
    <>
      <HeaderLight />
      <PageContainer>
        <Article articleData={article} />
      </PageContainer>
    </>
  );
}

export default ArticlePage;
