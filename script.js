// Portfolio pop-up
const dialog = document.getElementById("dialog");
if (dialog) {
  const opener = document.getElementById("open-dialog");
  opener.addEventListener("click", () => dialog.showModal());
  document
    .getElementById("close-dialog")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("close", () => opener.focus());
}

// Contact form (client-side only)
const form = document.getElementById("contact-form");
if (form) {
  const status = document.getElementById("status");
  const rules = {
    name: (v) => (v.trim() ? "" : "Enter your name."),
    email: (v) =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
        ? ""
        : "Enter an email address like name@example.com.",
    message: (v) => (v.trim() ? "" : "Enter a comment or question."),
  };
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    status.textContent = "";
    let firstBad = null;
    for (const id in rules) {
      const field = document.getElementById(id);
      const msg = rules[id](field.value);
      document.getElementById(id + "-err").textContent = msg;
      field.setAttribute("aria-invalid", msg ? "true" : "false");
      if (msg && !firstBad) firstBad = field;
    }
    if (firstBad) {
      firstBad.focus();
      return;
    }
    status.textContent =
      "Thank you. Your message has been recorded in this browser only; nothing was sent.";
    form.reset();
  });
}
