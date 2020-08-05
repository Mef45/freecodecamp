const { expect } = require('chai');
const { confirmEnding } = require('./index');

describe('confirmEnding', function () {
    it('confirmEnding("Bastian", "n") should return true.', () => {
        const result = confirmEnding('Bastian', 'n');
        expect(result).to.be.true;
    });

    it('confirmEnding("Congratulation", "on") should return true.', () => {
        const result = confirmEnding('Congratulation', 'on');
        expect(result).to.be.true;
    });

    it('confirmEnding("Connor", "n") should return false.', () => {
        const result = confirmEnding('Connor', 'n');
        expect(result).to.be.false;
    });

    it('confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") should return false.', () => {
        const result = confirmEnding(
            'Walking on water and developing software from a specification are easy if both are frozen',
            'specification'
        );
        expect(result).to.be.false;
    });

    it('confirmEnding("He has to give me a new name", "name") should return true.', () => {
        const result = confirmEnding('He has to give me a new name', 'name');
        expect(result).to.be.true;
    });

    it('confirmEnding("Open sesame", "same") should return true.', () => {
        const result = confirmEnding('Open sesame', 'same');
        expect(result).to.be.true;
    });

    it('confirmEnding("Open sesame", "pen") should return false.', () => {
        const result = confirmEnding('Open sesame', 'pen');
        expect(result).to.be.false;
    });

    it('confirmEnding("Open sesame", "game") should return false.', () => {
        const result = confirmEnding('Open sesame', 'game');
        expect(result).to.be.false;
    });

    it('confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") should return false.', () => {
        const result = confirmEnding(
            'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
            'mountain'
        );
        expect(result).to.be.false;
    });

    it('confirmEnding("Abstraction", "action") should return true.', () => {
        const result = confirmEnding('Abstraction', 'action');
        expect(result).to.be.true;
    });
});
