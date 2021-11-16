import { useTranslation } from 'react-i18next';
import * as colors from 'theme/colors';

export const useCategoriesMap = () => {
  const { t } = useTranslation();

  const categoriesMap = [
    {
      id: 1,
      name: t('mapCategory1'),
      color: colors.Mantis,
      places: [{ name: t('mapCategory1'), position: [48.4525087, 28.4034291] }],
    },
    {
      id: 2,
      name: t('mapCategory2'),
      color: colors.Brown,
      places: [{ name: t('mapCategory2'), position: [48.4525087, 28.4034291] }],
    },
    {
      id: 3,
      name: t('mapCategory3'),
      color: colors.LightViolet,
      places: [{ name: t('mapCategory3'), position: [48.4525087, 28.4034291] }],
    },
    {
      id: 4,
      name: t('mapCategory4'),
      color: colors.DarkPurple,
      places: [{ name: t('mapCategory4'), position: [48.4525087, 28.4034291] }],
    },
    {
      id: 5,
      name: t('mapCategory5'),
      color: colors.DarkRed,
      places: [{ name: t('mapCategory5'), position: [48.4525087, 28.4034291] }],
    },
    {
      id: 6,
      name: t('mapCategory6'),
      color: colors.Orange,
      places: [{ name: t('mapCategory6'), position: [48.4525087, 28.4034291] }],
    },
    {
      id: 7,
      name: t('mapCategory7'),
      color: colors.CadetGrey,
      places: [{ name: t('mapCategory7'), position: [48.4525087, 28.4034291] }],
    },
    {
      id: 8,
      name: t('mapCategory8'),
      color: colors.SpanishViolet,
      places: [{ name: t('mapCategory8'), position: [48.4525087, 28.4034291] }],
    },
    {
      id: 9,
      name: t('mapCategory9'),
      color: colors.GreenSheen,
      places: [{ name: t('mapCategory9'), position: [48.4525087, 28.4034291] }],
    },
    {
      id: 10,
      name: t('mapCategory10'),
      color: colors.VividBlue,
      places: [
        { name: t('mapCategory10'), position: [48.4525087, 28.4034291] },
      ],
    },
  ];

  return categoriesMap;
};
