import { render, screen } from '@testing-library/react';
import Layout from './layout';
import { IntlProvider } from 'react-intl';
import { MemoryRouter } from 'react-router-dom';

describe('Application Header', () => {
    beforeEach(() => {
        render(
            <IntlProvider locale={'en'}>
                <MemoryRouter initialEntries={['/']}>
                    <Layout />
                </MemoryRouter>
            </IntlProvider>
        );
    });

    it('should display header', () => {
        const title = screen.getByTestId('test-app-title');
        expect(title).toBeInTheDocument();
    });

    it('should display app content', () => {
        const appContent = screen.getByTestId('test-app-content');
        expect(appContent).toBeInTheDocument();
    });
});
