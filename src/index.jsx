import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Spinner from 'components/Spinner';
import { VideosProvider } from 'components/useVideos';
import { PlacesProvider } from 'components/usePlaces';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'index.css';
import './i18n';

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Spinner />}>
      <PlacesProvider>
        <VideosProvider>
          <App />
        </VideosProvider>
      </PlacesProvider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
