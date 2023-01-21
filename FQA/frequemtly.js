// option 1
// select all the selectors
const questions= document.querySelectorAll('.question');

questions.forEach(function(question){
    // console.log(question);
    const btn= question.querySelector('.question-btn')
    // console.log(btn);
    btn.addEventListener('click', function(){
        questions.forEach(function(item){
            // console.log(item);
            if(item !== question){
                item.classList.remove('show-text')

            }
        })
        question.classList.toggle('show-text')

    })
})

// option 2
// traversing the Dom
// const btns= document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener('click', function(e){
//         const question=(e.currentTarget.parentElement.parentElement);
//         question.classList.toggle('show-text')

//     })
// })