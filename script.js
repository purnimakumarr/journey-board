const sidebarMenuBtn = document.querySelector(".btn--sidebar-menu");
sidebarMenuBtn.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("active");
});

function toggleState(btn) {
  let id = btn.getAttribute("data-toggle");
  document.getElementById(id).classList.toggle("active");
  btn.classList.toggle("rotate");
}

const toggleStateBtnEls = document.querySelectorAll(".toggle-state-btn");
toggleStateBtnEls.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleState(btn);
  });
});

const threadToggleBtnEls = document.querySelectorAll(
  ".thread-toggle-state-btn"
);
threadToggleBtnEls.forEach((btn) => {
  btn.addEventListener("click", () => {
    toggleState(btn);
  });
});
