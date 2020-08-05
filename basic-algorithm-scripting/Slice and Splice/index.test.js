const { expect } = require('chai');
const { frankenSplice } = require('./index');

describe('frankenSplice', function () {
    it('frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].', () => {
        expect(frankenSplice([1, 2, 3], [4, 5], 1)).to.deep.equal([
            4,
            1,
            2,
            3,
            5,
        ]);
    });

    it('frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].', () => {
        expect(frankenSplice([1, 2], ['a', 'b'], 1)).to.deep.equal([
            'a',
            1,
            2,
            'b',
        ]);
    });

    it('frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].', () => {
        expect(
            frankenSplice(
                ['claw', 'tentacle'],
                ['head', 'shoulders', 'knees', 'toes'],
                2
            )
        ).to.deep.equal([
            'head',
            'shoulders',
            'claw',
            'tentacle',
            'knees',
            'toes',
        ]);
    });
});
