var user1 = document.getElementById("user1")
var user2 = document.getElementById("user2")
var title1 = document.getElementById("title-1")
var title2 = document.getElementById("title-2")
var post1 = document.getElementById("post-1")
var post2 = document.getElementById("post-2")

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then(response => response.json())
  .then(data => user1.textContent = JSON.stringify(data.username))  
  .catch(error => console.error('Fetch error:', error));

fetch("https://jsonplaceholder.typicode.com/users/4")
  .then(response => response.json())
  .then(data => user2.textContent = JSON.stringify(data.username))  
  .catch(error => console.error('Fetch error:', error));

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => title1.innerHTML = JSON.stringify(data.title))  
  .catch(error => console.error('Fetch error:', error));

fetch("https://jsonplaceholder.typicode.com/posts/4")
  .then(response => response.json())
  .then(data => title2.innerHTML = JSON.stringify(data.title))  
  .catch(error => console.error('Fetch error:', error));

  fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => post1.innerHTML = JSON.stringify(data.body))  
  .catch(error => console.error('Fetch error:', error));

fetch("https://jsonplaceholder.typicode.com/posts/4")
  .then(response => response.json())
  .then(data => post2.innerHTML = JSON.stringify(data.body))  
  .catch(error => console.error('Fetch error:', error));
