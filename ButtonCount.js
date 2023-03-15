class ButtonCount extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.count = 0;
    const button = document.createElement("button");
    button.innerText = "Times Clicked: ";

    const countDisplay = document.createElement("span");
    button.append(countDisplay);
    // when clicked:
    button.addEventListener("click", () => {
      this.count++;
      countDisplay.innerText = `${this.count}`;
    });
    // when not clicked:
    countDisplay.innerText = `${this.count}`;

    this.shadowRoot.append(button);
  }
}
customElements.define("button-count", ButtonCount);
