import { FC } from 'react';
import { Link } from 'react-router-dom';

import { getVocabulary } from '@/i18n';

const NotFound: FC = () => {
  const vocabulary = getVocabulary().pages.notFound;

  return (
    <div>
      <h1>{vocabulary.title}</h1>
      <Link to="/">{vocabulary.button}</Link>
    </div>
  );
};

export default NotFound;
