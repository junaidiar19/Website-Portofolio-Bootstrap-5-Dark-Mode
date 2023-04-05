let section = document.querySelectorAll("section");
let lists = document.querySelectorAll(".navbar-nav .nav-link");

// Get the button scroll
let buttonScroll = document.getElementById("scrollToTopButton");

function activeLink(navLink) {
  lists.forEach(item => item.classList.remove("active"));
  navLink.classList.add("active");
}

lists.forEach(item =>
  item.addEventListener("click", function () {
    activeLink(this);
  })
);

window.onscroll = () => {
  section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 60;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      const target = document.querySelector(`[href='#${id}']`);
      activeLink(target);
    }
  });

  // trigger scrolling to top
  scrollingToTop();
};

function scrollingToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonScroll.style.display = "block";
  } else {
    buttonScroll.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
