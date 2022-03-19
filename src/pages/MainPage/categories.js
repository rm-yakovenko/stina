//Small images

import breadImage from 'assets/bread.png';
import accomodationImage from 'assets/accommodation.png';
import productImage from 'assets/product.png';
import volunteeringImage from 'assets/volunteering.png';
import restImage from 'assets/recreation.png';
import masterClassesImage from 'assets/workshops.png';
import toursImage from 'assets/tours.png';
import placesImage from 'assets/places.png';
import propositionImage from 'assets/offer.png';

//Big images
import breadImageBig from 'assets/categories/food.jpg';
import accomodationImageBig from 'assets/categories/accommodation.jpg';
import productImageBig from 'assets/categories/local_ product.jpg';
import volunteeringImageBig from 'assets/categories/learning_volunteering.jpg';
import restImageBig from 'assets/categories/active_recreation.jpg';
import masterClassesImageBig from 'assets/categories/workshops.jpg';
import toursImageBig from 'assets/categories/complex_tours.jpg';
import placesImageBig from 'assets/categories/interesting_places.jpg';
import propositionImageBig from 'assets/categories/special_offers.jpg';

import useTranslation from 'hooks/useTranslation';
import { mainPage } from 'strings/mainPage';
import { categoriesPage } from 'strings/categoriesPage';

export const useCategories = () => {
  const t = useTranslation();
  const strings = t(mainPage);
  const categoriesStrings = t(categoriesPage);

  const categories = [
    {
      id: 1,
      name: strings.category1,
      nameFirst: strings.category1First,
      nameSecond: strings.category1Second,
      image: breadImage,
      imageBig: breadImageBig,
      text: categoriesStrings.food,
      link: '/food',
      articles: [],
    },
    {
      id: 2,
      name: strings.category2,
      nameFirst: strings.category2First,
      nameSecond: strings.category2Second,
      image: accomodationImage,
      imageBig: accomodationImageBig,
      text: categoriesStrings.accomodation,
      link: '/acomodation',
      articles: [],
    },
    {
      id: 3,
      name: strings.category3,
      nameFirst: strings.category3First,
      nameSecond: strings.category3Second,
      image: productImage,
      imageBig: productImageBig,
      text: categoriesStrings.product,
      link: '/product',
      articles: [],
    },
    {
      id: 4,
      name: strings.category4,
      nameFirst: strings.category4First,
      nameSecond: strings.category4Second,
      image: volunteeringImage,
      imageBig: volunteeringImageBig,
      text: categoriesStrings.volunteering,
      link: '/wolunteering',
      articles: [],
    },
    {
      id: 5,
      name: strings.category5,
      nameFirst: strings.category5First,
      nameSecond: strings.category5Second,
      image: restImage,
      imageBig: restImageBig,
      text: categoriesStrings.activerest,
      link: '/activerest',
      articles: [],
    },
    {
      id: 6,
      name: strings.category6,
      nameFirst: strings.category6First,
      nameSecond: strings.category6Second,
      image: masterClassesImage,
      imageBig: masterClassesImageBig,
      text: categoriesStrings.masterclasses,
      link: '/masterclasses',
      articles: [],
    },
    {
      id: 7,
      name: strings.category7,
      nameFirst: strings.category7First,
      nameSecond: strings.category7Second,
      image: toursImage,
      imageBig: toursImageBig,
      text: categoriesStrings.complextours,
      link: '/complextours',
      articles: [],
    },
    {
      id: 8,
      name: strings.category8,
      nameFirst: strings.category8First,
      nameSecond: strings.category8Second,
      image: placesImage,
      imageBig: placesImageBig,
      text: categoriesStrings.interestplaces,
      link: '/interestplaces',
      articles: [],
    },
    {
      id: 9,
      name: strings.category9,
      nameFirst: strings.category9First,
      nameSecond: strings.category9Second,
      image: propositionImage,
      imageBig: propositionImageBig,
      text: categoriesStrings.propositions,
      link: '/propositions',
      articles: [],
    },
  ];

  return categories;
};
