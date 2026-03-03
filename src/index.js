import "./styles.css"
import createHomeElement from "./home.js"
import { createMenuElement } from "./menu.js"
import createAboutElement from "./about.js"

const app = function() {
    const cont = document.querySelector("#content")
    const homeBtn = document.querySelector("#home")
    const menuBtn = document.querySelector("#menu")
    const aboutBtn = document.querySelector("#about")

    homeBtn.addEventListener("click", () => {
        cont.innerHTML = ""
        cont.appendChild(createHomeElement())
    })
    menuBtn.addEventListener("click", () => {
        cont.innerHTML = ""
        cont.appendChild(createMenuElement())
    })
    aboutBtn.addEventListener("click", () => {
        cont.innerHTML = ""
        cont.appendChild(createAboutElement())
    })

    return { homeBtn }
} ()

app.homeBtn.click()