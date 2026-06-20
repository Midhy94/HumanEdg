const countryData = {
  canada: {
    name: "Canada",
    banner: "https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?q=80&w=1600",
    description1: "Canada remains a top choice for international students due to its world-class colleges, flexible work-while-study policies, and pathways for permanent residency. Major student hubs include Toronto, Vancouver, Montreal, and Calgary.",
    description2: "Known for its high academic standards and rigorous quality controls, a Canadian degree or diploma is widely recognized as equivalent to one from the US or Commonwealth countries.",
    welcomeTitle: "Why Study in Canada?",
    welcomeDesc: "Canada is recognized globally for its high standard of living, excellent health care, and career opportunities. International students can work up to 20 hours per week during academic semesters and full-time during scheduled breaks. The Post-Graduation Work Permit (PGWP) allows graduates to work in Canada for up to three years, providing a clear pathway to permanent residency.",
    welcomePic: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    intakes: "Fall (September), Winter (January), and Summer (May) intakes. Applications should be submitted 6-8 months in advance.",
    visaDetails: "Student visas are processed under the Student Direct Stream (SDS) or non-SDS. Requires a blocked GIC of CAD 20,635 and language proof.",
    workPermit: "Up to 3 years Post-Graduation Work Permit (PGWP) depending on the course duration and level of study.",
    requirements: [
      "Valid passport and latest academic transcripts",
      "Language score (IELTS/TOEFL/PTE) as per institution",
      "Statement of Purpose and Letters of Recommendation",
      "Proof of funds and GIC where applicable",
    ],
    updates: [
      "Most colleges have three major intakes: Fall, Winter, and Summer.",
      "Students should apply early due to high demand in popular provinces.",
      "Visa documentation scrutiny has increased for incomplete financial records.",
    ],
  },
  uk: {
    name: "United Kingdom",
    banner: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1600",
    description1: "The UK is famous for prestigious degree programs and accelerated 1-year Master's courses. Students can avail of the Graduate Route to work in the UK for two years after graduation.",
    description2: "UK universities consistently rank among the best in the world, offering high-quality education and excellent networking opportunities with global industry leaders.",
    welcomeTitle: "Why Study in the UK?",
    welcomeDesc: "With an unparalleled heritage of academic excellence, the UK offers shorter course durations that help save on tuition fees and living costs. The UK's Graduate Route provides a two-year post-study work visa for graduates, making it highly attractive for career-driven individuals.",
    welcomePic: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    intakes: "September/October (Main intake) and January/February (Secondary intake). Some universities also offer May/June intakes.",
    visaDetails: "Processed under the Student Visa route. Requires a valid Confirmation of Acceptance for Studies (CAS) and meeting the points-based criteria.",
    workPermit: "2 years post-study work visa (Graduate Route) for Bachelor's and Master's graduates; 3 years for PhD holders.",
    requirements: [
      "Academic transcripts and degree certificates",
      "English proficiency tests depending on university",
      "Clear SOP and strong academic/professional LORs",
      "CAS documents and visa financial proof",
    ],
    updates: [
      "Graduate Route remains a key post-study work option.",
      "Priority visa slots vary by season, so early booking is recommended.",
      "Universities now emphasize profile consistency in SOP and references.",
    ],
  },
  australia: {
    name: "Australia",
    banner: "https://images.unsplash.com/photo-1523482596682-cd93a00d5dbe?q=80&w=1600",
    description1: "With high-ranking universities and a warm, welcoming lifestyle, Australia offers outstanding job opportunities, generous post-study work visa rights, and practical training options.",
    description2: "Australia's education system is highly regulated by the government to maintain high standards of teaching, research, and student support services.",
    welcomeTitle: "Why Study in Australia?",
    welcomeDesc: "Australia offers dynamic study environments, hands-on training, and extensive support for international students. The Temporary Graduate Visa (subclass 485) allows graduates to gain practical work experience in Australia, with regional areas offering extended post-study work options.",
    welcomePic: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    intakes: "Semester 1 (February/March) and Semester 2 (July/August). Some institutions also have a November intake.",
    visaDetails: "Processed under subclass 500. Requires Confirmation of Enrolment (CoE), Genuine Student (GS) requirement compliance, and OSHC health cover.",
    workPermit: "2 to 4 years Temporary Graduate Visa (subclass 485) depending on the degree level, with an extra 1-2 years for regional locations.",
    requirements: [
      "Academic score reports and passport",
      "IELTS/PTE/TOEFL scores based on program",
      "SOP, resume, and relevant work experience proofs",
      "Genuine student documentation and visa evidence",
    ],
    updates: [
      "Popular courses can close applications earlier than expected.",
      "Students should maintain clear funds trail before visa filing.",
      "Some institutions have added interview rounds for profile verification.",
    ],
  },
  germany: {
    name: "Germany",
    banner: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=1600",
    description1: "Germany's public universities offer tuition-free education in English and German. It is a hub for engineering and science. Combined with our German training, it offers unmatched career pathways.",
    description2: "Germany combines high-tech engineering facilities with low cost of living and strong economic growth, making it a premier European study hub.",
    welcomeTitle: "Why Study in Germany?",
    welcomeDesc: "By studying at public universities, students pay zero tuition fees and only minor semester fees. Germany's strong economy provides ample part-time jobs and internships. After graduation, students can stay for 18 months under a job-seeker visa to kickstart their career.",
    welcomePic: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    intakes: "Winter Semester (October - main intake) and Summer Semester (April - secondary intake). Applications close months in advance.",
    visaDetails: "Requires APS certificate verification (for Indian students) and a Blocked Account of approximately €11,900 to cover living expenses.",
    workPermit: "18-month post-study job seeker visa, which can be converted to an EU Blue Card or national residence permit upon securing a job.",
    requirements: [
      "Academic transcripts and APS where required",
      "Proof of language (English/German based on course)",
      "SOP, LOR, and motivation letter as needed",
      "Blocked account and health insurance for visa",
    ],
    updates: [
      "Public universities remain competitive with strong academic cutoffs.",
      "German language proficiency improves admission and integration outcomes.",
      "Processing timelines can vary, so applications should start early.",
    ],
  },
  usa: {
    name: "United States",
    banner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?q=80&w=1600",
    description1: "The USA holds the largest concentration of top-ranked research universities in the world. STEM graduates can stay and work for up to three years under the OPT extension.",
    description2: "The US higher education system offers remarkable flexibility in course selection and research opportunities, alongside strong post-graduation global career networks.",
    welcomeTitle: "Why Study in the USA?",
    welcomeDesc: "Studying in the US offers students exposure to cutting-edge research, hands-on learning, and networking with global industry leaders. The OPT (Optional Practical Training) program allows graduates to work in their field of study, with STEM programs offering up to 36 months of work authorization.",
    welcomePic: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=800",
    intakes: "Fall Semester (August/September - main intake) and Spring Semester (January - secondary). Summer intakes are limited.",
    visaDetails: "F-1 Student Visa requires an I-20 form from an SEVP-certified school, SEVIS fee payment, and an in-person visa interview at the consulate.",
    workPermit: "12 months of standard OPT, with an additional 24 months STEM OPT extension available for eligible technical degrees.",
    requirements: [
      "Valid passport and recent academic transcripts",
      "IELTS, TOEFL, PTE, or Duolingo scores",
      "Statement of Purpose and Letters of Recommendation",
      "Financial certification and bank statement for I-20",
    ],
    updates: [
      "F-1 student visa interviews require verified SEVIS payments.",
      "STEM OPT extension allows up to 3 years of work authorization.",
      "Early applications are recommended for university scholarships.",
    ],
  }
};

