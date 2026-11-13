/**
 * Booking, Payment Verification & Confirmation Modal Module
 * Manages UPI clipboard copying, payment receipt file preview,
 * age restriction validation, form submission, and confetti modal display.
 */

/**
 * Copies the official desk UPI ID to user clipboard with visual feedback.
 */
function copyUpi() {
  const upiElem = document.getElementById('upi-id');
  const upi = upiElem ? upiElem.innerText.trim() : 'kirshivevents@upi';
  const btn = document.getElementById('copy-btn');

  navigator.clipboard.writeText(upi).then(() => {
    if (btn) {
      btn.innerText = 'Copied!';
      setTimeout(() => {
        btn.innerText = 'Copy';
      }, 2000);
    }
  }).catch(() => {
    alert('UPI ID: ' + upi);
  });
}

/**
 * Validates and displays image thumbnail for payment receipt upload.
 * @param {Event} event 
 */
function handleFilePreview(event) {
  const file = event.target.files && event.target.files[0];
  const card = document.getElementById('file-preview-card');
  const img = document.getElementById('preview-img');
  const name = document.getElementById('preview-name');

  if (file) {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (PNG/JPG).');
      event.target.value = '';
      if (card) card.classList.add('hidden');
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      if (img) img.src = e.target.result;
      if (name) name.innerText = file.name;
      if (card) card.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  } else {
    if (card) card.classList.add('hidden');
  }
}

/**
 * Clears uploaded receipt file input and hides preview card.
 */
function clearFile() {
  const input = document.getElementById('screenshot');
  const card = document.getElementById('file-preview-card');
  if (input) input.value = '';
  if (card) card.classList.add('hidden');
}

/**
 * Processes registration form submission with strict validation.
 * @param {Event} event 
 */
function handleFormSubmit(event) {
  event.preventDefault();

  const fullName = (document.getElementById('fullName')?.value || '').trim();
  const email = (document.getElementById('email')?.value || '').trim();
  const phone = (document.getElementById('phone')?.value || '').trim();
  const age = parseInt(document.getElementById('age')?.value, 10);
  const passKey = document.getElementById('passType')?.value || 'stag_non_alc';
  const count = parseInt(document.getElementById('peopleCount')?.value, 10) || 1;
  const fileInput = document.getElementById('screenshot');

  if (!fullName || !email || !phone || isNaN(age)) {
    alert('Please fill out all required fields.');
    return;
  }

  // Legal drinking age validation for alcoholic passes
  if ((passKey === 'stag_alc' || passKey === 'couple_alc') && age < 21) {
    alert('Government regulations require attendees holding Alcoholic passes to be at least 21 years of age.');
    return;
  }

  if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
    alert('Please attach your payment screenshot before submitting.');
    return;
  }

  const pkg = window.PACKAGE_PRICES ? window.PACKAGE_PRICES[passKey] : { name: passKey, price: 1200 };
  const totalAmount = pkg.price * count;
  const randomRef = 'DHMK26-' + Math.floor(10000 + Math.random() * 90000);

  // Populate Confirmation Modal Details
  const modalName = document.getElementById('modal-name');
  const modalRef = document.getElementById('modal-ref');
  const modalPackage = document.getElementById('modal-package');
  const modalTotal = document.getElementById('modal-total');

  if (modalName) modalName.innerText = fullName;
  if (modalRef) modalRef.innerText = randomRef;
  if (modalPackage) modalPackage.innerText = `${pkg.name} (x${count})`;
  if (modalTotal) modalTotal.innerText = '₹' + totalAmount.toLocaleString('en-IN');

  // Trigger Celebration Confetti Animation
  if (typeof window.confetti === 'function') {
    window.confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00A3E0', '#004B87', '#E4BE9B', '#FACC15']
    });
  }

  // Display Success Modal
  const modal = document.getElementById('success-modal');
  if (modal) modal.classList.remove('hidden');
}

/**
 * Closes confirmation modal.
 */
function closeModal() {
  const modal = document.getElementById('success-modal');
  if (modal) modal.classList.add('hidden');
}

// Expose globally for inline HTML attributes and interoperability
window.copyUpi = copyUpi;
window.handleFilePreview = handleFilePreview;
window.clearFile = clearFile;
window.handleFormSubmit = handleFormSubmit;
window.closeModal = closeModal;

