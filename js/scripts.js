var pizzaOrder = function(type, size) {
  type = type.toLowerCase();
  var toppings = [];
  var slices = 0;
  var category = "";
  toppings.push(type);
  thickness = toppings.length;

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
    } else if ((size > 21) || (size < 8)) {
      alert("We do not serve pizzas that large or small. Sorry.")
      return "invalid pizza"
    }

    if (type === "pepperoni") {
      return (category + " pepperoni pizza (" + slices + " slices)");
    } if (type === "cheese"){
      return (category + " cheese pizza (" + (slices - 1) + " slices)");
    } else {
      alert("Plankton stole our secret toppings! (Sorry, we only serve pepperoni or cheese).");
      return "invalid pizza"
    }
  }

  $(document).ready(function() {
    $("form#pizzaCastle").submit(function(event) {
      var size = parseInt($("input#size").val());
      var type = $("input#type").val();
      if ((size > 21) || (size < 8)) {
        $(".invalid").show();
        $(".valid").hide();
      } else {
        $(".valid").show();
        $(".invalid").hide()
      }
      var result = pizzaOrder(type, size);
      $(".pizza").text(result);
      $("#result").show();
      event.preventDefault();

      $("input#size").val("");
      $("input#type").val("");
    });
  });
