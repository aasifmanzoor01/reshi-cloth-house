// Show alert when clicking "Order Now" on products
document.querySelectorAll(".order-btn").forEach(button => {
  button.addEventListener("click", () => {
    alert("Please scroll down and fill out the order form to complete your purchase.");
  });
});

// Show confirmation when submitting the order form
document.getElementById("orderForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent page reload
  alert("✅ Thank you! Your order has been placed. We will contact you soon.");
  this.reset(); // clear form
});
