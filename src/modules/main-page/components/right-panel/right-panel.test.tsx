import { render, screen } from '@testing-library/react';
import RightPanel from './right-panel';
import { RightPanelPosition } from '../../model';
import { ReactNode } from 'react';

const getRightPanel = (
    title: string,
    opened: boolean,
    children?: ReactNode
) => {
    return (
        <RightPanel
            title={title}
            opened={opened}
            onClose={jest.fn()}
            placement={RightPanelPosition.RIGHT}
        >
            {children}
        </RightPanel>
    );
};

describe('Right panel', () => {
    it('should display correct title', async () => {
        const expectedText = 'Test';

        render(getRightPanel(expectedText, true));

        const panel = await screen.findByText(expectedText);

        expect(panel.textContent).toEqual(expectedText);
    });

    it('should display children components', () => {
        const testText = 'Test Text';

        render(getRightPanel('test', true, <div>{testText}</div>));

        const childrenComponent = screen.getByText(testText);
        expect(childrenComponent).toBeInTheDocument();
    });

    it('should not be visible if closed', async () => {
        const testTitle = 'Test Text';

        render(getRightPanel(testTitle, false));

        const panel = await screen.queryByText(testTitle);

        expect(panel).not.toBeInTheDocument();
    });
});
