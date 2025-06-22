document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;

      if (xhr.status === 200) {
        form.reset();
        status.innerHTML = "✅ Thank you for your message!";
        status.className = "text-success text-center mt-3";
        status.style.display = "block";
      } else {
        status.innerHTML = "❌ Oops! Something went wrong.";
        status.className = "text-danger text-center mt-3";
        status.style.display = "block";
      }
    };

    xhr.send(data);
  });
});
