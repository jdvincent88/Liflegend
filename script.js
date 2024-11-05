// Initialize Supabase
const SUPABASE_URL = 'https://uuggbalrzckjlbwomqrm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV1Z2diYWxyemNramxid29tcXJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA3NTY2MTIsImV4cCI6MjA0NjMzMjYxMn0.ulMhNZpFDhHfE-4vngXPYY62zxbMpT4yrvS8PXwACyk';
const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// User Sign-up
async function signUpUser(email, password) {
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
    });
    if (error) {
        console.error('Error signing up:', error.message);
    } else {
        console.log('User signed up:', user);
    }
}

// User Login
async function loginUser(email, password) {
    const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password
    });
    if (error) {
        console.error('Error logging in:', error.message);
    } else {
        console.log('User logged in:', user);
    }
}
// Add the form handling functions directly after the sign-up and login functions

function signUpForm(event) {
    event.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    signUpUser(email, password);
}

function loginForm(event) {
    event.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    loginUser(email, password);
}
// User Logout
async function logoutUser() {
    const { error } = await supabase.auth.signOut();
    if (error) {
        console.error('Error logging out:', error.message);
    } else {
        console.log('User logged out');
    }
}

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
