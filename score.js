const player=document.querySelectorAll('span');
const target=document.querySelector("#target");
const incr=document.querySelectorAll('.incr');
const res=document.querySelector('.res');

let p1score=0,p2score=0;
let isGameOver=false;

incr[0].addEventListener('click', function(){
    if(isGameOver==false){
        p1score++;
        if(p1score==target.value){
            player[0].style.color="green";
            player[1].style.color="red";
            isGameOver=true;
        }
        player[0].innerText=p1score;
    }
})
incr[1].addEventListener('click', function(){
    if(isGameOver==false){
        p2score++;
        if(p2score==target.value){
            player[1].style.color="green";
            player[0].style.color="red";
            isGameOver=true;
        }
        player[1].innerText=p2score;
    }
})
target.addEventListener('change',function(){
    reset();
})
res.addEventListener('click',reset);

function reset(){
    p1score=0,p2score=0;
    player[0].innerText=p1score;
    player[1].innerText=p2score;
    player[0].style.color="black";
    player[1].style.color="black";
    isGameOver=false;
}
