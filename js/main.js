// adding js code here
let button = document.querySelector('button')
let body = document.body

button.addEventListener('click', _ => {
  body.classList.toggle('offsite-is-open')
})
