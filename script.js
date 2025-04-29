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

    // Add scroll-based navbar visibility (inspired by React component)
    const nav = document.querySelector('.ai-nav');
    let prevScrollPos = window.pageYOffset;
    
    window.addEventListener('scroll', function() {
        const currentScrollPos = window.pageYOffset;
        // Show navbar when scrolling up or near the top
        if (prevScrollPos > currentScrollPos || currentScrollPos < 10) {
            nav.classList.remove('nav-hidden');
        } else {
            nav.classList.add('nav-hidden');
        }
        prevScrollPos = currentScrollPos;
    });

    // Initialize dropdown menus
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const dropdownMenu = this.nextElementSibling;
            dropdownMenu.classList.toggle('open');
            
            // Close other open dropdown menus
            dropdownToggles.forEach(otherToggle => {
                if (otherToggle !== toggle) {
                    otherToggle.nextElementSibling.classList.remove('open');
                }
            });
        });
    });

    // Add intersection observer for skill bars animation
    const skillSection = document.querySelector('#skills');
    if (skillSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelectorAll('.ai-skill-progress').forEach(bar => {
                        // Reset the animation by removing and adding the style
                        const width = bar.style.width;
                        bar.style.width = '0';
                        setTimeout(() => {
                            bar.style.width = width;
                        }, 10);
                    });
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(skillSection);
    }

    // Portfolio "Load More" functionality
    const loadMoreBtn = document.getElementById('load-more-projects');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // Fetch additional projects using AJAX or reveal hidden ones
            const hiddenProjects = document.querySelectorAll('.portfolio-item.hidden');
            
            // Show next batch of projects (up to 3)
            let count = 0;
            hiddenProjects.forEach(project => {
                if (count < 3) {
                    project.classList.remove('hidden');
                    count++;
                }
            });
            
            // Hide button if no more projects to show
            if (document.querySelectorAll('.portfolio-item.hidden').length === 0) {
                loadMoreBtn.style.display = 'none';
                
                // Add "Contact Me" button when all projects are loaded
                const buttonContainer = loadMoreBtn.parentElement;
                const contactBtn = document.createElement('a');
                contactBtn.href = '#contact';
                contactBtn.className = 'ai-button inline-block';
                contactBtn.textContent = 'Discuss Your Project';
                buttonContainer.appendChild(contactBtn);
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

    // Add animation effect to theme toggle
    const toggleButton = document.getElementById('theme-toggle');
    toggleButton.classList.add('rotate');
    setTimeout(() => {
        toggleButton.classList.remove('rotate');
    }, 300);
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
    
    // Add modern hover effect class
    toggleButton.className = 'ai-theme-toggle';
    toggleButton.classList.add(theme === 'light' ? 'moon-icon' : 'sun-icon');
}
