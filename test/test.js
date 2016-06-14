var example = require('../example.js');
var assert = require('chai').assert;
describe('Example', function() {
  it('should all pass', function() {
    assert.equal(example.returnNewText("New text 1"), "New text 1");
  });
  it('2', function() {
    assert.equal(example.returnNewText("New text 2"), "New text 2");
  });
  it('3', function() {
    assert.equal(example.returnNewText("New text 3"), "New text 3");
  });
  it('4', function() {
    assert.equal(example.returnNewText("New text 4"), "New text 4");
  });
});
