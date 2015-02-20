describe('pizzaOrder', function() {
  it('has 6 slices if pepperoni and between 8-10 inches in diameter', function() {
    expect(pizzaOrder("pepperoni", 9)).to.equal("small pepperoni pizza (6 slices)");
  });
  it('has 8 slices if pepperoni and between 10-14 inches in diameter', function() {
    expect(pizzaOrder("pepperoni", 10)).to.equal("medium pepperoni pizza (8 slices)");
  });
  it('has 10 slices if pepperoni and between 14-16 inches in diameter', function() {
    expect(pizzaOrder("pepperoni", 15)).to.equal("large pepperoni pizza (10 slices)");
  });
  it('has 12 slices if pepperoni and between 16-21 inches in diameter', function() {
    expect(pizzaOrder("pepperoni", 20)).to.equal("x-large pepperoni pizza (12 slices)");
  });
  it('is not possible to order a pizza larger than 21 inches in diamter', function() {
    expect(pizzaOrder("pepperoni", 25)).to.equal("21 inches is the largest size at pizza castle");
  });
});