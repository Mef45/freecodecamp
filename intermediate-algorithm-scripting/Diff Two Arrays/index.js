function diffArray(a, b) {
    var res = [];

    findDiff(a, b, res);
    findDiff(b, a, res);

    return res;
}

function findDiff(a, b, acc) {
    var i = 0;
    var L = a.length;

    while (i < L) {
        var ii = a[i++];
        var bi = b.indexOf(ii);
        if (bi != -1) a.slice(bi, 1);
        else if (ii) acc.push(ii);
    }
}

module.exports = { diffArray };
