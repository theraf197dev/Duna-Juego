import React, { useState } from 'react';
import Game from '../game/Model';
import { Toogle, Button } from '../styled-components';
import {
    ContainerStyles,
    ImageStyles,
    GameStyles,
    SpanStyles,
} from './View.styles.jsx';

const MenuView = ({
    initGame,
    games,
    selected,
    setSelected,
}) => {
    return (
        <form onSubmit={() => initGame()}>
            <ContainerStyles>
                {games.items.map(({name, url}) =>
                    <div key={name} onClick={() => setSelected(name)}>
                        <h2>{name}</h2>
                        <GameStyles>
                            <ImageStyles src={url} />
                            <SpanStyles id={1} selected={selected} name={name} />
                            <SpanStyles id={2} selected={selected} name={name} />
                            <SpanStyles id={3} selected={selected} name={name} />
                            <SpanStyles id={4} selected={selected} name={name} />
                        </GameStyles>
                        <Toogle id={name} />
                    </div>
                )}
            </ContainerStyles>
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
    return (
        <>
            {isGameAlive ?
                <Game
                    size={size}
                    controls={controls}
                    mode={selected}
                    setGame={setGame}
                    board={board}
                    difficulty={difficulty}
                />
                :
                <MenuView
                    games={games}
                    selected={selected}
                    setSelected={setSelected}
                    initGame={initGame}
                />
            }
        </>
    );
}

export default Menu;