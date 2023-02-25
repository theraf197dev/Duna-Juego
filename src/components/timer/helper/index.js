const getTimeFormated = (time) => {
    const minutes = ('00' + Math.floor(time / 60)).match(/\d{2}$/);
    const seconds = ('00' + Math.floor(time % 60)).match(/\d{2}$/);

    return `${minutes}:${seconds}`;
};

export {
    getTimeFormated,
};
