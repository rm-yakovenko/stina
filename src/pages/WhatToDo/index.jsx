import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCategories } from 'pages/MainPage/categories';
import HeaderLight from 'components/HeaderLight';
import VideosSlider from 'components/VideosSlider';
import SocialLinks from 'components/SocialLinks';
import {
  useArticlesDispatch,
  getArticles,
  useAriclesState,
} from 'components/useArticles';
import { populateCategories } from 'helpers/populateArticles';
import Box from '@material-ui/core/Box';
import Category from './Category';
import { PageContainer, SocialLinksContainer } from './style';

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
      <SocialLinksContainer>
        <Box
          width="50%"
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <SocialLinks />
        </Box>
      </SocialLinksContainer>
      <VideosSlider />
    </>
  );
}

export default WhatToDo;
