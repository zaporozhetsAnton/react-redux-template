import en from './en';
import de from './de';

const vocabularies = {
  en,
  de,
};

type supportedLanguage = keyof typeof vocabularies;

const getLanguage = (): supportedLanguage => {
  const defaultLanguage = 'en';
  const systemLanguage = window.navigator.language.slice(0, 2) as supportedLanguage;

  return Object.keys(vocabularies).includes(systemLanguage) ? systemLanguage : defaultLanguage;
};

export const getVocabulary = () => {
  const language = getLanguage();
  return vocabularies[language] || vocabularies.en;
};
