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

const difficulty = 1;
const mode = 'trial';
const size = 11;

export {
    controls,
    size,
    difficulty,
    mode,
};
