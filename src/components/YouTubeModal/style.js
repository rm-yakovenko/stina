import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import Box from '@material-ui/core/Box';

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;

export const ModalBody = styled(Box)`
  position: relative;
  background-color: #000;
  outline: none;
`;
