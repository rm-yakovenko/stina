import { useTranslation } from 'react-i18next';
import breadImage from 'assets/bread.png';
import accomodationImage from 'assets/accommodation.png';
import productImage from 'assets/product.png';
import volunteeringImage from 'assets/volunteering.png';
import restImage from 'assets/recreation.png';
import masterClassesImage from 'assets/workshops.png';
import toursImage from 'assets/tours.png';
import placesImage from 'assets/places.png';
import propositionImage from 'assets/offer.png';

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
      image: accomodationImage,
      link: '/acomodation',
    },
    {
      id: 3,
      name: t('category3'),
      nameFirs: t('category3First'),
      nameSecond: t('category3Second'),
      image: productImage,
      link: '/product',
    },
    {
      id: 4,
      name: t('category4'),
      nameFirs: t('category4First'),
      nameSecond: t('category4Second'),
      image: volunteeringImage,
      link: '/wolunteering',
    },
    {
      id: 5,
      name: t('category5'),
      nameFirs: t('category5First'),
      nameSecond: t('category5Second'),
      image: restImage,
      link: '/activerest',
    },
    {
      id: 6,
      name: t('category6'),
      nameFirs: t('category6First'),
      nameSecond: t('category6Second'),
      image: masterClassesImage,
      link: '/masterclasses',
    },
    {
      id: 7,
      name: t('category7'),
      nameFirs: t('category7First'),
      nameSecond: t('category7Second'),
      image: toursImage,
      link: '/complextours',
    },
    {
      id: 8,
      name: t('category8'),
      nameFirs: t('category8First'),
      nameSecond: t('category8Second'),
      image: placesImage,
      link: '/interestplaces',
    },
    {
      id: 9,
      name: t('category9'),
      nameFirs: t('category9First'),
      nameSecond: t('category9Second'),
      image: propositionImage,
      link: '/propositions',
    },
  ];

  return categories;
};
