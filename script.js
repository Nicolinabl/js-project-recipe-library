

const dietFilterDropdown = document.getElementById("dietFilterDropdown")
const recipeSection = document.querySelector(".recipeSection")


const API_KEY = "9db39a66159f43d287c05363e2271c81"
const URL = `https://api.spoonacular.com/recipes/random?number=20&apiKey=${API_KEY}`
const URL2 = `https://api.spoonacular.com/recipes/complexSearch?number=20&sort=random&addRecipeInformation=true&includeIngredients&apiKey=${API_KEY}` /* Used the complexSearch endpoint with addRecipeInformation=true to obtain cuisine details in url2 */


// // import backup data from separate file:
import { backupData } from './backupData.js'

// ---------------------------------------------------------- 
// |||||||||||||||| Show all recipes on page ||||||||||||||||
// --------------------------------------------------------
const displayedRecipes = (recipes) => {
  recipeSection.innerHTML = ""

  if (recipes.length === 0) {
    recipeSection.innerHTML = `
  <div class="emptyState" >
    <p>Oops no recipes found matching this filter. Try a different one!</p>
      </div>
  `
    return
  }

  recipes.forEach(recipe => {
    recipeSection.innerHTML += `
      <article class="recipe">
      <div class="topImageContainer">
        <img class="topImage" src="${recipe.image}" alt="photo of food">
        <div class="recipeHeadingSection">
          <h2 class="recipeHeading">${recipe.title}</h2>
        </div>
      </div>
      <div class="generalInfo">
        <ul>
          <li class="cuisine"><span>Cuisine:</span> ${recipe.cuisines?.[0] || "No cuisine listed"}</li>
          <li class="readyIn"><span>Time:</span> ${recipe.readyInMinutes} min</li>
        </ul>
      </div>
      <div class="ingredients">
        <h3>Ingredients</h3>
        <ul>
          ${recipe.extendedIngredients?.map(ingredient => `<li> ${ingredient.original} </li>`).join("") || "<li>No ingredients available</li>"}
        </ul>
      </div>
    </article>
    `
  })
}

// -------------------------------------------------------- 
// |||||||||||||||| Get recipes from API |||||||||||||||||
// --------------------------------------------------------

let recipes = [] /* Läs på om detta */

const getRecipes = async () => {
  // const response = await fetch(URL2)
  // const data = await response.json()
  const data = backupData
  console.log(data.results)
  recipes = data.results
  displayedRecipes(recipes)
}

getRecipes()

// -------------------------------------------------------- 
// |||||||||||||||| Show filtered recipes on page |||||||||||||||||
// --------------------------------------------------------
const selectedFilter = () => {
  const dietFilter = dietFilterDropdown.value

  if (dietFilter === "all") {
    displayedRecipes(recipes)
  } else {
    const chosenFilter = recipes.filter(recipe => recipe.diets?.map(diet => diet.toLowerCase()).includes(dietFilter)
    )
    displayedRecipes(chosenFilter)
  }
}

dietFilterDropdown.addEventListener("change", selectedFilter)


const randomButton = document.getElementById("randomButton")

const getRandomRecipe = () => {
  const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)]
  displayedRecipes([randomRecipe])
}

randomButton.addEventListener("click", getRandomRecipe)

// -------------------------------------------------------- 
// |||||||||||||||| sort recipes on page |||||||||||||||||
// --------------------------------------------------------
const cookingTime = document.getElementById("cookingTime")
const sortingButton = document.querySelectorAll(".sortButton")

const selectedSorting = () => {
  sortingButton.forEach(button => {
    button.addEventListener("click", () => {
      // sortingButton.forEach(btn => btn.classList.remove("active"))
      // button.classList.add("active")
      button.classList.toggle("active")

      if (button.id === "sortAscending" && button.classList.contains("active")) {
        displayedRecipes([...recipes].sort((a, b) => a.readyInMinutes - b.readyInMinutes))
      } else if (button.id === "sortDescending" && button.classList.contains("active")) {
        displayedRecipes([...recipes].sort((a, b) => b.readyInMinutes - a.readyInMinutes))
      } else {
        recipeSection.innerHTML = ""
        displayedRecipes(recipes)
      }
    })
  })
}

selectedSorting()




