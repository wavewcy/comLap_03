class User {
  constructor(name, email, phone, gender, subject, message) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.gender = gender;
    this.subject = subject;
    this.message = message;
  }
}

class UI {
  static displayUsers() {
    const users = Store.getUsers();
    users.forEach((user) => UI.addUserToList(user));
  }

  static addUserToList(user) {
    const list = document.querySelector('#user-list');

    const row = document.createElement('tr');
    row.innerHTML = `
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.gender}</td>
          <td>${user.subject}</td>
          <td>${user.message}</td>
          <td><a href="#" class="btn btn-danger btn-sm delete"> X </a></td>
        `;

    list.appendChild(row);
  }

  static deleteUser(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#gender').value = '';
    document.querySelector('#subject').value = '';
    document.querySelector('#message').value = '';
  }
}

class Store {
  static getUsers() {
    let users;
    if (localStorage.getItem('users') === null) {
      users = [];
    } else {
      users = JSON.parse(localStorage.getItem('users'));
    }

    return users;
  }

  static addUser(user) {
    const users = Store.getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  }

  static removeUser(name) {
    const users = Store.getUsers();

    users.forEach((user, index) => {
      if (user.name === name) {
        users.splice(index, 1);
      }
    });

    localStorage.setItem('users', JSON.stringify(users));
  }
}

document.addEventListener('DOMContentLoaded', UI.displayUsers);

document.querySelector('#my-form').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const phone = document.querySelector('#phone').value;
  const gender = document.querySelector('#gender').value;
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('#message').value;

  if (name === '' || email === '' || phone === '' || gender === '' || subject === '' || message === '') {
    alert('Please fill in all fields');
  } else {
    const user = new User(name, email, phone, gender, subject, message);

    UI.addUserToList(user);

    Store.addUser(user);

    alert('User Added');

    UI.clearFields();
  }
});

document.querySelector('#user-list').addEventListener('click', (e) => {

  UI.deleteUser(e.target);

  Store.removeUser(e.target.parentElement.previousElementSibling.textContent);

  alert('User Removed');
});
