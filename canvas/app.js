const canvas = document.querySelector('.canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const ctx = canvas.getContext('2d');
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 100;

let color = 0;
let positionX = 0;
let positionY = 0;
let isDrawing = false;  
let direction = true;

function draw(e){
    if(!isDrawing) return;
    
    ctx.strokeStyle = `hsl(${color}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(positionX, positionY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [positionX, positionY] = [e.offsetX, e.offsetY];
    
    color++;
    if(color >= 360){
        color = 0;
    }
    
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    if(direction){ 
        ctx.lineWidth++;
    }
    else {
        ctx.lineWidth--;
    }
}

canvas.addEventListener('mousedown',(e)=>{
    isDrawing = true;
    [positionX, positionY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', ()=> isDrawing = false);
canvas.addEventListener('mouseout', ()=> isDrawing = false);