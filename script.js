function onNavChange(nav) {
  if (nav == "nav-home") {
    document.getElementById("home").style.display = "block";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";

    document.getElementById("nav-home").classList.add("active");
    document.getElementById("nav-gallery").classList.remove("active");
    document.getElementById("nav-about").classList.remove("active");
    document.getElementById("nav-contact").classList.remove("active");
  } else if (nav == "nav-gallery") {
    document.getElementById("home").style.display = "none";
    document.getElementById("gallery").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";

    document.getElementById("nav-home").classList.remove("active");
    document.getElementById("nav-gallery").classList.add("active");
    document.getElementById("nav-about").classList.remove("active");
    document.getElementById("nav-contact").classList.remove("active");
  } else if (nav == "nav-about") {
    document.getElementById("home").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("contact").style.display = "none";

    document.getElementById("nav-home").classList.remove("active");
    document.getElementById("nav-gallery").classList.remove("active");
    document.getElementById("nav-about").classList.add("active");
    document.getElementById("nav-contact").classList.remove("active");
  } else if (nav == "nav-contact") {
    document.getElementById("home").style.display = "none";
    document.getElementById("gallery").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "block";

    document.getElementById("nav-home").classList.remove("active");
    document.getElementById("nav-gallery").classList.remove("active");
    document.getElementById("nav-about").classList.remove("active");
    document.getElementById("nav-contact").classList.add("active");
  }
}
