const { expect } = require('chai');
const { factorialize } = require('./index');

describe('factorializeNumber', function() {
    it('factorialize(5) should return a number.', () => {
        const factorial = factorialize(5);

        expect(factorial).to.be.a('number');
    });

    it('factorialize(5) should return 120.', () => {
        const factorial = factorialize(5);

        expect(factorial).equal(120);
    });

    it('factorialize(10) should return 3628800.', () => {
        const factorial = factorialize(10);

        expect(factorial).equal(3628800);
    });

    it('factorialize(20) should return 2432902008176640000.', () => {
        const factorial = factorialize(20);

        expect(factorial).equal(2432902008176640000);
    });

    it('factorialize(0) should return 1.', () => {
        const factorial = factorialize(0);

        expect(factorial).equal(1);
    });
});