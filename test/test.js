var assert = require('assert');

function a(a){
    return a+1;
}
function a(a){
    return a+2;
}

describe('Array', () => {
    describe('#indexOf()', () => {
        it('what?', () => {
            assert.equal(a(1), 3);
        });
    });
});