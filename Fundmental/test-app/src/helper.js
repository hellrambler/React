const choice = (foodList) => {
    const randomIdx = Math.floor(foodList.length * Math.random());
    const food = foodList[randomIdx];
    return food; 
}

const remove = (foodList, food) => {
    let idx;
    for (let i = 0; i <= foodList.length; i++) {
        if (foodList[i] === food) {
            idx = i;
            break;
        }
    }
    foodList.splice(idx, 1);
    return foodList.length;
}

export {choice, remove};