let stock = {
  chocolate: 10,
  strawberry: 10,
  blueberry: 10
};

function sell(flavor) {
  if (stock[flavor] > 0) {
      stock[flavor]--;
      updateDisplay(flavor);
  } else {
      alert(flavor.charAt(0).toUpperCase() + flavor.slice(1) + " is sold out!");
  }
}

function restock(flavor, quantity = 5) {
  stock[flavor] += quantity;
  updateDisplay(flavor);
}

function updateDisplay(flavor) {
  document.getElementById('stock-' + flavor).textContent = stock[flavor];
}