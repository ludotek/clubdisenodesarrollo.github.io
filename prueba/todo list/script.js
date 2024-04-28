const input = document.querySelector(".input");
const addButton = document.querySelector(".add-button");
const todosHtml = document.querySelector(".todos");
const emtyImage = document.querySelector(".empty-image");
let todosJson = JSON.parse(localStorage.getItem("todos")) || [];

