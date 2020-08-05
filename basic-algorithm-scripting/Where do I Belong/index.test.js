const { expect } = require('chai');
const { getIndexToIns } = require('./index');

describe('getIndexToIns', function () {
    it('getIndexToIns([], 1) should return a number.', () => {
        expect(getIndexToIns([], 1)).to.be.a('number');
    });

    it('getIndexToIns([], 1) should return 0.', () => {
        expect(getIndexToIns([], 1)).to.be.equal(0);
    });

    it('getIndexToIns([2, 5, 10], 15) should return a number.', () => {
        expect(getIndexToIns([2, 5, 10], 15)).to.be.a('number');
    });

    it('getIndexToIns([2, 5, 10], 15) should return 3.', () => {
        expect(getIndexToIns([2, 5, 10], 15)).to.be.equal(3);
    });

    it('getIndexToIns([2, 20, 10], 19) should return a number.', () => {
        expect(getIndexToIns([2, 20, 10], 19)).to.be.a('number');
    });

    it('getIndexToIns([2, 20, 10], 19) should return 2.', () => {
        expect(getIndexToIns([2, 20, 10], 19)).to.be.equal(2);
    });

    it('getIndexToIns([5, 3, 20, 3], 5) should return a number.', () => {
        expect(getIndexToIns([5, 3, 20, 3], 5)).to.be.a('number');
    });

    it('getIndexToIns([5, 3, 20, 3], 5) should return 2.', () => {
        expect(getIndexToIns([5, 3, 20, 3], 5)).to.be.equal(2);
    });

    it('getIndexToIns([3, 10, 5], 3) should return a number.', () => {
        expect(getIndexToIns([3, 10, 5], 3)).to.be.a('number');
    });

    it('getIndexToIns([3, 10, 5], 3) should return 0.', () => {
        expect(getIndexToIns([3, 10, 5], 3)).to.be.equal(0);
    });

    it('getIndexToIns([40, 60], 50) should return a number.', () => {
        expect(getIndexToIns([40, 60], 50)).to.be.a('number');
    });

    it('getIndexToIns([40, 60], 50) should return 1.', () => {
        expect(getIndexToIns([40, 60], 50)).to.be.equal(1);
    });

    it('getIndexToIns([10, 20, 30, 40, 50], 30) should return a number.', () => {
        expect(getIndexToIns([10, 20, 30, 40, 50], 30)).to.be.a('number');
    });

    it('getIndexToIns([10, 20, 30, 40, 50], 30) should return 2.', () => {
        expect(getIndexToIns([10, 20, 30, 40, 50], 30)).to.be.equal(2);
    });

    it('getIndexToIns([10, 20, 30, 40, 50], 35) should return a number.', () => {
        expect(getIndexToIns([10, 20, 30, 40, 50], 35)).to.be.a('number');
    });

    it('getIndexToIns([10, 20, 30, 40, 50], 35) should return 3.', () => {
        expect(getIndexToIns([10, 20, 30, 40, 50], 35)).to.be.equal(3);
    });
});
