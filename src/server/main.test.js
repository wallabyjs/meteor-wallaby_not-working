import { assert, expect } from 'chai';
import testFunc from "./main";

describe('First test', function () {
    it('Returns Number', function () {
        const val = testFunc(2);
        assert.isNumber(val);
        expect(val).to.be.equal(4);
    })
});