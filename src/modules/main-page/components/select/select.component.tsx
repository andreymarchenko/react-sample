import { SelectProps } from '../../model';
import { Select as AntSelect } from 'antd';

const Select = ({ label, options, onChange, disabled }: SelectProps) => {
    return (
        <>
            <label data-testid="test-select-label">{label}</label>
            <AntSelect
                data-testid="test-select"
                allowClear
                disabled={disabled}
                onChange={onChange}
                options={options}
                style={{
                    textTransform: 'capitalize'
                }}
                dropdownStyle={{
                    textTransform: 'capitalize'
                }}
            ></AntSelect>
        </>
    );
};

export default Select;
