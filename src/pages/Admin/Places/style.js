import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import * as colors from 'theme/colors';

export const FormContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const PreviewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

export const CategoriesContainer = styled.div`
  padding: 20px;
`;
export const CategoryContainer = styled.div`
  padding: 10px;
`;
export const PlacesArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModalBody = styled.div`
  background: white;
  padding: 30px;
  border-radius: 10px;
`;

export const PlaceHeader = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background: ${colors.lightBlue};
  cursor: pointer;
  border-radius: 10px;
`;

export const StyledDownIcon = styled(ArrowDropDownIcon)`
  transform: ${(props) => (props.selected ? 'rotate(180deg)' : 'none')};
`;
