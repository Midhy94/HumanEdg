////// choice ///////
window.addEventListener('DOMContentLoaded', () => {
    const selects = document.querySelectorAll('.custom-select');
    if (selects.length > 0) {
        selects.forEach(select => {
            new Choices(select, {
                searchEnabled: false,
                itemSelectText: '',
                shouldSort: false,
                position: 'auto',
            });
        });
    }
});

////// home  MENU ///////


const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');

mobileMenuToggle?.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent the outside click handler from triggering
    nav?.classList.toggle('nav-open');
    header?.classList.toggle('nav-opened');
    mobileMenuToggle.classList.toggle('is-active');

    if (nav?.classList.contains('nav-open')) {
        window.overflowManager?.add('hamburger-menu');
    } else {
        window.overflowManager?.remove('hamburger-menu');
    }
});

// Close nav on anchor click inside nav
nav?.querySelectorAll('a')?.forEach(anchor => {
    anchor.addEventListener('click', () => {
        closeNav();
    });
});

// Close nav on click outside
document.addEventListener('click', (e) => {
    if (nav?.classList.contains('nav-open')) {
        const isClickInsideNav = nav.contains(e.target);
        const isClickOnToggle = mobileMenuToggle.contains(e.target);
        if (!isClickInsideNav && !isClickOnToggle) {
            closeNav();
        }
    }
});

// Scroll-based header visibility
const header2 = document.querySelector('.header');
let lastScrollTop = 0;
const viewportHeight = window.innerHeight - 400;
let initialLoad = true;

// Add fixHeaderNormal on load
window.addEventListener('DOMContentLoaded', () => {
  header2?.classList.add('fixHeaderNormal');
});

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (initialLoad && currentScroll > 0) {
    initialLoad = false;
  }

  if (currentScroll > viewportHeight) {
    if (currentScroll < lastScrollTop) {
      header2?.classList.add('fixHeader');
    } else {
      header2?.classList.remove('fixHeader');
    }
  } else {
    header2?.classList.add('fixHeader');
  }

  // Keep fixHeaderNormal when header is at top
  if (currentScroll <= 0) {
    header2?.classList.add('fixHeaderNormal');
  } else {
    header2?.classList.remove('fixHeaderNormal');
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});


// ✅ Utility function to close nav
function closeNav() {
    nav?.classList.remove('nav-open');
    header?.classList.remove('nav-opened');
    mobileMenuToggle?.classList.remove('is-active');
    window.overflowManager?.remove('hamburger-menu');
}



window.overflowManager = (function() {
    let references = new Set();
    const body = document.querySelector('body');

    return {
        add: function(component) {
            references.add(component);
            if (!body?.classList.contains('ovrflowHdn')) {
                body?.classList.add('ovrflowHdn');
            }
        },
        remove: function(component) {
            references.delete(component);
            if (references.size === 0) {
                body?.classList.remove('ovrflowHdn');
            }
        },
        hasReference: function(component) {
            return references.has(component);
        }
    };
})();


////// home  menu loginBtnMb ///////

const loginBtnMb = document.querySelector('.loginBtnMb');
if (loginBtnMb) {
loginBtnMb.addEventListener('click', function (e) {
    e.stopPropagation();
    this.classList.toggle('open');
});
document.addEventListener('click', function (e) {
    if (!loginBtnMb.contains(e.target)) {
    loginBtnMb.classList.remove('open');
    }
});
}






/////////// menu drop /////////
document.addEventListener("DOMContentLoaded", () => {
  const menuDrops = document.querySelectorAll(".menuDrop");

  if (!menuDrops.length) return;

  menuDrops.forEach(menuDrop => {
    // Toggle on click
    menuDrop.addEventListener("click", (e) => {
      // If clicked inside a dropList link → close
      if (e.target.closest(".dropList a")) {
        menuDrop.classList.remove("open");
        return;
      }

      // Toggle open state
      menuDrop.classList.toggle("open");
    });
  });

  // Close any open menuDrop when clicking outside
  document.addEventListener("click", (e) => {
    menuDrops.forEach(menuDrop => {
      if (!menuDrop.contains(e.target)) {
        menuDrop.classList.remove("open");
      }
    });
  });
});



/////////// menu slider /////////

