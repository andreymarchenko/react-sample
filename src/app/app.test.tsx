import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { act, render, waitFor, screen } from '@testing-library/react';
import React from 'react';
import App from './app';
import { store } from './store';
import { MemoryRouter } from 'react-router-dom';
import RestServiceContext from '../context';
const restService = require('../service');

jest.mock('../service', () => ({
    fetchData: (callback: (error: any, data?: any) => void) => {
        callback('Error');
    }
}));

const renderApp = () => {
    render(
        <Provider store={store}>
            <IntlProvider locale={'en'}>
                <RestServiceContext.Provider value={restService}>
                    <MemoryRouter initialEntries={['/']}>
                        <App />
                    </MemoryRouter>
                </RestServiceContext.Provider>
            </IntlProvider>
        </Provider>
    );
};

describe('App with rest service error', () => {
    beforeEach(async () => {
        await act(async () => {
            renderApp();
        });
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should display error page when rest service returns an error', async () => {
        await waitFor(
            async () => {
                const errorPage = await screen.findByTestId('test-error-page');

                expect(errorPage).toBeInTheDocument();
            },
            {
                timeout: 2000
            }
        );
    });

    it('should not display header when rest service returns an error', async () => {
        await waitFor(
            async () => {
                const header = await screen.queryByTestId('test-app-title');

                expect(header).not.toBeInTheDocument();
            },
            {
                timeout: 2000
            }
        );
    });
});
