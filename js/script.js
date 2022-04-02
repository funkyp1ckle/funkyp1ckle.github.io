var navBar = document.querySelector(".navBar");
var expandBtn = document.getElementById("expandBtn");

function initTabbedMenu() {
  var tabbedMenu = document.querySelector(".tabbed-pane");
  var tabbedPanel = tabbedMenu.querySelector(".tabbed-pane-inner").getElementsByTagName("input");
  var tabbedContent = tabbedMenu.querySelector(".job-container").getElementsByClassName("job");

  var lastSelectedPanelIdx = 0;
  tabbedContent[0].style.display = "block";

  for (let i = 0; i < tabbedPanel.length; i++) {
    tabbedPanel[i].addEventListener("change", function() {
      tabbedContent[lastSelectedPanelIdx].style.display = "none";
      tabbedContent[i].style.display = "block";
      lastSelectedPanelIdx = i;
    });
  }
}

expandBtn.addEventListener("click", function() {
  if (!expandBtn.checked) {
    navBar.style.height = "70px";
  } else {
    navBar.style.height = "350px";
  }
});

window.addEventListener("resize", function reset(event) {
  if (window.innerWidth > 768) {
    expandBtn.checked = false;
    navBar.style.height = "70px";
  }
});

initTabbedMenu();