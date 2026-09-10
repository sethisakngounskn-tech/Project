import {CARS} from "./data.js"

window.addEventListener('DOMContentLoaded', main)

function main() {

    renderCars(CARS)
    getRating()
    console.log(CARS)
}

function getCarCard(cars) {

    return `
    <div class="card">
        <div class="car-img">
          <img src="${cars.Image}" alt="">
        </div>

        <div class="car-detail">
          <div class="rating">
            
          </div>
        </div>
        </div>
          <h4 class="car-model">${cars.Title}</h4>
          <button class="btn detail-btn">Show Detail</button>

        </div>
      </div>
    `
}

function renderCars(cars) {
   const wrapper = document.querySelector(".cars-wrapper")
   wrapper.innerHTML = ``
   

   for (let i = 0; i < CARS.length; i++) {
      wrapper.innerHTML += getCarCard(CARS[i])
   }

}

function getRating(bars) {
    const progressBox = document.querySelector(".progressbox")
    const progressValue = document.querySelector(".progressvalue")
    const progressRange = document.querySelector("#progressRange")

    progressBox.style.width = `${progressRange.value}%`
    progressValue.textContent = `${progressRange.value}%`    

}

