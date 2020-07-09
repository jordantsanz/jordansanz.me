// JavaScript for Portfolio Website
// By Jordan Sanz

button = document.getElementById("go-up");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  } 


function scrollOffClickExperience(){
  document.querySelector('.experience-background').scrollIntoView({ 
    behavior: 'smooth' 
  })
}
function scrollOffClickPortfolio(){
  document.querySelector('.portfolio-container').scrollIntoView({ 
    behavior: 'smooth' 
  })
}
function scrollOffClickContact(){
  document.querySelector('#contact').scrollIntoView({ 
    behavior: 'smooth' 
  })
}