const scholarshipOptions = {
  uk: [
    "University of Leicester - Merit Scholarship",
    "University of Strathclyde - International Excellence Award",
  ],
  canada: [
    "University of Windsor - International Entrance Award",
    "York University - Global Leader of Tomorrow Scholarship",
  ],
  australia: [
    "Griffith University - Academic Excellence Scholarship",
    "Deakin University - Vice-Chancellor's International Scholarship",
  ],
  germany: [
    "Constructor University - Tuition Grant",
    "DAAD-linked institutional scholarships",
  ],
  usa: [
    "Arizona State University - New American University Scholarship",
    "Northeastern University - International Merit Scholarship",
  ],
};

const panel = document.getElementById("countryPanel");
const tabs = document.querySelectorAll(".country-tab");

function renderCountry(countryKey) {
  const country = countryData[countryKey];
  if (!country || !panel) return;

  panel.innerHTML = `
    <h3>${country.name}</h3>
    <div class="two-col">
      <div>
        <strong>Requirements</strong>
        <ul>
          ${country.requirements.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
      <div>
        <strong>Recent Updates</strong>
        <ul>
          ${country.updates.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

if (tabs.length && panel) {
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      renderCountry(tab.dataset.country);
    });
  });

  renderCountry("canada");
}

const scholarshipForm = document.getElementById("scholarshipForm");
const scholarshipResult = document.getElementById("scholarshipResult");

if (scholarshipForm && scholarshipResult) {
  scholarshipForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(scholarshipForm);
    const name = String(formData.get("name") || "").trim();
    const country = String(formData.get("country") || "");
    const score = Number(formData.get("score"));
    const budget = Number(formData.get("budget"));

    if (!name || !country || Number.isNaN(score) || Number.isNaN(budget)) {
      scholarshipResult.textContent = "Please fill all fields to get scholarship options.";
      scholarshipResult.style.color = "#9b1c1c";
      return;
    }

    const options = scholarshipOptions[country] || [];
    let shortlist = options;

    // Simple recommendation logic for immediate shortlist feedback.
    if (score < 65) {
      shortlist = options.slice(0, 1);
    } else if (score > 85 && budget < 18000) {
      shortlist = options;
    } else if (budget >= 30000) {
      shortlist = options;
    }

    scholarshipResult.style.color = "#0a4a70";
    scholarshipResult.textContent = `${name}, suggested options: ${
      shortlist.length ? shortlist.join(" | ") : "No direct match yet. Our counsellor will contact you."
    }`;
  });
}

const gpaForm = document.getElementById("gpaForm");
const gpaResult = document.getElementById("gpaResult");

if (gpaForm && gpaResult) {
  gpaForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const cgpa = Number(new FormData(gpaForm).get("cgpa"));

    if (Number.isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
      gpaResult.textContent = "Enter a valid CGPA between 0 and 10.";
      gpaResult.style.color = "#9b1c1c";
      return;
    }

    const gpa = ((cgpa / 10) * 4).toFixed(2);
    gpaResult.style.color = "#0a4a70";
    gpaResult.textContent = `Estimated GPA: ${gpa} / 4.00`;
  });
}

const contactForm = document.getElementById("contactForm");
const contactResult = document.getElementById("contactResult");
const whatsappBtn = document.getElementById("whatsappBtn");
const whatsappBtnAlt = document.getElementById("whatsappBtnAlt");
const contactEmail = "admin@humanedg.in";

function getContactDetails() {
  if (!contactForm) return null;

  const data = new FormData(contactForm);
  const details = {
    name: String(data.get("name") || "").trim(),
    email: String(data.get("email") || "").trim(),
    phone: String(data.get("phone") || "").trim(),
    country: String(data.get("country") || "").trim(),
    message: String(data.get("message") || "").trim(),
  };

  if (!details.name || !details.email || !details.phone || !details.country || !details.message) {
    return null;
  }

  return details;
}

if (contactForm && contactResult) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const details = getContactDetails();

    if (!details) {
      contactResult.textContent = "Please fill all form fields before submitting.";
      contactResult.style.color = "#9b1c1c";
      return;
    }

    const subject = encodeURIComponent(`Counselling Request - ${details.name}`);
    const body = encodeURIComponent(
      `Name: ${details.name}\nEmail: ${details.email}\nWhatsApp: ${details.phone}\nPreferred Country: ${details.country}\nMessage: ${details.message}`
    );

    if (contactEmail.includes("@")) {
      window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
      contactResult.textContent = "Opening your email app with counselling details.";
    } else {
      window.open(`https://${contactEmail}`, "_blank", "noopener");
      contactResult.textContent = "Opening HumanEdg website for contact.";
    }
    contactResult.style.color = "#0a4a70";
  });
}

