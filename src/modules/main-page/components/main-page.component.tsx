import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import {
    RightPanelPosition,
    MOBILE_SCREEN_MAX_WIDTH,
    Option,
    ParameterName,
    Vehicle
} from '../model';
import { FilterOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import {
    dataLoaded,
    selectVehicleBrands,
    selectVehicleColors,
    selectVehicles,
    selectVehicleTypes,
    updateFilters
} from '../slices/main-page.slice';
import { useIntl } from 'react-intl';
import messages from './messages';
import { useResizeDetector } from 'react-resize-detector';
import List from './list';
import Select from './select/select.component';
import FloatingButton from './floating-button';
import RestServiceContext from '../../../context';
import RightPanel from './right-panel';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const { formatMessage } = useIntl();
    const { width, ref } = useResizeDetector();

    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [panelOpened, setPanelOpened] = useState<boolean>(true);

    const restService = useContext(RestServiceContext);

    const vehicles: Vehicle[] = useAppSelector(selectVehicles);
    const types: Option[] = useAppSelector(selectVehicleTypes);
    const brands: Option[] = useAppSelector(selectVehicleBrands);
    const colors: Option[] = useAppSelector(selectVehicleColors);

    useEffect(() => {
        restService?.fetchData((err: string | null, data?: Vehicle[]) => {
            if (err) {
                setError(err);
                return;
            }
            dispatch(dataLoaded(data));
            setLoading(false);
        });
    }, [dispatch, restService]);

    useEffect(() => {
        if (error) {
            throw new Error(error);
        }
    }, [error]);

    const onSelectChange = useCallback(
        (value: string, parameterName: string) => {
            dispatch(
                updateFilters({
                    [parameterName]: value
                })
            );
        },
        [dispatch]
    );

    const vehiclesList = useMemo(() => {
        return (
            <List
                data={vehicles}
                loading={loading}
                typeDisplayName={formatMessage(messages.typeParameter)}
            />
        );
    }, [formatMessage, loading, vehicles]);

    const rightPanel = useMemo(() => {
        return (
            <RightPanel
                title={formatMessage(messages.filters)}
                opened={panelOpened}
                placement={
                    width! <= MOBILE_SCREEN_MAX_WIDTH
                        ? RightPanelPosition.BOTTOM
                        : RightPanelPosition.RIGHT
                }
                onClose={() => setPanelOpened(false)}
            >
                <Select
                    options={types}
                    label={formatMessage(messages.vehicleTypeParameter)}
                    onChange={(value) =>
                        onSelectChange(value, ParameterName.TYPE)
                    }
                    disabled={!vehicles.length}
                />
                <Select
                    options={brands}
                    label={formatMessage(messages.vehicleBrandParameter)}
                    onChange={(value) =>
                        onSelectChange(value, ParameterName.BRAND)
                    }
                    disabled={!vehicles.length}
                />
                <Select
                    options={colors}
                    label={formatMessage(messages.vehicleColorParameter)}
                    onChange={(value) =>
                        onSelectChange(value, ParameterName.COLOR)
                    }
                    disabled={!vehicles.length}
                />
            </RightPanel>
        );
    }, [
        brands,
        colors,
        formatMessage,
        onSelectChange,
        panelOpened,
        types,
        vehicles,
        width
    ]);

    const floatingButton = useMemo(() => {
        return (
            <FloatingButton
                tooltipText={formatMessage(messages.floatingButtonTooltip)}
                onClick={() => setPanelOpened(!panelOpened)}
                icon={<FilterOutlined />}
            />
        );
    }, [formatMessage, panelOpened]);

    return (
        <Container ref={ref}>
            {vehiclesList}
            {rightPanel}
            {floatingButton}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
`;

export default MainPage;
