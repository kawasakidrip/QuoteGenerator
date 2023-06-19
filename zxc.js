const button = document.querySelector('button')
const buttonHandler = (el) => {
    el.preventDefault()
    alert('Z O V')
}
button.addEventListener('click', buttonHandler)
