import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
    ContainerToogleStyles,
    ToogleFirstStarStyles,
    ToogleLabelStyles,
    ToogleMoonStyles,
    ToogleSecondStarStyles,
    ToogleStarStyles,
    ToogleStyles,
} from '../styles/Toggle.styles.jsx';

const Toogle = ({
    handleChange,
    id,
    value,
}) => {
    const [isChecked, setIsChecked] = useState(value);

    return (
        <ContainerToogleStyles>
            <ToogleStyles
                data-testid='fn-toogle-button'
                id={id}
                type="checkbox"
                isChecked={isChecked}
                onChange={() => {
                    handleChange(!isChecked);
                    setIsChecked(!isChecked);
                }}
            />
            <ToogleLabelStyles htmlFor={id} isChecked={isChecked}>
                <ToogleStarStyles isChecked={isChecked}>
                    <ToogleFirstStarStyles isChecked={isChecked}>★</ToogleFirstStarStyles>
                    <ToogleSecondStarStyles isChecked={isChecked}>★</ToogleSecondStarStyles>
                </ToogleStarStyles>
                <ToogleMoonStyles isChecked={isChecked}/>
            </ToogleLabelStyles>
        </ContainerToogleStyles>
    )
};

Toogle.propTypes = {
    handleChange: PropTypes.func,
    id: PropTypes.string,
    value: PropTypes.number,
};

export default Toogle;