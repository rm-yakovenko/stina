import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Spinner from 'components/Spinner';
import { VideosProvider } from 'components/useVideos';
import { PlacesProvider } from 'components/usePlaces';
import { ArticlesProvider } from 'components/useArticles';
import { AuthProvider } from 'components/useAuth';
import { LocaleProvider } from 'components/useLocale';
import { TransportProvider } from 'components/useTransport';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'index.css';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <TransportProvider>
        <LocaleProvider>
          <AuthProvider>
            <ArticlesProvider>
              <PlacesProvider>
                <VideosProvider>
                  <App />
                </VideosProvider>
              </PlacesProvider>
            </ArticlesProvider>
          </AuthProvider>
        </LocaleProvider>
      </TransportProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
