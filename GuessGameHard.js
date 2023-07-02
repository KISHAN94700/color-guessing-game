let color = document.querySelectorAll('.box');
let banAns = document.querySelector('#banAns');
var countShow = document.querySelector('#count');
for(let box of color){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    box.style.backgroundColor = `rgb(${r},${g},${b})`;
}

let answer = '';
let rndIndex = Math.floor(Math.random()*9);
let condidateBox = color[rndIndex];
answer = condidateBox.style.backgroundColor;
banAns.innerHTML = answer.toUpperCase();


// check if user click on box and it is equal to ans or not

let fun = ()=>{
    let countIndex = 1;
    countShow.innerHTML = countIndex;
    for(let box of color){
    box.addEventListener('click',() => {
        if(box.style.backgroundColor === answer){
            for(let box1 of color){
                box1.style.backgroundColor = answer;
            }
            let banner = document.querySelector('.nav1');
            banner.style.backgroundColor = answer;

            // Counter 
            countShow.style.color = answer;
            countShow.innerHTML = `you won this game in ${countIndex} Attempts`;

        }
        else{
            // Count tracker
            countIndex++;
            countShow.innerHTML = countIndex;
            box.style.backgroundColor = "white";    
        }  
    });
}
}
fun();
// if user click on new game button then page will be refreshed
let color1 = document.querySelectorAll('.box');
let newG = ()=>{
    for(let box of color1){
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        box.style.backgroundColor = `rgb(${r},${g},${b})`;
    }
    // let answer = '';
    let rndIndex = Math.floor(Math.random()* 9);
    let condidateBox = color1[rndIndex];
    answer = condidateBox.style.backgroundColor;
    banAns.innerHTML = answer.toUpperCase();
}

let reset = document.querySelector('.newG');
reset.addEventListener('click',()=>{
    newG();
    fun();
});