import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { PageContainer } from './style';

function Spinner() {
  return (
    <PageContainer>
      <CircularProgress size={80} />
    </PageContainer>
  );
}

export default Spinner;
