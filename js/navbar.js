function responsiveNavBar() {
    var navBar = document.getElementById("responsive_navBar");
    
    if (navBar.className === "nav_bar") {
      navBar.className += " responsive";
    } else {
      navBar.className = "nav_bar";
    }
  } 