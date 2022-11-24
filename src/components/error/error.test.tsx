import { render, screen } from '@testing-library/react';
import ErrorPage from './error';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';

describe('Error page', () => {
    beforeEach(() => {
        render(
            <IntlProvider locale={'en'}>
                <MemoryRouter initialEntries={['/']}>
                    <ErrorPage />
                </MemoryRouter>
            </IntlProvider>
        );
    });

    it('should display back button', () => {
        const backButton = screen.getByTestId('test-back-button');
        expect(backButton).toBeInTheDocument();
    });

    it('should display error page title', () => {
        const errorPageTitle = screen.getByTestId('test-error-header');
        expect(errorPageTitle).toBeInTheDocument();
    });
});
