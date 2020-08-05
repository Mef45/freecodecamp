const { expect } = require('chai');
const { bouncer } = require('./index');

describe('bouncer', function () {
    it('bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].', () => {
        expect(bouncer([7, 'ate', '', false, 9])).to.deep.equal([7, 'ate', 9]);
    });

    it('bouncer(["a", "b", "c"]) should return ["a", "b", "c"].', () => {
        expect(bouncer(['a', 'b', 'c'])).to.deep.equal(['a', 'b', 'c']);
    });

    it('bouncer([false, null, 0, NaN, undefined, ""]) should return [].', () => {
        expect(bouncer([false, null, 0, NaN, undefined, ''])).to.deep.equal([]);
    });

    it('bouncer([null, NaN, 1, 2, undefined]) should return [1, 2].', () => {
        expect(bouncer([null, NaN, 1, 2, undefined])).to.deep.equal([1, 2]);
    });
});
