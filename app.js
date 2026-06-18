/* ==========================================================================
   Gela's Sweet Bites - Interactive Frontend Logic
   Handles: Tab controls, Modals, Form validation, Local storage log, and
            dynamic Facebook Messenger deep link generation.
   ========================================================================== */

// 1. Product Detailed Metadata
const productData = {
  'cake-chocolate': {
    title: 'Moist Chocolate Custom Cake',
    price: '₱750.00',
    desc: 'Our bestselling decadent 6x3 moist chocolate cake is baked with rich premium cocoa, layered with luscious chocolate ganache filling, and finished with elegant, festive piping. The perfect center-piece for any holiday or celebration.',
    tag: 'Signature',
    ingredients: 'Premium local cocoa, high-grade dark chocolate, fresh butter, refined flour, cane sugar, farm eggs, chocolate ganache filling.',
    sizing: 'Serves 6-8 people. Dimensions: 6" diameter, 3" height.',
    img: 'images/products/chocolate_cake.png',
    optionValue: 'Moist Chocolate Custom Cake'
  },
  'cake-mocha': {
    title: 'Moist Mocha Custom Cake',
    price: '₱750.00',
    desc: 'An exquisite 6x3 moist mocha cake featuring a light and airy espresso-infused sponge, layered with velvety mocha ganache, and decorated with a beautiful green buttercream piping border. Rich, creamy, and subtly bittersweet.',
    tag: 'Signature',
    ingredients: 'Espresso coffee infusion, local cocoa powder, dairy buttercream, wheat flour, organic sugar, fresh eggs.',
    sizing: 'Serves 6-8 people. Dimensions: 6" diameter, 3" height.',
    img: 'images/products/mocha_cake.png',
    optionValue: 'Moist Mocha Custom Cake'
  },
  'cake-strawberry': {
    title: 'Classic Strawberry Shortcake',
    price: '₱850.00',
    desc: 'A light and luxurious vanilla sponge cake layered with fresh Benguet strawberries and sweet whipped dairy cream. It offers a clean, fruity, and delicately balanced sweetness.',
    tag: 'Premium',
    ingredients: 'Fresh Benguet strawberries, dairy whipped cream, organic vanilla bean, soft pastry flour, eggs, sugar.',
    sizing: 'Serves 6-8 people. Dimensions: 6" diameter, 3" height.',
    img: 'images/bakery_hero.png',
    optionValue: 'Classic Strawberry Shortcake'
  },
  'cookie-chocochip': {
    title: 'Gooey Chocolate Chip Cookie',
    price: '₱80.00',
    desc: 'A giant, soft-baked artisanal cookie packed with molten dark chocolate pools. Crisp on the edges, soft and gooey in the center, and finished with a delicate sprinkle of coarse sea salt flakes.',
    tag: 'Bestseller',
    ingredients: 'Semi-sweet dark chocolate chunks, brown butter, refined flour, brown sugar, farm eggs, sea salt flakes.',
    sizing: 'Individual giant cookie (approx. 100 grams). Box of 6 and 12 available.',
    img: 'images/products/gooey_cookies.png',
    optionValue: 'Gooey Cookies Selection'
  },
  'cookie-redvelvet': {
    title: 'Red Velvet Cream Cheese Cookie',
    price: '₱90.00',
    desc: 'A striking red velvet cocoa cookie base stuffed with a sweet, tangy cream cheese core. Baked to a gooey, melting texture that contrasts beautifully with the rich base.',
    tag: 'Popular',
    ingredients: 'Dutch processed cocoa, premium cream cheese filling, sugar, flour, butter, white chocolate chips.',
    sizing: 'Individual giant cookie (approx. 100 grams).',
    img: 'images/products/gooey_cookies.png',
    optionValue: 'Gooey Cookies Selection'
  },
  'cookie-doublechoc': {
    title: 'Double Chocolate Fudge Cookie',
    price: '₱80.00',
    desc: 'Rich, dark chocolate cookie dough loaded with melting chocolate chips, creating a dense, brownie-like fudgy center. A dream come true for chocolate lovers.',
    tag: 'New',
    ingredients: 'Unsweetened cocoa powder, dark chocolate chips, milk chocolate chips, butter, cane sugar, wheat flour.',
    sizing: 'Individual giant cookie (approx. 100 grams).',
    img: 'images/products/gooey_cookies.png',
    optionValue: 'Gooey Cookies Selection'
  },
  'brownie-classic': {
    title: 'Fudgy Chocolate Brownies',
    price: '₱350.00',
    desc: 'Super dense, chewy chocolate brownies featuring an incredibly rich interior and a beautiful shiny, crinkly top crust. Made from local premium cocoa tablea.',
    tag: 'Bestseller',
    ingredients: 'Local premium cocoa paste (tablea), unsalted butter, organic sugar, eggs, pastry flour.',
    sizing: 'Box of 6 square bakes (approx. 2.5" x 2.5" each). Also available in Box of 12 for ₱650.00.',
    img: 'images/products/fudgy_brownies.png',
    optionValue: 'Fudgy Brownies Selection'
  },
  'brownie-caramel': {
    title: 'Salted Caramel Brownies',
    price: '₱380.00',
    desc: 'Our signature fudgy brownie swirled with rich, buttery, house-made salted caramel sauce and topped with a pinch of rock salt for a sweet and savory sensation.',
    tag: 'Premium',
    ingredients: 'Local cocoa paste, cream, house-made butter caramel sauce, rock salt, flour, eggs, sugar.',
    sizing: 'Box of 6 square bakes (approx. 2.5" x 2.5" each).',
    img: 'images/products/fudgy_brownies.png',
    optionValue: 'Fudgy Brownies Selection'
  },
  'bread-cinnamon': {
    title: 'Glazed Cinnamon Rolls',
    price: '₱300.00',
    desc: 'Soft and pillowy Japanese milk bread dough swirled with aromatic cinnamon brown sugar filling, baked golden brown, and generously glazed with cream cheese icing.',
    tag: 'Hot & Fresh',
    ingredients: 'Cinnamon bark powder, brown sugar, sweet milk yeast dough, butter, cream cheese glaze.',
    sizing: 'Box of 4 large soft cinnamon rolls.',
    img: 'images/products/cinnamon_rolls.png',
    optionValue: 'Artisanal Breads Selection'
  },
  'bread-brioche': {
    title: 'Cheesy Brioche Bread',
    price: '₱180.00',
    desc: 'A rich, highly-enriched buttery loaf baked with a generous filling of shredded cheddar cheese inside, topped with more cheese that toasts to a delicious, crispy outer crust.',
    tag: 'Artisanal',
    ingredients: 'High-fat dairy butter, cheddar cheese, yeast bread flour, fresh eggs, honey.',
    sizing: 'Single standard loaf (serves 4-5).',
    img: 'images/products/cinnamon_rolls.png',
    optionValue: 'Artisanal Breads Selection'
  }
};

