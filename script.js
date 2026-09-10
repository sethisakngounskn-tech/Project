import { CARS } from "./data.js"

window.addEventListener('DOMContentLoaded', main)

function main() {

  renderCars(CARS)
}

function getCarCard(cars) {

  return `
    <div class="card">
        <div class="car-img">
          <img src="${cars.Image}" alt="">
        </div>

        <div class="car-detail">
          <div class="rating">
            <div class="progressbar">
            <div class="progressbox">
            <span class="progressvalue">10%</span>
            ${getRating(cars.Rating)}
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


  for (let i = 0; i < cars; i++) {
    wrapper.innerHTML += getCarCard(cars[i])
  }

}

function getRating(bars) {
  const progressBox = document.querySelector(".progressbox")
  const progressValue = document.querySelector(".progressvalue")

  console.log
  progressBox.style.width = `${bars}%`
  progressValue.textContent = `${bars}%`

}

