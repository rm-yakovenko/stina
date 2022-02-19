import Slide1 from 'assets/eco-center/general.jpg';
import Slide2 from 'assets/eco-center/accomodation.jpg';
import Slide3 from 'assets/eco-center/events.jpg';
import Slide4 from 'assets/eco-center/educational.jpg';
import useTranslation from 'hooks/useTranslation';
import { ecoCenter } from 'strings/ecoCenter';

const useSlides = () => {
  const t = useTranslation();
  const strings = t(ecoCenter);
  return [
    {
      id: 0,
      src: Slide1,
      text: strings.Slide0,
    },
    {
      id: 1,
      src: Slide2,
      text: strings.Slide1,
    },
    {
      id: 2,
      src: Slide3,
      text: strings.Slide2,
    },
    {
      id: 3,
      src: Slide4,
      text: strings.Slide3,
    },
  ];
};

export default useSlides;
