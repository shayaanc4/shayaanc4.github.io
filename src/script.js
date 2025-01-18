document.addEventListener("DOMContentLoaded", () => {
  const binaryElements = document.querySelectorAll(".jumping-binary span");

  binaryElements.forEach((el) => {
    setInterval(() => {
      el.textContent = Math.random() > 0.5 ? "1" : "0"; // Randomly switch between 1 and 0
    }, 300); // Change every 300ms
  });
});
