const checkBtn = document.querySelectorAll(".check");

let numBtn;

function btnChecked(e){
    let inBetween = false;
    if(e.shiftKey && this.checked){
        checkBtn.forEach(checkbox => {
            if(checkbox === this || checkbox === numBtn){
                inBetween = !inBetween;
            }
            if(inBetween){
                checkbox.checked = true;
            }
            });
    }
    numBtn = this;
}

checkBtn.forEach(e => {
    e.addEventListener("click", btnChecked);
})