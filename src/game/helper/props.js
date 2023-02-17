import winImage from '../../media/win.jpg';
import loseImage from '../../media/lose.jpg';

const chooseImage = (gameStatus) => {
    return gameStatus === 'victory' ? winImage : loseImage;
};

export {
    chooseImage,
};