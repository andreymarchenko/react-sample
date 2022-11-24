import { render, screen } from '@testing-library/react';
import { Vehicle } from '../../model';
import { getUniquePropertyValuesByFilter } from '../../utils';
import Select from './select.component';

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

describe('Select', () => {
    it('should display label', () => {
        const options = getUniquePropertyValuesByFilter(data, 'type');
        const expectedLabel = 'test';

        render(
            <Select
                options={options}
                label={expectedLabel}
                onChange={jest.fn()}
            />
        );

        const selectLabel = screen.getByTestId('test-select-label');

        expect(selectLabel.textContent).toEqual(expectedLabel);
    });
});
