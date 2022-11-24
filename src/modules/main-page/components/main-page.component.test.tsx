import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { store } from '../../../app/store';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { act, render, waitFor, screen } from '@testing-library/react';
import { ErrorPage, Layout } from '../../../components';
import React from 'react';
import { getTestData } from '../../../test-utils';
import RestServiceContext from '../../../context';
import MainPage from './main-page.component';
const restService = require('../../../service');

const mockData = getTestData();

jest.mock('../../../service', () => ({
    fetchData: (callback: (error: any, data: any) => void) => {
        callback(null, mockData);
    }
}));

const renderApp = () => {
    render(
        <Provider store={store}>
            <IntlProvider locale={'en'}>
                <RestServiceContext.Provider value={restService}>
                    <MemoryRouter initialEntries={['/']}>
                        <Routes>
                            <Route path="/" element={<Layout />}>
                                <Route index element={<MainPage />} />
                                <Route path="*" element={<ErrorPage />} />
                            </Route>
                        </Routes>
                    </MemoryRouter>
                </RestServiceContext.Provider>
            </IntlProvider>
        </Provider>
    );
};

describe('Main module', () => {
    beforeEach(async () => {
        await act(async () => {
            renderApp();
        });
    });

    afterAll(() => {
        jest.clearAllMocks();
    });

    it('should display header after loading', () => {
        const header = screen.getByTestId('test-app-title');

        expect(header).toBeInTheDocument();
    });

    it('should display vehicles list after opening', async () => {
        await waitFor(
            async () => {
                expect(
                    await screen.findByTestId('test-list')
                ).toBeInTheDocument();
            },
            {
                timeout: 2000
            }
        );
    });

    it('should display all vehicles list items after data load', async () => {
        await waitFor(
            async () => {
                const items = await screen.findAllByTestId('test-list-item');

                expect(items.length).toEqual(12);
            },
            {
                timeout: 2000
            }
        );
    });

    it('should display filter panel after data load', async () => {
        await waitFor(
            async () => {
                const filterPanel = await screen.findByText(/filters/i);

                expect(filterPanel).toBeInTheDocument();
            },
            {
                timeout: 3000
            }
        );
    });

    it('should display all combo boxes in filter panel', async () => {
        await waitFor(
            async () => {
                const comboBoxes = await screen.findAllByText(/vehicle.*/i);

                expect(comboBoxes.length).toEqual(3);
            },
            {
                timeout: 3000
            }
        );
    });

    it('should display floating button after data load', async () => {
        await waitFor(
            async () => {
                const filterPanel = await screen.findByTestId(
                    'test-floating-button'
                );

                expect(filterPanel).toBeInTheDocument();
            },
            {
                timeout: 3000
            }
        );
    });
});
