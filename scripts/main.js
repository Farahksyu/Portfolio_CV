// Toggle & Responsive Navigation
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");

    burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active")
    burger.classList.toggle("toggle-burger");
});
};

navSlide();

//  Clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
};

// Back to top Button
// Function to scroll to the top of the page
function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  
  // Function to display back to top button when scrolling
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("back-to-top-btn").style.display = "block";
    } else {
      document.getElementById("back-to-top-btn").style.display = "none";
    }
  }
  