/**
 * Kirshiv Events - Application Entry Point
 * Orchestrates module initialization, event listeners, and performance setup.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize pass price calculator with default values
  if (typeof window.calculateTotal === 'function') {
    window.calculateTotal();
  }

  // 2. Initialize dual hero video chaining
  if (typeof window.initHeroVideoListeners === 'function') {
    window.initHeroVideoListeners();
  }
});

