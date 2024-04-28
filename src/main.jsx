import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

import { pdfjs } from 'react-pdf';
import TEST from './components/test';
import { Provider } from 'react-redux';
import store from './redux/store';
import { router } from './route';
import { RouterProvider } from 'react-router-dom';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

// function App(){
//   return(
//     <Provider store={store}>
//       <></>
//     </Provider>
//   )
// }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </Provider>

  </React.StrictMode>
);