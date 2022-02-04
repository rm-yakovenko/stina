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
    },
    {
      id: 2,
      name: strings.mapCategory2,
      color: colors.Brown,
    },
    {
      id: 3,
      name: strings.mapCategory3,
      color: colors.LightViolet,
    },
    {
      id: 4,
      name: strings.mapCategory4,
      color: colors.DarkPurple,
    },
    {
      id: 5,
      name: strings.mapCategory5,
      color: colors.DarkRed,
    },
    {
      id: 6,
      name: strings.mapCategory6,
      color: colors.Orange,
    },
    {
      id: 7,
      name: strings.mapCategory7,
      color: colors.CadetGrey,
    },
    {
      id: 8,
      name: strings.mapCategory8,
      color: colors.SaffronYellow,
    },
    {
      id: 9,
      name: strings.mapCategory9,
      color: colors.GreenSheen,
    },
    {
      id: 10,
      name: strings.mapCategory10,
      color: colors.VividBlue,
    },
  ];

  return categoriesMap.map((category) => ({
    ...category,
    places: places.find((place) => place.categoryId === category.id)?.places,
    documentId: places.find((place) => place.categoryId === category.id)?.id,
  }));
};
