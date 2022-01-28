import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import * as colors from 'theme/colors';

export const MapCategoryButton = styled(IconButton)`
  background: ${(props) =>
    props.selected ? colors.lightBlue : 'white'} !important;
  margin-right: 10px !important;
  box-shadow: 0 5px 5px grey;
`;

export const RoundIconButton = styled(IconButton)`
  background: ${colors.lightBlue} !important;
`;

export const RoundIconButtonInverted = styled(IconButton)`
  background: white !important;
  width: 50px;
  height: 50px;
`;
