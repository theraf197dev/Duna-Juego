import trialImage from './media/trial_mode.jpg';
import seekerImage from './media/seeker_mode.jpg';
import { CellType, GameMode } from './utils';
import { texts } from './textFixtures';

const controls = [
    {
        id: 1,
        name: 'up',
        vector: 'x',
        incr: -1,
    },
    {
        id: 2,
        name: 'down',
        vector: 'x',
        incr: 1,
    },
    {
        id: 3,
        name: 'left',
        vector: 'y',
        incr: -1,
    },
    {
        id: 4,
        name: 'right',
        vector: 'y',
        incr: 1,
    },
];

const games = [
    {
        name: GameMode.trial,
        url: trialImage,
    },
    {
        name: GameMode.seeker,
        url: seekerImage,
    },
];

const matrix = [
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.player, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
];

const difficulty = 1;
const mode = GameMode.trial;
const size = 9;
const time = 25;
const seekerSpeed = 300; //Every x miliseconds seeker will move

const fixtures =  {
    controls,
    difficulty,
    games,
    matrix,
    mode,
    seekerSpeed,
    size,
    texts,
    time,
};

export default fixtures;
