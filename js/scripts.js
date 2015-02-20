var pizzaOrder = function(type, size) {
  if (type === "pepperoni") {
    if ((size >= 8) && (size < 10)) {
      return "small pepperoni pizza (6 slices)"
    } if ((size >= 10) && (size < 14)) {
      return "medium pepperoni pizza (8 slices)"
    } if ((size >= 14) && (size < 16)) {
      return "large pepperoni pizza (10 slices)"
    } if ((size >= 16) && (size < 21)) {
      return "x-large pepperoni pizza (12 slices)"
    } else {
      return "21 inches is the largest size at pizza castle"
      alert("PIZZA CASTLE: We do not serve pizzas that large. Sorry.")
    }
  }
}
