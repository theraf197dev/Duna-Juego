import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Game from '../../components/game/Model';
import { Toogle, Button } from '../../components/styled-components';
import {
    ContainerStyles,
    GameStyles,
    ImageStyles,
    SpanStyles,
    ToggleStyles,
} from './View.styles.jsx';

const MenuView = ({
    difficultyLvl,
    difficultyText,
    games,
    playButtonText,
    selected,
    setDifficultyLvl,
    setGame,
    setSelected,
}) => {
    return (
        <>
            <ContainerStyles>
                {games.map(({name, url}) =>
                    <div key={name} data-testid='fn-game-item'>
                        <h2>{name}</h2>
                        <GameStyles data-testid='fn-game-item-image'>
                            <ImageStyles
                                onClick={() => setSelected(name)}
                                src={url}
                            />
                            <SpanStyles id={1} selected={selected} name={name} />
                            <SpanStyles id={2} selected={selected} name={name} />
                            <SpanStyles id={3} selected={selected} name={name} />
                            <SpanStyles id={4} selected={selected} name={name} />
                        </GameStyles>
                    </div>
                )}
            </ContainerStyles>
            <ToggleStyles>
                <label>{difficultyText}</label>
                <Toogle
                    value={difficultyLvl - 1}
                    handleChange={(isChecked) => setDifficultyLvl(isChecked + 1)}
                    id='difficulty'
                />
            </ToggleStyles>
            <Button buttonText={playButtonText} handleClick={() => setGame(true)} />
        </>
    );
};

const Menu = ({
    controls,
    difficulty,
    games,
    mode,
    seekerSpeed,
    size,
    texts,
    time,
}) => {
    const [selected, setSelected] = useState(mode);
    const [difficultyLvl, setDifficultyLvl] = useState(difficulty);
    const [isGameAlive, setGame] = useState(false);

    return (
        <>
            {isGameAlive ?
                <Game
                    controls={controls}
                    difficulty={difficultyLvl}
                    mode={selected}
                    restartGame={() => setGame(false)}
                    seekerSpeed={seekerSpeed}
                    size={size}
                    texts={texts}
                    time={time}
                />
                :
                <MenuView
                    difficultyLvl={difficultyLvl}
                    difficultyText={texts.difficultyText}
                    games={games}
                    playButtonText={texts.playButtonText}
                    selected={selected}
                    setDifficultyLvl={setDifficultyLvl}
                    setGame={setGame}
                    setSelected={setSelected}
                />
            }
        </>
    );
}

Menu.propTypes = {
    controls: PropTypes.array,
    difficulty: PropTypes.number,
    games: PropTypes.array,
    mode: PropTypes.string,
    seekerSpeed: PropTypes.number,
    size: PropTypes.number,
    time: PropTypes.number,
};

export default Menu;
