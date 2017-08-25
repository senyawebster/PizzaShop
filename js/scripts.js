//Backend Logic
function Pizza(size, toppings, price) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.cost = function() {
  if (this.size === "small") {
    this.price = 10;
  } else if (this.size === "medium") {
    this.price = 15;
  } else if (this.size === "large") {
    this.price = 20;
  } else {
    alert("you need to pick a pizza size!")
  }

  if (this.toppings.length === 0) {
    var finalPrice = this.price;
  } else if (this.toppings.length === 1) {
    var finalPrice = this.price + 1;
  } else if (this.toppings.length === 2) {
    var finalPrice = this.price + 2;
  } else if (this.toppings.length === 3) {
    var finalPrice = this.price + 3;
  } else if (this.toppings.length === 4) {
    var finalPrice = this.price + 4;
  } else if (this.toppings.length === 5) {
    var finalPrice = this.price + 5;
  } else if (this.toppings.length === 6) {
    var finalPrice = this.price + 6;
  } else if (this.toppings.length === 7) {
    var finalPrice = this.price + 7;
  }
  return finalPrice;
}

var pizzaPrice = 0;


//Frontend Logic
$(document).ready(function(){
  $("form#pizzaForm").submit(function(event) {
    event.preventDefault();

    var pizzaToppings = [];
    var pizzaSize = $("input[name='pizza-size']:checked").val();
    $("input:checkbox[name='pizza-toppings']:checked").each(function() {
      pizzaToppings.push($(this).val());
    });
    pizza = new Pizza(pizzaSize, pizzaToppings);
    alert("Your delicious pizza will cost: $" + pizza.cost());

    setTimeout(function () {
      $('input[type=radio]').prop('checked', false);
      $('input[type=checkbox]').prop('checked', false);
    }, 500);
  });
});
