/* Homepage scroll button */
const scroll = document.querySelector("#scrollIcon")

scroll.addEventListener("click", () => {
    document.querySelector("#about").scrollIntoView()
})

/* Snap scroll observer */
const homepage = document.getElementById("homepage")
const html = document.documentElement

const snapObserver = new IntersectionObserver(([entry]) => {
    if(entry.isIntersecting){
        html.classList.add("snap")
        scroll.parentElement.style.opacity = 1;
    }else{
        html.classList.remove("snap")
        scroll.parentElement.style.opacity = 0;
    }},
    {
        threshold: 0.1
    }
)

snapObserver.observe(homepage)

/* Fade in observer */
const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add("is-visible")
            fadeObserver.unobserve(entry.target)
        }
    })},
    {
        threshold: 0.2
    }
)

document.querySelectorAll(".fade-in").forEach(element => {
    fadeObserver.observe(element)
})

/* Language button */
const languageButton = document.querySelector("#language-button")
languageButton.addEventListener('click', () => {
    const hash = window.location.hash
    const lang = languageButton.dataset.href
    window.location.href = `/${lang}${hash}`
})

/* Education nav button */
const educationButtons = document.querySelectorAll(".education-nav-button")
educationButtons.forEach(button => {
    button.addEventListener('click', () => {
        const currentActive = document.querySelector(".education-active")
        document.querySelector(`.education-information-block[data-education=${currentActive.childNodes[0].dataset.education}]`).style.display = "none"
        currentActive.classList.remove("education-active")
        button.parentElement.classList.add("education-active")
        document.querySelector(`.education-information-block[data-education=${button.dataset.education}]`).style.display = "block"
    })
})

/* Youtube button control */
const youtubeButtons = document.querySelectorAll(".project-tile-youtube-button")

youtubeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const project = button.dataset.project
        const cover = button.dataset.cover
        const description = document.querySelector(`.projects-tile-description[data-project=${project}]`)
        if(cover==="true"){
            description.style.height = "0%"
            button.dataset.cover = "false"
            button.classList.add('active')
            return
        }
        description.style.height = "100%"
        button.dataset.cover = "true"
        button.classList.remove('active')
    })
})