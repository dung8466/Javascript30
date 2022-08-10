const array = [];
const secretArray = 'hello'
const message = document.querySelector('p');
window.addEventListener('keyup', (e) => {
    array.push(e.key);
    // console.log(array);
    array.slice(- secretArray.length - 1, array.length - secretArray.length);
    if(array.join('').includes(secretArray)){
        message.innerText = 'Oh! You found it.';
    }
})