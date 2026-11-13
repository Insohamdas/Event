/**
 * Pricing & Pass Calculation Module
 * Handles ticket tier pricing calculations, ticket counter adjustments,
 * and direct package selection from package cards.
 */

const PACKAGE_PRICES = {
  couple_non_alc: { name: 'Couple (Non-Alcoholic)', price: 2000 },
  couple_alc: { name: 'Couple (Alcoholic)', price: 2500 },
  stag_alc: { name: 'Stag (Alcoholic)', price: 1600 },
  stag_non_alc: { name: 'Stag (Non-Alcoholic)', price: 1200 }
};

/**
 * Calculates and updates total price display across the checkout form.
 */
function calculateTotal() {
  const passSelect = document.getElementById('passType');
  const countInput = document.getElementById('peopleCount');
  if (!passSelect || !countInput) return;

  const key = passSelect.value;
  const count = parseInt(countInput.value, 10) || 1;
  const pkg = PACKAGE_PRICES[key] || PACKAGE_PRICES.stag_non_alc;

  const total = pkg.price * count;
  const formattedTotal = '₹' + total.toLocaleString('en-IN');

  const totalDisplay = document.getElementById('form-total-display');
  const submitBtnText = document.getElementById('submit-btn-text');

  if (totalDisplay) totalDisplay.innerText = formattedTotal;
  if (submitBtnText) submitBtnText.innerText = `Confirm Booking (${formattedTotal})`;
}

/**
 * Adjusts guest/pass counter with bounds [1, 10].
 * @param {number} delta 
 */
function adjustCount(delta) {
  const input = document.getElementById('peopleCount');
  if (!input) return;

  let current = parseInt(input.value, 10) || 1;
  current += delta;
  if (current < 1) current = 1;
  if (current > 10) current = 10;
  input.value = current;
  calculateTotal();
}

/**
 * Pre-selects package from the UI card and smoothly scrolls to registration.
 * @param {string} key 
 */
function selectPackage(key) {
  const passSelect = document.getElementById('passType');
  if (passSelect && PACKAGE_PRICES[key]) {
    passSelect.value = key;
    calculateTotal();

    const regSection = document.getElementById('register');
    if (regSection) {
      regSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// Expose globally for inline HTML attributes and interoperability
window.PACKAGE_PRICES = PACKAGE_PRICES;
window.calculateTotal = calculateTotal;
window.adjustCount = adjustCount;
window.selectPackage = selectPackage;

