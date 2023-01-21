let btns=document.querySelectorAll('.tab-btn');
let About=document.querySelector('.about');
let contents=document.querySelectorAll('.content');

About.addEventListener('click', function(e){
    // console.log(e.target.dataset.id)
    const id = e.target.dataset.id;
    if(id)
    {
        btns.forEach(function(btn)
        {
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
        contents.forEach(function(cont){
            cont.classList.remove('active')
        })
        let element = document.getElementById(id)
        element.classList.add('active')
    }

       
    
})