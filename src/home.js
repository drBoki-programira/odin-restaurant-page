export default function() {
    const text = document.createElement("div")
    text.className = "text"

    const h2 = document.createElement("h2")
    h2.textContent = "Puzzles"

    const p = document.createElement("p")
    p.textContent = "Welcome to the most awesome restaurant on the planet. Where we strive to make the most beutiful food imaginable."

    text.appendChild(h2)
    text.appendChild(document.createElement("hr"))
    text.appendChild(p)

    return text
}