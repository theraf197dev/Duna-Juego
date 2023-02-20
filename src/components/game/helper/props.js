import winImage from '../../../common/media/win.jpg';
import loseImage from '../../../common/media/lose.jpg';
import { GameStatus } from '../../../common/utils';

const chooseImage = (gameStatus) => {
    return gameStatus === GameStatus.victory ? winImage : loseImage;
};

export {
    chooseImage,
};