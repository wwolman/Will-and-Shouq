let $bar = document.querySelector('.progress')
let $progressText = document.querySelector('.progressText')
let $h1 = document.getElementById('heading')
let $titleBar = document.querySelector('.titleBar')
let title = document.querySelector('h1').textContent
let text = document.querySelector('main').textContent
let $readingTime = document.getElementById('readingTime')
window.addEventListener('scroll', event => {
let windowH = window.innerHeight
let documentH = document.documentElement.scrollHeight
let amtScrolled = window.scrollY
let ttlAvailable = documentH - windowH
let percent = amtScrolled / ttlAvailable
$bar.style.width = `${percent * 100}%`
})

// window.addEventListener('load', function theStateOfTheInterface(){
let theStateOfTheInterface =() => {

let winH = document.documentElement.clientHeight
let winW = document.documentElement.clientWidth
let docH = document.documentElement.scrollHeight
let docW = document.documentElement.scrollWidth
let winY = window.scrollY
let winX = window.scrollX
let maxY = docH - winH
let maxX = docW - winW
let pctY = Math.round(winY / Math.max(maxY, 1) * 100)
let pctX = Math.round(winX / Math.max(maxX, 1) * 100)

let infoForElement = ''


let checkOneSection = ($sec) => {
    let fromD = $sec.offsetTop
    let fromW = $sec.getBoundingClientRect().top
    if (fromW < winH / 2) {
        infoForElement += `<li class="past">${$sec.querySelector('h2').textContent}`
    }  else {
        infoForElement += `<li>${$sec.querySelector('h2').textContent}`
    }
}

// Iterate though each matching element call the checkonesection function for each one
document.querySelectorAll('.full-viewport').forEach(checkOneSection)


document.querySelector('.panel').innerHTML = `
<h2>Article sections</h2>
    <li></li>
    <ol> ${infoForElement} </ol>
    <li></li>
`
}

window.addEventListener('load', theStateOfTheInterface)
window.addEventListener('scroll', theStateOfTheInterface)
window.addEventListener('resize', theStateOfTheInterface)

/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }

// Carousel

let $show = document.querySelector('.show')


// A function that goes to the start of the show
let setFirstSlide = () => {

//finds first element
let $first = document.querySelector('.slide:first-child')

//adds a class to it
$first.classList.add('current')
}

// A function that goes to the end of the show
let setLastSlide = () => {

}

// Remove ".current" from all ".slide"
let unsetSlides = () => {

}

// Previous slide
let prevSlide = () => {

//1. locate the current slide
let $curr = document.querySelector('.current')

//2. Remove the current class
$curr.classList.remove('current')

//3. find the next slide
let $prev = $curr.prevElementSibling

if ($prev != null){
    //there is no next slide
    //4. If it exists, add the current class
    $prev.classList.add('current')
} else {
    //5. if it doesn't exist, go back to the beginning 
    setFirstSlide()
} 
}

// Next slide
let nextSlide = () => {

//1. locate the current slide
let $curr = document.querySelector('.current')

//2. Remove the current class
$curr.classList.remove('current')

//3. find the next slide
let $next = $curr.nextElementSibling

if ($next != null){
    //there is no next slide
    //4. If it exists, add the current class
    $next.classList.add('current')
} else {
    //5. if it doesn't exist, go back to the beginning 
    setFirstSlide()
} 
    

}

// When the interface has fully loaded...
let windowLoaded = () => {

//check if there's a hash set, if so start at that slide
//window.location.hash


//else, use the first slide
//setup the first slide
setFirstSlide()


//add all the event listeners 
document.querySelector('#next').addEventListener('click', nextSlide)

//add all the event listeners 
document.querySelector('#prev').addEventListener('click', prevSlide)

}

window.addEventListener('load', windowLoaded)


// Fetch Page

const loadContentFormHtmlFile = (url) => {

    //1. Put some type of UI to inform the user


    //2. Fetch the file specified as URL
    fetch('page2.html')
    .then((response) => {
        //converts the file to text 
        return response.text()
    })
    .then((html) => {
        //3. Parse the document into text/html
        let parser = new DOMParser()
        let newDocument = parser.parseFromString(html, 'text/html')

        //4. Pull out the #content
        let $oldContent = document.querySelector('#content')
        let $newContent = newDocument.querySelector('#content')
        
        //5. Replace the current #content
        //Replace the old content with the new content 
        $oldContent.innerHTML += $newContent.innerHTML

        //Append content
        // oldContent.innerHTML += $newContent.innerHTML

        //6. Clear the UI loading/etc
        document.querySelector('section:last-child').classList.add('loaded')
    })

}

// window.addEventListener('click', loadContentFormHtmlFile('content.html'))
window.addEventListener('click', event => {loadContentFormHtmlFile('content.html')

})


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }