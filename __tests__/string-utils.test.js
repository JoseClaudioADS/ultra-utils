const {describe, it} = require('mocha');
const {assert} = require('chai');

const {StringUtils} = require('../index');

describe('String-Utils', function () {
  describe('#startsWith()', function () {
    it('should return true when the value starts with search', function () {
      assert.equal(StringUtils.startsWith('Jose', 'Jo'), true);
    });
    it('should return false when the value not starts with search', function () {
      assert.equal(StringUtils.startsWith('Jose', 'xD'), false);
    });
    it('should return false when the value is null', function () {
      assert.equal(StringUtils.startsWith(null, 'xD'), false);
    });
    it('should return false when the search is null', function () {
      assert.equal(StringUtils.startsWith('Jose', null), false);
    });
    it('should return true when the search and value are null', function () {
      assert.equal(StringUtils.startsWith(null, null), true);
    });
  });
  describe('#startsWithIgnoreCase()', function () {
    it('should return true when the value starts with search', function () {
      assert.equal(StringUtils.startsWithIgnoreCase('Jose', 'jOS', true), true);
    });
    it('should return false when the value starts with search but case different', function () {
      assert.equal(
        StringUtils.startsWithIgnoreCase('Jose', 'jOS', false),
        false,
      );
    });
    it('should return false when the value not starts with search', function () {
      assert.equal(
        StringUtils.startsWithIgnoreCase('Jose', 'Xdd', true),
        false,
      );
    });
    it('should return false when the value is null', function () {
      assert.equal(StringUtils.startsWithIgnoreCase(null, 'xD', true), false);
    });
    it('should return false when the search is null', function () {
      assert.equal(StringUtils.startsWithIgnoreCase('Jose', null, true), false);
    });
    it('should return true when the search and value are null', function () {
      assert.equal(StringUtils.startsWithIgnoreCase(null, null, true), true);
    });
  });

  describe('#endsWith()', function () {
    it('should return true when the value ends with search', function () {
      assert.equal(StringUtils.endsWith('Jose', 'se'), true);
    });
    it('should return false when the value not ends with search', function () {
      assert.equal(StringUtils.endsWith('Jose', 'xD'), false);
    });
    it('should return false when the value is null', function () {
      assert.equal(StringUtils.endsWith(null, 'xD'), false);
    });
    it('should return false when the search is null', function () {
      assert.equal(StringUtils.endsWith('Jose', null), false);
    });
    it('should return true when the search and value are null', function () {
      assert.equal(StringUtils.endsWith(null, null), true);
    });
  });

  describe('#endsWithIgnoreCase()', function () {
    it('should return true when the value ends with search', function () {
      assert.equal(StringUtils.endsWithIgnoreCase('Jose', 'SE', true), true);
    });
    it('should return false when the value ends with search but case different', function () {
      assert.equal(StringUtils.endsWithIgnoreCase('Jose', 'SE', false), false);
    });
    it('should return false when the value not ends with search', function () {
      assert.equal(StringUtils.endsWithIgnoreCase('Jose', 'Xdd', true), false);
    });
    it('should return false when the value is null', function () {
      assert.equal(StringUtils.endsWithIgnoreCase(null, 'xD', true), false);
    });
    it('should return false when the search is null', function () {
      assert.equal(StringUtils.endsWithIgnoreCase('Jose', null, false), false);
    });
    it('should return true when the search and value are null', function () {
      assert.equal(StringUtils.endsWithIgnoreCase(null, null, true), true);
    });
  });

  describe('#reverse()', function () {
    it('should return reverse value', function () {
      assert.equal(StringUtils.reverse('Jose'), 'esoJ');
    });
    it('should return null value', function () {
      assert.equal(StringUtils.reverse(null), null);
    });
    it('should return same value', function () {
      assert.equal(StringUtils.reverse(''), '');
    });
  });
});
