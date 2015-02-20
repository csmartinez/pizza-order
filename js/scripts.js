var pizzaOrder = function(type, size) {
  var slices = 0;
  var category = "";
    if ((size >= 8) && (size < 10)) {
      slices = slices + 6;
      category = "small";
    } if ((size >= 10) && (size < 14)) {
      slices = slices + 8;
      category = "medium";
    } if ((size >= 14) && (size < 16)) {
      slices = slices + 10;
      category = "large";
    } if ((size >= 16) && (size <= 21)) {
      slices = slices + 12;
      category = "x-large"
    } else if (size > 21) {
      return "21 inches is the largest size at pizza castle"
      alert("PIZZA CASTLE: We do not serve pizzas that large. Sorry.")
    }

    if (type === "pepperoni") {
      return (category + " pepperoni pizza (" + slices + " slices)");
    } else {
      return (category + " cheese pizza (" + (slices + 1) + " slices)");
    }
  }
