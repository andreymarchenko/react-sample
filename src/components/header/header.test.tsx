import { render, screen } from '@testing-library/react';
import Header from './header';

describe('Application Header', () => {
    it('should display app title', () => {
        const expectedText: string = 'TRAFFIC MEISTER';

        render(<Header title={expectedText} />);

        const title = screen.getByTestId('test-app-title');
        expect(title.textContent).toEqual(expectedText);
    });
    it('should display children components', () => {
        const testText = 'Test Text';

        render(
            <Header>
                <div>{testText}</div>
            </Header>
        );

        const childrenComponent = screen.getByText(testText);
        expect(childrenComponent).toBeInTheDocument();
    });
});