function sendWhatsAppInquiry(number, label) {
  if (!contactResult) return;

  const details = getContactDetails();

  if (!details) {
    contactResult.textContent = "Please fill all form fields before sending to WhatsApp.";
    contactResult.style.color = "#9b1c1c";
    return;
  }

  const text = encodeURIComponent(
    `Hello HumanEdg, I need counselling.\nName: ${details.name}\nEmail: ${details.email}\nWhatsApp: ${details.phone}\nPreferred Country: ${details.country}\nMessage: ${details.message}`
  );
  window.open(`https://wa.me/${number}?text=${text}`, "_blank", "noopener");
  contactResult.textContent = `Opening WhatsApp (${label}) with your counselling request.`;
  contactResult.style.color = "#0a4a70";
}

if (whatsappBtn && contactResult) {
  whatsappBtn.addEventListener("click", () => {
    sendWhatsAppInquiry("919995064768", "99950 64768");
  });
}

if (whatsappBtnAlt && contactResult) {
  whatsappBtnAlt.addEventListener("click", () => {
    sendWhatsAppInquiry("919778458341", "97784 58341");
  });
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function initParallaxBanners() {
  if (prefersReducedMotion) return;

  const parallaxImages = document.querySelectorAll(".hero-banner, .page-banner");
  if (!parallaxImages.length) return;

  let ticking = false;

  function updateParallax() {
    const viewportHeight = window.innerHeight;
    parallaxImages.forEach((image) => {
      const rect = image.getBoundingClientRect();
      if (rect.bottom < 0 || rect.top > viewportHeight) {
        return;
      }

      const centerOffset = rect.top + rect.height / 2 - viewportHeight / 2;
      const translateY = Math.max(-14, Math.min(14, centerOffset * -0.03));
      image.style.transform = `translateY(${translateY}px)`;
    });
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    },
    { passive: true }
  );

  updateParallax();
}

