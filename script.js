
let handleClick = (e) => {
    let accordion = document.querySelector(`#${e}`)
    let button = document.querySelector(`#${e} button`)
    let nextPanel = accordion.nextElementSibling
    button.classList.toggle("active-btn")
    nextPanel.classList.toggle("active-panel")
}
