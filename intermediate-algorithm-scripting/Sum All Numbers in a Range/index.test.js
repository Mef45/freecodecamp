const { expect } = require('chai');
const { sumAll } = require('./index');

describe('sumAll', function () {
    it('sumAll([1, 4]) should return a number', () => {
        const result = sumAll([1, 4]);
        expect(result).to.be.a('number');
    });

    it('sumAll([1, 4]) should return 10', () => {
        const result = sumAll([1, 4]);
        expect(result).equal(10);
    });

    it('sumAll([4, 1]) should return 10', () => {
        const result = sumAll([4, 1]);
        expect(result).equal(10);
    });

    it('sumAll([5, 10]) should return 45', () => {
        const result = sumAll([5, 10]);
        expect(result).equal(45);
    });

    it('sumAll([10, 5]) should return 45', () => {
        const result = sumAll([10, 5]);
        expect(result).equal(45);
    });
});
