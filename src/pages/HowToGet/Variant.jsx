import React, { useState } from 'react';
import { HeadingH5, HeadingH6, Body1 } from 'components/Typography';
import useTranslation from 'hooks/useTranslation';
import { howtogetPage } from 'strings/howtoget';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';

import { StyledButton, TextContainer } from './style';

function Variant({ transport, index }) {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslation();
  const strings = t(howtogetPage);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledButton active={isOpen} onClick={toggleButton}>
        <HeadingH6>{`${strings.variant} ${index + 1}`}</HeadingH6>
      </StyledButton>
      <Collapse in={isOpen}>
        <TextContainer>
          <HeadingH5>{t(transport.header)}</HeadingH5>
          <Body1>{t(transport.description)}</Body1>
        </TextContainer>
      </Collapse>
    </>
  );
}

export default Variant;
