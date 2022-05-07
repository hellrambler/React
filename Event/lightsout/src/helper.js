
const randomSwitch = () => {
    const num = Math.random();
    return num > 0.9;
}

const randomDim = (dim) => {
    const num = Math.floor(dim * Math.random());
    return num;
}

export { randomSwitch, randomDim };