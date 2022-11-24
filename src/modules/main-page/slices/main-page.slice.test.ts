import mainReducer, {
    dataLoaded,
    MainPageState,
    updateFilters
} from './main-page.slice';
import { Vehicle, VehicleFilter } from '../model';

const data: Vehicle[] = [
    {
        id: 1,
        type: 'car',
        brand: 'Bugatti Veyron',
        colors: ['red', 'black'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg/520px-Bugatti_Veyron_16.4_%E2%80%93_Frontansicht_%281%29%2C_5._April_2012%2C_D%C3%BCsseldorf.jpg'
    },
    {
        id: 2,
        type: 'airplane',
        brand: 'Boeing 787 Dreamliner',
        colors: ['red', 'white', 'black', 'green'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg/600px-All_Nippon_Airways_Boeing_787-8_Dreamliner_JA801A_OKJ_in_flight.jpg'
    },
    {
        id: 3,
        type: 'train',
        brand: 'USRA 0-6-6',
        colors: ['yellow', 'white', 'black'],
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/USRA_0-6-0.jpg/2880px-USRA_0-6-0.jpg'
    }
];

describe('Main page reducer', () => {
    it('should return the initial state', () => {
        const initialState: MainPageState = {
            data: []
        };

        expect(mainReducer(undefined, { type: undefined })).toEqual(
            initialState
        );
    });

    it('should save new data', () => {
        const previousState: MainPageState = {
            data: []
        };

        const expectedState = {
            data
        };

        expect(mainReducer(previousState, dataLoaded(data))).toEqual(
            expectedState
        );
    });

    it('should merge new filter with existing one', () => {
        const previousState: MainPageState = {
            data,
            filter: {
                type: 'car'
            }
        };

        const addedFilter: VehicleFilter = {
            brand: 'Bugatti Veyron'
        };

        expect(mainReducer(previousState, updateFilters(addedFilter))).toEqual({
            data,
            filter: { type: 'car', brand: 'Bugatti Veyron' }
        });
    });

    it('should remove filter while clearing filter value', () => {
        const previousState: MainPageState = {
            data,
            filter: {
                type: 'car',
                brand: 'Bugatti Veyron'
            }
        };

        const newFilter: VehicleFilter = {
            type: undefined
        };

        expect(mainReducer(previousState, updateFilters(newFilter))).toEqual({
            data,
            filter: { brand: 'Bugatti Veyron' }
        });
    });
});
