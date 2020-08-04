const { expect } = require('chai');
const { findElement } = require('./index');

describe('findElement', function() {
    it('findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }) should return 8.', () => {
        expect(findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }))
            .to.be.equal(8);
    });

    it('findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }) should return undefined.', () => {
        expect(findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; }))
            .to.be.undefined;
    });
});