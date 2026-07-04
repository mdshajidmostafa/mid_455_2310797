/* ============================================================
   FORGEBYTE PC PARTS — shared script
   Handles: cart badge counter, quote button, contact form check
   ============================================================ */

// Keeps a simple running count of items "added to build" (session only)
let cartCount = 0;

// Called via onclick="addToBuild('RTX 4070 Ti')" from product buttons
function addToBuild(partName) {
  cartCount++;
  const badge = document.getElementById("cart-badge");
  if (badge) {
    badge.textContent = cartCount;
  }
  const msg = document.getElementById("product-msg");
  if (msg) {
    msg.textContent = partName + " added to your build. (" + cartCount + " item" + (cartCount > 1 ? "s" : "") + " total)";
    msg.style.color = "var(--success)";
  }
}

// Called via onclick="requestQuote()" on the contact page
function requestQuote() {
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const status = document.getElementById("form-status");

  if (!nameField.value.trim() || !emailField.value.trim()) {
    status.textContent = "Please fill in your name and email before requesting a quote.";
    status.style.color = "#ff6161";
    return;
  }

  status.textContent = "Thanks, " + nameField.value.trim() + "! Your custom build quote request has been queued. We will reply at " + emailField.value.trim() + ".";
  status.style.color = "var(--success)";
}

// Highlights the current page's nav link
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav.navbar a");
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  links.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});