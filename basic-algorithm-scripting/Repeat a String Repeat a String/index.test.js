const { expect } = require('chai');
const { repeatStringNumTimes } = require('./index');

describe('repeatStringNumTimes', function () {
    it('repeatStringNumTimes("*", 3) should return "***".', () => {
        const str = repeatStringNumTimes('*', 3);

        expect(str).to.be.equal('***');
    });

    it('repeatStringNumTimes("abc", 3) should return "abcabcabc".', () => {
        const str = repeatStringNumTimes('abc', 3);

        expect(str).to.be.equal('abcabcabc');
    });

    it('repeatStringNumTimes("abc", 4) should return "abcabcabcabc".', () => {
        const str = repeatStringNumTimes('abc', 4);

        expect(str).to.be.equal('abcabcabcabc');
    });

    it('repeatStringNumTimes("abc", 1) should return "abc".', () => {
        const str = repeatStringNumTimes('abc', 1);

        expect(str).to.be.equal('abc');
    });

    it('repeatStringNumTimes("*", 8) should return "********".', () => {
        const str = repeatStringNumTimes('*', 8);

        expect(str).to.be.equal('********');
    });

    it('repeatStringNumTimes("abc", -2) should return "".', () => {
        const str = repeatStringNumTimes('abc', -2);

        expect(str).to.be.equal('');
    });

    it('repeatStringNumTimes("abc", 0) should return "".', () => {
        const str = repeatStringNumTimes('abc', 0);

        expect(str).to.be.equal('');
    });
});
