function sell(flavor) {
  fetch(`/sell/${flavor}`, { method: 'POST' })
    .then(response => {
      if (!response.ok) {
        throw new Error(`${flavor} is sold out!`);
      }
      return response.json();
    })
    .then(() => {
      updateDisplay(flavor);
    })
    .catch(error => {
      alert(error.message);
    });
}

function restock(flavor, quantity = 5) {
  fetch(`/restock/${flavor}/${quantity}`, { method: 'POST' })
    .then(response => response.json())
    .then(() => {
      updateDisplay(flavor);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function updateDisplay(flavor) {
  fetch(`/stock/${flavor}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById('stock-' + flavor).textContent = data.stock;
    })
    .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', () => {
  ['chocolate', 'strawberry', 'blueberry'].forEach(flavor => {
    updateDisplay(flavor);
  });
});