function initStatCounters() {
  const counters = document.querySelectorAll(".stat-number");
  if (!counters.length) return;

  function animateCounter(counter) {
    const original = counter.textContent ? counter.textContent.trim() : "";
    const numericValue = Number(original.replace(/[^0-9]/g, ""));
    if (!numericValue) return;

    const suffix = original.replace(/[0-9]/g, "");
    const duration = 1200;
    const startTime = performance.now();

    function frame(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(numericValue * eased);
      counter.textContent = `${current}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(frame);
      }
    }

    requestAnimationFrame(frame);
  }

  if (prefersReducedMotion) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        animateCounter(entry.target);
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => observer.observe(counter));
}

function initPhotoLightbox() {
  const galleryImages = document.querySelectorAll(".photo-card img");
  if (!galleryImages.length) return;

  const items = Array.from(galleryImages).map((image) => {
    const card = image.closest(".photo-card");
    const label = card ? card.querySelector("p") : null;
    return {
      src: image.src,
      alt: image.alt,
      caption: label && label.textContent ? label.textContent.trim() : image.alt,
      element: image,
    };
  });

  let activeIndex = 0;

  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <button class="lightbox-nav lightbox-prev" type="button" aria-label="Previous image">&#10094;</button>
    <button class="lightbox-close" type="button" aria-label="Close image view">Close</button>
    <img class="lightbox-image" alt="Expanded gallery image" />
    <p class="lightbox-caption"></p>
    <button class="lightbox-nav lightbox-next" type="button" aria-label="Next image">&#10095;</button>
  `;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector(".lightbox-image");
  const lightboxCaption = lightbox.querySelector(".lightbox-caption");
  const closeButton = lightbox.querySelector(".lightbox-close");
  const previousButton = lightbox.querySelector(".lightbox-prev");
  const nextButton = lightbox.querySelector(".lightbox-next");

  function renderLightbox(index) {
    const item = items[index];
    if (!item || !lightboxImage || !lightboxCaption) return;
    lightboxImage.src = item.src;
    lightboxImage.alt = item.alt || "Expanded gallery image";
    lightboxCaption.textContent = item.caption || "";
    activeIndex = index;
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function openLightbox(index) {
    renderLightbox(index);
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function showNext() {
    const nextIndex = (activeIndex + 1) % items.length;
    renderLightbox(nextIndex);
  }

  function showPrevious() {
    const prevIndex = (activeIndex - 1 + items.length) % items.length;
    renderLightbox(prevIndex);
  }

  items.forEach((item, index) => {
    item.element.setAttribute("tabindex", "0");
    item.element.setAttribute("role", "button");
    item.element.setAttribute("aria-label", `Open image: ${item.caption}`);
    item.element.addEventListener("click", () => openLightbox(index));
    item.element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLightbox(index);
      }
    });
  });

  if (closeButton) {
    closeButton.addEventListener("click", closeLightbox);
  }

  if (nextButton) {
    nextButton.addEventListener("click", showNext);
  }

  if (previousButton) {
    previousButton.addEventListener("click", showPrevious);
  }

  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("open")) return;

    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowRight") {
      showNext();
    }

    if (event.key === "ArrowLeft") {
      showPrevious();
    }
  });
}

