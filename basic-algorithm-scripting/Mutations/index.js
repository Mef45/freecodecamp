function mutation(arr) {
    const word1 = arr[0].toLowerCase();
    const word2 = arr[1].toLowerCase();

    for (let i = 0; i < word2.length; i++) {
        if (word1.indexOf(word2.charAt(i)) == -1) return false;
    }

    return true;
}

module.exports = { mutation };
