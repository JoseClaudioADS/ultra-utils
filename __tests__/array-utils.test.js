const {describe, it} = require('mocha');
const {assert} = require('chai');

const {ArrayUtils} = require('../index');

describe('Array-Utils', function () {
  describe('#chunk()', function () {
    it('should return array with three arrays of size 2', function () {
      assert.deepEqual(ArrayUtils.chunk([1, 2, 3, 4, 5], 2), [
        [1, 2],
        [3, 4],
        [5],
      ]);
    });
    it('should return null because arr is null', function () {
      assert.deepEqual(ArrayUtils.chunk(null, 2), null);
    });
    it('should return null because size is null', function () {
      assert.deepEqual(ArrayUtils.chunk([1, 2, 3, 4, 5], null), null);
    });
  });
});
