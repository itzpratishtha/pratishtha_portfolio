// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Theme toggle functionality
    const themeToggle = document.querySelector('.theme-toggle');
    const body = document.body;
    
    themeToggle.addEventListener('click', function() {
        body.classList.toggle('light-mode');
        this.classList.toggle('active');
        
        // Store theme preference
        if (body.classList.contains('light-mode')) {
            localStorage.setItem('theme', 'light');
        } else {
            localStorage.setItem('theme', 'dark');
        }
    });
    
    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        themeToggle.classList.add('active');
    }
    
    // Hero section entrance animation
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');
    const socialIcons = document.querySelectorAll('.social-icons a');
    const ctaButtons = document.querySelectorAll('.cta-buttons .btn');
    
    // Add a class for initial state (for animations)
    heroContent.classList.add('animate-ready');
    heroImage.classList.add('animate-ready');
    
    // Trigger animations after a short delay
    setTimeout(() => {
        heroContent.classList.add('animate');
        
        // Stagger social icons animation
        socialIcons.forEach((icon, index) => {
            setTimeout(() => {
                icon.classList.add('animate');
            }, 100 * index);
        });
        
        // Stagger buttons animation
        ctaButtons.forEach((btn, index) => {
            setTimeout(() => {
                btn.classList.add('animate');
            }, 300 + (100 * index));
        });
        
        // Hero image animation
        setTimeout(() => {
            heroImage.classList.add('animate');
        }, 400);
    }, 300);
    
    // Navigation links highlight on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY;
        
        // Find the current section
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        // Highlight the current nav link
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
        
        // Parallax effect for hero image
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed;
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
        
        // Animate sections when they come into view
        const animateSections = document.querySelectorAll('.animate-on-scroll');
        animateSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (sectionTop < windowHeight - 100) {
                section.classList.add('animate');
            }
        });
    });
    
    // Smooth scroll for navigation links
    
    
    // Add hover animations for projects/cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hover');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hover');
        });
    });
    
    // Typing animation for hero title (simulating typing effect)
    const heroTitle = document.querySelector('.hero-content h1 span');
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        }
    };
    
    setTimeout(typeWriter, 1000);
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;
    
    // Toggle menu function
    function toggleMenu() {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
      
      // Prevent background scrolling when menu is open
      if (navLinks.classList.contains('active')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = 'auto';
      }
    }
    
    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    
    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        // Optional: Add smooth scrolling to section
        const targetId = link.getAttribute('href');
        if (targetId.startsWith('#')) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            // Small delay to allow menu to close first
            setTimeout(() => {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 300);
          }
        }
        
        // Close the menu
        toggleMenu();
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !hamburger.contains(e.target) && 
          navLinks.classList.contains('active')) {
        toggleMenu();
      }
    });
  });