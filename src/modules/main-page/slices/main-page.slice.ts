import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import { Option, Vehicle, VehicleFilter } from '../model';
import {
    filterData,
    getUniqueItemsForArrays,
    getUniquePropertyValuesByFilter
} from '../utils';

export interface MainPageState {
    data: Vehicle[];
    filter?: VehicleFilter;
}

const initialState: MainPageState = {
    data: []
};

export const mainPageSlice = createSlice({
    name: 'main-page',
    initialState,
    reducers: {
        dataLoaded: (state, action) => {
            state.data = action.payload;
        },
        updateFilters: (state, action) => {
            state.filter = {
                ...state.filter,
                ...action.payload
            };
        }
    }
});

export const selectVehicles = (state: RootState): Vehicle[] => {
    const { data, filter } = state.mainPage;
    return filterData(data, filter);
};

export const selectVehicleTypes = (state: RootState): Option[] => {
    const { data, filter } = state.mainPage;
    return getUniquePropertyValuesByFilter(data, 'type', filter);
};

export const selectVehicleBrands = (state: RootState): Option[] => {
    const { data, filter } = state.mainPage;
    return getUniquePropertyValuesByFilter(data, 'brand', filter);
};

export const selectVehicleColors = (state: RootState): Option[] => {
    const { data, filter } = state.mainPage;
    const filteredData: Vehicle[] = filterData(data, filter);

    return getUniqueItemsForArrays(filteredData, 'colors').map((color) => {
        return {
            label: color,
            value: color
        };
    });
};

export const { updateFilters, dataLoaded } = mainPageSlice.actions;

export default mainPageSlice.reducer;
