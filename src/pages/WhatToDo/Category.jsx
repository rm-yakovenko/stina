import React, { useState, useRef, useEffect } from 'react';
import { HeadingH5, Body1 } from 'components/Typography';
import Collapse from '@material-ui/core/Collapse';
import Box from '@material-ui/core/Box';
import ArticlesSlider from './ArticlesSlider';
import {
  CategoryContainer,
  CategoryImage,
  CategoryTextContent,
  ButtonGrey,
  CategoryHeaderContainer,
} from './style';

function Category({ category, currentCategoryId, switchCategories }) {
  const [isTextOpen, setIsTextOpen] = useState(false);
  const position = category.id % 2 === 0 ? 'left' : 'right';

  const categoryHeaderRef = useRef();

  const toggleTextOpen = () => {
    setIsTextOpen(!isTextOpen);
  };

  useEffect(() => {
    if (category.id === currentCategoryId) {
      categoryHeaderRef.current.scrollIntoView();
    }
  }, [currentCategoryId]);

  return (
    <>
      <CategoryHeaderContainer
        onClick={() => switchCategories(category.id)}
        ref={categoryHeaderRef}
      >
        <HeadingH5>{category.name}</HeadingH5>
      </CategoryHeaderContainer>
      <Collapse
        in={category.id === currentCategoryId}
        timeout={{ enter: 500, exit: 0 }}
      >
        <CategoryContainer>
          <CategoryImage src={category.imageBig} />
          <CategoryTextContent $position={position}>
            <ButtonGrey $clicked={isTextOpen} onClick={toggleTextOpen}>
              <HeadingH5>{category.name}</HeadingH5>
            </ButtonGrey>
            <Collapse in={isTextOpen}>
              <Box padding="30px">
                <Body1>{category.text}</Body1>
              </Box>
            </Collapse>
          </CategoryTextContent>
          <ArticlesSlider
            articles={category.articles}
            position={position}
            currentCategoryId={currentCategoryId}
          />
        </CategoryContainer>
      </Collapse>
    </>
  );
}

export default Category;
