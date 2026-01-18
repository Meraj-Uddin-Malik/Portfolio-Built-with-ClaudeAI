// Main JavaScript
// Handles mobile menu, smooth scrolling, form validation, and scroll animations

(function() {
  'use strict';

  // ===== MOBILE MENU =====

  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    mobileMenuToggle.setAttribute('aria-expanded', !isExpanded);
    navMenu.classList.toggle('active');

    // Animate hamburger icon
    const hamburger = mobileMenuToggle.querySelector('.hamburger');
    if (navMenu.classList.contains('active')) {
      hamburger.style.background = 'transparent';
    } else {
      hamburger.style.background = '';
    }
  };

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('active');
    const hamburger = mobileMenuToggle.querySelector('.hamburger');
    hamburger.style.background = '';
  };

  // Event listeners for mobile menu
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }

  navLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        !mobileMenuToggle.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // Close mobile menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
      closeMobileMenu();
      mobileMenuToggle.focus();
    }
  });

  // ===== SMOOTH SCROLLING =====

  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (element) {
      const headerOffset = 80; // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Add smooth scrolling to all internal links
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        smoothScroll(href);
      }
    });
  });

  // Smooth scroll for CTA buttons
  const ctaButtons = document.querySelectorAll('a[href^="#"]');
  ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const href = button.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        smoothScroll(href);
      }
    });
  });

  // ===== ACTIVE NAV LINK ON SCROLL =====

  const sections = document.querySelectorAll('section[id]');

  const highlightNavLink = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navLink) {
          navLink.classList.add('active');
        }
      }
    });
  };

  window.addEventListener('scroll', highlightNavLink);

  // ===== SCROLL ANIMATIONS =====

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  // Observe elements for scroll animations
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.card, .section-title, .section-description, .about-content, .contact-form');
    elements.forEach(element => {
      observer.observe(element);
    });
  };

  // ===== FORM VALIDATION =====

  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const showError = (input, message) => {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.form-error');

    input.classList.add('error');
    input.setAttribute('aria-invalid', 'true');

    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
  };

  const clearError = (input) => {
    const formGroup = input.parentElement;
    const errorElement = formGroup.querySelector('.form-error');

    input.classList.remove('error');
    input.setAttribute('aria-invalid', 'false');

    if (errorElement) {
      errorElement.textContent = '';
      errorElement.style.display = 'none';
    }
  };

  const validateField = (input) => {
    const value = input.value.trim();
    const fieldName = input.getAttribute('name');

    clearError(input);

    if (value === '') {
      showError(input, `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`);
      return false;
    }

    if (fieldName === 'email' && !validateEmail(value)) {
      showError(input, 'Please enter a valid email address');
      return false;
    }

    if (fieldName === 'name' && value.length < 2) {
      showError(input, 'Name must be at least 2 characters');
      return false;
    }

    if (fieldName === 'subject' && value.length < 3) {
      showError(input, 'Subject must be at least 3 characters');
      return false;
    }

    if (fieldName === 'message' && value.length < 10) {
      showError(input, 'Message must be at least 10 characters');
      return false;
    }

    return true;
  };

  // Real-time validation
  if (contactForm) {
    const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');

    inputs.forEach(input => {
      // Validate on blur
      input.addEventListener('blur', () => {
        if (input.value.trim() !== '') {
          validateField(input);
        }
      });

      // Clear error on input
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) {
          clearError(input);
        }
      });
    });

    // Form submission
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');

      // Validate all fields
      inputs.forEach(input => {
        if (!validateField(input)) {
          isValid = false;
        }
      });

      if (isValid) {
        // Here you would normally send the form data to a server
        // For now, we'll just show a success message

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());

        console.log('Form data:', data);

        // Show success message
        formSuccess.hidden = false;
        formSuccess.textContent = 'Thank you! Your message has been sent successfully.';
        formSuccess.style.display = 'block';

        // Reset form
        contactForm.reset();

        // Hide success message after 5 seconds
        setTimeout(() => {
          formSuccess.hidden = true;
          formSuccess.style.display = 'none';
        }, 5000);

        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        // Focus first invalid field
        const firstInvalid = contactForm.querySelector('[aria-invalid="true"]');
        if (firstInvalid) {
          firstInvalid.focus();
        }
      }
    });
  }

  // ===== HEADER SCROLL EFFECT =====

  const header = document.querySelector('.header');
  let lastScroll = 0;

  const handleHeaderScroll = () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      header.style.boxShadow = 'var(--shadow-md)';
    } else {
      header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  };

  window.addEventListener('scroll', handleHeaderScroll);

  // ===== INITIALIZE =====

  const init = () => {
    // Trigger scroll animations
    animateOnScroll();

    // Set initial header state
    handleHeaderScroll();

    // Highlight active nav link
    highlightNavLink();

    console.log('Portfolio initialized successfully!');
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
