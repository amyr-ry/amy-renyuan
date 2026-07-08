// Progressive enhancement: mark JS as available so CSS can gate entrance animation.
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  // Staggered scroll reveal (also covers full-bleed gallery figures, which
  // share the same is-visible trigger class as .reveal)
  const revealTargets = document.querySelectorAll(".reveal, .full-bleed-figure");
  if ("IntersectionObserver" in window && revealTargets.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach((el) => io.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  // Case studies: floating image preview that follows the cursor
  const caseList = document.querySelector(".case-list");
  const preview = document.querySelector(".case-preview");
  const previewImg = preview ? preview.querySelector("img") : null;

  if (caseList && preview && previewImg && hasHover) {
    let activeRow = null;

    const positionPreview = (x, y) => {
      const offsetX = 28;
      const offsetY = -90;
      const maxX = window.innerWidth - 280;
      const maxY = window.innerHeight - 200;
      const left = Math.min(Math.max(x + offsetX, 16), maxX);
      const top = Math.min(Math.max(y + offsetY, 16), maxY);
      preview.style.transform = `translate3d(${left}px, ${top}px, 0)`;
    };

    caseList.addEventListener("mouseover", (event) => {
      const row = event.target.closest(".case-row");
      if (!row || row === activeRow) return;
      activeRow = row;
      const image = row.getAttribute("data-image");
      if (image) {
        previewImg.src = image;
        preview.classList.add("is-active");
      }
    });

    caseList.addEventListener("mousemove", (event) => {
      if (!prefersReducedMotion) {
        positionPreview(event.clientX, event.clientY);
      }
    });

    caseList.addEventListener("mouseleave", () => {
      activeRow = null;
      preview.classList.remove("is-active");
    });
  }

  // Case study highlight strips: click a still to view it larger in a lightbox.
  const lightbox = document.querySelector(".lightbox");
  const highlightCards = document.querySelectorAll(
    ".highlight-card, .window-frame, .mosaic-item, .note-card, .pinned-artifact-btn, .support-shot"
  );
  if (lightbox && highlightCards.length) {
    const lightboxImg = lightbox.querySelector("img");

    const openLightbox = (card) => {
      const img = card.querySelector("img");
      lightboxImg.src = card.getAttribute("data-full") || img.src;
      lightboxImg.alt = img.alt;
      lightbox.classList.add("is-active");
    };

    const closeLightbox = () => {
      lightbox.classList.remove("is-active");
      lightboxImg.src = "";
    };

    highlightCards.forEach((card) => {
      card.addEventListener("click", () => openLightbox(card));
    });

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox || event.target.closest(".lightbox-close")) {
        closeLightbox();
      }
    });

    window.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && lightbox.classList.contains("is-active")) {
        closeLightbox();
      }
    });
  }

  // Wild West filmstrip: click-and-drag panning for mouse users
  // (touch and trackpad already scroll this natively).
  const filmstrip = document.querySelector(".filmstrip");
  if (filmstrip && hasHover) {
    let isDown = false;
    let startX = 0;
    let startScroll = 0;

    filmstrip.addEventListener("mousedown", (event) => {
      isDown = true;
      startX = event.pageX;
      startScroll = filmstrip.scrollLeft;
    });

    window.addEventListener("mouseup", () => {
      isDown = false;
    });

    filmstrip.addEventListener("mousemove", (event) => {
      if (!isDown) return;
      event.preventDefault();
      filmstrip.scrollLeft = startScroll - (event.pageX - startX);
    });
  }
});
