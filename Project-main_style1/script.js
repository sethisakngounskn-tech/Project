import { CARS } from "./data.js"

window.addEventListener('DOMContentLoaded', main)

function main() {

  renderCars(CARS)
  handleSearch()

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

function handleSearch() {

  const carInput = document.querySelector("#car-models")
  const form = document.querySelector("form")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let searchTerm = carInput.value.toLowerCase()
    console.log(searchTerm)

    let matchRecipes = CARS.filter((object) =>
      object.category.toLowerCase().includes(searchTerm) || object.title.toLowerCase().includes(searchTerm))
    console.log(matchRecipes)

    renderRecipes(matchRecipes)
  })


}

