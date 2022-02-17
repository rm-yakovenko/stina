import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useHistory,
} from 'react-router-dom';
import useTranslation from 'hooks/useTranslation';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { HeadingH6 } from 'components/Typography';
import {
  useArticlesDispatch,
  useAriclesState,
  addArticle,
  getArticles,
  editArticle,
  deleteArticle,
} from 'components/useArticles';
import { useCategories } from 'pages/MainPage/categories';
import { RoundIconButton } from 'components/Buttons';
import Tabs from './Tabs';
import CreateArticle from './CreateArticle';
import { ArticlesContainer } from '../style';
import {
  CategoriesContainer,
  CategoryContainer,
  CategoryHeader,
  ArticlesArea,
  StyledDownIcon,
  ArticleThumbContainer,
  StyledImage,
} from './style';

function populateCategories(categories, articles = []) {
  const copyCategories = [...categories];

  articles.forEach((article) =>
    article.categories.forEach((categoryId) => {
      const category = copyCategories.find((cat) => cat.id === categoryId);
      category.articles.push(article);
    }),
  );
  return copyCategories;
}

function Articles() {
  const [currentCategory, setCurrentCategory] = useState(null);
  const [currentArticle, setCurrentArticle] = useState(null);
  const categories = useCategories();
  const articleDispatch = useArticlesDispatch();
  const { articles } = useAriclesState();
  const history = useHistory();

  const t = useTranslation();

  const { path, url, isExact } = useRouteMatch();

  const handleAddArticle = async (data) => {
    await addArticle(articleDispatch, data);
  };

  const handleOpenCategory = (category) => {
    if (currentCategory === category) {
      setCurrentCategory(null);
      return;
    }
    setCurrentCategory(category);
  };

  const handleDeleteArticle = async (article, categoryId) => {
    if (article.categories.length > 1) {
      const updatedArticle = {
        ...article,
        categories: article.categories.filter((cat) => cat !== categoryId),
      };
      await editArticle(articleDispatch, updatedArticle, article.id);
      return;
    }
    await deleteArticle(articleDispatch, article.id);
  };

  const handleEditArticle = async (article) => {
    const updatedArticle = {
      ...article,
      id: currentArticle.id,
    };
    await editArticle(articleDispatch, updatedArticle, currentArticle.id);
  };

  useEffect(() => {
    getArticles(articleDispatch);
  }, []);

  if (isExact) {
    return <Redirect to={`${url}/create`} />;
  }

  const articlPagesSwitch = (
    <Switch>
      <Route path={`${path}/create`}>
        <CreateArticle
          categories={categories}
          onAddArticle={handleAddArticle}
        />
      </Route>
      <Route path={`${path}/edit`}>
        <CreateArticle
          categories={categories}
          onEditArticle={handleEditArticle}
          article={currentArticle}
        />
      </Route>
      <Route path={`${path}/list`}>
        <CategoriesContainer>
          {populateCategories(categories, articles).map((category) => (
            <CategoryContainer key={category.id}>
              <CategoryHeader onClick={() => handleOpenCategory(category.id)}>
                <HeadingH6>{category.name}</HeadingH6>
                <StyledDownIcon selected={category.id === currentCategory} />
              </CategoryHeader>
              <Collapse in={category.id === currentCategory}>
                <ArticlesArea>
                  {category.articles.map((article) => (
                    <ArticleThumbContainer>
                      <StyledImage src={article.thumb} />
                      <HeadingH6>{t(article.header)}</HeadingH6>
                      <Box marginTop="10px" display="flex">
                        <Box marginRight="5px">
                          <RoundIconButton
                            type="button"
                            onClick={() =>
                              handleDeleteArticle(article, category.id)
                            }
                          >
                            <DeleteIcon />
                          </RoundIconButton>
                        </Box>
                        <RoundIconButton
                          type="button"
                          onClick={() => {
                            setCurrentArticle(article);
                            history.push('/gospodar/articles/edit');
                          }}
                        >
                          <EditIcon />
                        </RoundIconButton>
                      </Box>
                    </ArticleThumbContainer>
                  ))}
                </ArticlesArea>
              </Collapse>
            </CategoryContainer>
          ))}
        </CategoriesContainer>
      </Route>
    </Switch>
  );

  return (
    <ArticlesContainer>
      <Tabs url={url} path={path} />
      {articlPagesSwitch}
    </ArticlesContainer>
  );
}

export default Articles;
