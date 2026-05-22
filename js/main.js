import { VanillaTilt } from "./tilt.js";

document.addEventListener("DOMContentLoaded", () => {
  const tiltElements = document.querySelectorAll("[data-tilt]");

  tiltElements.forEach((element) => {
    // Using our custom class instead of a library
    new VanillaTilt(element);
  });
});
