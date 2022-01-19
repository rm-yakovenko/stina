import { useTranslation } from 'react-i18next';
import { usePlacesState } from 'components/usePlaces';
import * as colors from 'theme/colors';

export const useCategoriesMap = () => {
  const { t } = useTranslation();
  const { places } = usePlacesState();

  const categoriesMap = [
    {
      id: 1,
      name: t('mapCategory1'),
      color: colors.Mantis,
    },
    {
      id: 2,
      name: t('mapCategory2'),
      color: colors.Brown,
    },
    {
      id: 3,
      name: t('mapCategory3'),
      color: colors.LightViolet,
    },
    {
      id: 4,
      name: t('mapCategory4'),
      color: colors.DarkPurple,
    },
    {
      id: 5,
      name: t('mapCategory5'),
      color: colors.DarkRed,
    },
    {
      id: 6,
      name: t('mapCategory6'),
      color: colors.Orange,
    },
    {
      id: 7,
      name: t('mapCategory7'),
      color: colors.CadetGrey,
    },
    {
      id: 8,
      name: t('mapCategory8'),
      color: colors.SaffronYellow,
    },
    {
      id: 9,
      name: t('mapCategory9'),
      color: colors.GreenSheen,
    },
    {
      id: 10,
      name: t('mapCategory10'),
      color: colors.VividBlue,
    },
  ];

  return categoriesMap.map((category) => ({
    ...category,
    places: places
      .find((place) => place.categoryId === category.id)
      ?.places.map((place) => ({
        ...place,
        name: t(place.name),
        nameCode: place.name,
      })),
    documentId: places.find((place) => place.categoryId === category.id)?.id,
  }));
};
