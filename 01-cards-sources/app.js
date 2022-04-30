const slides = document.querySelectorAll('.slide')
const body = document.querySelector('body')
slides.forEach(item => {
    item.addEventListener('click', () => {
        slides.forEach(slide => {
            slide.classList.remove('active')
        })

        item.classList.add('active')
        body.style.backgroundImage = item.style.backgroundImage
    })
})