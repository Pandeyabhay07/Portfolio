
var tablinks=document.getElementsByClassName("tablinks")
var tabcontents=document.getElementsByClassName("tab-contents")
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu=document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right="0";
}
function closemenu(){
    sidemenu.style.right="-200px";
}


const scriptURL = '<https://script.google.com/macros/s/AKfycbwtyJT_-0L_CcttGdmkPpF0HSYiH2VJZ-7WhUxibKSTKMt2c30kGiShEXzbbK_Y2svX/exec>'
const form = document.forms['submit-to-google-sheet']
// const msg=document.getElementById("msg")
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {msg.innerHTML="Message Sent Succesfully!"
                        setTimeout(function()
                        {msg.innerHTML=""},4000)
                        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})
