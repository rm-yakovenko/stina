import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { HeadingH6, Subtitle1 } from 'components/Typography';
import { RoundIconButton } from 'components/Buttons';
import useTranslation from 'hooks/useTranslation';
import LocalTransportForm from './LocalTransportForm';
import {
  StyledModalBody,
  StyledModal,
  TransportItemContainer,
  StyledImage,
} from './style';

function LocalTransportItem({ transport, onEditTransport, onDeleteTransport }) {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const t = useTranslation();

  const toggleEditModal = () => {
    setEditModalOpen(!isEditModalOpen);
  };

  return (
    <Box width="80%">
      <TransportItemContainer>
        <Box width="100px" height="100px" borderRadius="50%" overflow="hidden">
          <StyledImage src={transport.imageUrl} />
        </Box>
        <Subtitle1>{t(transport.name)}</Subtitle1>
        <Subtitle1>{t(transport.type)}</Subtitle1>
        <Subtitle1>{t(transport.contact)}</Subtitle1>
        <Box>
          <RoundIconButton onClick={toggleEditModal}>
            <EditIcon />
          </RoundIconButton>
          <RoundIconButton onClick={() => onDeleteTransport(transport.id)}>
            <DeleteIcon />
          </RoundIconButton>
        </Box>
      </TransportItemContainer>
      <StyledModal open={isEditModalOpen} onClose={toggleEditModal}>
        <StyledModalBody>
          <LocalTransportForm
            transport={transport}
            onEditTransport={onEditTransport}
            onCloseModal={toggleEditModal}
          />
        </StyledModalBody>
      </StyledModal>
    </Box>
  );
}

export default LocalTransportItem;
