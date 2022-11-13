// MAKE THE SIDEBAR WORK
const sidebarMenuBtn = document.querySelector(".btn--sidebar-menu");
sidebarMenuBtn.addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("active");
});

// IMPLEMENTATION OF TOGGLE STATES OF THE ASSETS
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

let assetEls = document.querySelectorAll(".project-task");
function addDynamicFunctionality(tasksJSON) {
  assetEls.forEach((asset) => {
    let assetName = asset.getAttribute("data-asset");
    let assets = tasksJSON.tasks[0].assets;
    for (let i = 0; i < assets.length; i++) {
      if (assets[i].asset_title == assetName) {
        let assetHeadingEl = asset.querySelector(".task-heading");
        assetHeadingEl.innerHTML = assets[i].asset_title;
        let assetInnerEl = asset.querySelector(".asset-inner");
        if (
          assets[i].display_asset_url != "" &&
          assets[i].display_asset_url != null
        ) {
          assetInnerEl.src = assets[i].display_asset_url;
        } else if (
          assets[i].display_asset_video != "" &&
          assets[i].display_asset_video != null
        ) {
          assetInnerEl.src = assets[i].display_asset_video;
        } else if (
          assets[i].display_asset_docs != "" &&
          assets[i].display_asset_docs != null
        ) {
          assetInnerEl.src = assets[i].display_asset_docs;
        } else if (
          assets[i].display_asset_reflection != "" &&
          assets[i].display_asset_reflection != null
        ) {
          assetInnerEl.innerHTML = assets[i].display_asset_reflection;
        } else if (
          assets[i].display_asset_reflection != "" &&
          assets[i].display_asset_reflection != null
        ) {
          assetInnerEl.src = assets[i].display_asset_reflection;
        }
      }
    }
  });
}

// GETTING JSON USING FETCH API
fetch("./tasks.json")
  .then((response) => response.json())
  .then((data) => {
    addDynamicFunctionality(data);
  })
  .catch((error) => console.error(error));
