import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { HeadingH6, Subtitle1 } from 'components/Typography';
import { RoundIconButton } from 'components/Buttons';
import useTranslation from 'hooks/useTranslation';
import HowToGetTransportForm from './HowToGetTransportForm';
import { StyledModalBody, StyledModal, TransportItemContainer } from './style';

function HowToGetTransportItem({
  transport,
  onEditTransport,
  onDeleteTransport,
}) {
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const t = useTranslation();

  const toggleEditModal = () => {
    setEditModalOpen(!isEditModalOpen);
  };

  return (
    <Box width="80%">
      <TransportItemContainer>
        <HeadingH6>{t(transport.header)}</HeadingH6>
        <Subtitle1>{t(transport.description)}</Subtitle1>
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
          <HowToGetTransportForm
            transport={transport}
            onEditTransport={onEditTransport}
            onCloseModal={toggleEditModal}
          />
        </StyledModalBody>
      </StyledModal>
    </Box>
  );
}

export default HowToGetTransportItem;
