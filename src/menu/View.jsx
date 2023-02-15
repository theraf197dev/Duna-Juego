import React, { useState } from 'react';
import Game from '../game/Model';
import { Toogle, Button } from '../styled-components';
import {
    ContainerStyles,
    ImageStyles,
    GameStyles,
    SpanStyles,
    ToggleStyles,
} from './View.styles.jsx';

const MenuView = ({
    initGame,
    games,
    selected,
    setSelected,
    setDifficultyLvl,
    difficultyLvl,
}) => {
    return (
        <form onSubmit={() => initGame()}>
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
    initGame,
    games,
    isGameAlive,
    mode,
    setGame,
    size,
}) => {
    const [selected, setSelected] = useState(mode);
    const [difficultyLvl, setDifficultyLvl] = useState(difficulty);

    return (
        <>
            {isGameAlive ?
                <Game
                    size={size}
                    controls={controls}
                    mode={selected}
                    setGame={setGame}
                    board={board}
                    difficulty={difficultyLvl}
                />
                :
                <MenuView
                    games={games}
                    selected={selected}
                    setSelected={setSelected}
                    initGame={initGame}
                    difficultyLvl={difficultyLvl}
                    setDifficultyLvl={setDifficultyLvl}
                />
            }
        </>
    );
}

export default Menu;