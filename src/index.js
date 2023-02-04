document.addEventListener("DOMContentLoaded", () => {
  // your code here

  //grab form
  const form = document.querySelector("form");


  //event listner an prevent default
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    //grab submission text and priority color
    const newText = e.target['new-task-description'].value
    const newDueDate = e.target['new-due-date'].value
    const newColor = e.target['color-selector'].value

    //create new li for new task
    const li = document.createElement("li");
    li.textContent = `${newText} is due ${newDueDate}.`;
    let colorValue = newColor
    li.classList.add (`${colorValue}`)
    const ul = document.querySelector("ul");
    ul.appendChild(li);

    //create edit button
    // const editButton = document.createElement("button");
    // editButton.textContent = "Edit";
    // li.appendChild(editButton);

    //edit button event listener to change li text
    // editButton.addEventListener("click", (e) => {
    //   li.setAttribute('contenteditable', 'true')
    // })


    //create delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    li.appendChild(deleteButton);

    //clear form after submission
    form.reset();

    //delete button event listener to remove li
    deleteButton.addEventListener("click", (e) => {
      li.remove();
    })
  })
 
    




})