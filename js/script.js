/////////////////////////////////////////////////
// Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

/////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    // Scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({
        behavior: "smooth",
      });
    }

    // Close the mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

////////////////////////////////////////////////
// Sticky header

window.addEventListener("scroll", function () {
  if (window.scrollY >= 720) {
    this.document.body.classList.add("sticky");
  } else {
    this.document.body.classList.remove("sticky");
  }
});


// cta - validation-form

const form = document.querySelector("form")

form.addEventListener("submit", event => {
    event.preventDefault()

    const username = document.querySelector("[name = 'username']").value.trim()
    const email = document.querySelector("[name = 'email']").value.trim()
    const password = document.querySelector("[name = 'mypassword']").value.trim()
    const confirmPas = document.querySelector("[name = 'confpassword']").value.trim()


    const errors = []

    if(username === '') {
        errors.push("Username can't be blank")
    }
    if(email === '') {
        errors.push("Email can't be blank")
    }
    if(password === '') {
        errors.push("password can't be blank")
    }
    if(password !== confirmPas ) {
        errors.push("Passwords must match!")
    }

    if(errors.length > 0) {
        for(let i = 0; i < errors.length; i++) {
            Toastify({
                text: errors[i],
                className: "error-info-toast",
                duration: 4000,
                gravity: "top",
                position: "center",
                style: {
                    background: "#e26465",
                }
            }).showToast()
        }
    }else {
        Toastify({
            text: "Success!",
            className: "success-info-toast",
            duration: 4000,
            gravity: "top",
            position: "center",
            style: {
                background: "#cedb73"
            }
        }).showToast()
    }
})


