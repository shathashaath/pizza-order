function Pizza(numberOfToppings, size,total) {
  this.numberOfToppings = numberOfToppings;
  this.size = size;
  this.total=0;
}

Pizza.prototype.calculate = function() {
  if (this.size == "small") {
    if (this.numberOfToppings <= 1) {
      this.total= 10;
    } else if (this.numberOfToppings == 2) {
      this.total= 11;
    } else {
      this.total= 12;
    }
  } else if (this.size == "medium") {
    if (this.numberOfToppings <= 1) {
      this.total= 15;
    } else if (this.numberOfToppings == 2) {
      this.total= 16;
    } else {
      this.total= 17;
    }
  } else if (this.size == "large") {
    if (this.numberOfToppings <= 1) {
      this.total= 20;
    } else if (this.numberOfToppings == 2) {
      this.total= 21;
    } else {
      this.total= 22;
    }
  }

};



function readyFn() {
  $('#calculate-button').click(function() {
    var count = $("input:checkbox:checked").length;
    var size = $("input[name=size]:checked").val();
    var total=0;
    var pizza = new Pizza(count, size,total);
    pizza.calculate();
    $('#cost').text("$"+parseInt(pizza.total));
  });
}

$(document).ready(readyFn);
