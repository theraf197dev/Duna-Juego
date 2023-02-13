import dunaImage from '../media/duna.jpg';
import pizzaImage from '../media/pizza.png';
import blankImage from '../media/blank.png';
import obstacleImage from '../media/obstacle.jpg';

const CellType = {
    blank: 'blank',
    duna: 'duna',
    pizza: 'pizza',
    obstacle: 'obstacle',
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
        default:
            image = blankImage;
    }
    return image;
};

export {
    CellType,
    ImageCarousel,
};
