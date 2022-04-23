import styled from 'styled-components';
import PresentToAllIcon from '@material-ui/icons/PresentToAll';
import ArrowBackRoundedIcon from '@material-ui/icons/ArrowBackRounded';
import * as colors from 'theme/colors';

export const PageContainer = styled.div`
  padding: 110px 10% 20px 10%;
  flex-grow: 1;
`;

export const NextArticleArrow = styled(PresentToAllIcon)`
  transform: rotate(90deg);
  cursor: pointer;
`;

export const PrevArticleArrow = styled(PresentToAllIcon)`
  transform: rotate(-90deg);
  cursor: pointer;
`;

export const BackArrow = styled(ArrowBackRoundedIcon)`
  cursor: pointer;
`;

export const Bullet = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) =>
    props.active ? colors.LightViolet : colors.lightBlue};
  margin: 0 2px;
`;
