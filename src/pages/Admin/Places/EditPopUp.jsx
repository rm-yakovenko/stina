import React from 'react';
import AddPlaceForm from './Form';
import { StyledModal, StyledModalBody } from './style';

function EditPopUp({ open, onClose, categoriesMap, place, onEdit }) {
  return (
    <StyledModal open={open} onClose={onClose}>
      <StyledModalBody>
        <AddPlaceForm
          categoriesMap={categoriesMap}
          place={place}
          onEdit={onEdit}
        />
      </StyledModalBody>
    </StyledModal>
  );
}

export default EditPopUp;
