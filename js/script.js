var navBar = document.querySelector(".navBar");
var expandBtn = document.getElementById("expandBtn");

function initTabbedMenu() {
  var tabbedPanel = document.querySelector(".tabbed-pane").querySelector(".tabbed-pane-inner").getElementsByTagName("input");
  var tabbedContent = document.querySelector(".job-container").getElementsByClassName("job");
  var lastSelectedPanelIdx = 0;
  var backBtn = document.getElementById("back");
  var nextBtn = document.getElementById("next");

  tabbedContent[0].style.display = "block";

  for (let i = 0; i < tabbedPanel.length; i++) {
    tabbedPanel[i].addEventListener("change", function () {
      tabbedContent[lastSelectedPanelIdx].style.display = "none";
      tabbedContent[i].style.display = "block";
      lastSelectedPanelIdx = i;
    });
  }

  backBtn.disabled = true;

  nextBtn.addEventListener("click", function nextJob() {
    tabbedContent[lastSelectedPanelIdx].style.display = "none";
    tabbedPanel[lastSelectedPanelIdx].checked = false;
    lastSelectedPanelIdx++;
    tabbedContent[lastSelectedPanelIdx].style.display = "block";
    tabbedPanel[lastSelectedPanelIdx].checked = true;
    if(lastSelectedPanelIdx == tabbedContent.length - 1) 
      nextBtn.disabled = true;
    if(backBtn.disabled)
      backBtn.disabled = false;
  });
  
  backBtn.addEventListener("click", function prevJob() {
    tabbedContent[lastSelectedPanelIdx].style.display = "none";
    tabbedPanel[lastSelectedPanelIdx].checked = false;
    lastSelectedPanelIdx--;
    tabbedContent[lastSelectedPanelIdx].style.display = "block";
    tabbedPanel[lastSelectedPanelIdx].checked = true;
    if(lastSelectedPanelIdx == 0) {
      backBtn.disabled = true;
    if(nextBtn.disabled)
      nextBtn.disabled = false;
  });
}

expandBtn.addEventListener("click", function expand() {
  if (!expandBtn.checked) {
    navBar.style.height = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--navBar-height");
  } else {
    navBar.style.height = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--expanded-navBar-height");
  }
});

window.addEventListener("resize", function reset() {
  if (window.innerWidth > 768) {
    expandBtn.checked = false;
    navBar.style.height = window
      .getComputedStyle(document.documentElement)
      .getPropertyValue("--navBar-height");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    if (window.innerWidth <= 768 && expandBtn.checked) {
      navBar.classList.add("noTransition");
      navBar.style.height = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue("--navBar-height");
      navBar.offsetHeight;
      navBar.classList.remove("noTransition");
      expandBtn.checked = false;
    }
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

initTabbedMenu();
