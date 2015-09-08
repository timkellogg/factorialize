describe('Factorial', function() {
  it('returns 1 if 0 is entered', function() {
    expect(factorial(0)).to.equal(1);
  });

  it('returns 2 if 2 is entered', function() {
    expect(factorial(2)).to.equal(2);
  });

  it('returns 720 if 6 is entered', function() {
    expect(factorial(6)).to.equal(720);
  });

});
