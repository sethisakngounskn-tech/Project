import { CARS } from "./data.js"

window.addEventListener('DOMContentLoaded', main)

function main() {

  renderCars(CARS)
  
}

function getCarCard(cars) {

  return `
    <div class="card">
      <div class="car-img">
        <img src="${cars.image}" alt="">
      </div>

      <div class="car-detail">
        <div class="progressbar">
          <div class="progressbox" style="width: ${cars.rating}%;">
            <span class="progressvalue">${cars.rating}%</span>
          </div>
        </div>
        <h4 class="car-model">${cars.title}</h4>
        <button class="detail-btn">Show Detail</button>
      </div>
    </div>
    `
}


function renderCars(cars) {
  const wrapper = document.querySelector(".cars-wrapper")
  wrapper.innerHTML = ``


  for (let i = 0; i < cars.length; i++) {
    wrapper.innerHTML += getCarCard(cars[i])
  }

}

function getRating(bars) {
  const progressBox = document.querySelector(".progressbox")
  const progressValue = document.querySelector(".progressvalue")

  progressBox.style.width = `${bars}%`
  progressValue.textContent = `${bars}%`

}


