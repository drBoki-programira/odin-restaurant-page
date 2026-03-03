export default function() {
    const page = document.createElement("div")
    const title = document.createElement("h4")
    const text = document.createElement("div")
    const title2 = document.createElement("h4")
    const text2 = document.createElement("div")
    const title3 = document.createElement("h4")
    const text3 = document.createElement("div")
    const text4 = document.createElement("div")
    const text5 = document.createElement("div")
    const texts = [text, text2, text3, text4, text5]

    page.setAttribute("class", "page")
    texts.forEach(el => el.setAttribute("class", "about-text"))
    text3.classList.add("no-margin")
    text4.classList.add("no-margin")
    title.textContent = "Our Story"
    text.textContent = `Our little adventure beginns in a galaxy far, far away. It was the summer of year 5,786 b.c.
                        As the Empire found the magical fruit of Kajagoogoo and made stew from it, he thought "Wow, everyone should have this".
                        He then, opend up this fine restaurant and called it Puzzles. Why is it called Puzzles? No one knows.
                        I guess that's the puzzle.`
    title2.textContent = "Working Hours"
    text2.textContent = "Every day  -  00 : 24"
    title3.textContent = "Contact Information"
    text3.textContent = "Address: Boulevard of Broken Dreams 8, Minas Tirith"
    text4.textContent = "Phone number: +999 11 7899537"
    text5.textContent = "Email: puzzles@restaurant.the"

    page.appendChild(title)
    page.appendChild(text)
    page.appendChild(title2)
    page.appendChild(text2)
    page.appendChild(title3)
    page.appendChild(text3)
    page.appendChild(text4)
    page.appendChild(text5)

    return page
}