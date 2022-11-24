import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';
import Header from '../header';
import { useIntl } from 'react-intl';
import messages from './messages';

const Layout = () => {
    const { formatMessage } = useIntl();

    return (
        <LayoutWrapper data-testid="test-app-layout">
            <Header title={formatMessage(messages.appTitle)}>
                <nav data-testid="test-nav-panel">
                    <StyledLink to="/">
                        {formatMessage(messages.home)}
                    </StyledLink>
                </nav>
            </Header>
            <StyledContent data-testid="test-app-content">
                <Outlet />
            </StyledContent>
        </LayoutWrapper>
    );
};

const LayoutWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`;

const StyledContent = styled.div`
    display: flex;
    flex-direction: column;
    height: calc(100% - 60px);
    overflow: auto;
    padding: 16px;
`;

const StyledLink = styled(Link)`
    color: white;
    :hover {
        color: black;
    }
`;

export default Layout;