// Alternative and test functions not in use below
// ------------------------------------------------------------
// "Test 2" function (for learning) to link recipe object to website

// const recipeContainer = document.getElementById("recipeContainer")

// recipes.forEach(recipe => {
//   const article = document.createElement("article")
//   article.classList.add("recipe")

//   article.innerHTML = `
//     <div class="topImageContainer">
//   <img class="topImage"
//     src="images/food.jpg"
//     alt="photo of food">
//   <div class="recipeHeadingSection">
//     <h2 class="recipeHeading">${recipe.title}</h2>
//   </div>
// </div>
// <div class="generalInfo">
//   <ul>
//     <li class="cuisine">Cuisine: ${recipe.cuisine}</li>
//     <li class="readyIn">Time: ${recipe.readyInMinutes}</li>
//   </ul>
// </div>
// <div class="ingredients">
//   <h3>Ingredients</h3>
//   <ul>
//     fix this
//   </ul>
// </div>
//   `
//   recipeContainer.appendChild(article)
// })


// ------------------------------------------------------------
// FUNCTION for filterbuttons split in 2 parts

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


// ------------------------------------------------------------
// ATTEMPT 1 toggle filters
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


// ------------------------------------------------------------
// PROBABLY DONT NEED THIS? links not in use
// const recipeImageContainer = document.getElementById("recipeImageContainer")
// const topImageContainer = document.querySelectorAll(".topImage")
// const recipeImage = document.getElementById("recipeImage")
// const topImage = document.querySelectorAll(".topImage")
// const recipeHeadingContainer = document.getElementById("recipeHeadingContainer")
// const recipeHeadingSection = document.querySelectorAll(".recipeHeadingSection")
// const recipeTitle = document.getElementById("recipeTitle")
// const recipeHeading = document.querySelectorAll(".recipeHeading")

// --------------------------------------------------------------
// ----------MY OLD CODE before shortening------------------------
// --------------------------------------------------------------

// const filterButton = document.querySelectorAll(".filterButton")

// // Italian
// const italianFilterSelected = (recipe) => {
//   return recipe.cuisine === "Italian"
// }
// const italianRecipes = recipes.filter(italianFilterSelected)

// // Asian
// const asianRecipesSelected = (recipe) => {
//   return recipe.cuisine === "Asian"
// }
// const asianRecipes = recipes.filter(asianRecipesSelected)

// // mexican
// const mexicanRecipesSelected = (recipe) => {
//   return recipe.cuisine === "Mexican"
// }
// const mexicanRecipes = recipes.filter(mexicanRecipesSelected)

// // swedish (for testing no matches)
// const swedishRecipesSelected = (recipe) => {
//   return recipe.cuisine === "Swedish"
// }
// const swedishRecipes = recipes.filter(swedishRecipesSelected)

// const selectedFilter = () => {
//   filterButton.forEach(button => {
//     button.addEventListener("click", () => {
//       // filterButton.forEach(btn => btn.classList.remove("active"))
//       // button.classList.add("active")
//       // Which one to use? Toggle or remove + add?
//       button.classList.toggle("active")

//       if (button.id === "allFilters" && button.classList.contains("active")) {
//         recipeSection.innerHTML = ""
//         displayedRecipes(recipes)
//       } else if (button.id === "italianFilter" && button.classList.contains("active")) {
//         recipeSection.innerHTML = ""
//         displayedRecipes(italianRecipes)
//       } else if (button.id === "asianFilter" && button.classList.contains("active")) {
//         recipeSection.innerHTML = ""
//         displayedRecipes(asianRecipes)
//       } else if (button.id === "mexicanFilter" && button.classList.contains("active")) {
//         recipeSection.innerHTML = ""
//         displayedRecipes(mexicanRecipes)
//       } else if (button.id === "randomFilter" && button.classList.contains("active")) {
//         recipeSection.innerHTML = ""
//         displayedRecipes(randomRecipe())
//       } else if (button.id === "swedishFilter" && button.classList.contains("active")) {
//         recipeSection.innerHTML = ""
//         displayedRecipes(swedishRecipes)
//       } else {
//         recipeSection.innerHTML = ""
//         displayedRecipes(recipes)
//       }
//     })
//   })
// }

// selectedFilter()
// --------------------------------------------------------------
// -----------------------MY OLD CODE----------------------------
// --------------------------------------------------------------
