import { fireEvent, render, screen } from '@testing-library/react';
import FloatingButton from './floating-button.component';
import { FilterOutlined } from '@ant-design/icons';

describe('Floating button', () => {
    it('should display not empty tooltip', async () => {
        const expectedText: string = 'TEST TOOLTIP';

        render(
            <FloatingButton
                tooltipText={expectedText}
                icon={<FilterOutlined />}
                onClick={jest.fn()}
            />
        );

        fireEvent.mouseOver(screen.getByTestId('test-floating-button'));
        const tooltip = await screen.findByRole('tooltip');
        expect(tooltip.textContent).toEqual(expectedText);
    });

    it('should not display empty tooltip', async () => {
        render(
            <FloatingButton icon={<FilterOutlined />} onClick={jest.fn()} />
        );

        fireEvent.mouseOver(screen.getByTestId('test-floating-button'));
        const tooltip = await screen.queryByRole('tooltip');
        expect(tooltip).not.toBeInTheDocument();
    });
});
