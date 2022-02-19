import Img1 from 'assets/eco-center/img1.png';
import Img2 from 'assets/eco-center/img2.png';
import Img3 from 'assets/eco-center/img3.png';
import Img4 from 'assets/eco-center/img4.png';
import Img5 from 'assets/eco-center/img5.png';
import useTranslation from 'hooks/useTranslation';
import { ecoCenter } from 'strings/ecoCenter';

const usePeople = () => {
  const t = useTranslation();
  const strings = t(ecoCenter);
  return [
    {
      id: 1,
      src: Img1,
      name: strings.participant1Name,
      role: strings.participant1Role,
    },
    {
      id: 2,
      src: Img2,
      name: strings.participant2Name,
      role: strings.participant2Role,
    },
    {
      id: 3,
      src: Img3,
      name: strings.participant3Name,
      role: strings.participant3Role,
    },
    {
      id: 4,
      src: Img4,
      name: strings.participant4Name,
      role: strings.participant4Role,
    },
    {
      id: 5,
      src: Img5,
      name: strings.participant5Name,
      role: strings.participant5Role,
    },
  ];
};

export default usePeople;
