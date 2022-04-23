import React from 'react';
import HeaderLight from 'components/HeaderLight';
import SocialLinks from 'components/SocialLinks';
import topImage from 'assets/howtogethere.jpg';
import { HeadingH5, HeadingH6 } from 'components/Typography';
import Box from '@material-ui/core/Box';
import useTransport from 'components/useTransport';
import useTranslation from 'hooks/useTranslation';
import { howtogetPage } from 'strings/howtoget';
import TransportSlider from './TransportSlider';
import Variant from './Variant';
import {
  PageContainer,
  TopContainer,
  TopContainerTextSection,
  TopContainerImageSection,
  TopImageContainer,
  SocialLinksContainer,
  Image,
  BottomContainer,
  BottomContainerMapSection,
  BottomContainerSliderSection,
} from './style';

function HowToGet() {
  const [{ localTransport, howToGetTransport }, dispatch] = useTransport();
  const t = useTranslation();
  const strings = t(howtogetPage);

  return (
    <PageContainer>
      <HeaderLight />
      <TopContainer>
        <TopContainerTextSection>
          <Box marginBottom="20px">
            <HeadingH6>{strings.address}</HeadingH6>
          </Box>
          {howToGetTransport.map((transport, index) => (
            <Variant transport={transport} index={index} />
          ))}
        </TopContainerTextSection>
        <TopContainerImageSection>
          <TopImageContainer>
            <Image src={topImage} />
            <SocialLinksContainer>
              <Box
                width="50%"
                display="flex"
                alignItems="center"
                justifyContent="space-around"
              >
                <SocialLinks />
              </Box>
            </SocialLinksContainer>
          </TopImageContainer>
        </TopContainerImageSection>
      </TopContainer>
      <BottomContainer>
        <BottomContainerMapSection>
          <iframe
            title="stina-map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2706590.3937637242!2d28.1356469!3d48.5110994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cd270188c5ddd1%3A0x8a04ff6d2e9246e4!2z0KHRgtGW0L3QsCwg0JLRltC90L3QuNGG0YzQutCwINC-0LHQu9Cw0YHRgtGMLCAyNDIzMQ!5e0!3m2!1suk!2sua!4v1648899347184!5m2!1suk!2sua"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          />
        </BottomContainerMapSection>
        <BottomContainerSliderSection>
          <Box
            height="5%"
            display="flex"
            alignItems="flex-start"
            paddingLeft="20px"
          >
            <HeadingH5>{strings.local}</HeadingH5>
          </Box>
          <TransportSlider transports={localTransport} />
        </BottomContainerSliderSection>
      </BottomContainer>
    </PageContainer>
  );
}

export default HowToGet;
