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
      nameFirst: t('category1First'),
      nameSecond: t('category1Second'),
      image: breadImage,
      link: '/food',
      articles: [],
    },
    {
      id: 2,
      name: t('category2'),
      nameFirst: t('category2First'),
      nameSecond: t('category2Second'),
      image: accomodationImage,
      link: '/acomodation',
      articles: [],
    },
    {
      id: 3,
      name: t('category3'),
      nameFirst: t('category3First'),
      nameSecond: t('category3Second'),
      image: productImage,
      link: '/product',
      articles: [],
    },
    {
      id: 4,
      name: t('category4'),
      nameFirst: t('category4First'),
      nameSecond: t('category4Second'),
      image: volunteeringImage,
      link: '/wolunteering',
      articles: [],
    },
    {
      id: 5,
      name: t('category5'),
      nameFirst: t('category5First'),
      nameSecond: t('category5Second'),
      image: restImage,
      link: '/activerest',
      articles: [],
    },
    {
      id: 6,
      name: t('category6'),
      nameFirst: t('category6First'),
      nameSecond: t('category6Second'),
      image: masterClassesImage,
      link: '/masterclasses',
      articles: [],
    },
    {
      id: 7,
      name: t('category7'),
      nameFirst: t('category7First'),
      nameSecond: t('category7Second'),
      image: toursImage,
      link: '/complextours',
      articles: [],
    },
    {
      id: 8,
      name: t('category8'),
      nameFirst: t('category8First'),
      nameSecond: t('category8Second'),
      image: placesImage,
      link: '/interestplaces',
      articles: [],
    },
    {
      id: 9,
      name: t('category9'),
      nameFirst: t('category9First'),
      nameSecond: t('category9Second'),
      image: propositionImage,
      link: '/propositions',
      articles: [],
    },
  ];

  return categories;
};
