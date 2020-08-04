function largestOfFour(arr) {
    const largest = [];

    for (const a of arr) {
        largest.push(Math.max(...a));
    }

    return largest;
}

module.exports = {largestOfFour};