function initMobileMenu() {
  const headers = document.querySelectorAll(".site-header");
  if (!headers.length) return;

  headers.forEach((header) => {
    const toggle = header.querySelector(".menu-toggle");
    const nav = header.querySelector(".nav-links");
    if (!toggle || !nav) return;

    function closeMenu() {
      header.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", () => {
      const isOpen = header.classList.toggle("menu-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("click", (event) => {
      if (!header.contains(event.target)) {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 780) {
        closeMenu();
      }
    });
  });
}

function initFloatingWhatsApp() {
  const wrapper = document.getElementById("whatsappFloat");
  const button = document.getElementById("whatsappFloatBtn");
  const panel = document.getElementById("whatsappFloatPanel");
  if (!wrapper || !button || !panel) return;

  function closePanel() {
    wrapper.classList.remove("open");
    button.setAttribute("aria-expanded", "false");
  }

  button.addEventListener("click", () => {
    const isOpen = wrapper.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!wrapper.contains(event.target)) {
      closePanel();
    }
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closePanel);
  });
}

function renderCountryDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const countryKey = urlParams.get("country") || "canada";
  const country = countryData[countryKey];
  if (!country) return;

  // Set page title
  document.title = `${country.name} - Study Abroad | HumanEdg`;

  // Update back button link text (Back to Countries)
  const bkBtn = document.querySelector(".bkBtn");
  if (bkBtn) {
    bkBtn.innerHTML = `<span class="w-[25px] h-[25px] flex"><svg width="26" height="26" fill="none" viewBox="0 0 26 26"><path fill="#6A6A6A" d="M18.238.5H7.761C3.212.5.5 3.212.5 7.763v10.462c0 4.563 2.712 7.275 7.263 7.275h10.462c4.55 0 7.262-2.712 7.262-7.262V7.761C25.5 3.212 22.788.5 18.238.5ZM20.5 13.938H7.762l3.763 3.762a.943.943 0 0 1 0 1.325.927.927 0 0 1-.662.275.927.927 0 0 1-.663-.275l-5.362-5.362a.937.937 0 0 1 0-1.325L10.2 6.974a.943.943 0 0 1 1.325 0 .943.943 0 0 1 0 1.325l-3.763 3.762H20.5c.512 0 .938.426.938.938a.944.944 0 0 1-.938.938Z"/></svg></span> Back to Countries`;
    bkBtn.setAttribute("href", "countries.html");
  }

  // Update header titles in banner
  const bannerHeader = document.querySelector(".ourProjDtlHdrSlide h2");
  if (bannerHeader) bannerHeader.textContent = `Study in ${country.name}`;
  
  const bannerPara = document.querySelector(".ourProjDtlHdrSlide p");
  if (bannerPara) bannerPara.textContent = `Explore admission requirements, timelines, and visa guidelines for ${country.name}`;

  // Update banner background
  const bannerSec = document.querySelector(".fullWidthPic");
  if (bannerSec && country.banner) {
    bannerSec.style.backgroundImage = `url(${country.banner})`;
  }

  // Update main text section
  const detailTitle = document.querySelector(".ourProjDtlCmnText h2");
  if (detailTitle) detailTitle.textContent = `Academic Pathway to ${country.name}`;
  
  const paragraphs = document.querySelectorAll(".ourProjDtlCmnText p");
  if (paragraphs.length >= 2) {
    paragraphs[0].textContent = country.description1;
    paragraphs[1].textContent = country.description2;
  }

  // Update welcome section
  const welcomeTitle = document.querySelector(".aboutWelc h2");
  const welcomeDesc = document.querySelector(".aboutWelc .cmnDesc-16");
  const welcomePic = document.querySelector(".aboutWelc img");
  
  if (welcomeTitle) welcomeTitle.textContent = country.welcomeTitle;
  if (welcomeDesc) welcomeDesc.textContent = country.welcomeDesc;
  if (welcomePic && country.welcomePic) {
    welcomePic.src = country.welcomePic;
    welcomePic.alt = country.welcomeTitle;
  }

  // Update key cards section
  const sectionTitle = document.querySelector(".aboutMissionVission h2");
  if (sectionTitle) sectionTitle.textContent = "Key Destination Details";
  
  const sectionDesc = document.querySelector(".aboutMissionVission .cmnDesc-16");
  if (sectionDesc) sectionDesc.textContent = `Essential details to plan your study timeline, visa requirements, and post-study work options in ${country.name}.`;

  const cards = document.querySelectorAll(".aboutMissionVission .card");
  if (cards.length >= 3) {
    // Card 1: Intakes
    const c1Title = cards[0].querySelector("h5");
    const c1Desc = cards[0].querySelector("p");
    if (c1Title) c1Title.textContent = "Popular Intakes";
    if (c1Desc) c1Desc.textContent = country.intakes;

    // Card 2: Visa details
    const c2Title = cards[1].querySelector("h5");
    const c2Desc = cards[1].querySelector("p");
    if (c2Title) c2Title.textContent = "Visa Strategy";
    if (c2Desc) c2Desc.textContent = country.visaDetails;

    // Card 3: Post-study work permit
    const c3Title = cards[2].querySelector("h5");
    const c3Desc = cards[2].querySelector("p");
    if (c3Title) c3Title.textContent = "Post-Study Work rights";
    if (c3Desc) c3Desc.textContent = country.workPermit;
  }

  // Update requirements & updates area
  const reqUpdatesArea = document.querySelector("#requirementsUpdatesArea");
  if (reqUpdatesArea) {
    reqUpdatesArea.innerHTML = `
      <div class="template-containerMaxWth">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-[48px] textArea">
          <div class="flex flex-col gap-[20px]">
            <h3 class="font-[500] text-[24px] text-[#074163]">Admission Requirements</h3>
            <ul class="list-disc pl-[20px] flex flex-col gap-[12px] font-[400] text-[#6A6A6A]">
              ${country.requirements.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div class="flex flex-col gap-[20px]">
            <h3 class="font-[500] text-[24px] text-[#074163]">Embassy updates & Intakes</h3>
            <ul class="list-disc pl-[20px] flex flex-col gap-[12px] font-[400] text-[#6A6A6A]">
              ${country.updates.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    `;
  }
}

