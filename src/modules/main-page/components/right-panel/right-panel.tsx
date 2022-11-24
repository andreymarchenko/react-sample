import { Drawer } from 'antd';
import { RightPanelProps } from '../../model';
import styled from 'styled-components';

const RightPanel = ({
    title,
    opened,
    placement,
    onClose,
    children
}: RightPanelProps) => {
    return (
        <Drawer
            title={title}
            mask={false}
            open={opened}
            placement={placement}
            onClose={onClose}
        >
            <DrawerContent>{children}</DrawerContent>
        </Drawer>
    );
};

const DrawerContent = styled.div`
    display: flex;
    flex-direction: column;
    label:not(:first-child) {
        margin-top: 12px;
    }
    label {
        margin-bottom: 4px;
    }
`;

export default RightPanel;
