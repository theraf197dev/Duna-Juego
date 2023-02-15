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

export default Toogle;