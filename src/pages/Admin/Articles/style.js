import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import * as colors from 'theme/colors';

export const FormContainer = styled.div`
  width: 80%;
  padding: 20px;
`;

export const ArticlePreviewContainer = styled.div`
  padding: 20px;
  padding-top: 40px;
`;

export const CreateArticleContainer = styled.div`
  display: flex;
`;

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

export const CategoriesContainer = styled.div`
  padding: 20px;
`;
export const CategoryContainer = styled.div`
  padding: 10px;
`;
export const ArticlesArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

export const CategoryHeader = styled.div`
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

export const ArticleThumbContainer = styled.div`
  width: 20%;
  padding: 10px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  top: 30px !important;
`;

export const StyledModalBody = styled.div`
  position: relative;
  background: white;
  padding: 30px;
  width: 70%;
  height: 80%;
  overflow-y: scroll;
`;

export const StyledCloseIcon = styled(CloseIcon)`
  position: fixed;
  top: 120px;
  right: 20px;
  cursor: pointer;
`;
