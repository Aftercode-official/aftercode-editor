export default function ({ addon }) {
  const style = document.createElement("style");
  style.id = "aftercode-custom-css";
  document.head.appendChild(style);

  const applyStyle = () => {
    style.textContent = addon.settings.get("css");
    style.disabled = addon.self.disabled;
  };

  addon.settings.addEventListener("change", applyStyle);
  addon.self.addEventListener("disabled", () => {
    style.disabled = true;
  });
  addon.self.addEventListener("reenabled", applyStyle);
  applyStyle();
}
