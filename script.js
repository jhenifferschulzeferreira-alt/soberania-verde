document.addEventListener("DOMContentLoaded", () => {
    // --- CÓDIGO DO ACCORDION ---
    const accordionHeaders = document.querySelectorAll(".accordion-item h3");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", () => {
            const currentItem = header.parentElement;
            const isActive = currentItem.classList.contains("active");

            const allItems = document.querySelectorAll(".accordion-item");
            allItems.forEach(item => item.classList.remove("active"));

            if (!isActive) {
                currentItem.classList.add("active");
            }
        });
    });

    // --- CÓDIGO DA GALERIA (Mapeado com os novos IDs exclusivos) ---
    const galleryImages = document.querySelectorAll(".gallery-item img");
    const lightboxOverlay = document.getElementById("gallery-lightbox");
    const lightboxImg = document.getElementById("lightbox-main-img");
    const downloadBtn = document.getElementById("btn-action-download");
    const closeBtn = document.getElementById("btn-action-close");

    // Abrir a lightbox ao clicar em qualquer imagem
    galleryImages.forEach(img => {
        img.addEventListener("click", () => {
            const imgSrc = img.src;

            lightboxImg.src = imgSrc;
            downloadBtn.href = imgSrc;

            lightboxOverlay.classList.add("active");
        });
    });

    // Fechar ao clicar estritamente no botão "Fechar"
    closeBtn.addEventListener("click", () => {
        lightboxOverlay.classList.remove("active");
    });

    // Fechar ao clicar no fundo escuro da lightbox
    lightboxOverlay.addEventListener("click", (e) => {
        if (e.target === lightboxOverlay) {
            lightboxOverlay.classList.remove("active");
        }
    });
});
