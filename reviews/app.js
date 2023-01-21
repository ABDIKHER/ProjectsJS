


const reviews=[
    {
        d: 1,
        name: "Barak obama",
        job: "web developer",
        img: "https://cdn.britannica.com/43/172743-138-545C299D/overview-Barack-Obama.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laudantium."
    },
    {
        d: 2,
        name: "uhuru kenyatta",
        job: "App designer",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Uhuru_Kenyatta.jpg/220px-Uhuru_Kenyatta.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laudantium."
    },
    {
        d: 3,
        name: "wiliam ruto",
        job: "Graphic designer",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/William_Ruto_at_WTO_Public_Forum_2014.jpg/800px-William_Ruto_at_WTO_Public_Forum_2014.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laudantium."
    },
    {
        d: 4,
        name: "Rila omolo odinga",
        job: "mobile App developer",
        img: "https://cdn.britannica.com/98/127198-050-F670E902/Raila-Odinga-Kenyan.jpg",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, laudantium."
    }
]
// select the selectors
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentItem = 0;
// start the initial load
window.addEventListener("DOMContentLoaded", function(){
  showPerson();
});

// show person based on items
function showPerson(){
    const item = reviews[currentItem];
    img.src=item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;

}
// show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0
    }
    showPerson();
});

// show prev person
prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1
    }
    showPerson();
});
