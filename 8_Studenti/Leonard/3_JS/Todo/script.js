`use strict`;

const filterBtn = document.querySelector(`.btn--filter`);
const trashBtn = document.querySelector(`.btn--trash`);
const addBtn = document.querySelector(`.btn--add`);
const inputElement = document.querySelector(`.input-add`);
const tableBody = document.querySelector(`tbody`);
const toast = document.querySelector(`.toast`);
const toastElement = document.querySelector(`.toast`);
const toastMessage = document.querySelector(`.toast-message`);
const filterGroup = document.querySelector(`.filter-group`);
const filterAllBtn = document.querySelector(`.btn--all`);
const filterUnfinishedBtn = document.querySelector(`.btn--unfinished`);
const filterFinishedBtn = document.querySelector(`.btn--finished`);

let toDoTasks = [];

const updateUI = function (tasks) {
  if (tasks.length === 0)
    tableBody.innerHTML = `<tr><td class="no-tasks-text">No tasks</td></tr>`;
  else tableBody.innerHTML = ``;
  tasks.forEach((el, i) =>
    tableBody.insertAdjacentHTML(
      `beforeend`,
      `<tr>
            <td>${i + 1}.</td>
            <td>${el.taskName}</td>
            <td>
              <button class="btn btn--check ${el.checked ? `checked` : ``}">
                <ion-icon name="checkmark-outline" class="checkmark-icon ${
                  !el.checked ? `unchecked` : ``
                }"></ion-icon>
              </button>
            </td>
            <td>
              <button class="btn btn--cross">
                <ion-icon name="close-outline"></ion-icon>
              </button>
            </td>
          </tr>`
    )
  );
  checkMarkBtns = Array.from(document.querySelectorAll(`.btn--check`));
  crossBtns = Array.from(document.querySelectorAll(`.btn--cross`));
  checkMarkIcons = Array.from(document.querySelectorAll(`.checkmark-icon`));
  checkMarkBtns.forEach((button, i) =>
    button.addEventListener(`click`, function () {
      if (tasks.at(i).checked) {
        tasks.at(i).checked = false;
        button.classList.remove(`checked`);
        checkMarkIcons.at(i).classList.add(`unchecked`);
        console.log(tasks);
      } else {
        tasks.at(i).checked = true;
        button.classList.add(`checked`);
        checkMarkIcons.at(i).classList.remove(`unchecked`);
        console.log(tasks);
      }
    })
  );
};

// ADD TASKS
addBtn.addEventListener(`click`, function () {
  if (inputElement.value) {
    toDoTasks.push({ taskName: inputElement.value, checked: false });
    updateUI(toDoTasks);
    inputElement.value = ``;
  } else {
    toastElement.classList.remove(`hidden-toast`);
    setTimeout(() => toastElement.classList.add(`hidden-toast`), 3000);
  }
});

// CLEAR ALL
trashBtn.addEventListener(`click`, function () {
  toDoTasks = [];
  updateUI(toDoTasks);
});

// FILTER BUTTON DROPDOWN
filterBtn.addEventListener(`click`, function () {
  filterGroup.classList.toggle(`hidden-filters`);
});

filterAllBtn.addEventListener(`click`, function () {
  updateUI(toDoTasks);
});

filterUnfinishedBtn.addEventListener(`click`, function () {
  updateUI(toDoTasks.filter((el) => !el.checked));
});

filterFinishedBtn.addEventListener(`click`, function () {
  updateUI(toDoTasks.filter((el) => el.checked));
});
