// Cookie Challenge

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let y = 1; y < cookies.length; y++) {
    const currentCookie = cookies[y]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}



// Conjoined word challenge

const conjunction = function (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    console.log(conjoinedWord)
}
conjunction("Master", "Card")



// Mod Squad Challenge

const showInfo = document.querySelector(".show-info")

    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`
    })

    showInfo.innerHTML = HTMLRepresentation

    // Simon Says

    const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]
let x = 0

for (let k = 0; k < locations.length; k++) {
    const currentLocation = locations[k]
    let invalidLocation = " "

    if (currentLocation[k] > 2) {
        invalidLocation = true
    }

    if (invalidLocation) {
        console.log("This location is invalid")
        x++
    }
}

console.log(`There were ${x} invalid locations`)


// Advanced Challenge: Lambda Llama
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

        return function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix
    }
}
nameMaker = llamaNamer()
console.log(nameMaker())