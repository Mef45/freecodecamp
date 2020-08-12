const { expect } = require('chai');
const { diffArray } = require('./index');

describe('diffArray', function () {
    it('diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) should return an array', () => {
        const result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
        expect(result).to.be.a('array');
    });

    it('["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["pink wool"]', () => {
        const result = diffArray(
            ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
            ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
        );
        expect(result).to.include.members(["pink wool"]);
    });

    it('["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with one item', () => {
        const result = diffArray(
            ['diorite', 'andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
            ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
        );
        expect(result).to.have.lengthOf(1);
    });

    it('["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return ["diorite", "pink wool"]', () => {
        const result = diffArray(
            ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
            ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
        );
        expect(result).to.include.members(["diorite", "pink wool"]);
    });

    it('["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] should return an array with two items', () => {
        const result = diffArray(
            ['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'],
            ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']
        );
        expect(result).to.have.lengthOf(2);
    });

    it('["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] should return []', () => {
        const result = diffArray(
            ['andesite', 'grass', 'dirt', 'dead shrub'],
            ['andesite', 'grass', 'dirt', 'dead shrub']
        );
        expect(result).to.deep.equal([]);
    });

    it('[1, 2, 3, 5], [1, 2, 3, 4, 5] should return [4]', () => {
        const result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
        expect(result).to.include.members([4]);
    });

    it('[1, 2, 3, 5], [1, 2, 3, 4, 5] should return an array with one item', () => {
        const result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
        expect(result).to.have.lengthOf(1);
    });

    it('[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return ["piglet", 4]', () => {
        const result = diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]);
        expect(result).to.include.members(["piglet", 4]);
    });

    it('[1, "calf", 3, "piglet"], [1, "calf", 3, 4] should return an array with two items', () => {
        const result = diffArray([1, 'calf', 3, 'piglet'], [1, 'calf', 3, 4]);
        expect(result).to.have.lengthOf(2);
    });

    it('[], ["snuffleupagus", "cookie monster", "elmo"] should return ["snuffleupagus", "cookie monster", "elmo"]', () => {
        const result = diffArray(
            [],
            ['snuffleupagus', 'cookie monster', 'elmo']
        );
        expect(result).to.include.members(["snuffleupagus", "cookie monster", "elmo"]);
    });
});
