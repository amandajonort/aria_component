// meny
var menuButton = document.getElementById("menuButton");
var menuContent = document.getElementById("menuContent");

function toggleMenu() {
  var expanded = menuButton.getAttribute("aria-expanded") === "true" || false;
  menuButton.setAttribute("aria-expanded", !expanded);
  menuContent.setAttribute("aria-hidden", expanded);
  menuContent.style.display = expanded ? "none" : "block";

  // Fokusera på den första länken när menyn öppnas
  // för att användaren ska kunna navigera lättare
  if (!expanded) {
    var firstLink = menuContent.querySelector("a");
    if (firstLink) {
      firstLink.focus();
    }
  }
}

// Stäng menyn när användaren klickar utanför den
document.addEventListener("click", function (event) {
  if (
    !menuButton.contains(event.target) &&
    !menuContent.contains(event.target)
  ) {
    menuButton.setAttribute("aria-expanded", "false");
    menuContent.setAttribute("aria-hidden", "true");
    menuContent.style.display = "none";
  }
});

// Stäng menyn när användaren trycker på Escape-tangenten
document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    menuButton.getAttribute("aria-expanded") === "true"
  ) {
    toggleMenu();
  }
});

// dialog-modul-DIV
var modal = document.getElementById("accessibleModal");
var modalBackdrop = document.getElementById("modalBackdrop");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

function openModal() {
  modal.style.display = "block";
  modalBackdrop.style.display = "block";
  modal.setAttribute("aria-hidden", "false");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("tabindex", "0");
  closeModalBtn.focus();
}

function closeModal() {
  modal.style.display = "none";
  modalBackdrop.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("aria-modal", "false");
  modal.setAttribute("tabindex", "-1");
  openModalBtn.focus();
}

// Stäng modalfönstret när användaren trycker på Escape-tangenten
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    closeModal();
  }
});
