function findLongestWordLength(str) {
    const arr = str.split(' ');
    const maxLength = arr.reduce((prev, curr) => {
        return prev > curr.length ? prev : curr.length;
    }, 0);

    return maxLength;
}

module.exports = {findLongestWordLength};