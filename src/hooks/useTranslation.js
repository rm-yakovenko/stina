import useLocale from 'components/useLocale';

function useTranslation() {
  const { locale } = useLocale();

  const t = (strings = '') => strings[locale];

  return t;
}

export default useTranslation;
