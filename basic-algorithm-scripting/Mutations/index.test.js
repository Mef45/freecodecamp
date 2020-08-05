const { expect } = require('chai');
const { mutation } = require('./index');

describe('mutation', function () {
    it('mutation(["hello", "hey"]) should return false', () => {
        expect(mutation(['hello', 'hey'])).to.be.false;
    });

    it('mutation(["hello", "Hello"]) should return true', () => {
        expect(mutation(['hello', 'Hello'])).to.be.true;
    });

    it('mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true', () => {
        expect(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu'])).to.be.true;
    });

    it('mutation(["Mary", "Army"]) should return true', () => {
        expect(mutation(['Mary', 'Army'])).to.be.true;
    });

    it('mutation(["Mary", "Aarmy"]) should return true', () => {
        expect(mutation(['Mary', 'Aarmy'])).to.be.true;
    });

    it('mutation(["Alien", "line"]) should return true', () => {
        expect(mutation(['Alien', 'line'])).to.be.true;
    });

    it('mutation(["floor", "for"]) should return true', () => {
        expect(mutation(['floor', 'for'])).to.be.true;
    });

    it('mutation(["hello", "neo"]) should return false', () => {
        expect(mutation(['hello', 'neo'])).to.be.false;
    });

    it('mutation(["voodoo", "no"]) should return false', () => {
        expect(mutation(['voodoo', 'no'])).to.be.false;
    });

    it('mutation(["ate", "date"] should return false', () => {
        expect(mutation(['ate', 'date'])).to.be.false;
    });

    it('mutation(["Tiger", "Zebra"]) should return false', () => {
        expect(mutation(['Tiger', 'Zebra'])).to.be.false;
    });

    it('mutation(["Noel", "Ole"]) should return true', () => {
        expect(mutation(['Noel', 'Ole'])).to.be.true;
    });
});
