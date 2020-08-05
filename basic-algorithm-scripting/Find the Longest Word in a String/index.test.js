const { expect } = require('chai');
const { findLongestWordLength } = require('./index');

describe('findLongestWordLength', function () {
    it('findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.', () => {
        expect(
            findLongestWordLength(
                'The quick brown fox jumped over the lazy dog'
            )
        ).to.be.a('number');
    });

    it('findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.', () => {
        expect(
            findLongestWordLength(
                'The quick brown fox jumped over the lazy dog'
            )
        ).equal(6);
    });

    it('findLongestWordLength("May the force be with you") should return 5.', () => {
        expect(findLongestWordLength('May the force be with you')).equal(5);
    });

    it('findLongestWordLength("Google do a barrel roll") should return 6.', () => {
        expect(findLongestWordLength('Google do a barrel roll')).equal(6);
    });

    it('findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.', () => {
        expect(
            findLongestWordLength(
                'What is the average airspeed velocity of an unladen swallow'
            )
        ).equal(8);
    });

    it('findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.', () => {
        expect(
            findLongestWordLength(
                'What if we try a super-long word such as otorhinolaryngology'
            )
        ).equal(19);
    });
});
