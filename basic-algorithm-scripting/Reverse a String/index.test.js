const { expect } = require('chai');
const { reverseString } = require('./index');

describe('reverseString', function () {
    it('reverseString("hello") should return a string.', () => {
        expect(reverseString('hello')).to.be.a('string');
    });

    it('reverseString("hello") should become "olleh".', () => {
        expect(reverseString('hello')).equal('olleh');
    });

    it('reverseString("Howdy") should become "ydwoH".', () => {
        expect(reverseString('Howdy')).equal('ydwoH');
    });

    it('reverseString("Greetings from Earth") should return "htraE morf sgniteerG".', () => {
        expect(reverseString('Greetings from Earth')).equal(
            'htraE morf sgniteerG'
        );
    });
});
