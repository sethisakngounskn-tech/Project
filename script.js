console.log("everything is ready")

const inputValue = document.querySelector("#inputValue")
const filter = document.querySelector("#filter")
const resetBtn = document.querySelector("#resetBtn")
const container = document.querySelector(".container")



inputValue.addEventListener("change", () => {
    let numbers = parseInt(inputValue.value)


    for (let i = 1; i <= numbers; i++) {

        if (i % 2 == 0) {
        container.innerHTML += `
            <div class="number even">${i}</div>
        `
        
        } else {
            container.innerHTML += `
                <div class="number odd">${i}</div>
            `
        }

    }

})
const allNumbers = document.querySelectorAll(".number")

filter.addEventListener("change", () => {
    
    let selected = filter.value

    const allNumbers = document.querySelectorAll(".number")
    console.log(allNumbers)

    for (let i = 0; i < allNumbers.length; i++) {
        let number = allNumbers[i]

        if (number.classList.contains(selected)) {
            number.style.opacity = 1
        } else {
            number.style.opacity = 0.2
        }
    }
    
    

})

