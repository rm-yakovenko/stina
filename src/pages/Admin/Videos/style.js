import styled from 'styled-components';
import * as colors from 'theme/colors';

export const VideosContainer = styled.div`
  width: 100%;
  padding: 20px;
`;

export const VideoContainer = styled.div`
  position: relative;
  width: 400px;
  height: auto;
  padding: 10px;
`;

export const VideoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const FormContainer = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
`;

export const DeleteButtonContainer = styled.div`
  position: absolute;
  top: 15px;
  left: 15px;
`;
