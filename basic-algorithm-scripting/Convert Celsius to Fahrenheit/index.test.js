const { expect } = require('chai');
const { convertToF } = require('./index');

describe('celsiusToFahrenheit', function() {
    it('convertToF(0) should return a number', () => {
        const fahrenheit = convertToF(0);

        expect(fahrenheit).to.be.a('number');
    });

    it('convertToF(-30) should return a value of -22', () => {
        const fahrenheit = convertToF(-30);

        expect(fahrenheit).equal(-22);
    });

    it('convertToF(-10) should return a value of 14', () => {
        const fahrenheit = convertToF(-10);

        expect(fahrenheit).equal(14);
    });

    it('convertToF(0) should return a value of 32', () => {
        const fahrenheit = convertToF(0);

        expect(fahrenheit).equal(32);
    });

    it('convertToF(20) should return a value of 68', () => {
        const fahrenheit = convertToF(20);

        expect(fahrenheit).equal(68);
    });

    it('convertToF(30) should return a value of 86', () => {
        const fahrenheit = convertToF(30);

        expect(fahrenheit).equal(86);
    });
});