initParallaxBanners();
initStatCounters();
initPhotoLightbox();
initMobileMenu();
initFloatingWhatsApp();

const successStoryData = {
  aarav: {
    title: "Aarav Mehta's Journey to Griffith University, Australia",
    desc1: "Aarav graduated with a Bachelor of Technology in Computer Science, scoring a CGPA of 9.2. He aspired to pursue a Master's in Cybersecurity in Australia but needed a scholarship to cover half his tuition.",
    desc2: "HumanEdg conducted an exhaustive profile review, identified Griffith's Academic Excellence scholarship program, and helped him craft a compelling SOP highlighting his research in web security.",
    welcomeTitle: "Securing the Visa & Admissions Offer",
    welcomeDesc: "With our guidance, Aarav secured his offer letter within two weeks. We subsequently managed his financial profiling, including blocked accounts and bank loan proofs, and prepared him for subclass 500 visa interview questions. His visa was granted in record time.",
    welcomePic: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800"
  },
  nisha: {
    title: "Nisha Sharma's Admission to University of Windsor, Canada",
    desc1: "Nisha had a 7.8 CGPA in Civil Engineering. She wanted to shift to Canada for a Master's in Environmental Engineering, but faced strict course mapping challenges.",
    desc2: "Our consultants helped Nisha bridge her academic credentials, targeted Windsor's entrance awards, and refined her statement of purpose to highlight her practical fieldwork experience.",
    welcomeTitle: "Smooth SDS Visa Approval",
    welcomeDesc: "We guided Nisha in setting up her Guaranteed Investment Certificate (GIC) blocked account of CAD 20,635 and passing her IELTS with a 7.5 band score, leading to a smooth SDS visa stamp.",
    welcomePic: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800"
  },
  sam: {
    title: "Sam Wilson's Global Pathway to ASU, United States",
    desc1: "Sam wanted to study Business Analytics in the US but was concerned about the competitive F-1 visa interviews and tuition costs.",
    desc2: "We mapped his profile to Arizona State University, helped him secure a New American University scholarship, and conducted multiple mock interview rounds.",
    welcomeTitle: "F-1 Consular Success",
    welcomeDesc: "Through rigorous mock interview preparations, Sam handled all financial and academic questions with confidence, securing his F-1 visa on his first attempt at the US consulate.",
    welcomePic: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5c?q=80&w=800"
  },
  elena: {
    title: "Elena Rostova's Tuition-Free Pathway to Germany",
    desc1: "Elena aspired to pursue a Master's in Mechanical Engineering in Germany but faced challenges with public university cutoffs and language requirements.",
    desc2: "We mapped her profile to key public institutions, assisted in APS certification documentation, and enrolled her in our German language coaching modules.",
    welcomeTitle: "APS and Blocked Account Clearances",
    welcomeDesc: "We managed her German blocked account setup of €11,900 and prepared her for the public university interviews, leading to full tuition-free admission.",
    welcomePic: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800"
  }
};

