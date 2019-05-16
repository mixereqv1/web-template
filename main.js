const articles = document.querySelectorAll('.article-title');
const article1 = document.getElementById('article1');
const article2 = document.getElementById('article2');
for(let i=0; i<articles.length; i++){
    articles[i].addEventListener('click',function(event){
        let bar = this.nextElementSibling;
        if(bar.style.display == 'block'){
            bar.style.display = 'none';
        }else{
            bar.style.display = 'block';
        }
        if(event.target.classList.contains('first')){
            article2.style.display = 'none';
        }else if(event.target.classList.contains('second')){
            article1.style.display = 'none';
        }
    })
}

// const btn1 = document.getElementById('btn1');
// const btn2 = document.getElementById('btn2');
// const first_text = document.getElementById('first-text');
// const second_text = document.getElementById('second-text');

// btn1.addEventListener('click', function(){
//     first_text.classList.add('active-text');
//     second_text.classList.remove('active-text');
//     btn1.classList.add('btn-active');
//     btn2.classList.remove('btn-active');
// })

// btn2.addEventListener('click', function(){
//     second_text.classList.add('active-text');
//     first_text.classList.remove('active-text');
//     btn2.classList.add('btn-active');
//     btn1.classList.remove('btn-active');
// })

const btns = document.querySelectorAll('.btn');
const texts = document.querySelectorAll('.text');
for(let i=0; i<btns.length; i++){
    btns[i].addEventListener('click',function(){
        for(let l=0; l<btns.length; l++){
            btns[l].classList.remove('btn-active');
            texts[l].classList.remove('active-text');
        }
        texts[i].classList.add('active-text');
        btns[i].classList.add('btn-active');
    })
}

// for(let i=0; i<btns.length; i++){
//     btns[i].addEventListener('click',function(){
//         texts.map(el => (
//             texts[el].classList.remove('active-text')
//         ))
//         texts[tab].classList.add('active-text');
//     })
// }


//actual date
const date = new Date();
const calendar = document.getElementById('calendar');
let day;
let month = 01;
switch(date.getDay()){
    case 0:
        day = 'sunday';
        break;
    case 1:
        day = 'monday';
        break;
    case 2:
        day = 'tuesday';
        break;
    case 3:
        day = 'wednesday';
        break;
    case 4:
        day = 'thursday';
        break;
    case 5:
        day = 'friday';
        break;
    case 6:
        day = 'saturday';
        break;
}
switch(date.getMonth()){
    case 0:
        month = '01';
        break;
    case 1:
        month = '02';
        break;
    case 2:
        month = '03';
        break;
    case 3:
        month = '04';
        break;
    case 4:
        month = '05';
        break;
    case 5:
        month = '06';
        break;
    case 6:
        month = '07';
        break;
    case 7:
        month = '08';
        break;
    case 08:
        month = '09';
        break;
    case 9:
        month = '10';
        break;
    case 10:
        month = '11';
        break;
    case 11:
        month = '12';
        break;

}
function d(){
    calendar.innerText = 'Today is ' + day + ', ' + date.getDate() + '.' + month  + '.' + date.getFullYear();
    setTimeout(d,1000*3600*24);
}

d();


//countdown to end of the school year
let countEnd = new Date('Jun 21, 2019 12:00:00').getTime();
let x = setInterval(function(){
    let now = new Date().getTime();
    let distanceToEnd = countEnd - now;

    let days = Math.floor(distanceToEnd / (1000*3600*24));
    let hours = Math.floor((distanceToEnd % (1000*3600*24)) / (1000*3600));
    let minutes = Math.floor((distanceToEnd % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distanceToEnd % (1000 * 60)) / 1000);

    document.getElementById('result').innerText = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';

    if(distanceToEnd == 0){
        document.getElementById('result').innerText = "We've got summer.";
    }
},1000);



//stopwatch
var h1 = document.getElementById('stopwatch-result'),
    start = document.getElementById('startbtn'),
    stop = document.getElementById('stopbtn'),
    clear = document.getElementById('resetbtn'),
    secondss = 0, minutess = 0, hourss = 0,
    t;

function add() {
    secondss++;
    if (secondss >= 60) {
        secondss = 0;
        minutess++;
        if (minutess >= 60) {
            minutess = 0;
            hourss++;
        }
    }
    
    h1.textContent = (hourss ? (hourss > 9 ? hourss : "0" + hourss) : "00") + ":" + (minutess ? (minutess > 9 ? minutess : "0" + minutess) : "00") + ":" + (secondss > 9 ? secondss : "0" + secondss);

    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}


/* Stop button */
stop.onclick = function() {
    clearTimeout(t);
}

/* Clear button */
clear.onclick = function() {
    h1.textContent = "00:00:00";
    secondss = 0; minutess = 0; hourss = 0;
}