// 2. DOM Elements Selection
const tabButtons = document.querySelectorAll('.tab-btn');
const tabShowcases = document.querySelectorAll('.showcase-grid');
const productCards = document.querySelectorAll('.product-card');
const detailModal = document.getElementById('product-detail-modal');
const successModal = document.getElementById('success-modal');
const closeButtons = document.querySelectorAll('.modal-close-btn');
const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const navLinks = document.querySelector('.nav-links');
const orderForm = document.getElementById('order-inquiry-form');
const orderSelectionSelect = document.getElementById('order-selection');
const modalOrderTrigger = document.getElementById('modal-order-trigger');

// Modal Elements to populate
const modalImg = document.getElementById('modal-product-img');
const modalTag = document.getElementById('modal-product-tag');
const modalTitle = document.getElementById('modal-product-title');
const modalPrice = document.getElementById('modal-product-price');
const modalDesc = document.getElementById('modal-product-desc');
const modalIngredients = document.getElementById('modal-product-ingredients');
const modalSizing = document.getElementById('modal-product-sizing');

// Current active product ID for modal tracking
let activeProductId = null;

// ==========================================================================
// 3. Navigation & Tab Controls
// ==========================================================================

// Mobile Nav Drawer Toggle
mobileNavToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const icon = mobileNavToggle.querySelector('i');
  if (navLinks.classList.contains('active')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});

