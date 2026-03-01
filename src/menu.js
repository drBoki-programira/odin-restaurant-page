import breakfastImg from "./images/chad-montano-eeqbbemH9-c-unsplash.jpg"
import mainMealImg from "./images/casey-lee-awj7sRviVXo-unsplash.jpg"
import dessertImg from "./images/emile-mbunzama-cLpdEA23Z44-unsplash.jpg"

const createSectionElement = function(name) {
    const section = document.createElement("section")
    const nameElement = document.createElement("h3")
    const lineElement = document.createElement("div")
    const line2Element = document.createElement("div")

    nameElement.textContent = name
    lineElement.setAttribute("class", "line")
    line2Element.setAttribute("class", "line")

    section.appendChild(lineElement)
    section.appendChild(nameElement)
    section.appendChild(line2Element)

    return section
}

const createPricesList = function(array) {
    const list = document.createElement("ul")

    array.forEach(string => {
        const [desc, price] = string.split("; ")
        const item = document.createElement("li")
        const descELement = document.createElement("div")
        const priceElement = document.createElement("div")

        descELement.textContent = desc
        priceElement.textContent = price

        item.appendChild(descELement)
        item.appendChild(priceElement)
        list.appendChild(item)
    })

    return list
}

const createImageElement = function(code) {
    let image = ""
    let credit = ""
    switch (code) {
        case "b":
            image = breakfastImg
            credit = `Photo by <a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a> on <a href="https://unsplash.com/photos/baked-pancakes-eeqbbemH9-c?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
            break;
        case "m":
            image = mainMealImg
            credit = `Photo by <a href="https://unsplash.com/@simplethemes?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Casey Lee</a> on <a href="https://unsplash.com/photos/cooked-food-awj7sRviVXo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
            break;   
        default:
            image = dessertImg
            credit = `Photo by <a href="https://unsplash.com/@emilembunzama?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Emile Mbunzama</a> on <a href="https://unsplash.com/photos/oreo-cookie-sandwiches-dessert-in-short-stem-glass-cLpdEA23Z44?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>`
            break;
    }

    const imageElement = document.createElement("div")
    const creditElement = document.createElement("div")

    imageElement.setAttribute("class", "image")
    creditElement.setAttribute("class", "credit")
    imageElement.style.backgroundImage = `url(${image})`
    creditElement.innerHTML = credit

    imageElement.appendChild(creditElement)

    return imageElement
}

export const createMenuElement = function() {
    const menu = document.createElement("div")
    const sec1 = document.createElement("div")
    const sec2 = document.createElement("div")
    const sec3 = document.createElement("div")
    
    menu.setAttribute("class", "page")
    sec1.setAttribute("class", "section-content")
    sec2.setAttribute("class", "section-content")
    sec3.setAttribute("class", "section-content")

    menu.appendChild(createSectionElement("Breakfast"))
    sec1.appendChild(createImageElement("b"))
    sec1.appendChild(createPricesList([
        "Avocado Toast with Poached Eggs; 7 €",
        "Homemade Granola with Greek Yogurt; 6 €",
        "Shakshuka; 8 €",
        "American Pancakes with Maple Syrup; 7 €",
        "Oatmeal with Peanut Butter and Banana; 6 €",
    ]))
    menu.appendChild(sec1)
    
    menu.appendChild(createSectionElement("Main meal"))
    sec2.appendChild(createPricesList([
        "Grilled New York Strip Steak; 15 €",
        "Pan-Seared Salmon Fillet; 17 €",
        "Classic Beef Wellington; 14 €",
        "Tuscan Chicken Pasta; 11 €",
        "Mushroom & Spinach Risotto; 10 €",
    ]))
    sec2.appendChild(createImageElement("m"))
    menu.appendChild(sec2)

    menu.appendChild(createSectionElement("Deserts"))
    sec3.appendChild(createImageElement("d"))
    sec3.appendChild(createPricesList([
        "Oreo Cookies Ice Cream; 5 €",
        "Warm Chocolate Lava Cake; 5 €",
        "Tiramisu della Casa; 6 €",
        "Lemon Tart with Toasted Meringue; 4 €",
        "Sticky Toffee Pudding; 4 €",
    ]))
    menu.appendChild(sec3)

    return menu
}

            