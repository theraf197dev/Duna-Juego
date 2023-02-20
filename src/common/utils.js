import dunaImage from './media/duna.jpg';
import pizzaImage from './media/pizza.png';
import blankImage from './media/blank.png';
import obstacleImage from './media/obstacle.jpg';
import seekerImage from './media/seeker.jpg';

const CellType = {
    blank: 'blank',
    duna: 'duna',
    pizza: 'pizza',
    obstacle: 'obstacle',
    seeker: 'seeker',
};

const GameStates = {
    defeat: 'defeat',
    playing: 'playing',
    victory: 'victory',
};

const ImageCarousel = (name) => {
    let image;
    switch (name) {
        case 'duna':
            image = dunaImage;
            break;
        case 'pizza':
            image = pizzaImage;
            break;
        case 'blank':
            image = blankImage;
            break;
        case 'obstacle':
            image = obstacleImage;
            break;
        case 'seeker':
            image = seekerImage;
            break;
        default:
            image = blankImage;
    }
    return image;
};

const canMove = (matrix, currentPos, vector, incr, size) => {
    return !isOutOfBounds(currentPos, vector, incr, size) && !isObstacle(matrix, currentPos, vector, incr, size);
};

const isObstacle = (matrix, currentPos, vector, incr) => {
    const nextPos = {
        ...currentPos,
        [vector]: currentPos[vector] + incr,
    };
    return matrix[nextPos.x][nextPos.y] === CellType.obstacle;
};

const isOutOfBounds = (currentPos, vector, incr, size) => {
    return (currentPos[vector] + incr) < 0 || (currentPos[vector] + incr) >= size;
};

export {
    canMove,
    CellType,
    GameStates,
    ImageCarousel,
};
