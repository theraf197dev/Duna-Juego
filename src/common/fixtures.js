import trialImage from './media/trial_mode.jpg';
import seekerImage from './media/seeker_mode.jpg';

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
            name: 'TRIAL',
            url: trialImage,
        },
        {
            name: 'SEEKER',
            url: seekerImage,
        },
    ],
};

const difficulty = 1;
const mode = 'TRIAL';
const size = 9;

export {
    controls,
    difficulty,
    games,
    mode,
    size,
};
