import trialImage from './media/trial_mode.jpg';
import seekerImage from './media/seeker_mode.jpg';
import { CellType, GameMode } from './utils';

const controls = [
    {
        id: 1,
        name: 'Up',
        vector: 'x',
        incr: -1,
    },
    {
        id: 2,
        name: 'Down',
        vector: 'x',
        incr: 1,
    },
    {
        id: 3,
        name: 'Left',
        vector: 'y',
        incr: -1,
    },
    {
        id: 4,
        name: 'Right',
        vector: 'y',
        incr: 1,
    },
];

const games = {
    items: [
        {
            name: GameMode.trial,
            url: trialImage,
        },
        {
            name: GameMode.seeker,
            url: seekerImage,
        },
    ],
};

const matrix = [
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.duna, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
    [CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank, CellType.blank],
];

const difficulty = 1;
const mode = GameMode.trial;
const size = 9;
const time = 30;

const fixtures =  {
    controls,
    difficulty,
    games,
    matrix,
    mode,
    size,
    time,
};

export default fixtures;
