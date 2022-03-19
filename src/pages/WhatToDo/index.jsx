import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCategories } from 'pages/MainPage/categories';
import HeaderLight from 'components/HeaderLight';
import {
  useArticlesDispatch,
  getArticles,
  useAriclesState,
} from 'components/useArticles';
import { populateCategories } from 'helpers/populateArticles';
import Category from './Category';
import { PageContainer } from './style';

function WhatToDo() {
  const categories = useCategories();
  const params = useParams();
  const [currentCategoryId, setCurrentCategoryId] = useState(Number(params.id));
  const articleDispatch = useArticlesDispatch();
  const { articles } = useAriclesState();

  useEffect(() => {
    getArticles(articleDispatch);
  }, []);

  const handleSwitchCategories = (id) => {
    if (id === currentCategoryId) {
      setCurrentCategoryId(null);
      return;
    }
    setCurrentCategoryId(id);
  };

  return (
    <>
      <HeaderLight />
      <PageContainer>
        {populateCategories(categories, articles).map((category) => (
          <>
            <Category
              category={category}
              currentCategoryId={currentCategoryId}
              switchCategories={handleSwitchCategories}
            />
          </>
        ))}
      </PageContainer>
    </>
  );
}

export default WhatToDo;
