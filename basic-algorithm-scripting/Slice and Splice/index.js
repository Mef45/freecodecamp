function frankenSplice(arr1, arr2, n) {
    const arr3 = [...arr2]
    arr3.splice(n, 0, ...arr1);
    return arr3;
}

module.exports = {frankenSplice};
