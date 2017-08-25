//Backend Logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
  this.price = price;
}

Pizza.prototype.cost = function() {
  if (this.size === "small") {
    this.price === 10;
  } else if (this.size === "medium") {
    this.price === 15;
  } else if (this.size === "large") {
    this.price === 20;
  }

  if (this.toppings.length === 0) {
    var finalPrice === this.price;
  } else if (this.toppings.length === 1) {
    var finalPrice === this.price + 1;
  } else if (this.toppings.length === 2) {
    var finalPrice === this.price + 2;
  } else if (this.toppings.length === 3) {
    var finalPrice === this.price + 3;
  } else if (this.toppings.length === 4) {
    var finalPrice === this.price + 4;
  } else if (this.toppings.length === 5) {
    var finalPrice === this.price + 5;
  } else if (this.toppings.length === 6) {
    var finalPrice === this.price + 6;
  } else if (this.toppings.length === 7) {
    var finalPrice === this.price + 7;
  }
  return finalPrice;
  alert(finalPrice);
}

var pizzaPrice = new Pizza(pizza-size, pizza-toppings);

//Frontend Logic
$(document).ready(function(){
  $("form#pizzaForm").submit(function(event){
    event.preventDefault();

    var pizzaToppings = [];
    var pizzaSize = $("input[name=pizza-size]: checked").val();
    $("input:checkbox[name=pizza-toppings]:checked").each(function) {
      var pizzaToppings = $(this).val();
    }
  });
  alert(pizzaPice);
});
