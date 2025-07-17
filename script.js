document.addEventListener("DOMContentLoaded", function () {
  // CTA Button Click
  document.getElementById("ctaBtn").addEventListener("click", function () {
    dataLayer.push({
      event: "cta_button_click",
      button_id: "ctaBtn",
      button_text: "Start Free Trial"
    });
  });

  // Download Link Click from Navbar
  document.getElementById("downloadLink").addEventListener("click", function () {
    dataLayer.push({
      event: "navigation_download_click",
      link_id: "downloadLink",
      link_text: "Download PDF"
    });
  });

  // Actual PDF File Download
  document.getElementById("pdfDownload").addEventListener("click", function () {
    dataLayer.push({
      event: "pdf_file_download",
      file_name: "sample.pdf"
    });
  });

  // Contact Form Submit
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.name.value;
    const email = this.email.value;

    dataLayer.push({
      event: "form_submission",
      form_id: "contactForm",
      user_name: name,
      user_email: email
    });

    alert("Form submitted successfully!");
    this.reset();
  });
});
