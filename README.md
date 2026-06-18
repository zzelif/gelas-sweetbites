# Gela's Sweet Bites

A premium, elegant, and artisanal marketing landing page for **Gela's Sweet Bites**, a local home-based bakery located in Antipolo City, Philippines, specializing in custom cakes, cookies, fudgy brownies, and fresh breads.

## Overview

The goal is to create a marketing website that is both elegant and functional, with a focus on high-quality visuals and an interactive user experience. The website should be responsive and mobile-friendly, with a modern and professional design. It should also be easy to navigate and use, with clear calls to action and an intuitive user interface. In addition, the website should be optimized for search engines to help attract potential customers.

## Design System

### Base & Styling

#### Landing Page with Split Hero layout

- Left: Warm, elegant typography,call to actions, and social proof badge
- Right: Floating elegant showcase featuring a rotation or stack of signature baked goods.

#### Product Showcase Section

- Tabs: Signature Cakes, Gooey Cookies, Fudgy Brownies, Artisanal Breads.
- Detailed product cards: Image, price in Philippine Pesos (₱), description, and "Order Inquiry" button.

#### Social Proof

A masonry wall showcasing real-looking Facebook community recommendations, follower posts, and glowing reviews.

#### Footer

Warm closing, footer links, and Facebook icon linked to their page

#### Modals

- Product Detail Modal: A detailed overlay showing ingredients, serving sizes, pricing, and a quick add-to-inquiry trigger.
- Order Inquiry Modal: A beautiful, user-friendly multi-step form to collect customer details (Name, Contact, Selection, Target Date, custom requests) before guiding them to FB Messenger.

### Tokens

``css
:root {
  --color-primary: #E5989B;     /*Elegant Rose Pink*/
  --color-primary-hover: #D87F82;
  --color-accent: #D4AF37;      /*Champagne Gold*/
  --color-background: #FCF8F6;  /*Warm Ivory*/
  --color-surface: #FFFFFF;     /*White Card Surface*/
  --color-text: #3C2F2F;        /*Deep Espresso Brown*/
  --color-muted: #8E7680;       /*Soft Taupe*/
  
  --font-headings: 'Cormorant Garamond', serif;
  --font-body: 'Montserrat', sans-serif;
  --font-accent: 'Playball', cursive;
  
  --radius-card: 16px;
  --radius-button: 30px;
  --shadow-soft: 0 10px 30px rgba(60, 47, 47, 0.06);
  --shadow-hover: 0 20px 40px rgba(229, 152, 155, 0.15);
}
``

- Custom typography layout leveraging Google Fonts.
- Pure CSS animations for loading states, fade-ins, and button hover states.
- Clean responsive layout rules using CSS Flexbox and Grid
