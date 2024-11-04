// Simple cart addition example
let cart = [];

function addToCart(product) {
    cart.push(product);
    alert(product.name + " added to cart!");
}

// Display cart items in the console for testing
console.log(cart);

// Scroll Animation for Product Cards
const productCards = document.querySelectorAll('.product-card');

function handleScroll() {
    productCards.forEach(card => {
        const cardPosition = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardPosition < windowHeight - 50) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', handleScroll); // Initial check on page load
