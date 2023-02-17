import React, { useEffect, useState } from 'react';
import Game from '../game/Model';
import { Toogle, Button } from '../styled-components';
import {
    ContainerStyles,
    GameStyles,
    ImageStyles,
    SpanStyles,
    ToggleStyles,
} from './View.styles.jsx';

const MenuView = ({
    games,
    setGame,
    selected,
    setDifficultyLvl,
    setSelected,
}) => {
    return (
        <form onSubmit={() => setGame(true)}>
            <ContainerStyles>
                {games.items.map(({name, url}) =>
                    <div key={name}>
                        <h2>{name}</h2>
                        <GameStyles>
                            <ImageStyles src={url} onClick={() => setSelected(name)} />
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
                    handleChange={(isChecked) => setDifficultyLvl(isChecked + 1)}
                    id='difficulty'
                />
            </ToggleStyles>
            <Button buttonText='Play' />
        </form>
    );
};

const Menu = ({
    board,
    controls,
    difficulty,
    games,
    mode,
    size,
}) => {
    const [selected, setSelected] = useState(mode);
    const [difficultyLvl, setDifficultyLvl] = useState(difficulty);
    const [isGameAlive, setGame] = useState(false);

    return (
        <>
            {isGameAlive ?
                <Game
                    board={board}
                    controls={controls}
                    difficulty={difficultyLvl}
                    mode={selected}
                    restartGame={() => setGame(false)}
                    size={size}
                />
                :
                <MenuView
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