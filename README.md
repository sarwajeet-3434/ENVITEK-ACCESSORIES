# ARB Accessories Store — Complete Setup Guide

## 📁 File Structure

```
arb-store/
├── index.html       ← Main store page
├── terms.html       ← Terms & Conditions page
├── style.css        ← All styles
├── db.js            ← Product database (edit this!)
├── app.js           ← Application logic
└── README.md        ← This file
```

---

## 🚀 Quick Start (Local)

1. Download all files into one folder
2. Open `index.html` in any browser
3. That's it — no server needed for basic use

---

## 🌐 Deploying Online (Free Options)

### Option A — Netlify (Easiest, Free)
1. Go to https://netlify.com and sign up
2. Drag & drop the `arb-store/` folder onto the Netlify dashboard
3. Your site goes live instantly at a `.netlify.app` URL
4. Connect a custom domain (e.g. store.arbaccessories.in) in Settings → Domains

### Option B — GitHub Pages (Free)
1. Create a GitHub account and new repository
2. Upload all files
3. Go to Settings → Pages → Source: main branch
4. Site goes live at `yourusername.github.io/repo-name`

### Option C — cPanel Hosting (Your Existing Hosting)
1. Login to cPanel → File Manager
2. Navigate to `public_html/store/` (or create subdirectory)
3. Upload all files
4. Access via `yourdomain.com/store/`

---

## 🛒 Adding / Editing Products (db.js)

Open `db.js` and edit the `products` array:

```js
{
  id: "p019",              // Unique ID (increment from last)
  category: "cell",        // Must match a category ID from DB.categories
  name: "PRODUCT NAME",
  price: 150,              // Price in ₹ (exclude GST)
  unit: "PCS",             // PCS / SET / KG / ROLL etc.
  minQty: 50,              // Minimum order quantity
  stock: true,             // true = In Stock, false = Out of Stock
  image: "images/p019.jpg",// Path to image or URL
  description: "Short description of product.",
},
```

---

## 📂 Adding Product Images

1. Create an `images/` folder inside `arb-store/`
2. Add product images named e.g. `p001.jpg`, `p002.jpg`
3. Update `image` field in `db.js` to `"images/p001.jpg"`

Recommended image size: **200×200px**, JPG or PNG

---

## 📧 Quote Email Setup

In `app.js`, the `submitQuote()` function sends an email via the user's default mail client.

To change the recipient email:
```js
// In app.js → submitQuote()
window.location.href = `mailto:YOUR_EMAIL@domain.com?subject=...`
```

For a proper contact form with server-side email, integrate:
- **Formspree** (free): Replace `submitQuote()` with a POST to `https://formspree.io/f/YOUR_ID`
- **EmailJS**: Free tier supports 200 emails/month

### Formspree Example:
```js
async function submitQuote() {
  await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ items: quoteItems, total: totalValue })
  });
  showToast("✅ Quote sent successfully!");
}
```

---

## 🗄️ Database Options (For Scaling Up)

The current setup uses a static JS file. For a larger catalogue, migrate to:

### Option 1 — Google Sheets as Database (Free)
1. Create a Google Sheet with columns: id, category, name, price, unit, minQty, stock, image, description
2. Publish as CSV (File → Share → Publish to web → CSV)
3. Fetch it in `app.js`:
```js
const res = await fetch("YOUR_GOOGLE_SHEET_CSV_URL");
const text = await res.text();
// Parse CSV → products array
```

### Option 2 — Firebase Firestore (Free Tier)
1. Create a Firebase project at https://console.firebase.google.com
2. Enable Firestore database
3. Add products as documents in a `products` collection
4. Use Firebase SDK to fetch products in `app.js`

### Option 3 — Supabase (Free, PostgreSQL)
1. Create project at https://supabase.com
2. Create a `products` table matching the db.js structure
3. Use the Supabase JS client to query products

### Option 4 — WordPress + WooCommerce
Full CMS solution. Host on any cPanel server. Import products via WooCommerce CSV import.

---

## 🎨 Customization

### Change Company Name / Logo
Edit `index.html`:
```html
<div class="logo-box">ARB</div>
<span class="logo-main">accessories</span>
<span class="logo-sub">your tagline here</span>
```

### Change Colors
Edit `style.css` CSS variables at the top:
```css
:root {
  --accent:  #00d4ff;   /* Primary blue */
  --accent2: #ff6b35;   /* Orange for prices */
  --bg:      #0d0f1a;   /* Main background */
}
```

### Change Contact Email
Search for `info@arbaccessories.in` in all files and replace.

---

## 📱 Features Included

- ✅ Responsive mobile layout
- ✅ Category sidebar + tab navigation
- ✅ Product search
- ✅ Price sort (low/high)
- ✅ Add to Quote cart
- ✅ Quantity controls with MOQ enforcement
- ✅ Quote total calculation
- ✅ Quote persists on page refresh (localStorage)
- ✅ Email quote request (mailto)
- ✅ Out of Stock indicator
- ✅ Toast notifications
- ✅ Terms & Conditions page

---

## 📞 Support

For customization or adding more features (admin panel, payments, user accounts),
contact your web developer or hire on Fiverr / Upwork.
