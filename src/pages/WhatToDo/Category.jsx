import React, { useRef, useEffect, useState } from 'react';
import { HeadingH5, Body1 } from 'components/Typography';
import stripeImage from 'assets/stripe.png';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import ArticlesSlider from './ArticlesSlider';
import {
  CategoryContainer,
  CategoryImage,
  CategoryTextContent,
  CategoryHeaderContainer,
} from './style';

function Category({ category, currentCategoryId, switchCategories }) {
  const position = category.id % 2 === 0 ? 'left' : 'right';
  const [isCategoryOpen, setCategoryOpen] = useState(
    category.id === currentCategoryId,
  );

  const categoryHeaderRef = useRef();

  useEffect(() => {
    if (category.id === currentCategoryId) {
      categoryHeaderRef.current.scrollIntoView({ block: 'center' });
    }
  }, []);

  return (
    <>
      <CategoryHeaderContainer
        onClick={() => {
          switchCategories(category.id);
          setCategoryOpen(!isCategoryOpen);
        }}
        active={isCategoryOpen}
      >
        <HeadingH5>{category.name}</HeadingH5>
      </CategoryHeaderContainer>
      <Collapse in={isCategoryOpen} timeout={{ enter: 500, exit: 100 }}>
        <CategoryContainer>
          <CategoryImage src={category.imageBig} />
          <Box position="absolute" top="50%" ref={categoryHeaderRef} />
          <CategoryTextContent $position={position}>
            <Box>
              <Body1>{category.text}</Body1>
            </Box>
          </CategoryTextContent>
          <ArticlesSlider
            articles={category.articles}
            position={position}
            currentCategoryId={currentCategoryId}
          />
        </CategoryContainer>
        <CategoryImage src={stripeImage} />
      </Collapse>
    </>
  );
}

export default Category;
