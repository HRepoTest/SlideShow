const widthImage = 500
const slideContainer = document.querySelector('.slides')
const slideImage = Array.from(document.querySelectorAll('.slide'))
const body = document.querySelector('body')
const reStart = document.querySelector('.restart')

const nextBtn = document.querySelector('.next')
const prevBtn = document.querySelector('.prev')

slideContainer.style.width = `${slideImage.length * widthImage}px`

let index = 0

function next() {
    if (index < slideImage.length - 1) {
        index++
    } else {
        index = 0
    }

    slideContainer.style.transform = `translateX(-${widthImage * index}px)`
}

function prev() {
    if (index === 0) {
        index = slideImage.length - 1
    } else {
        index--
    }

    slideContainer.style.transform = `translateX(-${widthImage * index}px)`
}

function startImage() {
    index = 0
    slideContainer.style.transform = `translateX(-${widthImage * index}px)`
}

nextBtn.addEventListener('click', function () {
    next()
})

prevBtn.addEventListener('click', function () {
    prev()
})

reStart.addEventListener('click', function () {
    startImage()
})

body.addEventListener('keyup', function (e) {
    switch (e.which) {
        case 27:
            startImage()
            break
        case 37:
            prev()
            break
        case 39:
            next()
            break
    }
})
