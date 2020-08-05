const { expect } = require('chai');
const { truncateString } = require('./index');

describe('truncateString', function () {
    it('truncateString("A-tisket a-tasket A green and yellow basket", 8) should return "A-tisket...".', () => {
        expect(
            truncateString('A-tisket a-tasket A green and yellow basket', 8)
        ).to.be.equal('A-tisket...');
    });

    it('truncateString("Peter Piper picked a peck of pickled peppers", 11) should return "Peter Piper...".', () => {
        expect(
            truncateString('Peter Piper picked a peck of pickled peppers', 11)
        ).to.be.equal('Peter Piper...');
    });

    it('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length) should return "A-tisket a-tasket A green and yellow basket".', () => {
        expect(
            truncateString(
                'A-tisket a-tasket A green and yellow basket',
                'A-tisket a-tasket A green and yellow basket'.length
            )
        ).to.be.equal('A-tisket a-tasket A green and yellow basket');
    });

    it('truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2) should return "A-tisket a-tasket A green and yellow basket".', () => {
        expect(
            truncateString(
                'A-tisket a-tasket A green and yellow basket',
                'A-tisket a-tasket A green and yellow basket'.length + 2
            )
        ).to.be.equal('A-tisket a-tasket A green and yellow basket');
    });

    it('truncateString("A-", 1) should return "A...".', () => {
        expect(truncateString('A-', 1)).to.be.equal('A...');
    });

    it('truncateString("Absolutely Longer", 2) should return "Ab...".".', () => {
        expect(truncateString('Absolutely Longer', 2)).to.be.equal('Ab...');
    });
});
