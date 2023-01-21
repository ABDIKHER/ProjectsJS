// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// selct the span
// **** set the date**** //
const date = document.getElementById('date');
date.innerHTML= new Date().getFullYear()
// **** close the links**** //
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    // linksContainer.classList.toggle('show-links');
    const containerHieght = linksContainer.getBoundingClientRect().height;
    const linksHieght = links.getBoundingClientRect().height;
    if(containerHieght===0){
        linksContainer.style.height=`${linksHieght}px`
    }else{
        linksContainer.style.height= 0;
    }
    // console.log(linksHieght)
})
// **** navvar fixed**** //
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener('scroll', function(){
    const scrollHeight=window.pageYOffset
    const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }

  if(scrollHeight > 500){
    topLink.classList.add('show-link')
  }else{
    topLink.classList.remove('show-link')
  }
})

// **** smooth scroll**** //
const scrollLinks = document.querySelectorAll('.scroll-link');
scrollLinks.forEach(function(link){
  link.addEventListener('click', function(e){
    e.preventDefault()
    // navigate to specific spot
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id)
     // calculate the height
     const navHeight = navbar.getBoundingClientRect().height;
     const containerHieght = linksContainer.getBoundingClientRect().height;
     const fixedNav = navbar.classList.contains('fixed-nav')
    let position = element.offsetTop- navHeight;
    if(!fixedNav){
      position = position-navHeight;
    }
    if(navHeight > 82){
      position = position+containerHieght;
    }
    // console.log(position)
   
    window.scrollTo({
      left:0,
      top:position,
    })
    linksContainer.style.height = 0;
  })
})


