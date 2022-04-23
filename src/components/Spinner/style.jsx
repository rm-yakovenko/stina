import styled from 'styled-components';
import * as colors from 'theme/colors';

export const PageContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.lightBlue};
  z-index: 12000;
`;
