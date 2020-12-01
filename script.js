document.querySelectorAll('.slides img').forEach(function (slide) {
    slide.addEventListener('click', function (image) {
        console.log(image.target.src)
        var source = image.target.src
        document.querySelector('.popup').style.visibility = 'visible'
        document.querySelector('.popup').style.opacity = 1
        document.querySelector('.popup img').setAttribute('src', source)
        //   document.querySelector('.popup img').style.visibility = "visible"
        //   document.querySelector('.popup img').style.opacity = 1
        document.querySelector('.popup img').style.cssText = 'visibility:visible;opacity:1;height:480px;width:640px;transform:rotate(360deg)'
        document.querySelector('.close').style.display = 'block'
    })

})


document.querySelector('.close').addEventListener('click', function(event) {

    document.querySelector('.popup').style.cssText = 'visibility:hidden;opacity:0'
    document.querySelector('.popup img').style.cssText = 'visibility:hidden;opacity:0'
    event.target.style.display = 'none'

})