/* ============== toggle icon navbar ========================*/
let menuIcon = document.querySelector('#menu_icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};





/* ============== secroll section active link ========================*/

let sections = document.querySelectorAll('section');

window.onscroll = () => {
    let navLink = document.querySelectorAll('header nav a');
    let currentSectionId = '';

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            currentSectionId = id;
        };
    });

    navLink.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href').includes(currentSectionId)) {
            link.classList.add('active');

        }
    });


    /* ============== sticky navbar ========================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)

    /* ============== remove toggle icon navbar when click navbar link ========================*/


    menuIcon.classList.remove('bx-x');
    //    navbar.classList.remove('active');


};

/* ============== scroll reveal ===========*/

ScrollReveal({
    //  reset: true ,
    distance: '80px',
    duration: 2000,
    deley: 200

});

ScrollReveal().reveal('.home_content, .heading ', { origin: 'top' });
ScrollReveal().reveal('.home_img, .services_container, .portfolio_box, .contact form ', { origin: 'bottom' });
ScrollReveal().reveal('.home_content h1, .about_img ', { origin: 'left' });
ScrollReveal().reveal('.home_content p, .about_content ', { origin: 'right' });



/* ============== typed js ===========*/

const typed = new Typed('.multiple_text', {
    strings: ['Front end web Developer','Web designer','Web Coder'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


/* ============== downlode cv file ===========*/

function downloadFile() {
    // Create a new element to represent the download link
    let downloadLink = document.createElement('a');

    // Set the download link's properties
    downloadLink.setAttribute('href', './cv/SWAPNIL_AHMMED_SHISHIR_WEB_DEVELOPER_CV_pbBW.pdf');
    downloadLink.setAttribute('download', './cv/SWAPNIL_AHMMED_SHISHIR_WEB_DEVELOPER_CV_pbBW.pdf');

    // Append the download link to the document
    document.body.appendChild(downloadLink);

    // Simulate a click on the download link
    downloadLink.click();

    // Remove the download link from the document
    document.body.removeChild(downloadLink);
}

/* ============== Read more button ===========*/

function showMore() {
    const hiddenParagraph = document.querySelector('#more');
    const button = document.querySelector('#about_content_btn');
    const dot = document.querySelector('#dot');
    if (hiddenParagraph && button) {
        if (hiddenParagraph.style.display === 'none') {
            hiddenParagraph.style.display = 'block';
            dot.style.display = 'none';
            button.textContent = 'Read Less';
        } else {
            hiddenParagraph.style.display = 'none';
            dot.style.display = 'inline';
            button.textContent = 'Read more';
        }
    } else {
        console.error('Unable to find hidden text or button element');
    }
}

/* ============== progress bar ===========*/
// window.setTimeout(function(){
//     $('.skill-progress').addClass("go");
//   }, 1000);
  
 
  

// html
let number1 = document.getElementById("number1");
let counter1=0;
setInterval(()=>{
      if(counter1 === 90){
          clearInterval();
      }else{

          counter1 += 1;
      number1.innerHTML=counter1 + "%";
      }
     
  },20)

// css
let number2 = document.getElementById("number2");
let counter2=0;
setInterval(()=>{
      if(counter2== 85){
          clearInterval();
      }else{

          counter2 += 1;
      number2.innerHTML=counter2 + "%";
      }
     
  },24)

  // javascript
  let number3 = document.getElementById("number3");
  let counter3=0;
  setInterval(()=>{
      if(counter3== 77){
          clearInterval();
      }else{

          counter3 += 1;
      number3.innerHTML=counter3 + "%";
      }
     
  },26)

//   react
let number4 = document.getElementById("number4");
  
let counter4=0;
setInterval(()=>{
      if(counter4== 70){
          clearInterval();
      }else{

          counter4 += 1;
      number4.innerHTML=counter4 + "%";
      }
     
  },28)

//   bootstrap
let number5 = document.getElementById("number5");
let counter5=0;
setInterval(()=>{
      if(counter5== 90){
          clearInterval();
      }else{

          counter5 += 1;
      number5.innerHTML=counter5 + "%";
      }
     
  },20)

//   git & github
let number6 = document.getElementById("number6");
let counter6=0;
setInterval(()=>{
      if(counter6== 67){
          clearInterval();
      }else{

          counter6 += 1;
      number6.innerHTML=counter6 + "%";
      }
     
  },31)