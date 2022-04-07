var navBar = document.querySelector(".navBar");
var expandBtn = document.getElementById("expandBtn");

var navLinks = document.getElementById("navLinks").getElementsByTagName("ol")[0].getElementsByTagName("a");

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

expandBtn.addEventListener("click", function expand() {
  if (!expandBtn.checked) {
    navBar.style.height = window.getComputedStyle(document.documentElement).getPropertyValue("--navBar-height");
  } else {
    navBar.style.height = window.getComputedStyle(document.documentElement).getPropertyValue("--expanded-navBar-height");
  }
});

window.addEventListener("resize", function reset(event) {
  if (window.innerWidth > 768) {
    expandBtn.checked = false;
    navBar.style.height = window.getComputedStyle(document.documentElement).getPropertyValue("--navBar-height");
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        if(window.innerWidth <= 768 && expandBtn.checked) {
          navBar.classList.add("noTransition");
          navBar.style.height = window.getComputedStyle(document.documentElement).getPropertyValue("--navBar-height");
          navBar.offsetHeight;
          navBar.classList.remove("noTransition");
          expandBtn.checked = false;
        }
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

initTabbedMenu();