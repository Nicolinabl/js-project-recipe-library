
const italianFilter = document.getElementById("italianFilter")
const asianFilter = document.getElementById("asianFilter")
const mexicanFilter = document.getElementById("mexicanFilter")
const selections = document.getElementById("selections")

// ITALIAN FILTER 
italianFilter.onclick = () => {
  italianFilter.classList.toggle("italianSelected")
  if (italianFilter.classList.contains("italianSelected")) {
    selections.innerText = "Italian food, great choice."
  } else {
    selections.innerText = ""
  }
}

// ASIAN FILTER 
asianFilter.onclick = () => {
  asianFilter.classList.toggle("asianSelected")
  if (asianFilter.classList.contains("asianSelected")) {
    selections.innerText = "Asian food, yummy."
  } else {
    selections.innerText = ""
  }
}

// MEXICAN FILTER 
mexicanFilter.onclick = () => {
  mexicanFilter.classList.toggle("mexicanSelected")
  if (mexicanFilter.classList.contains("mexicanSelected")) {
    selections.innerText = "Yay Mexican food."
  } else {
    selections.innerText = ""
  }
}







