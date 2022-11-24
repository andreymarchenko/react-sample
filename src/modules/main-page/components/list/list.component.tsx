import { ListProps, Vehicle } from '../../model';
import { Badge, Image, List as AntList } from 'antd';
import { useCallback } from 'react';
import styled from 'styled-components';

const List = ({ data, loading, typeDisplayName }: ListProps) => {
    const getItem = useCallback(
        ({ type, brand, img, colors }: Vehicle) => {
            return (
                <StyledListItem
                    data-testid="test-list-item"
                    key={`${type}${brand}`}
                    actions={colors.map((color: string) => {
                        return (
                            <StyledBadge
                                color={color}
                                text={color}
                                size="default"
                            />
                        );
                    })}
                    extra={<Image src={img} alt="item-logo" width={150} />}
                >
                    <AntList.Item.Meta
                        title={brand}
                        description={`${typeDisplayName} ${type}`}
                    />
                </StyledListItem>
            );
        },
        [typeDisplayName]
    );

    return (
        <AntList
            data-testid="test-list"
            itemLayout="vertical"
            dataSource={data}
            loading={loading}
            style={{ width: '100%' }}
            renderItem={getItem}
        />
    );
};

const StyledListItem = styled(AntList.Item)`
    :hover {
        background: #fafafa;
    }
    text-transform: capitalize;
    padding: 12px 8px;
`;

const StyledBadge = styled(Badge)`
    margin-right: 4px;
`;

export default List;
