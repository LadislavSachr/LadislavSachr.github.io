/* fade in */

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
        }
    })},
    {
        threshold: 0.2
    }
)

document.querySelectorAll(".fade-in").forEach(element => {
    observer.observe(element)
})

/* scroll button */
const scroll = document.querySelector("#scrollIcon")

scroll.addEventListener("click", () => {
    document.querySelector("#about").scrollIntoView()
})

/* picture cover */
const covers = document.querySelectorAll('.projects-youtube-cover')
covers.forEach(cover => {
    cover.addEventListener('click', (e) => {
        e.currentTarget.style.width = "0"
    })
})