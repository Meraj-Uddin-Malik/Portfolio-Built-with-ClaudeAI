// Main JavaScript
// Handles mobile menu, smooth scrolling, form validation, and scroll animations

(function() {
  'use strict';

  const HEADER_OFFSET = 80;
  const SCROLL_SHADOW_THRESHOLD = 100;
  const ANIMATION_THRESHOLD = 0.1;
  const SUCCESS_HIDE_DELAY = 6000;

  // ===== MOBILE MENU =====

  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMobileMenu = () => {
    if (!mobileMenuToggle || !navMenu) return;
    const isExpanded = mobileMenuToggle.getAttribute('aria-expanded') === 'true';
    mobileMenuToggle.setAttribute('aria-expanded', String(!isExpanded));
    navMenu.classList.toggle('active');
    const hamburger = mobileMenuToggle.querySelector('.hamburger');
    if (hamburger) {
      hamburger.style.background = navMenu.classList.contains('active') ? 'transparent' : '';
    }
  };

  const closeMobileMenu = () => {
    if (!mobileMenuToggle || !navMenu) return;
    mobileMenuToggle.setAttribute('aria-expanded', 'false');
    navMenu.classList.remove('active');
    const hamburger = mobileMenuToggle.querySelector('.hamburger');
    if (hamburger) hamburger.style.background = '';
  };

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
  }

  navLinks.forEach(link => link.addEventListener('click', closeMobileMenu));

  document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active') &&
        !navMenu.contains(e.target) &&
        mobileMenuToggle && !mobileMenuToggle.contains(e.target)) {
      closeMobileMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
      closeMobileMenu();
      if (mobileMenuToggle) mobileMenuToggle.focus();
    }
  });

  // ===== SMOOTH SCROLLING =====

  const smoothScroll = (target) => {
    const element = document.querySelector(target);
    if (!element) return;
    const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  };

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        smoothScroll(href);
      }
    });
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href !== '#') {
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
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + section.offsetHeight) {
        navLinks.forEach(link => link.classList.remove('active'));
        if (navLink) navLink.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', highlightNavLink);

  // ===== SCROLL ANIMATIONS =====

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: ANIMATION_THRESHOLD, rootMargin: '0px 0px -50px 0px' });

  const animateOnScroll = () => {
    document.querySelectorAll('.card, .section-title, .section-description, .about-content, .contact-form')
      .forEach(el => observer.observe(el));
  };

  // ===== FORM VALIDATION =====

  const contactForm = document.getElementById('contact-form');
  const formSuccess = document.getElementById('form-success');
  const formSubmitError = document.getElementById('form-submit-error');
  const submitBtn = document.getElementById('submit-btn');

  const showError = (input, message) => {
    const errorElement = input.parentElement.querySelector('.form-error');
    input.classList.add('error');
    input.setAttribute('aria-invalid', 'true');
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.style.display = 'block';
    }
  };

  const clearError = (input) => {
    const errorElement = input.parentElement.querySelector('.form-error');
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
    if (fieldName === 'email' && !input.checkValidity()) {
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

  if (contactForm) {
    const inputs = contactForm.querySelectorAll('.form-input, .form-textarea');

    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        if (input.value.trim() !== '') validateField(input);
      });
      input.addEventListener('input', () => {
        if (input.classList.contains('error')) clearError(input);
      });
    });

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      let isValid = true;
      inputs.forEach(input => {
        if (!validateField(input)) isValid = false;
      });

      if (!isValid) {
        const firstInvalid = contactForm.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
      }
      if (formSubmitError) formSubmitError.hidden = true;
      if (formSuccess) formSuccess.hidden = true;

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          if (formSuccess) {
            formSuccess.hidden = false;
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
          contactForm.reset();
          setTimeout(() => {
            if (formSuccess) formSuccess.hidden = true;
          }, SUCCESS_HIDE_DELAY);
        } else {
          throw new Error('Submission failed');
        }
      } catch (_) {
        if (formSubmitError) formSubmitError.hidden = false;
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
      }
    });
  }

  // ===== HEADER SCROLL EFFECT =====

  const header = document.querySelector('.header');

  const handleHeaderScroll = () => {
    if (!header) return;
    header.style.boxShadow = window.pageYOffset > SCROLL_SHADOW_THRESHOLD
      ? 'var(--shadow-md)'
      : 'none';
  };

  window.addEventListener('scroll', handleHeaderScroll);

  // ===== INITIALIZE =====

  const init = () => {
    animateOnScroll();
    handleHeaderScroll();
    highlightNavLink();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
