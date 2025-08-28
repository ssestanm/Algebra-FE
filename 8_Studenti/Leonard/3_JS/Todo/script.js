`use strict`;

const filterBtn = document.querySelector(`.btn--filter`);
const trashBtn = document.querySelector(`.btn--trash`);
const addBtn = document.querySelector(`.btn--add`);
const inputElement = document.querySelector(`.input-add`);
const tableBody = document.querySelector(`tbody`);
const toast = document.querySelector(`.toast`);
const toastMessage = document.querySelector(`.toast-message`);

const tasks = [];

const updateUI = function () {
  if (tasks.length === 0) tableBody.innerHTML = `<tr><td>No tasks</td></tr>`;
  else tableBody.innerHTML = ``;
  tasks.forEach((el, i) =>
    tableBody.insertAdjacentHTML(
      `beforeend`,
      `<tr>
            <td>${i + 1}.</td>
            <td>${el.taskName}</td>
            <td>
              <button class="btn btn--check">
                <ion-icon name="checkmark-outline"></ion-icon>
              </button>
            </td>
            <td>
              <button class="btn btn--check">
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </td>
          </tr>`
    )
  );
};

addBtn.addEventListener(`click`, function () {
  if (inputElement.value) {
    tasks.push({ taskName: inputElement.value, checked: false });
    updateUI();
  }

  // make a toast popup
  else {
    toastMessage.textContent = `Enter a task`;
  }
});
