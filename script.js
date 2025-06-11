function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const EMAILJS_PUBLIC_KEY = "u350yeaJmr4etZt7S";
const EMAILJS_SERVICE_ID = "service_k8fqu4e";
const EMAILJS_TEMPLATE_ID = "template_fzdfhha";
const EMAILJS_AUTO_REPLY_TEMPLATE_ID = "template_nhs0ba4";


window.onload = function () {
  emailjs.init(EMAILJS_PUBLIC_KEY);

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const submitBtn = document.getElementById("submit-button");


  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Disable button and update text
      submitBtn.disabled = true;
      const originalText = submitBtn.innerText;
      submitBtn.innerText = "Sending...";

      status.innerText = "";

      emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, this).then(
        () => {

          
          submitBtn.disabled = false;
          submitBtn.innerText = originalText;
          
          status.innerText = "Message sent successfully!";
          this.reset();
          setTimeout(() => {
            status.innerText = "";
          }, 4000);
        
        },
        (error) => {
          submitBtn.disabled = false;
          submitBtn.innerText = originalText;

          status.innerText = "Failed to send message.";
          setTimeout(() => {
            status.innerText = "";
          }, 4000);
        }
      )
    })
  }
}




// Updated project data with technologies
const projects = {
  "Ecommerce Theme Customization (Magento2)": {
    description: "Customized Magento2 theme for an ecommerce platform with enhanced UI/UX features and performance optimizations.",
    images: ["./assets/project-3.png", "./assets/project-3.png", "./assets/project-3.png"],
    technologies: ["Magento 2", "PHP", "JavaScript", "Knockout.js", "LESS", "MySQL"]
  },
  "My Blog's (Django)": {
    description: "A personal blog platform built with Django featuring user authentication, CRUD operations, and responsive design.",
    images: ["./assets/project-4.png", "./assets/project-4-1.png"],
    technologies: ["Django", "Python", "PostgreSQL", "HTML/CSS", "JavaScript"]
  },
  "Game Hub (React)": {
    description: "A game discovery platform built with React and RAWG API, featuring game search, filtering, and detailed game information.",
    images: ["./assets/project-1.png", "./assets/project-1-1.png"],
    technologies: ["React", "TypeScript", "Chakra UI", "RAWG API", "Vite"]
  },
  "Ticket Form AutoFill (Chrome Extension)": {
    description: "A Chrome extension that automatically fills ticket forms with saved user data to streamline the ticketing process.",
    images: ["./assets/project-2.png"],
    technologies: ["JavaScript", "Chrome API", "HTML", "CSS", "Webpack"]
  }
};


// Rest of your existing modal and slider JavaScript remains the same

// Modal functionality
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-project-title");
const modalDescription = document.getElementById("modal-project-description");
const githubLink = document.getElementById("github-link");
const liveDemoLink = document.getElementById("live-demo-link");
const slidesContainer = document.querySelector(".compact-slides");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const closeModal = document.querySelector(".close-modal");

let currentSlideIndex = 0;
updateSlider();
// Update the modal opening function to use compact classes
document.querySelectorAll(".details-container.color-container").forEach(container => {
  container.addEventListener("click", (e) => {
    if (e.target.closest(".project-btn")) return;
    
    const title = container.querySelector(".project-title").textContent;
    const project = projects[title];
    
    if (project) {
      // Update modal content
      document.getElementById("modal-project-title").textContent = title;
      document.getElementById("modal-project-description").textContent = project.description;
      
      // Set up compact slider
      const slidesContainer = document.querySelector(".compact-slides");
      slidesContainer.innerHTML = "";
      project.images.forEach(img => {
        const slide = document.createElement("div");
        slide.className = "compact-slide";
        slide.innerHTML = `<img src="${img}" alt="${title}">`;
        slidesContainer.appendChild(slide);
      });
      
      // Set up compact technology tags
      const techTagsContainer = document.querySelector(".compact-tech-tags");
      techTagsContainer.innerHTML = "";
      project.technologies.forEach(tech => {
        const tag = document.createElement("span");
        tag.className = "compact-tech-tag";
        tag.textContent = tech;
        techTagsContainer.appendChild(tag);
      });
      
      // Show modal
      document.getElementById("project-modal").style.display = "block";
      document.body.style.overflow = "hidden";
    }
  });
});

// Keep existing close and slider navigation functions

// Close modal
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

// Slider functionality
function updateSlider() {
  slidesContainer.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
}

prevBtn.addEventListener("click", () => {
  if (currentSlideIndex > 0) {
    currentSlideIndex--;
  } else {
    currentSlideIndex = slidesContainer.children.length - 1;
  }
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  if (currentSlideIndex < slidesContainer.children.length - 1) {
    currentSlideIndex++;
  } else {
    currentSlideIndex = 0;
  }
  updateSlider();
});


window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
