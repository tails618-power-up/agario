let r = 50;
let new_r = r + 100;
let timer = 0;
let redval = 255;
let blueval = 0;
let finalredval = 0;
let finalblueval = 255;

function setup(){
    createCanvas(600,600);
}

function draw(){
    background(redval, 0, blueval);
    fill(255);
    ellipse(300, 300, r, r);

    if(timer == 200){
        timer = 0;
        new_r += 100;
    }

    r = lerp(r, new_r, 0.01);
    redval = lerp(redval, finalredval, 0.01);
    blueval = lerp(blueval, finalblueval, 0.01);
    timer += 1;
}