import winImage from '../../media/win.jpg';
import loseImage from '../../media/lose.jpg';
import { GameStates } from '../../common/utils';

const chooseImage = (gameStatus) => {
    return gameStatus === GameStates.victory ? winImage : loseImage;
};

export {
    chooseImage,
};