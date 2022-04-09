import { usePlacesState } from 'components/usePlaces';
import * as colors from 'theme/colors';
import useTranslation from 'hooks/useTranslation';
import { mainPage } from 'strings/mainPage';

export const useCategoriesMap = () => {
  const t = useTranslation();
  const strings = t(mainPage);
  const { places } = usePlacesState();

  const categoriesMap = [
    {
      id: 1,
      name: strings.mapCategory1,
      color: colors.Mantis,
      places: [],
    },
    {
      id: 2,
      name: strings.mapCategory2,
      color: colors.Brown,
      places: [],
    },
    {
      id: 3,
      name: strings.mapCategory3,
      color: colors.LightViolet,
      places: [],
    },
    {
      id: 4,
      name: strings.mapCategory4,
      color: colors.DarkPurple,
      places: [],
    },
    {
      id: 5,
      name: strings.mapCategory5,
      color: colors.DarkRed,
      places: [],
    },
    {
      id: 6,
      name: strings.mapCategory6,
      color: colors.Orange,
      places: [],
    },
    {
      id: 7,
      name: strings.mapCategory7,
      color: colors.CadetGrey,
      places: [],
    },
    {
      id: 8,
      name: strings.mapCategory8,
      color: colors.SaffronYellow,
      places: [],
    },
    {
      id: 9,
      name: strings.mapCategory9,
      color: colors.GreenSheen,
      places: [],
    },
    {
      id: 10,
      name: strings.mapCategory10,
      color: colors.VividBlue,
      places: [],
    },
  ];

  return categoriesMap.map((category) => ({
    ...category,
    places: places.find((place) => place.categoryId === category.id)?.places,
    documentId: places.find((place) => place.categoryId === category.id)?.id,
  }));
};
