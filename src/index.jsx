
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';
import { AppProvider } from '@shopify/polaris';
import viTranslations from '@shopify/polaris/locales/vi.json';
import '@shopify/polaris/build/esm/styles.css';

const root = createRoot(document.getElementById('app'));
root.render(
  <AppProvider i18n={viTranslations}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppProvider>
);
