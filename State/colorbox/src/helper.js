function choice(arr) {
    let rndIdx = Math.floor(Math.random() * arr.length);
    return arr[rndIdx];
}

export { choice };