import React from 'react';
import CreateArticle from './CreateArticle';
import { StyledModal, StyledModalBody, StyledCloseIcon } from './style';

function EditArticlePopup({
  open,
  onClose,
  onEditArticle,
  categories,
  article,
}) {
  return (
    <StyledModal open={open} onClose={onClose}>
      <StyledModalBody>
        <StyledCloseIcon onClick={onClose} />
        <CreateArticle
          categories={categories}
          onEditArticle={onEditArticle}
          article={article}
        />
      </StyledModalBody>
    </StyledModal>
  );
}

export default EditArticlePopup;
