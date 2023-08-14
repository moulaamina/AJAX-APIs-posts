function getPosts(userId) {
  let request = new XMLHttpRequest();
  request.open(
    'GET',
    'https://jsonplaceholder.typicode.com/posts?userId=' + userId
  );
  request.send();
  request.responseType = 'json';
  request.onload = () => {
    let posts = request.response;
    if (request.status >= 200 && request.status < 300) {
      document.getElementById('posts').innerHTML = '';
      for (post of posts) {
        let content = `
        <div id="post">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          </div>
        `;
        document.getElementById('posts').innerHTML += content;
      }
    } else {
      alert('Error');
    }
  };
}

function getUsers() {
  let request = new XMLHttpRequest();
  request.open('GET', 'https://jsonplaceholder.typicode.com/users');
  request.send();
  request.responseType = 'json';
  request.onload = () => {
    let users = request.response;
    if (request.status >= 200 && request.status < 300) {
      for (user of users) {
        let content = `
        <div id="user" onclick="userClicked(${user.id},this)">
            <h4>${user.name}</h4>
            <p>${user.email}</p>
          </div>
        `;
        document.getElementById('users').innerHTML += content;
      }
    } else {
      alert('Error');
    }
  };
}

getPosts(1);
getUsers();

function userClicked(id, element) {
  getPosts(id);
  let clicked = document.getElementsByClassName('clicked');
  for (el of clicked) {
    el.classList.remove('clicked');
  }
  element.classList.add('clicked');
}
