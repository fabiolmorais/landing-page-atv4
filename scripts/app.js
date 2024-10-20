let nextDom = document.getElementById("next");
let prevDom = document.getElementById("prev");

let sliderDom = document.querySelector(".slider");
let sliderListDom = sliderDom.querySelector(".slider .list");
let thumbnailBorderDom = document.querySelector(".slider .thumbnail");
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item");
let timeDom = document.querySelector(".slider .time");

// Toggle start

function menuToggle() {
  let menuArea = document.querySelector("#menu-area");

  if (menuArea.classList.contains("menu-opened") == true) {
    menuArea.classList.remove("menu-opened");
  } else {
    menuArea.classList.add("menu-opened");
  }
}

// Toggle end

// Hero start

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function () {
  showSlider("next");
};

prevDom.onclick = function () {
  showSlider("prev");
};

let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click();
}, timeAutoNext);

function showSlider(type) {
  let itemSlider = sliderListDom.querySelectorAll(".slider .list .item");
  let itemThumbnail = document.querySelectorAll(".slider .thumbnail .item");

  if (type === "next") {
    sliderListDom.appendChild(itemSlider[0]);
    thumbnailBorderDom.appendChild(itemThumbnail[0]);
    sliderDom.classList.add("next");
  } else {
    sliderListDom.prepend(itemSlider[itemSlider.length - 1]);
    thumbnailBorderDom.prepend(itemThumbnail[itemThumbnail.length - 1]);
    sliderDom.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    sliderDom.classList.remove("next");
    sliderDom.classList.remove("prev");
  }, timeRunning);

  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click();
  }, timeAutoNext);
}

// Hero end

// Swiper start

var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  centerSlides: true,
  fade: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    730: {
      slidesPerView: 2,
    },
    1030: {
      slidesPerView: 3,
    },
    1355: {
      slidesPerView: 4,
    },
  },
});

// Email

function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_oj86t7g", "template_y16gjea", parms)
    .then(alert("Email sent!!!"));
}
