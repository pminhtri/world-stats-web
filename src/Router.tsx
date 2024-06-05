import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages';
import { useEffect } from 'react';
import i18n from './utils/i18n';
import { DEFAULT_LANGUAGE_CODE } from './constants';
import { PageNotFound } from './errors';

function Router() {
  useEffect(() => {
    const loadLanguage = async () => {
      await i18n.changeLanguage(DEFAULT_LANGUAGE_CODE);
    };

    loadLanguage();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/page-not-found" element={<PageNotFound />} />
    </Routes>
  );
}

export default Router;