function renderSuccessStory() {
  const hash = window.location.hash ? window.location.hash.substring(1) : "";
  const storyKey = successStoryData[hash] ? hash : "aarav";
  const story = successStoryData[storyKey];
  if (!story) return;

  // Set page title
  document.title = `${story.title} - Success Story | HumanEdg`;

  // Update elements
  const storyTitle = document.getElementById("storyTitle");
  if (storyTitle) storyTitle.textContent = story.title;

  const desc1 = document.getElementById("storyDesc1");
  if (desc1) desc1.textContent = story.desc1;

  const desc2 = document.getElementById("storyDesc2");
  if (desc2) desc2.textContent = story.desc2;

  const welcomeTitle = document.getElementById("storyWelcomeTitle");
  if (welcomeTitle) welcomeTitle.textContent = story.welcomeTitle;

  const welcomeDesc = document.getElementById("storyWelcomeDesc");
  if (welcomeDesc) welcomeDesc.textContent = story.welcomeDesc;

  const welcomePic = document.getElementById("storyWelcomePic");
  if (welcomePic && story.welcomePic) {
    welcomePic.src = story.welcomePic;
    welcomePic.alt = story.welcomeTitle;
  }
}

if (window.location.pathname.includes("countries-detail")) {
  document.addEventListener("DOMContentLoaded", renderCountryDetail);
  // Run it immediately in case DOMContentLoaded has already fired
  if (document.readyState === "interactive" || document.readyState === "complete") {
    renderCountryDetail();
  }
}

if (window.location.pathname.includes("success-stories")) {
  document.addEventListener("DOMContentLoaded", renderSuccessStory);
  window.addEventListener("hashchange", renderSuccessStory);
  // Run it immediately in case DOMContentLoaded has already fired
  if (document.readyState === "interactive" || document.readyState === "complete") {
    renderSuccessStory();
  }
}
