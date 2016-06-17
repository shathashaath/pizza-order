function Pizza(numberOfToppings, size) {
    this.numberOfToppings = numberOfToppings;
    this.size = size;
}

pizza.prototype.calculate = function() {
    if (this.size=="small"){
        if (this.numberOfToppings<=1) {
            return 10;
        } else if (this.numberOfToppings==2) {
            return 11;
        } else {
            return 12;
        }
  } else if (this.size=="medium") {
    if (this.numberOfToppings<=1) {
      return 15;
    }else if (thi.numberOfToppings==2) {
      return 16;
    }else {
      return 17;
    }

  }

};
