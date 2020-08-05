const { expect } = require('chai');
const { chunkArrayInGroups } = require('./index');

describe('chunkArrayInGroups', function () {
    it('chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]]', () => {
        expect(chunkArrayInGroups(['a', 'b', 'c', 'd'], 2)).to.deep.equal([
            ['a', 'b'],
            ['c', 'd'],
        ]);
    });

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]]', () => {
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)).to.deep.equal([
            [0, 1, 2],
            [3, 4, 5],
        ]);
    });

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]]', () => {
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2)).to.deep.equal([
            [0, 1],
            [2, 3],
            [4, 5],
        ]);
    });

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]', () => {
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4)).to.deep.equal([
            [0, 1, 2, 3],
            [4, 5],
        ]);
    });

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]]', () => {
        expect(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)).to.deep.equal([
            [0, 1, 2],
            [3, 4, 5],
            [6],
        ]);
    });

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]]', () => {
        expect(
            chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4)
        ).to.deep.equal([[0, 1, 2, 3], [4, 5, 6, 7], [8]]);
    });

    it('chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]]', () => {
        expect(
            chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
        ).to.deep.equal([[0, 1], [2, 3], [4, 5], [6, 7], [8]]);
    });
});
