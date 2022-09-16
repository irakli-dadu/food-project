/////////////////////////////////////////////////
// Set current year

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();

yearEl.textContent = currentYear;

/////////////////////////////////////////////////
// navigation work

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


// accordion------


const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((elitem, elindex) => {
  let accorHeader = elitem.querySelector("header");
  
  accorHeader.addEventListener("click", () => {
    elitem.classList.toggle("openon");

    let accoText = document.querySelector(".accordion-txt");
    if(elitem.classList.contains('openon')) {
      accoText.style.height = `${accoText.scrollHeight}px`;
      elitem.querySelector(".fa-plus").classList.replace("fa-solid", "fa-minus");
    }else {
      accoText.style.height = "0px";
    }
    removeOpen(elindex);
  })
})
function removeOpen(elindex1) {
  accordionContent.forEach((elitem2, elindex2) => {
    if(elindex1 != elindex2) {
      elitem2.classList.remove("openon");

      let accoText2 = document.querySelector(".accordion-txt");
      accoText2.style.height = "0px";
    }
  })
}


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


// slider with swiper


const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  centerSlide: true,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// scroll-to-top

const toTop = document.querySelector(".scroll-to-top-top");

window.addEventListener("scroll", () => {
  if(window.pageYOffset > 100) {
    toTop.classList.add("activated");
  } else {
    toTop.classList.remove("activated");
  }
})


// cookies////

let cookieModel = document.querySelector(".cookie-content");

let cancelBtn = document.querySelector(".fa-eject");

let acceptBtn = document.querySelector(".fa-circle-check");

cancelBtn.addEventListener("click", function () {
  cookieModel.classList.remove("active-cookie")
})

acceptBtn.addEventListener("click", function () {
  cookieModel.classList.remove("active-cookie");
  localStorage.setItem("cookieAccepted", "YES");
})

setTimeout(() => {
  let cookieAccpeted = localStorage.getItem("cookieAccepted");
  if(cookieAccpeted != "YES"){
    cookieModel.classList.add("active-cookie")
  }
}, 2000);


