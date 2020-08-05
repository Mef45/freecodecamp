const { expect } = require('chai');
const { titleCase } = require('./index');

describe('titleCase', function () {
    it('titleCase("I\'m a little tea pot") should return a string.', () => {
        expect(titleCase("I'm a little tea pot")).to.be.a('string');
    });

    it('titleCase("I\'m a little tea pot") should return I\'m A Little Tea Pot.', () => {
        expect(titleCase("I'm a little tea pot")).to.be.equal(
            "I'm A Little Tea Pot"
        );
    });

    it('titleCase("sHoRt AnD sToUt") should return Short And Stout.', () => {
        expect(titleCase('sHoRt AnD sToUt')).to.be.equal('Short And Stout');
    });

    it('titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout.', () => {
        expect(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')).to.be.equal(
            'Here Is My Handle Here Is My Spout'
        );
    });
});
