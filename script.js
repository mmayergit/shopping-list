const ul = document.querySelector('ul');
const input = document.querySelector('input');
const addItemButton = document.querySelector('button');

addItemButton.addEventListener('click', clickButton);

function clickButton() {
  let item = input.value;
  input.value = '';
  const li = document.createElement('li');
  const span = document.createElement('span');
  const deleteButton = document.createElement('button');
  li.appendChild(span);
  li.appendChild(deleteButton);
  span.textContent = item;
  deleteButton.textContent = "Delete";
  ul.appendChild(li);
  deleteButton.addEventListener('click', () => {
    ul.removeChild(li)
  });
  input.focus();
}