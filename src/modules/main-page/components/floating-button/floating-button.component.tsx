import { Button, Tooltip } from 'antd';
import styled from 'styled-components';
import { FloatingButtonProps } from '../../model';

const FloatingButton = ({
    tooltipText,
    onClick,
    icon
}: FloatingButtonProps) => {
    return (
        <Tooltip
            title={tooltipText}
            placement="left"
            data-testid="test-floating-button-tooltip"
        >
            <FloatingButtonContainer
                data-testid="test-floating-button"
                type="primary"
                shape="circle"
                size="large"
                onClick={onClick}
            >
                {icon}
            </FloatingButtonContainer>
        </Tooltip>
    );
};

export default FloatingButton;

const FloatingButtonContainer = styled(Button)`
    position: absolute;
    bottom: 24px;
    right: 24px;
`;
