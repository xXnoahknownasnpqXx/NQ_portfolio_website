/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function responsiveNavBar() {
    var x = document.getElementById("nav_bar_responsive");
    if (x.className === "nav_bar") {
      x.className += " responsive";
    } else {
      x.className = "nav_bar";
    }
  } 