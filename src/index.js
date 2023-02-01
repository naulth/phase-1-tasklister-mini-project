document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const li =document.createElement("li");
    newEntryText = document.getElementById('new-task-description').value;
    li.textContent = newEntryText
    const ul = document.querySelector("ul");
    ul.appendChild(li);
  })
});


