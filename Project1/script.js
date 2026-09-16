import { CARS } from "./data.js"

window.addEventListener('DOMContentLoaded', main)

let index = 0
let timer = null

function main() {

  renderCars(CARS)
  handleSearch()
  sort()
  // animateSlideShow()
  timer = setInterval(animateSlideShow, 1000)
  modal()
}

function modal() {
  const detailBtns = document.querySelectorAll(".detail-btn")

  for (let i = 0; i < detailBtns.length; i++) {
    detailBtns[i].addEventListener("click", () => {
      let id = detailBtns[i].dataset.index
      console.log(id)

      openModal(id)
      HandleTab()
    })
  }
  document.addEventListener("click", (e) => {
    if (e.target.matches("#closeBtn")) {
      closeModal()
    }
  })


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
        <h4 class="car-model">$${cars.price}.00</h4>
        <h4 class="car-model">${cars.model}</h4>
        <button class="detail-btn" data-index="${cars.id}">Show Detail</button>
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

  const carInput = document.querySelector("#searchCar")
  const form = document.querySelector("form")


  form.addEventListener("submit", (e) => {
    e.preventDefault()
    let searchTerm = carInput.value.toLowerCase()
    console.log(searchTerm)

    let matchCars = CARS.filter((object) =>
      object.title.includes(searchTerm) || object.description.toLowerCase().includes(searchTerm))
    console.log(matchCars)

    renderCars(matchCars)
  })


}


function sort() {

  const priceBtn = document.querySelector("#priceBtn")

  let priceTick = 0
  priceBtn.addEventListener("click", () => {
    priceTick += 1
    if (priceTick % 2 != 0) {
      const sortByPrice = CARS.sort((objA, objB) => objA.price - objB.price)
      renderCars(sortByPrice)
    } else if (priceTick % 2 == 0) {
      const sortByPrice = CARS.sort((objA, objB) => objB.price - objA.price)
      renderCars(sortByPrice)
    }
  })

  const ratingBtn = document.querySelector("#ratingBtn")

  let ratingTick = 0
  ratingBtn.addEventListener("click", () => {
    ratingTick += 1
    if (ratingTick % 2 != 0) {
      const sortByRating = CARS.sort((objA, objB) => objA.rating - objB.rating)
      renderCars(sortByRating)
    } else if (ratingTick % 2 == 0) {
      const sortByRating = CARS.sort((objA, objB) => objB.rating - objA.rating)
      renderCars(sortByRating)
    }
  })


  const recBtn = document.querySelector("#recBtn")

  recBtn.addEventListener("click", () => {
    randomCar()
  })

}



function animateSlideShow() {
  const slides = document.querySelectorAll(".slide")
  // console.log(slides)
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"
  }
  slides[index].style.display = "block"
  index += 1
  if (index > slides.length - 1) {
    index = 0
  }
}

function openModal(id) {

  let carobject = CARS.find((object) => object.id == id)
  const modalWrapper = document.querySelector(".modal-wrapper")

  modalWrapper.classList.remove("hide")
  console.log(modalWrapper)

  modalWrapper.innerHTML = `
  <div class="modal-container" style="background-image: url(${carobject.image});">
      <div class="modal-overlay">
        <div class="modal-head">
          <h4>${carobject.model}</h4>
          <button id="closeBtn" style="border-radius: 50%; padding: 5px; padding-left: 7px; padding-right: 7px;"> X </button>
        </div>
      <section id="tabbar">

        <div class="btn-group">
          <button class="tab-btn active" data-page="description">DESCRIPTION</button>
          <button class="tab-btn" data-page="reviews">REVIEWS</button>
          <button class="tab-btn" data-page="contact">CONTACT</button>
        </div>


        <div class="content-wrapper">

          <div class="content active" id="description">
            ${carobject.description}
          </div>

          <div class="content" id="reviews">
            Overall rating: ${carobject.rating}
          </div>

          <div class="content" id="contact">
            Company: ${carobject.title}
          </div>

        </div>
      </section>
        

          

        
      </div>
  </div>`

}

function closeModal() {
  const modalWrapper = document.querySelector(".modal-wrapper")
  modalWrapper.classList.add("hide")
}

function HandleTab() {
  const tabbar  = document.querySelector("#tabbar")
const tabbtn = document.querySelectorAll(".tab-btn")
const contents = document.querySelectorAll(".content")

tabbar.addEventListener("click", (e) => {

    let target = e.target
    console.log(target)
    let tabname = target.dataset.page
    console.log(tabname)

    if (tabname) {
    
        for (let i = 0; i < tabbtn.length; i++) {
            if (tabbtn[i].classList.contains("active")) {
                tabbtn[i].classList.remove("active")
                contents[i].style.display = "none"
            
            }
        }


        target.classList.add("active")
        const targetContent = document.querySelector("#"+tabname)
        targetContent.style.display = "block"

    }


})
}

function randomCar() {
  let rec = 0
  rec = Math.floor(Math.random() * CARS.length)
  let randomValue = CARS[rec]
  console.log(randomValue)
  renderCars([randomValue]) 
}

