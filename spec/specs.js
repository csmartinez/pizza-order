describe('pizzaOrder', function() {
  it('has 6 slices if pepperoni and between 8-10 inches in diameter', function() {
    expect(pizzaOrder("pepperoni", 9)).to.equal("small pepperoni pizza (6 slices)");
  });
  it('has 10 slices if pepperoni and between 14-16 inches in diameter', function() {
    expect(pizzaOrder("pepperoni", 15)).to.equal("large pepperoni pizza (10 slices)");
  });
  it('is not possible to order a pizza larger than 21 inches in diamter', function() {
    expect(pizzaOrder("pepperoni", 25)).to.equal("invalid pizza");
  });
  it('has 7 slices if cheese and between 10-14 inches in diameter', function() {
    expect(pizzaOrder("cheese", 10)).to.equal("medium cheese pizza (7 slices)");
  });
  it('has 11 slices if cheese and between 16-21 inches in diameter', function() {
    expect(pizzaOrder("cheese", 20)).to.equal("x-large cheese pizza (11 slices)");
  });
});
