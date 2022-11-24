import styled from 'styled-components';
import { HeaderProps } from './header.model';

const Header = ({ children, title }: HeaderProps) => {
    return (
        <StyledHeader>
            <StyledTitle data-testid="test-app-title">{title}</StyledTitle>
            {children}
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    display: flex;
    width: 100%;
    height: 60px;
    background-color: #1890ff;
    align-items: center;
    padding: 8px 16px;
    text-transform: uppercase;
`;

const StyledTitle = styled.div`
    color: white;
    margin-right: 12px;
    font-weight: bold;
    cursor: default;
`;

export default Header;
