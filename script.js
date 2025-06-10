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

