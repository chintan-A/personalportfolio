var tabLinks = document.getElementsByClassName("tab-links");
let tabContent = document.getElementsByClassName("tab-content");

function opentabs(tabname){
    for(tablink of tabLinks){
      tablink.classList.remove("active-link");
    }
    for(tabcontent of tabContent){
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
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response =>{
      msg.innerHTML = " Message Sent Successfull ! Thank You"
      setTimeout(function(){
        msg.innerHTML = "";
      },2000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})