// Dark Mode Toggle
// Handles theme switching between light and dark modes with localStorage persistence

(function() {
  'use strict';

  // Get theme toggle button
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('.theme-icon');

  // Get current theme from localStorage or default to light
  const getCurrentTheme = () => {
    return localStorage.getItem('theme') || 'light';
  };

  // Set theme and update UI
  const setTheme = (theme) => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIcon.textContent = '☀️';
      themeToggle.setAttribute('aria-label', 'Switch to light mode');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      themeIcon.textContent = '🌙';
      themeToggle.setAttribute('aria-label', 'Switch to dark mode');
    }
    localStorage.setItem('theme', theme);
  };

  // Toggle theme
  const toggleTheme = () => {
    const currentTheme = getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  };

  // Initialize theme on page load
  const initTheme = () => {
    const savedTheme = getCurrentTheme();
    setTheme(savedTheme);
  };

  // Check for system preference
  const checkSystemPreference = () => {
    const savedTheme = localStorage.getItem('theme');

    // Only use system preference if no saved preference exists
    if (!savedTheme) {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  };

  // Event listener for theme toggle button
  themeToggle.addEventListener('click', toggleTheme);

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const savedTheme = localStorage.getItem('theme');
    // Only respond to system changes if user hasn't set a preference
    if (!savedTheme) {
      setTheme(e.matches ? 'dark' : 'light');
    }
  });

  // Initialize theme when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      checkSystemPreference();
      initTheme();
    });
  } else {
    checkSystemPreference();
    initTheme();
  }

})();
