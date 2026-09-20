document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const stage = document.getElementById("lightbox-stage");
  const closeButton = document.getElementById("lightbox-close");

  document.querySelectorAll("[data-lightbox]").forEach(button => {
    button.addEventListener("click", () => {
      const card = button.closest("[data-video]");

      if (!card) return;

      const video = card.dataset.video;

      if (!video) return;

      stage.innerHTML = `
        <video
          src="${video}"
          controls
          autoplay
          playsinline
          style="width:100%; max-height:80vh;"
        ></video>
      `;

      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  closeButton.addEventListener("click", closeLightbox);

  function closeLightbox() {
    lightbox.hidden = true;
    stage.innerHTML = "";
    document.body.style.overflow = "";
  }
});
