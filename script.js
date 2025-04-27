// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme based on system preference or saved theme
    initTheme();
    
    // Set current year in the footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Add event listener to theme toggle button
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

    // Hamburger menu toggle for mobile navbar
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });
        // Optional: Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
                navMenu.classList.remove('open');
            }
        });
    }
});

function initTheme() {
    // Check for saved theme or use system preference
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const savedTheme = localStorage.getItem('theme') || systemTheme;
    
    // Apply theme
    setTheme(savedTheme);
    
    // Update toggle button icon
    updateToggleButton(savedTheme);
}

function toggleTheme() {
    // Get current theme
    const currentTheme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    // Set new theme
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Apply theme
    setTheme(newTheme);
    
    // Update toggle button icon
    updateToggleButton(newTheme);
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
}

function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
    }
}

function updateToggleButton(theme) {
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.textContent = theme === 'light' ? '🌙' : '☀️';
}
