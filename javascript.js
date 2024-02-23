// Selecting navigation links
const homeLink = document.getElementById('home-link');
const careerInsightsLink = document.getElementById('career-insights-link');
const blogLink = document.getElementById('blog-link');
const contactLink = document.getElementById('contact-link');

// Selecting main content area
const mainContent = document.querySelector('main');

// Function to load page content
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            mainContent.innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading page:', error);
        });
}

// Event listeners for navigation links
homeLink.addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('index.html');
});

careerInsightsLink.addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('career-insights.html');
});

blogLink.addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('blog.html');
});

contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    loadPage('contact.html');
});

// Load home page by default
document.addEventListener('DOMContentLoaded', function() {
    loadPage('website.html');
});
