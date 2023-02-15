import React, {useState} from 'react';
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
}) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <ContainerToogleStyles>
            <ToogleStyles
                id={id}
                type="checkbox"
                isChecked={isChecked}
                onChange={() => {
                    setIsChecked(!isChecked);
                    handleChange();
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

Toogle.defaultProps = {
    handleChange: () => console.log('toggle change'),
}

export default Toogle;