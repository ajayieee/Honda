
const vehicleModal = document.getElementById("vehicleModal");
const vehicleModalClose = document.getElementById("vehicleModalClose");

// All Add a vehicle buttons
const vehicleButtons = document.querySelectorAll(".vehicleCard");


// Open popup
vehicleButtons.forEach((button) => {

    button.addEventListener("click", () => {

        vehicleModal.classList.add("active");

        // Prevent background scrolling
        document.body.style.overflow = "hidden";

    });

});


// Close popup
vehicleModalClose.addEventListener("click", () => {

    vehicleModal.classList.remove("active");

    document.body.style.overflow = "";

});


// Close when clicking outside modal
vehicleModal.addEventListener("click", (event) => {

    if (event.target === vehicleModal ||
        event.target.classList.contains("vehicleModal_overlay")) {

        vehicleModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});


// Close with ESC key
document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        vehicleModal.classList.remove("active");

        document.body.style.overflow = "";

    }

});
