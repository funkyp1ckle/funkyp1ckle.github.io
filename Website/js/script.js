var isNavBarOpen = false;
var navBar = document.querySelector(".navBar");
var navBarLinks = navBar.querySelector(".navLinks");
var navBarList = navBarLinks.getElementsByTagName("ol")[0];
var expandBtn = navBar.querySelector(".expand");

function expand() {
  expandBtn.classList.toggle("open");
  navBar.style.height = "350px";
  navBarLinks.style.display = "block";
  navBarLinks.style.height = "80%";
  navBarList.style.display = "block";
  navBarList.style.height = "100%";
  let navBarListElements = navBarList.getElementsByTagName("li");
  for (let i = 0; i < navBarListElements.length; i++) {
    let element = navBarListElements[i];
    element.style.display = "flex";
    element.style.height = "25%";
  }
}

function collapse() {
  expandBtn.classList.toggle("open");
  navBar.style.height = "70px";
  navBarLinks.style.display = "none";
  navBarLinks.style.height = "0px";;
  navBarList.style.display = "none";
  navBarList.style.height = "0px";
  let navBarListElements = navBarList.getElementsByTagName("li");
  for (let i = 0; i < navBarListElements.length; i++) {
    let element = navBarListElements[i];
    element.style.display = "none";
    element.style.height = "0px";
  }
}

function updateNavBarButton() {
  if (isNavBarOpen) {
    collapse();
  } else {
    expand();
  }
  isNavBarOpen = !isNavBarOpen;
}

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
  updateNavBarButton();
});

initTabbedMenu();

window.addEventListener("resize", function reset(event) {
  if (window.innerWidth > 768) {
    if (isNavBarOpen) {
      expandBtn.classList.toggle("open");
      isNavBarOpen = false;
    }
    navBar.style.height = "70px";
    navBarLinks.style.display = "block";
    navBarLinks.style.height = "100%";
    navBarList.style.display = "inline-flex";
    navBarList.style.height = "100%";
    let navBarListElements = navBarList.getElementsByTagName("li");
    for (let i = 0; i < navBarListElements.length; i++) {
      navBarListElements[i].style.height = "auto";
      navBarListElements[i].style.display = "flex";
    }
  } else {
    navBarLinks.style.display = "none";
    navBarLinks.style.height = "0";
    navBarList.style.display = "none";
    navBarList.style.height = "0";
    let navBarListElements = navBarList.getElementsByTagName("li");
    for (let i = 0; i < navBarListElements.length; i++) {
      navBarListElements[i].style.height = "0";
      navBarListElements[i].style.display = "none";
    }
  }
});
