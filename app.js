// ============================================================
//  ARB ACCESSORIES — APPLICATION LOGIC
// ============================================================

// 👇 CHANGE THIS to your WhatsApp number (country code + number, no + or spaces)
const WHATSAPP_NUMBER = "919270155430";

let activeCategory = "all";
let quoteItems = JSON.parse(localStorage.getItem("arb_quote") || "[]");

// ── SYNC WITH ADMIN ──────────────────────────────────────────
// Admin saves to localStorage key "arb_admin_products".
// Read from there first so products added in admin appear instantly.
// Falls back to db.js if admin has never been opened.
const _adminSaved = localStorage.getItem("arb_admin_products");
if (_adminSaved) {
  try { DB.products = JSON.parse(_adminSaved); } catch(e) { console.warn("Could not load admin products", e); }
}

// ── INIT ────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  buildCategoryTabs();
  buildSidebar();
  renderProducts();
  renderQuote();
});

// ── CATEGORIES ──────────────────────────────────────────────
function buildCategoryTabs() {
  const tabs = document.getElementById("catTabs");
  const all = document.createElement("button");
  all.className = "cat-tab active";
  all.textContent = "All";
  all.onclick = () => setCategory("all", all);
  tabs.appendChild(all);

  DB.categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "cat-tab";
    btn.textContent = cat.label;
    btn.dataset.id = cat.id;
    btn.onclick = () => setCategory(cat.id, btn);
    tabs.appendChild(btn);
  });
}

function buildSidebar() {
  const list = document.getElementById("sidebarList");
  const allLi = document.createElement("li");
  allLi.className = "sidebar-item active";
  allLi.textContent = "All Products";
  allLi.onclick = () => setCategory("all", null);
  list.appendChild(allLi);

  DB.categories.forEach(cat => {
    const li = document.createElement("li");
    li.className = "sidebar-item";
    li.textContent = cat.label;
    li.dataset.id = cat.id;
    li.onclick = () => setCategory(cat.id, null);
    list.appendChild(li);
  });
}

function setCategory(id, triggerEl) {
  activeCategory = id;
  document.querySelectorAll(".cat-tab").forEach(t => t.classList.remove("active"));
  document.querySelectorAll(".sidebar-item").forEach(s => s.classList.remove("active"));

  if (id === "all") {
    document.querySelector(".cat-tab")?.classList.add("active");
    document.querySelector(".sidebar-item")?.classList.add("active");
    document.getElementById("sectionTitle").textContent = "All Products";
  } else {
    document.querySelectorAll(`.cat-tab[data-id="${id}"]`).forEach(t => t.classList.add("active"));
    document.querySelectorAll(`.sidebar-item[data-id="${id}"]`).forEach(s => s.classList.add("active"));
    const cat = DB.categories.find(c => c.id === id);
    document.getElementById("sectionTitle").textContent = cat ? cat.label : id;
  }
  renderProducts();
}

