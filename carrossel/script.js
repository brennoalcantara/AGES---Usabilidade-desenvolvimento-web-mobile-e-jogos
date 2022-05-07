const buttons = document.querySelectorAll('[data-carousel-button]')

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonType = button.dataset.carouselButton === 'next' ? 1 : -1
    const slides = button.closest('#box-content').querySelector('[data-slides]')
    const activeSlide = slides.querySelector('[data-active]')
    const activeSubtitle = document.querySelector('[data-subtitle-active]')

    let newIndex = [...slides.children].indexOf(activeSlide) + buttonType

    if (newIndex < 0) {
      newIndex = slides.children.length - 1
    }
    if (newIndex >= slides.children.length) {
      newIndex = 0
    }
    
    const subtitles = document.querySelectorAll('.subtitle')

    slides.children[newIndex].dataset.active = true
    subtitles[newIndex].dataset.subtitleActive = true

    delete activeSlide.dataset.active
    delete activeSubtitle.dataset.subtitleActive
  })
})