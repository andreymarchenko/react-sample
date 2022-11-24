import styled from 'styled-components';
import { Button } from 'antd';
import { useLocation, useNavigate } from 'react-router';
import { useIntl } from 'react-intl';
import messages from './messages';

const ErrorPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { formatMessage } = useIntl();

    return (
        <StyledContainer data-testid="test-error-page">
            <StyledHeader data-testid="test-error-header">
                {formatMessage(messages.title)}
            </StyledHeader>
            <StyledButton
                data-testid="test-back-button"
                onClick={() => {
                    location.pathname === '/' ? navigate(0) : navigate('/');
                }}
            >
                {formatMessage(messages.back)}
            </StyledButton>
        </StyledContainer>
    );
};

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const StyledHeader = styled.div`
    font-size: 48px;
`;

const StyledButton = styled(Button)`
    font-size: 18px;
    height: 40px;
    margin-top: 24px;
`;

export default ErrorPage;
