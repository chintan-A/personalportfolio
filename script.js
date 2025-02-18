// var tabLinks = document.getElementsByClassName("tab-links");
var tabLinks = document.getElementsByClassName("tab-links");
let tabContent = document.getElementsByClassName("tab-content");



function opentabs(tabname, event){
    event.preventDefault();
    for(let tablink of tabLinks){
      tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabContent){
      tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


let sideMenu = document.getElementById("sidemenu");

function openmenu(){
  sideMenu.style.right= "0";
}

function closemenu(){
  sideMenu.style.right= "-200px";
  
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbw2vHAgO3m3BO62CCbenGndaV8ldjkS6nxxXw6N8gMjuJJX-wm0HWD_I7Wmsk4KKMjE/exec'
const form = document.forms['submit-to-google-sheet'];

const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Send data to your Node.js server
  fetch('http://localhost:3000/submit-form', {
    method: 'POST',
    body: new FormData(form)
  })
  .then(response => response.json())
  .then(data => {
    msg.innerHTML = "Message Sent Successfully! Thank You";
    setTimeout(() => {
      msg.innerHTML = "";
    }, 2000);
    form.reset();
    console.log(data);
  })
  .catch(error => {
    console.error('Error!', error.message);
    msg.innerHTML = "Message Failed to Send. Please Try Again.";
  });
});

// Copy functionality
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const textToCopy = button.dataset.text;
    navigator.clipboard.writeText(textToCopy).then(() => {
      const tooltip = button.querySelector('.tooltip');
      tooltip.textContent = 'Copied!';
      setTimeout(() => {
        tooltip.textContent = 'Copy';
      }, 2000);
    });
  });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Show default tab (Skills)
    document.getElementById('skills').classList.add('active-tab');
    document.querySelector('.tab-links').classList.add('active-link');
});
