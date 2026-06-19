/* ==========================================================================
   Gela's Sweet Bites - Interactive Frontend Logic
   Handles: Tab controls, Modals, Form validation, Local storage log, and
            dynamic Facebook Messenger deep link generation.
   ========================================================================== */

// 1. Product Detailed Metadata
const productData = {
  'cake-chocolate': {
    title: 'Moist Chocolate Custom Cake',
    price: 'Starts at ₱750.00',
    desc: 'Our bestselling decadent 6x3 moist chocolate cake is baked with rich premium cocoa, layered with luscious chocolate ganache filling, and finished with elegant, festive piping. The perfect center-piece for any holiday or celebration.',
    tag: 'Signature',
    ingredients: 'Premium local cocoa, high-grade dark chocolate, fresh butter, refined flour, cane sugar, farm eggs, chocolate ganache filling.',
    sizing: 'Serves 6-8 people. Dimensions: 6" diameter, 3" height.',
    img: 'images/products/chocolate_cake.png',
    optionValue: 'Moist Chocolate Custom Cake'
  },
  'cake-mocha': {
    title: 'Moist Mocha Custom Cake',
    price: 'Starts at ₱750.00',
    desc: 'An exquisite 6x3 moist mocha cake featuring a light and airy espresso-infused sponge, layered with velvety mocha ganache, and decorated with a beautiful green buttercream piping border. Rich, creamy, and subtly bittersweet.',
    tag: 'Signature',
    ingredients: 'Espresso coffee infusion, local cocoa powder, dairy buttercream, wheat flour, organic sugar, fresh eggs.',
    sizing: 'Serves 6-8 people. Dimensions: 6" diameter, 3" height.',
    img: 'images/products/mocha_cake.png',
    optionValue: 'Moist Mocha Custom Cake'
  },
  'cake-strawberry': {
    title: 'Classic Strawberry Shortcake',
    price: 'Starts at ₱850.00',
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

// ==========================================================================
// 6. Advanced Interactive Motion Refinements (Lightweight & Accessible)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  
  // 6.1. Staggered H1 Character Reveal (a11y Compliant)
  const staggerTitle = document.getElementById('hero-stagger-title');
  if (staggerTitle) {
    staggerTitle.setAttribute('aria-label', staggerTitle.textContent);

    const originalNodes = Array.from(staggerTitle.childNodes);
    staggerTitle.innerHTML = ''; // Clear contents
    
    let delay = 0;
    
    // Process each node type individually
    originalNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        // Handle standard text segments
        processTextSegments(node.textContent, staggerTitle);
      } else if (node.nodeName === 'EM') {
        // Create a new EM element to preserve your CSS target
        const emClone = document.createElement('em');
        staggerTitle.appendChild(emClone);
        processTextSegments(node.textContent, emClone);
      }
    });
    
    function processTextSegments(text, container) {
      const words = text.split(/(\s+)/);
      
      words.forEach(word => {
        if (/\s+/.test(word)) {
          if (word.includes('\n')) {
            container.appendChild(document.createElement('br'));
          } else {
            container.appendChild(document.createTextNode(' '));
          }
        } else {
          const wordSpan = document.createElement('span');
          wordSpan.style.display = 'inline-block';
          wordSpan.style.whiteSpace = 'nowrap';
          
          for (let i = 0; i < word.length; i++) {
            const charSpan = document.createElement('span');
            charSpan.textContent = word[i];
            charSpan.className = 'stagger-letter';
            charSpan.setAttribute('aria-hidden', 'true');
            charSpan.style.setProperty('--delay', `${delay}ms`);
            wordSpan.appendChild(charSpan);
            delay += 40; 
          }
          container.appendChild(wordSpan);
        }
      });
    }
  }

  // 6.2. Throttled & Cached 3D Mouse Tilt & Liquid Morphing Mechanics (Continuous Ticker)
  const tiltCards = document.querySelectorAll('.tilt-card');
  tiltCards.forEach(card => {
    const inner = card.querySelector('.tilt-inner');
    if (!inner) return;
    
    // Find the blob image inside this card if one exists
    const blob = card.querySelector('.dynamic-blob, .product-img');
    
    let bounds = null;
    let rAFId = null;
    let isHovered = false;
    let mouseX = 0;
    let mouseY = 0;
    
    const updateBounds = () => {
      bounds = card.getBoundingClientRect();
    };
    
    // Continuous rendering ticker loop on hover
    const tick = () => {
      if (!isHovered) return;
      
      const w = bounds ? bounds.width : 200;
      const h = bounds ? bounds.height : 200;
      
      // Calculate rotation offset percentage (-0.5 to 0.5)
      const xPct = bounds ? (mouseX / w - 0.5) : 0;
      const yPct = bounds ? (mouseY / h - 0.5) : 0;
      
      // Limit tilt to 12 degrees max
      const rotX = -yPct * 12;
      const rotY = xPct * 12;
      
      // Time-based continuous waves for organic sloshing effect
      const time = Date.now() * 0.003;
      const waveX = Math.sin(time) * 6; // 6% wave amplitude
      const waveY = Math.cos(time) * 6;
      
      let borderRadiusValue = '';
      if (blob) {
        const x = xPct + 0.5;
        const y = yPct + 0.5;
        
        // Base value (~45%) + Mouse direction bias (~25%) + Gentle wave ripple (~6%)
        const tlX = Math.round(35 + y * 25 + waveX);
        const trX = Math.round(65 - y * 25 - waveX);
        const brX = Math.round(55 + x * 25 + waveY);
        const blX = Math.round(45 - x * 25 - waveY);
        
        const tlY = Math.round(45 + x * 25 - waveY);
        const trY = Math.round(55 - x * 25 + waveY);
        const brY = Math.round(45 + y * 25 - waveX);
        const blY = Math.round(55 - y * 25 + waveX);
        
        borderRadiusValue = `${tlX}% ${trX}% ${brX}% ${blX}% / ${tlY}% ${trY}% ${brY}% ${blY}%`;
      }
      
      // Apply transforms
      inner.style.setProperty('--rx', `${rotX.toFixed(2)}deg`);
      inner.style.setProperty('--ry', `${rotY.toFixed(2)}deg`);
      
      if (blob) {
        if (borderRadiusValue) {
          blob.style.borderRadius = borderRadiusValue;
        }
        // Parallax sloshing shift: translate the blob image slightly toward the mouse
        const shiftX = (xPct * 20).toFixed(1);
        const shiftY = (yPct * 20).toFixed(1);
        blob.style.transform = `translate3d(${shiftX}px, ${shiftY}px, 30px) scale(1.15)`;
      }
      
      rAFId = requestAnimationFrame(tick);
    };
    
    // Cache dimensions on enter, avoiding getBoundingClientRect on mousemove
    card.addEventListener('mouseenter', () => {
      isHovered = true;
      updateBounds();
      if (blob) {
        // Use a fast spring transition for active mouse follow morphs
        blob.style.transition = 'border-radius 0.15s cubic-bezier(0.215, 0.61, 0.355, 1), transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1)';
      }
      tick();
    });
    
    window.addEventListener('resize', () => {
      if (bounds) updateBounds();
    });
    
    card.addEventListener('mousemove', (e) => {
      if (!bounds) updateBounds();
      mouseX = e.clientX - bounds.left;
      mouseY = e.clientY - bounds.top;
    });
    
    card.addEventListener('mouseleave', () => {
      isHovered = false;
      if (rAFId) cancelAnimationFrame(rAFId);
      
      rAFId = requestAnimationFrame(() => {
        inner.style.setProperty('--rx', '0deg');
        inner.style.setProperty('--ry', '0deg');
        if (blob) {
          blob.style.borderRadius = ''; // Let CSS transition back over 1s
          blob.style.transform = ''; // Slide back to center over 0.4s
          blob.style.transition = ''; // Restore default CSS transitions
        }
      });
      bounds = null; // Reset bounds cache
    });
  });

  // 6.3. IntersectionObserver scroll reveals
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target); // Trigger once
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });
  
  revealElements.forEach(el => revealObserver.observe(el));

  // 6.4. Image Lightbox Modal Logic
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDesc = document.getElementById('lightbox-desc');
  const lightboxCloseBtn = document.querySelector('.lightbox-close-btn');
  const lightboxTriggerCards = document.querySelectorAll('[data-lightbox="true"]');
  
  lightboxTriggerCards.forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      
      const imgSrc = card.getAttribute('data-img');
      const imgTitle = card.getAttribute('data-title');
      const imgDesc = card.getAttribute('data-desc');
      
      if (imgSrc) {
        lightboxImg.src = imgSrc;
        lightboxImg.alt = imgTitle || 'Pastry image';
        lightboxTitle.textContent = imgTitle || '';
        lightboxDesc.textContent = imgDesc || '';
        
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  
  if (lightboxModal) {
    const backdrop = lightboxModal.querySelector('.modal-backdrop');
    if (backdrop) {
      backdrop.addEventListener('click', () => {
        lightboxModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    }
  }
});
