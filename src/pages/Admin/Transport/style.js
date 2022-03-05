import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

export const TabsContainer = styled.div`
  display: flex;
  padding: 20px;
`;

export const StyledTabLink = styled(NavLink)`
  text-decoration: none;
`;

export const StyledTabButton = styled(Button)`
  padding: 12px 32px;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  border-radius: 0 !important;
  color: ${(props) => (props.active ? `blue !important` : 'inherit')};
  border-bottom: ${(props) =>
    props.active
      ? `3px solid blue !important`
      : '3px solid transparent !important'};
`;

export const TransportContainer = styled.div``;

export const FormContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledModalBody = styled.div`
  position: relative;
  background: white;
  padding: 30px;
  width: 50%;
  overflow-y: scroll;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 100px !important;
`;

export const TransportItemContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid black;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
`;
