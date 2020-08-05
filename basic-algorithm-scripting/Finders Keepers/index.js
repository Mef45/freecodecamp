function findElement(arr, func) {
    return arr.find((el) => func(el));
}

module.exports = { findElement };
