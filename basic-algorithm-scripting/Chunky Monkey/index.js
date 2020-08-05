function chunkArrayInGroups(arr, size) {
    const numberOfChunks = Math.ceil(arr.length / size);

    return [...Array(numberOfChunks)].map((value, index) => {
        return arr.slice(index * size, (index + 1) * size);
    });
}

module.exports = { chunkArrayInGroups };
