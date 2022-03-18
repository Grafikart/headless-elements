import { throttle } from "../utils/time.js";

/**
 * This is some informations
 */
export class ScrollTop extends HTMLElement {
  static register() {
    customElements.define("scroll-top", ScrollTop);
  }

  constructor() {
    super();
    this.onScroll = throttle(this.onScroll.bind(this), 100);
    this.isVisible = false;
  }

  connectedCallback() {
    this.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
    window.addEventListener("scroll", this.onScroll);
  }

  disconnectedCallback() {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll() {
    const threshold = window.innerHeight / 3;
    if (window.scrollY > threshold && this.isVisible === false) {
      this.removeAttribute("hidden", "hidden");
      this.isVisible = true;
    } else if (window.scrollY < threshold && this.isVisible === true) {
      this.setAttribute("hidden", "hidden");
      this.isVisible = false;
    }
  }
}

if (window.autoDefineComponent !== undefined) {
}
