const inputs = document.querySelectorAll('input');

function updateValue(){
    const e = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`,this.value + e);
}

inputs.forEach((input) => input.addEventListener('change',updateValue));
inputs.forEach((input) => input.addEventListener('mousemove',updateValue));
