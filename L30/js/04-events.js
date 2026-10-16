const button = document.querySelector('#ChangeButton');
console.log(button);

const title=document.querySelector('#title');

// button.addEventListener('click', (event) => {
//     console.log(event);
// });


button.addEventListener('click', () => {
    console.log("Before:", title.textContent);
    title.textContent = 'How are you Bro!';
    console.log("After:", title.textContent);
});