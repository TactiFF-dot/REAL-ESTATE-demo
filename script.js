/* ==========================================
   MONUMENT REAL ESTATE
   V2 JAVASCRIPT
========================================== */


/* LOADER */

window.addEventListener("load", () => {

  setTimeout(() => {

    document
      .getElementById("loader")
      .classList.add("hide");

  }, 1700);

});


/* ELEMENTS */

const header =
  document.getElementById("header");

const menuBtn =
  document.getElementById("menuBtn");

const mobileMenu =
  document.getElementById("mobileMenu");

const mobileClose =
  document.getElementById("mobileClose");


/* HEADER */

function updateHeader() {

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

}

window.addEventListener(
  "scroll",
  updateHeader,
  { passive: true }
);

updateHeader();


/* MOBILE MENU */

function openMenu() {

  mobileMenu.classList.add("open");

  document.body.classList.add("lock");

}

function closeMenu() {

  mobileMenu.classList.remove("open");

  document.body.classList.remove("lock");

}

menuBtn.addEventListener(
  "click",
  openMenu
);

mobileClose.addEventListener(
  "click",
  closeMenu
);

document
  .querySelectorAll(".mobile-menu a")
  .forEach(link => {

    link.addEventListener(
      "click",
      closeMenu
    );

  });


/* PROPERTY DATA */

const properties = {

  cliff: {

    title: "The Cliff House",

    price: "₹8.4 Cr",

    image: "property-1",

    description:
      "A contemporary coastal residence designed around open views, natural stone and generous outdoor living.",

    area: "4,800 SQ FT",

    beds: "4 BEDROOMS",

    baths: "5 BATHROOMS",

    type: "PRIVATE VILLA"

  },

  skyline: {

    title: "Skyline 47",

    price: "₹6.8 Cr",

    image: "property-2",

    description:
      "A refined city residence overlooking Mumbai's skyline, balancing quiet interiors with an unmistakable urban address.",

    area: "2,950 SQ FT",

    beds: "3 BEDROOMS",

    baths: "4 BATHROOMS",

    type: "CITY APARTMENT"

  },

  courtyard: {

    title: "The Courtyard Villa",

    price: "₹11.2 Cr",

    image: "property-3",

    description:
      "A private Goan retreat built around a central courtyard, tropical landscape and slow outdoor living.",

    area: "6,200 SQ FT",

    beds: "5 BEDROOMS",

    baths: "6 BATHROOMS",

    type: "PRIVATE VILLA"

  },

  minimal: {

    title: "Casa Minimal",

    price: "₹4.9 Cr",

    image: "property-4",

    description:
      "A calm architectural residence in Pune with clean lines, generous proportions and carefully considered interiors.",

    area: "3,600 SQ FT",

    beds: "4 BEDROOMS",

    baths: "4 BATHROOMS",

    type: "CITY RESIDENCE"

  },

  estate: {

    title: "Estate No. 08",

    price: "₹5.6 Cr",

    image: "property-5",

    description:
      "A rare 1.8-acre parcel surrounded by hills, mature trees and complete privacy — ready for a singular residence.",

    area: "1.8 ACRES",

    beds: "PRIVATE LAND",

    baths: "PRIVATE ROAD",

    type: "ESTATE LAND"

  }

};


/* PROPERTY MODAL */

const propertyModal =
  document.getElementById("propertyModal");

const propertyClose =
  document.getElementById("propertyClose");

const modalImage =
  document.getElementById("modalImage");

const modalTitle =
  document.getElementById("modalTitle");

const modalPrice =
  document.getElementById("modalPrice");

const modalDescription =
  document.getElementById("modalDescription");

const modalArea =
  document.getElementById("modalArea");

const modalBeds =
  document.getElementById("modalBeds");

const modalBaths =
  document.getElementById("modalBaths");

const modalType =
  document.getElementById("modalType");


let currentProperty = "";


function openProperty(key) {

  const property =
    properties[key];

  if (!property) return;

  currentProperty = key;

  modalImage.className =
    `modal-image ${property.image}`;

  modalTitle.textContent =
    property.title;

  modalPrice.textContent =
    property.price;

  modalDescription.textContent =
    property.description;

  modalArea.textContent =
    property.area;

  modalBeds.textContent =
    property.beds;

  modalBaths.textContent =
    property.baths;

  modalType.textContent =
    property.type;

  propertyModal.classList.add("open");

  document.body.classList.add("lock");

}


function closeProperty() {

  propertyModal.classList.remove("open");

  document.body.classList.remove("lock");

}


document
  .querySelectorAll(".view-property")
  .forEach(button => {

    button.addEventListener(
      "click",
      event => {

        event.stopPropagation();

        openProperty(
          button.dataset.property
        );

      }
    );

  });


propertyClose.addEventListener(
  "click",
  closeProperty
);


propertyModal.addEventListener(
  "click",
  event => {

    if (
      event.target === propertyModal
    ) {

      closeProperty();

    }

  }
);


