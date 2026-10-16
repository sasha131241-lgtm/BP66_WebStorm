console.log('03-elements started');

const title = document.querySelector("#shopTitle");
console.log(title.textContent);

title.textContent = "My apple store";

title.classList.add("highlight");

title.classList.remove("highlight");

title.classList.toggle("highlight"); // добавил а второй раз
title.classList.toggle("highlight"); // удалил
