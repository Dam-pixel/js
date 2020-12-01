document.querySelector ('.tab').addEventListener('click', function() {
var panel = document.querySelector('.panel')
var icon = document.querySelector('i')
var text = document.querySelector('span')
if(icon.classList.contains('fa-arrow-down')) {
panel.style.height = "200px"
icon.classList.remove('fa-arrow-down')
icon.classList.add('fa-arrow-up')
text.innerHTML = 'close'
} else {
    panel.style.height = "0"
    icon.classList.replace('fa-arrow-up', 'fa-arrow-down')
    text.innerHTML = 'open'
}
})