// Close Mobile Nav on click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    const icon = mobileNavToggle.querySelector('i');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  });
});

// Tab Showcase Switcher
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetTab = button.getAttribute('data-tab');
    
    // Toggle active classes on buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    
    // Toggle active classes on grids
    tabShowcases.forEach(showcase => {
      showcase.classList.remove('active');
      if (showcase.id === `tab-${targetTab}`) {
        showcase.classList.add('active');
      }
    });
  });
});

// ==========================================================================
// 4. Modals (Detail & Success) Management
// ==========================================================================

// Open Product Detail Modal
function openProductModal(productId) {
  const data = productData[productId];
  if (!data) return;
  
  activeProductId = productId;
  
  // Populate details
  modalImg.src = data.img;
  modalImg.alt = data.title;
  modalTag.textContent = data.tag;
  modalTitle.textContent = data.title;
  modalPrice.textContent = data.price;
  modalDesc.textContent = data.desc;
  modalIngredients.textContent = data.ingredients;
  modalSizing.textContent = data.sizing;
  
  // Show modal
  detailModal.classList.add('active');
  document.body.style.overflow = 'hidden'; // Lock background scroll
}

// Close All Modals
function closeAllModals() {
  document.querySelectorAll('.modal').forEach(modal => {
    modal.classList.remove('active');
  });
  document.body.style.overflow = ''; // Release scroll
  activeProductId = null;
}

// Attach listeners to product cards
productCards.forEach(card => {
  const detailsBtn = card.querySelector('.view-details-btn');
  const productId = card.getAttribute('data-product-id');
  
  // Open modal clicking either details button or product image
  detailsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    openProductModal(productId);
  });
  
  card.querySelector('.product-img-container').addEventListener('click', () => {
    openProductModal(productId);
  });
});

// Add Modal Backdrop click dismissal
document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
  backdrop.addEventListener('click', closeAllModals);
});

// Close buttons listener
closeButtons.forEach(btn => {
  btn.addEventListener('click', closeAllModals);
});

// Close modal via Escape Key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAllModals();
  }
});

// "Add to Inquiry Form" button inside Modal
modalOrderTrigger.addEventListener('click', () => {
  if (!activeProductId) return;
  const data = productData[activeProductId];
  if (data) {
    // Select option in dropdown
    orderSelectionSelect.value = data.optionValue;
    
    // Close modal
    closeAllModals();
    
    // Smooth scroll to form section
    document.getElementById('inquiry').scrollIntoView({ behavior: 'smooth' });
    
    // Optional: highlight form selection field momentarily
    orderSelectionSelect.focus();
  }
});

// ==========================================================================
// 5. Form Validation & Submission
// ==========================================================================

// Regex patterns
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(09|\+639)\d{9}$/; // Philippine Mobile Numbers

// Mark field as valid/invalid
const setFieldStatus = (input, isValid) => {
  const group = input.closest('.form-group');
  if (isValid) {
    group.classList.remove('invalid');
  } else {
    group.classList.add('invalid');
  }
};

// Live validation on blur
orderForm.querySelectorAll('input, select, textarea').forEach(input => {
  input.addEventListener('blur', () => {
    validateInput(input);
  });
  
  // Remove error state on typing/interaction
  input.addEventListener('input', () => {
    const group = input.closest('.form-group');
    group.classList.remove('invalid');
  });
});

