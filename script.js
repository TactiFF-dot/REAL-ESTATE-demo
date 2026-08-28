/* =========================================
   FORMA REAL ESTATE
   V1 INTERACTIONS
========================================= */


/* LOADER */

window.addEventListener("load", () => {

  const loader =
    document.getElementById("loader");

  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1450);

});


/* HEADER */

const header =
  document.getElementById("header");

function updateHeader() {

  if (window.scrollY > 55) {
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

const menuToggle =
  document.getElementById("menuToggle");

const nav =
  document.getElementById("nav");

function closeMenu() {

  menuToggle.classList.remove("active");
  nav.classList.remove("active");
  document.body.classList.remove("menu-open");

}

menuToggle.addEventListener("click", () => {

  menuToggle.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("menu-open");

});


document
  .querySelectorAll(".nav a")
  .forEach(link => {

    link.addEventListener(
      "click",
      closeMenu
    );

  });


/* SMOOTH SCROLL */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener(
      "click",
      event => {

        const id =
          link.getAttribute("href");

        if (!id || id === "#") {
          return;
        }

        const target =
          document.querySelector(id);

        if (!target) {
          return;
        }

        event.preventDefault();

        const targetTop =
          target.getBoundingClientRect().top +
          window.scrollY -
          header.offsetHeight;

        window.scrollTo({
          top: targetTop,
          behavior: "smooth"
        });

      }
    );

  });


/* PROPERTY SEARCH */

const propertySearch =
  document.getElementById("propertySearch");

const searchResult =
  document.getElementById("searchResult");

const locationSelect =
  document.getElementById("location");

const typeSelect =
  document.getElementById("propertyType");

const priceSelect =
  document.getElementById("price");

const propertyCards =
  [...document.querySelectorAll(".property-card")];


propertySearch.addEventListener(
  "submit",
  event => {

    event.preventDefault();

    const location =
      locationSelect.value;

    const type =
      typeSelect.value;

    const price =
      priceSelect.value;


    let matches = 0;


    propertyCards.forEach(card => {

      const locationMatch =
        location === "all" ||
        card.dataset.location === location;

      const typeMatch =
        type === "all" ||
        card.dataset.type === type;

      const priceMatch =
        price === "all" ||
        card.dataset.price === price;

      const match =
        locationMatch &&
        typeMatch &&
        priceMatch;

      card.style.display =
        match ? "" : "none";

      if (match) {
        matches++;
      }

    });


    searchResult.textContent =
      matches === 0
        ? "No matching properties found. Try adjusting your search."
        : `${matches} ${matches === 1 ? "property" : "properties"} match your search.`;

  }
);


/* RESET SEARCH WHEN USER RETURNS TO ALL */

[
  locationSelect,
  typeSelect,
  priceSelect
].forEach(select => {

  select.addEventListener(
    "change",
    () => {

      if (
        locationSelect.value === "all" &&
        typeSelect.value === "all" &&
        priceSelect.value === "all"
      ) {

        propertyCards.forEach(card => {
          card.style.display = "";
        });

        searchResult.textContent = "";

      }

    }
  );

});


/* PROPERTY HOVER TILT */

propertyCards.forEach(card => {

  const image =
    card.querySelector(".property-image");

  card.addEventListener(
    "mousemove",
    event => {

      if (window.innerWidth <= 900) {
        return;
      }

      const rect =
        card.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / rect.width) - .5;

      const y =
        ((event.clientY - rect.top) / rect.height) - .5;

      image.style.transform =
        `perspective(1100px)
         rotateX(${y * -1.2}deg)
         rotateY(${x * 1.2}deg)`;

    }
  );

  card.addEventListener(
    "mouseleave",
    () => {
      image.style.transform = "";
    }
  );

});


/* NEIGHBORHOOD HOVER */

document
  .querySelectorAll(".neighborhood")
  .forEach(card => {

    card.addEventListener(
      "mouseenter",
      () => {

        document
          .querySelectorAll(".neighborhood")
          .forEach(item => {
            item.classList.remove("active");
          });

        card.classList.add("active");

      }
    );

  });


/* SCROLL REVEAL */

const revealElements =
  document.querySelectorAll(
    ".section-head, .property-card, .approach-visual, .approach-copy, .neighborhood, .journal-card, .contact-content"
  );


revealElements.forEach(element => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(30px)";

  element.style.transition =
    "opacity .85s ease, transform .85s cubic-bezier(.2,.7,.2,1)";

});


const revealObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          return;
        }

        entry.target.style.opacity = "1";

        entry.target.style.transform =
          "translateY(0)";

        revealObserver.unobserve(
          entry.target
        );

      });

    },
    {
      threshold: .08
    }
  );


revealElements.forEach(
  element => revealObserver.observe(element)
);


/* ACTIVE NAV */

const navLinks =
  document.querySelectorAll(".nav a");

const sections =
  document.querySelectorAll(
    "main section[id]"
  );


const navObserver =
  new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (!entry.isIntersecting) {
          return;
        }

        navLinks.forEach(link => {
          link.classList.remove("active");
        });

        const active =
          document.querySelector(
            `.nav a[href="#${entry.target.id}"]`
          );

        if (active) {
          active.classList.add("active");
        }

      });

    },
    {
      rootMargin: "-35% 0px -55% 0px"
    }
  );


sections.forEach(
  section => navObserver.observe(section)
);


/* HERO PARALLAX */

const heroBg =
  document.querySelector(".hero-bg");


if (
  heroBg &&
  window.innerWidth > 900
) {

  window.addEventListener(
    "mousemove",
    event => {

      const x =
        (event.clientX / window.innerWidth) - .5;

      const y =
        (event.clientY / window.innerHeight) - .5;

      heroBg.style.transform =
        `scale(1.08)
         translate(${x * -6}px, ${y * -6}px)`;

    }
  );

}


/* KEYBOARD ESCAPE */

document.addEventListener(
  "keydown",
  event => {

    if (event.key === "Escape") {
      closeMenu();
    }

  }
);


/* CONSOLE */

console.log(
  "%c FORMA. ",
  "background:#b9d85a;color:#171817;padding:8px 14px;font-size:16px;font-weight:bold;"
);

console.log(
  "Modern Real Estate — Portfolio Demo"
);

