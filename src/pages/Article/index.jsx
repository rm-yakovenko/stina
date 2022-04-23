import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useAriclesState } from 'components/useArticles';
import HeaderLight from 'components/HeaderLight';
import Article from 'components/Article';
import { selectArticlesForCategory } from 'helpers/populateArticles';
import useTranslation from 'hooks/useTranslation';
import { articlesPage } from 'strings/articles';
import { Body1 } from 'components/Typography';
import Box from '@material-ui/core/Box';
import {
  PageContainer,
  NextArticleArrow,
  PrevArticleArrow,
  Bullet,
  BackArrow,
} from './style';

function ArticlePage() {
  const params = useParams();
  const history = useHistory();
  const { articles } = useAriclesState();

  const t = useTranslation();
  const strings = t(articlesPage);

  const categoryArticles = selectArticlesForCategory(
    params.categoryId,
    articles,
  );
  const articleIndex = categoryArticles.findIndex(
    (el) => el.id === params.articleId,
  );

  const goToNextArticle = () => {
    const nextIndex =
      articleIndex + 1 > categoryArticles.length - 1 ? 0 : articleIndex + 1;
    const nextArticle = categoryArticles[nextIndex];
    history.push(`/category/${params.categoryId}/articles/${nextArticle.id}`);
  };

  const goToPrevArticle = () => {
    const prevIndex =
      articleIndex - 1 < 0 ? categoryArticles.length - 1 : articleIndex - 1;
    const prevArticle = categoryArticles[prevIndex];
    history.push(`/category/${params.categoryId}/articles/${prevArticle.id}`);
  };

  return (
    <>
      <HeaderLight />
      <PageContainer>
        <Box marginBottom="10px" display="flex" alignItems="center">
          <BackArrow
            fontSize="large"
            onClick={() => history.push(`/category/${params.categoryId}`)}
          />
          <Box marginLeft="5px">
            <Body1>{strings.back}</Body1>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginBottom="10px"
        >
          <PrevArticleArrow fontSize="large" onClick={goToPrevArticle} />
          <Box display="flex">
            {categoryArticles.map((el, index) => (
              <Bullet key={el.id} active={index === articleIndex} />
            ))}
          </Box>
          <NextArticleArrow fontSize="large" onClick={goToNextArticle} />
        </Box>
        <Article articleData={categoryArticles[articleIndex]} />
      </PageContainer>
    </>
  );
}

export default ArticlePage;