// Individual Input Validation
function validateInput(input) {
  if (input.required && !input.value.trim()) {
    setFieldStatus(input, false);
    return false;
  }
  
  // Specific checks
  if (input.type === 'email' && input.value.trim() !== '') {
    const isValid = emailPattern.test(input.value.trim());
    setFieldStatus(input, isValid);
    return isValid;
  }
  
  if (input.type === 'tel') {
    const cleanPhone = input.value.trim().replace(/[-\s]/g, ''); // strip spaces/hyphens
    const isValid = phonePattern.test(cleanPhone);
    setFieldStatus(input, isValid);
    return isValid;
  }
  
  if (input.id === 'order-date') {
    const selectedDate = new Date(input.value);
    const today = new Date();
    today.setHours(0,0,0,0);
    const isValid = selectedDate >= today;
    setFieldStatus(input, isValid);
    return isValid;
  }
  
  setFieldStatus(input, true);
  return true;
}

// Form Submission handler
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let isFormValid = true;
  const inputs = orderForm.querySelectorAll('input, select, textarea');
  
  inputs.forEach(input => {
    const isValid = validateInput(input);
    if (!isValid) isFormValid = false;
  });
  
  if (!isFormValid) {
    // Shake form card to indicate error
    const card = orderForm.closest('.inquiry-card');
    card.classList.add('shake');
    setTimeout(() => {
      card.classList.remove('shake');
    }, 350);
    return;
  }
  
  // Gather Form Data
  const formData = {
    id: 'inq_' + Date.now(),
    name: document.getElementById('user-name').value.trim(),
    facebook: document.getElementById('user-fb').value.trim(),
    email: document.getElementById('user-email').value.trim(),
    phone: document.getElementById('user-phone').value.trim().replace(/[-\s]/g, ''),
    selection: orderSelectionSelect.value,
    date: document.getElementById('order-date').value,
    details: document.getElementById('order-details').value.trim(),
    timestamp: new Date().toISOString()
  };
  
  // Trigger loading state
  const submitBtn = document.getElementById('form-submit-btn');
  submitBtn.classList.add('loading');
  submitBtn.disabled = true;
  
  // Simulate network request (1.5 seconds)
  setTimeout(() => {
    // 1. Save locally to Log for verification/retrieval
    saveInquiryToLocalStorage(formData);
    
    // 2. Format Messenger deep link
    generateMessengerDeepLink(formData);
    
    // 3. Populate and show success modal
    document.getElementById('recap-name').textContent = formData.name;
    document.getElementById('recap-selection').textContent = formData.selection;
    document.getElementById('recap-date').textContent = new Date(formData.date).toLocaleDateString('en-US', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    
    // Reset form and UI
    orderForm.reset();
    submitBtn.classList.remove('loading');
    submitBtn.disabled = false;
    
    successModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }, 1500);
});

// Helper: Save inquiry to LocalStorage log
function saveInquiryToLocalStorage(data) {
  try {
    let logs = JSON.parse(localStorage.getItem('gelas_inquiry_log')) || [];
    logs.push(data);
    localStorage.setItem('gelas_inquiry_log', JSON.stringify(logs));
    console.log('Inquiry saved successfully to local log:', data.id);
  } catch (error) {
    console.error('Failed to write log to local storage', error);
  }
}

// Helper: Formulate Messenger Prefilled Deep Link
function generateMessengerDeepLink(data) {
  // Construct a beautiful receipt-style chat message
  const chatMessage = `Hello Gela's Sweet Bites! 🌸
I would like to make an order inquiry:

• Name: ${data.name}
• FB Profile: ${data.facebook}
• Contact No: ${data.phone}
• Sweet Choice: ${data.selection}
• Delivery/Pickup Date: ${data.date}
• Custom Details: ${data.details}

Looking forward to finalizing my order! Thank you!`;

  // Encode message for URL query
  const encodedText = encodeURIComponent(chatMessage);
  
  // Facebook Page Messenger deep link: m.me/pageusername
  // Page name matches the official URL: https://www.facebook.com/gelassweetbites/
  const mMeUrl = `https://m.me/gelassweetbites?text=${encodedText}`;
  
  // Bind link to success modal primary button
  const fbLinkBtn = document.getElementById('success-fb-link');
  fbLinkBtn.href = mMeUrl;
}

// Success Close trigger
document.getElementById('success-close-btn').addEventListener('click', closeAllModals);
