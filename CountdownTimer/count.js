const months=[
    'january',
    'february',
    'march',
    'April',
    'May',
    'June',
    'Jully',
    'Agust',
    'Septemper',
    'October',
    'November',
    'December',
];
const weekdays=[
    'Sunday',
    'Monday',
    'Tuseday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

let giveaway= document.querySelector('.giveaway')
let deadline= document.querySelector('.deadline')
let items= document.querySelectorAll('.deadline-fomat h4');

let temDate = new Date();
let temYear= temDate.getFullYear();
let temMonth= temDate.getMonth();
let temDay= temDate.getDate();

// let futurDate= new Date(2022,9,28,18,30,0)
const futurDate= new Date(temYear, temMonth, temDay + 11, 18, 30,0)
// console.log(futurDate);
const year= futurDate.getFullYear();
const hours= futurDate.getHours();
const minutes= futurDate.getMinutes();
let month= futurDate.getMonth();
month=months[month]
const date= futurDate.getDate();
const weekday= weekdays[futurDate.getDay()]

giveaway.textContent=`Giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}: ${minutes}am`

// futur time in ms
const futureTime= futurDate.getTime()
// console.log(futurTime);
function getRemainingTime(){
const today= new Date().getTime()
const t= futureTime-today
// is = 1000ms
// 1mn = 60s
// 1hr = 6omns
// 1day = 24rs

// values in ms
const oneDay = 24*60*60*1000
const oneHour = 60*60*1000
const oneMinute =60*1000
// calculate all values
let days = t/oneDay
days = Math.floor(days)
let hours= Math.floor((t% oneDay)/oneHour);
let minutes= Math.floor((t% oneHour)/oneMinute);
let seconds= Math.floor((t% oneMinute)/1000);

// set value arrays
const values=[days, hours, minutes, seconds]

function fomat(item){
    if(item < 10){
        return item=`0 ${item}`
    }
    return item;

}

items.forEach(function(item,index){
    item.innerHTML= fomat(values[index])

})
if(t < 0){
    clearInterval(countdown)
    deadline.innerHTML=`<h4 class="Expaied">sorry, the giveaway has Expaired</h4>`
}


}
// countDown
let countdown= setInterval(getRemainingTime,1000)
getRemainingTime()
