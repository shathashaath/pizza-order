debugger;
function Pizza(numberOfToppings, size) {
  this.numberOfToppings = numberOfToppings;
  this.size = size;
}

Pizza.prototype.calculate = function() {
  if (this.size=="small"){
    if (this.numberOfToppings <=1) {
      return 10;
    } else if (this.numberOfToppings ==2) {
      return 11;
    } else {
      return 12;
    }
  } else if (this.size=="medium") {
      if (this.numberOfToppings <=1) {
          return 15;
    }else if (this.numberOfToppings == 2) {
      return 16;
    } else {
      return 17;
    }

  }else if (this.size=="large") {
    if (this.numberOfToppings <=1) {
        return 20;
    } else if (this.numberOfToppings==2) {
      return 21;

    } else {
      return 22;
    }
  }


};