// ── PRODUCTS ────────────────────────────────────────────────
function renderProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  let products = activeCategory === "all"
    ? DB.products
    : DB.products.filter(p => p.category === activeCategory);

  const q = document.getElementById("searchInput")?.value?.toLowerCase() || "";
  if (q) products = products.filter(p => p.name.toLowerCase().includes(q));

  const sort = document.getElementById("priceFilter")?.value;
  if (sort === "low") products = [...products].sort((a, b) => a.price - b.price);
  if (sort === "high") products = [...products].sort((a, b) => b.price - a.price);

  if (products.length === 0) {
    list.innerHTML = `<div class="no-products">No products found.</div>`;
    return;
  }

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <div class="product-img-wrap">
        <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy">
      </div>
      <div class="product-info">
        <h4 class="product-name">${p.name}</h4>
        <p class="product-desc">${p.description}</p>
        <div class="product-meta">
          <span class="product-moq">Min. Qty: <strong>${p.minQty}</strong></span>
          <span class="product-price">₹${p.price.toLocaleString()}/${p.unit}</span>
        </div>
      </div>
      <div class="product-action">
        ${p.stock
          ? `<button class="btn-quote" onclick="addToQuote('${p.id}','${p.name.replace(/'/g,"\\'")}',${p.price},${p.minQty},'${p.unit}')">Add to Quote +</button>`
          : `<button class="btn-oos" disabled>Out of Stock</button>`}
      </div>
    `;
    list.appendChild(card);
  });
}

function filterProducts() { renderProducts(); }

// ── QUOTE ────────────────────────────────────────────────────
function addToQuote(id, name, price, minQty, unit) {
  const existing = quoteItems.find(i => i.id === id);
  if (existing) {
    existing.qty += minQty;
  } else {
    quoteItems.push({ id, name, price, qty: minQty, minQty, unit: unit || "PCS" });
  }
  saveQuote();
  renderQuote();
  showToast(`✅ Added to quote`);
  document.getElementById("quotePanel").classList.add("open");
}

function removeFromQuote(id) {
  quoteItems = quoteItems.filter(i => i.id !== id);
  saveQuote();
  renderQuote();
}

function changeQty(id, delta) {
  const item = quoteItems.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(item.minQty, item.qty + delta * item.minQty);
  saveQuote();
  renderQuote();
}

function clearQuote() {
  quoteItems = [];
  saveQuote();
  renderQuote();
}

function saveQuote() {
  localStorage.setItem("arb_quote", JSON.stringify(quoteItems));
  document.getElementById("cartCount").textContent = quoteItems.length;
}

function renderQuote() {
  const container = document.getElementById("quoteItems");
  const footer    = document.getElementById("quoteFooter");
  document.getElementById("cartCount").textContent = quoteItems.length;

  if (quoteItems.length === 0) {
    container.innerHTML = `<div class="quote-empty"><div class="quote-empty-icon">🛒</div><p>Quote is empty</p></div>`;
    footer.style.display = "none";
    return;
  }

  let total = 0;
  container.innerHTML = "";
  quoteItems.forEach(item => {
    total += item.price * item.qty;
    const el = document.createElement("div");
    el.className = "quote-item";
    el.innerHTML = `
      <div class="qi-name">${item.name.substring(0, 45)}${item.name.length > 45 ? "…" : ""}</div>
      <div class="qi-row">
        <div class="qi-qty">
          <button onclick="changeQty('${item.id}',-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty('${item.id}',1)">+</button>
        </div>
        <div class="qi-price">₹${(item.price * item.qty).toLocaleString()}</div>
        <button class="qi-remove" onclick="removeFromQuote('${item.id}')">✕</button>
      </div>
    `;
    container.appendChild(el);
  });

  document.getElementById("quoteTotal").textContent = `₹${total.toLocaleString()}`;
  footer.style.display = "block";
}

// ── WHATSAPP RFQ ─────────────────────────────────────────────
function submitQuote() {
  if (quoteItems.length === 0) return;

  // Build live summary inside modal
  const summary = document.getElementById("waSummary");
  const total   = quoteItems.reduce((s, i) => s + i.price * i.qty, 0);
  const gst     = Math.round(total * 0.18);

  summary.innerHTML =
    quoteItems.map(i => `
      <div class="wa-summary-item">
        <span class="wa-item-name">${i.name.substring(0,46)}${i.name.length>46?"…":""}<br>
          <small style="color:#7a82a8">Qty: ${i.qty} ${i.unit}</small>
        </span>
        <span class="wa-item-detail">₹${(i.price * i.qty).toLocaleString()}</span>
      </div>
    `).join("") +
    `<div class="wa-summary-total">
      Total (excl. GST) <span>₹${total.toLocaleString()}</span>
    </div>`;

  // Clear previous inputs
  document.getElementById("waName").value = "";
  document.getElementById("waPhone").value = "";
  document.getElementById("waName").classList.remove("wa-error");

  // Show modal
  document.getElementById("waModal").style.display = "flex";
  setTimeout(() => document.getElementById("waName").focus(), 150);
}

function sendToWhatsApp() {
  const name  = document.getElementById("waName").value.trim();
  const phone = document.getElementById("waPhone").value.trim();

  if (!name) {
    const inp = document.getElementById("waName");
    inp.classList.add("wa-error");
    inp.placeholder = "⚠ Name is required";
    inp.focus();
    return;
  }

  const total = quoteItems.reduce((s, i) => s + i.price * i.qty, 0);
  const gst   = Math.round(total * 0.18);

  let msg = `🔋 *RFQ – ARB Accessories*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `👤 *Name:* ${name}\n`;
  if (phone) msg += `📞 *Phone:* ${phone}\n`;
  msg += `📅 *Date:* ${new Date().toLocaleDateString("en-IN", { day:"2-digit", month:"short", year:"numeric" })}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `📦 *Items Requested:*\n\n`;

  quoteItems.forEach((i, idx) => {
    msg += `*${idx + 1}. ${i.name}*\n`;
    msg += `   • Qty: ${i.qty} ${i.unit}\n`;
    msg += `   • Unit Price: ₹${i.price.toLocaleString()}\n`;
    msg += `   • Subtotal: ₹${(i.price * i.qty).toLocaleString()}\n\n`;
  });

  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 *Amount (excl. GST):* ₹${total.toLocaleString()}\n`;
  msg += `🧾 *GST @18%:* ₹${gst.toLocaleString()}\n`;
  msg += `✅ *Grand Total:* ₹${(total + gst).toLocaleString()}\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `_Kindly confirm stock availability and share GST invoice. Thank you!_`;

  closeWaModal();
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  showToast("✅ Opening WhatsApp…");
}

function closeWaModal() {
  document.getElementById("waModal").style.display = "none";
}

// ── UI HELPERS ───────────────────────────────────────────────
function toggleSearch() {
  const bar = document.getElementById("searchBar");
  bar.style.display = bar.style.display === "none" ? "flex" : "none";
  if (bar.style.display === "flex") document.getElementById("searchInput").focus();
}

function toggleQuote() {
  const panel   = document.getElementById("quotePanel");
  const overlay = document.getElementById("modalOverlay");
  const open    = panel.classList.toggle("open");
  overlay.style.display = open ? "block" : "none";
}

function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  setTimeout(() => t.classList.remove("show"), 2800);
}