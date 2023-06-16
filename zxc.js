const button = document.querySelector('button')
const buttonHandler = (el) => {
    el.preventDefault()
    alert('zxc')
}
button.addEventListener('click', buttonHandler)
