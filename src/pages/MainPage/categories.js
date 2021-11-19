import { useTranslation } from 'react-i18next';
import breadImage from 'assets/bread.png';

export const useCategories = () => {
  const { t } = useTranslation();

  const categories = [
    {
      id: 1,
      name: t('category1'),
      nameFirs: t('category1First'),
      nameSecond: t('category1Second'),
      image: breadImage,
      link: '/food',
    },
    {
      id: 2,
      name: t('category2'),
      nameFirs: t('category2First'),
      nameSecond: t('category2Second'),
      image: breadImage,
      link: '/acomodation',
    },
    {
      id: 3,
      name: t('category3'),
      nameFirs: t('category3First'),
      nameSecond: t('category3Second'),
      image: breadImage,
      link: '/product',
    },
    {
      id: 4,
      name: t('category4'),
      nameFirs: t('category4First'),
      nameSecond: t('category4Second'),
      image: breadImage,
      link: '/wolunteering',
    },
    {
      id: 5,
      name: t('category5'),
      nameFirs: t('category5First'),
      nameSecond: t('category5Second'),
      image: breadImage,
      link: '/activerest',
    },
    {
      id: 6,
      name: t('category6'),
      nameFirs: t('category6First'),
      nameSecond: t('category6Second'),
      image: breadImage,
      link: '/masterclasses',
    },
    {
      id: 7,
      name: t('category7'),
      nameFirs: t('category7First'),
      nameSecond: t('category7Second'),
      image: breadImage,
      link: '/complextours',
    },
    {
      id: 8,
      name: t('category8'),
      nameFirs: t('category8First'),
      nameSecond: t('category8Second'),
      image: breadImage,
      link: '/interestplaces',
    },
    {
      id: 9,
      name: t('category9'),
      nameFirs: t('category9First'),
      nameSecond: t('category9Second'),
      image: breadImage,
      link: '/propositions',
    },
  ];

  return categories;
};
