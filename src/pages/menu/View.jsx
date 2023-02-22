import React, { useState } from 'react';
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
    games,
    setGame,
    selected,
    setDifficultyLvl,
    setSelected,
}) => {
    return (
        <>
            <ContainerStyles>
                {games.items.map(({name, url}) =>
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
                <label>Difficulty</label>
                <Toogle
                    value={difficultyLvl - 1}
                    handleChange={(isChecked) => setDifficultyLvl(isChecked + 1)}
                    id='difficulty'
                />
            </ToggleStyles>
            <Button buttonText='PLAY' handleClick={() => setGame(true)} />
        </>
    );
};

const Menu = ({
    controls,
    difficulty,
    games,
    mode,
    size,
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
                    size={size}
                    time={time}
                />
                :
                <MenuView
                    difficultyLvl={difficultyLvl}
                    games={games}
                    selected={selected}
                    setDifficultyLvl={setDifficultyLvl}
                    setGame={setGame}
                    setSelected={setSelected}
                />
            }
        </>
    );
}

export default Menu;