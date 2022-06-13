import React from 'react';

import { 
    FormInputClass, 
    Group,
    FormInputLabelClass 
} from './formInput.styles.jsx';

const FormInput = ({handleChange, label, color, user, disabled, ...otherProps}) => {
    return (
        <Group>
            <FormInputClass disabled={disabled} user={user} color={color} onChange={handleChange} {...otherProps} />
            {
                label ? (
                <FormInputLabelClass
                color={color}
                user={user}
                shrink={otherProps.value.length}
                >
                    {label}
                </FormInputLabelClass>
                ) : null
            }
        </Group>
    )
}

export default FormInput;