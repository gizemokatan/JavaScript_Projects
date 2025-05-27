// Lightbox functionality
document.addEventListener("DOMContentLoaded", function () {
    // Create lightbox container
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    document.body.appendChild(lightbox);

    // Create image element inside lightbox
    const img = document.createElement("img");
    lightbox.appendChild(img);

    // Close lightbox on click
    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });

    // Get all gallery images
    const galleryImages = document.querySelectorAll("#gallery img");
    galleryImages.forEach(image => {
        image.addEventListener("click", e => {
            lightbox.classList.add("active");

            // Replace thumbnail path with large image path
            const largeSrc = image.src.replace("Thumb/thumbnails_", "Large/photo_");
            img.src = largeSrc;
        });
    });
});
