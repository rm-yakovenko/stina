import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

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
  width: 30%;
`;
