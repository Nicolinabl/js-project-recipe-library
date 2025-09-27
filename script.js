// --------------------ATTEMPT 1----------------------
// const italianFilter = document.getElementById("italianFilter")
// const asianFilter = document.getElementById("asianFilter")
// const mexicanFilter = document.getElementById("mexicanFilter")
// const selections = document.getElementById("selections")

// // ITALIAN FILTER 
// italianFilter.onclick = () => {
//   italianFilter.classList.toggle("italianSelected")
//   if (italianFilter.classList.contains("italianSelected")) {
//     selections.innerText = "🍝"
//   } else {
//     selections.innerText = ""
//   }
// }

// // ASIAN FILTER 
// asianFilter.onclick = () => {
//   asianFilter.classList.toggle("asianSelected")
//   if (asianFilter.classList.contains("asianSelected")) {
//     selections.innerText = "🍱"
//   } else {
//     selections.innerText = ""
//   }
// }

// // MEXICAN FILTER 
// mexicanFilter.onclick = () => {
//   mexicanFilter.classList.toggle("mexicanSelected")
//   if (mexicanFilter.classList.contains("mexicanSelected")) {
//     selections.innerText = "🌮"
//   } else {
//     selections.innerText = ""
//   }
// }


// ---------------------- ATTEMPT 2 --------------------
const selections1 = document.getElementById("selections1")
const selections2 = document.getElementById("selections2")
const selections3 = document.getElementById("selections3")
const filterButton = document.querySelectorAll(".filterButton")


const selectedFilter = () => {
  filterButton.forEach(button => {
    button.addEventListener("click", () => {
      button.classList.toggle("active")
      if (button.id === "italianFilter" && button.classList.contains("active")) {
        selections1.innerText = ("🍝")
      } else if (button.id === "italianFilter" && !button.classList.contains("active")) {
        selections1.innerText = ""
      } else if (button.id === "asianFilter" && button.classList.contains("active")) {
        selections2.innerText = "🍱"
      } else if (button.id === "asianFilter" && !button.classList.contains("active")) {
        selections2.innerText = ""
      } else if (button.id === "mexicanFilter" && button.classList.contains("active")) {
        selections3.innerText = "🌮"
      } else if (button.id === "mexicanFilter" && !button.classList.contains("active")) {
        selections3.innerText = ""
      }
    })
  })
}

selectedFilter()



// // ----------- ATTEMPT 3. same as 2 but in two parts --------------
// const selectedFilter = () => { 
//   filterButton.forEach(button => {
//   button.addEventListener("click", () => {
//     button.classList.toggle("active")
//     chosenFilters(button)
//     // chosenFilter function called in here to let it access button
//   })
// })
// }

// selectedFilter()

// const chosenFilters = (button) => {
//   if (button.id === "italianFilter" && button.classList.contains("active")) {
//     selections1.innerText = ("🍝")
//   } else if (button.id === "italianFilter" && !button.classList.contains("active")) {
//     selections1.innerText = ("")
//   } else if (button.id === "asianFilter" && button.classList.contains("active")) {
//     selections2.innerText = "🍱"
//   } else if (button.id === "asianFilter" && !button.classList.contains("active")) {
//     selections2.innerText = ""
//   } else if (button.id === "mexicanFilter" && button.classList.contains("active")) {
//     selections3.innerText = "🌮"
//   } else if (button.id === "mexicanFilter" && !button.classList.contains("active")) {
//     selections3.innerText = ""
//   }
// }



