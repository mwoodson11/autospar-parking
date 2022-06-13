import React from 'react';
import { Group, SelectInputClass, SelectInputLabelClass } from './selectInput.styles';

const SelectInput = ({label, children, ...otherProps}) => {
    return (
        <Group>
            { label ? 
                <SelectInputLabelClass
                    shrink={otherProps.value.length}
                >
                    {label}
                </SelectInputLabelClass>
                : null
            }
            <SelectInputClass {...otherProps}>
                {children}
            </SelectInputClass>
        </Group>
    );
};

export default SelectInput;