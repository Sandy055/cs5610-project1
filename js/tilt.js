export class VanillaTilt {
  constructor(element) {
    this.element = element;
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.bindEvents();
  }

  bindEvents() {
    this.element.addEventListener("mousemove", this.onMouseMove.bind(this));
    this.element.addEventListener("mouseleave", this.onMouseLeave.bind(this));
    this.element.addEventListener("mouseenter", this.onMouseEnter.bind(this));
  }

  onMouseEnter() {
    this.element.style.transition = "none";
  }

  onMouseMove(event) {
    // Calculate mouse position relative to the element
    const rect = this.element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    // Calculate rotation (max 15 degrees)
    const xRotation = 15 * ((y - this.height / 2) / (this.height / 2));
    const yRotation = -15 * ((x - this.width / 2) / (this.width / 2));

    this.element.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1.02, 1.02, 1.02)`;
  }

  onMouseLeave() {
    this.element.style.transition = "transform 0.5s ease";
    this.element.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  }
}
