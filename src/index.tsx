import React from 'react';
import { createRoot } from 'react-dom/client';
import 'antd/dist/antd.min.css';
import App from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import './index.css';
import { IntlProvider } from 'react-intl';
import RestServiceContext from './context';
const restService = require('./service');

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <IntlProvider locale={'ru'}>
                <RestServiceContext.Provider value={restService}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </RestServiceContext.Provider>
            </IntlProvider>
        </Provider>
    </React.StrictMode>
);