/* PROPERTY FILTERS */

const filters =
  document.querySelectorAll(".filter");

const propertyCards =
  document.querySelectorAll(".property-card");


filters.forEach(filter => {

  filter.addEventListener(
    "click",
    () => {

      filters.forEach(item =>
        item.classList.remove("active")
      );

      filter.classList.add("active");

      const selected =
        filter.dataset.filter;


      propertyCards.forEach(card => {

        const category =
          card.dataset.category;

        if (
          selected === "all" ||
          category === selected
        ) {

          card.classList.remove(
            "hidden"
          );

        } else {

          card.classList.add(
            "hidden"
          );

        }

      });

    }
  );

});


/* ENQUIRY MODAL */

const enquiryModal =
  document.getElementById(
    "enquiryModal"
  );

const openEnquiry =
  document.getElementById(
    "openEnquiry"
  );

const heroExplore =
  document.getElementById(
    "heroExplore"
  );

const ctaEnquiry =
  document.getElementById(
    "ctaEnquiry"
  );

const modalEnquire =
  document.getElementById(
    "modalEnquire"
  );

const enquiryClose =
  document.getElementById(
    "enquiryClose"
  );


function openEnquiryModal() {

  closeProperty();

  enquiryModal.classList.add("open");

  document.body.classList.add("lock");

}


function closeEnquiry() {

  enquiryModal.classList.remove("open");

  document.body.classList.remove("lock");

}


openEnquiry.addEventListener(
  "click",
  openEnquiryModal
);

ctaEnquiry.addEventListener(
  "click",
  openEnquiryModal
);


/* HERO EXPLORE */

heroExplore.addEventListener(
  "click",
  () => {

    document
      .getElementById("properties")
      .scrollIntoView({
        behavior: "smooth"
      });

  }
);


/* MODAL ENQUIRE */

modalEnquire.addEventListener(
  "click",
  () => {

    closeProperty();

    openEnquiryModal();

  }
);


enquiryClose.addEventListener(
  "click",
  closeEnquiry
);


enquiryModal.addEventListener(
  "click",
  event => {

    if (
      event.target === enquiryModal
    ) {

      closeEnquiry();

    }

  }
);


/* ENQUIRY FORM */

const enquiryForm =
  document.getElementById(
    "enquiryForm"
  );

const formMessage =
  document.getElementById(
    "formMessage"
  );


enquiryForm.addEventListener(
  "submit",
  event => {

    event.preventDefault();


    const name =
      document
        .getElementById("name")
        .value
        .trim();


    const phone =
      document
        .getElementById("phone")
        .value
        .trim();


    if (!name || !phone) {

      formMessage.textContent =
        "Please complete your details.";

      return;

    }


    formMessage.textContent =
      "Thank you. Your enquiry has been received.";


    enquiryForm.reset();


    setTimeout(() => {

      formMessage.textContent =
        "Demo enquiry complete — a real project can connect this form to a CRM or backend.";

    }, 1800);

  }
);


/* COUNTERS */

const counters =
  document.querySelectorAll(".counter");

let countersStarted = false;


function startCounters() {

  if (countersStarted) return;

  const stats =
    document.querySelector(".stats");

  if (!stats) return;

  const rect =
    stats.getBoundingClientRect();

  if (
    rect.top <
    window.innerHeight * .85
  ) {

    countersStarted = true;


    counters.forEach(counter => {

      const target =
        Number(
          counter.dataset.target
        );

      let current = 0;

      const duration = 1100;

      const startTime =
        performance.now();


      function animate(time) {

        const progress =
          Math.min(
            (time - startTime) /
            duration,
            1
          );


        current =
          Math.floor(
            progress * target
          );


        counter.textContent =
          current;


        if (progress < 1) {

          requestAnimationFrame(
            animate
          );

        } else {

          counter.textContent =
            target;

        }

      }


      requestAnimationFrame(
        animate
      );

    });

  }

}


window.addEventListener(
  "scroll",
  startCounters,
  { passive: true }
);

startCounters();


/* ESCAPE */

document.addEventListener(
  "keydown",
  event => {

    if (
      event.key === "Escape"
    ) {

      closeMenu();
      closeProperty();
      closeEnquiry();

    }

  }
);


/* HERO PARALLAX */

const heroImage =
  document.querySelector(".hero-image");


window.addEventListener(
  "scroll",
  () => {

    if (
      window.scrollY <
      window.innerHeight
    ) {

      heroImage.style.transform =
        `translateY(${window.scrollY * .1}px) scale(1.02)`;

    }

  },
  { passive: true }
);


/* CONSOLE */

console.log(
  "%c MONUMENT REAL ESTATE ",
  "background:#151513;color:#d1c8b8;padding:10px 15px;font-size:14px;"
);

console.log(
  "Portfolio Demo — Real Estate V2"
);

