function sumAll(arr) {
    let sum = 0;
    arr = arr.sort((a, b) => a - b);

    for (let i = arr[0]; i <= arr[1]; i++) {
        sum += i;
    }

    return sum;
}

module.exports = { sumAll };
