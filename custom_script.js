// timer start
const showTimeLess = () => {
    const addZero =  (x) => {return ((x < 10)? '0' : '') + x}
    let timeLeft = Math.round (.001 * (sessionStorage.getItem ('timeset') - performance.now ()));
    document.getElementById ('my_timer').textContent = [addZero(Math.floor (timeLeft / 3600)), addZero(Math.floor ((timeLeft / 60) % 60)), addZero  (timeLeft % 60)].join (':');
    if (timeLeft) setTimeout (showTimeLess, 345);
}
let innerTimeLeft = document.getElementById ('my_timer').textContent.split (':');
    sessionStorage.setItem ('timeset', (innerTimeLeft [0] * 3600 + innerTimeLeft [1] * 60 + +innerTimeLeft [2]) * 1000);
    showTimeLess ();
// timer end




// document.addEventListener("DOMContentLoaded", () => {
//     let ChatBtn = document.querySelector('#scrollUp')
//     console.log(ChatBtn);
// });
