import { Option, Vehicle, VehicleFilter } from '../model';
import _ from 'lodash';

export const filterData = (
    data: Vehicle[],
    filter?: VehicleFilter
): Vehicle[] => {
    if (filter) {
        const { type, brand, color } = filter;
        let filteredData: Vehicle[] = _.cloneDeep(data);

        if (!_.isEmpty(type)) {
            filteredData = filteredData.filter(
                (item: Vehicle) => item.type === type
            );
        }

        if (!_.isEmpty(brand)) {
            filteredData = filteredData.filter(
                (item: Vehicle) => item.brand === brand
            );
        }

        if (!_.isEmpty(color)) {
            filteredData = filteredData.filter((item: Vehicle) =>
                item.colors.includes(color as string)
            );
        }

        return filteredData;
    }

    return data;
};

export const getUniquePropertyValuesByFilter = (
    data: Vehicle[],
    propertyName: 'type' | 'brand',
    filter?: VehicleFilter
): Option[] => {
    return _.uniqBy(filterData(data, filter), propertyName).map(
        (vehicle: Vehicle) => {
            const value = vehicle[propertyName];

            return {
                label: value,
                value
            };
        }
    );
};

export const getUniqueItemsForArrays = (
    data: Vehicle[],
    propertyName: 'colors'
) => {
    return _.union(...data.map((item) => item[propertyName]));
};
