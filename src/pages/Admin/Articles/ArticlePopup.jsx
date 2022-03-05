import React from 'react';
import { StyledModal, StyledModalBody, StyledCloseIcon } from './style';

function ArticlePopup({ open, onClose, children }) {
  return (
    <StyledModal open={open} onClose={onClose}>
      <StyledModalBody>
        <StyledCloseIcon onClick={onClose} />
        {children}
      </StyledModalBody>
    </StyledModal>
  );
}

export default ArticlePopup;
