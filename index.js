const form = document.getElementById('form')
form.addEventListener('submit', sendMail)
const username = document.getElementById('username')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')
const success = document.getElementById('success')
const error = document.getElementById('error')
const submittext = document.getElementById('submittext')
const spinner = document.getElementById('loader')
const submitbtn =  document.getElementById("formSubmit")
const burger = document.getElementById("burger")
const navlinks = document.getElementById('navlinks')
const navlink = document.getElementsByClassName('navlink')
const time = document.getElementById('time')

function sendMail(e){
  e.preventDefault()
  spinner.style.display = "block"
  submittext.style.display = "none"
  submitbtn.setAttribute("disabled", true)
  const template = { 
    username : username.value, 
    email : username.value, 
    subject:subject.value, 
    message:subject.value 
  }
  emailjs.send("service_yvsd6pm", "template_zc080aa", template, "p4D5uyCTOzuEE75ss")
    .then(() => {
      username.value = ""
      email.value = ""
      subject.value = ""
      message.value = ""
      success.classList.add('displaymsg')
      setTimeout(() => {
        success.classList.remove('displaymsg')
      },5000)
    })
    .catch(() => {
      error.classList.add('displaymsg')
      setTimeout(() => {
        error.classList.remove('displaymsg')
      },5000)
    }).finally(() => {
        spinner.style.display = "none"
        submittext.style.display = "block"
        submitbtn.removeAttribute('disabled')
    })
}

function toggleNavBar(){
  navlinks.classList.toggle('showNav')
}


burger.addEventListener('click', toggleNavBar)

for (let i = 0; i < navlink.length; i++) {
  navlink[i].addEventListener('click',toggleNavBar)
}


const date = new Date();
const getTime = date.getFullYear() - 2018;
const textNode = document.createTextNode(getTime)
time.appendChild(textNode)
