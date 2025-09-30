
const recipes = [
  {
    id: 1,
    title: "Vegan Lentil Soup",
    image: "./chicken.webp",
    readyInMinutes: 30,
    servings: 4,
    sourceUrl: "https://example.com/vegan-lentil-soup",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "red lentils",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "cumin",
      "paprika",
      "vegetable broth",
      "olive oil",
      "salt"
    ],
    pricePerServing: 2.5,
    popularity: 85
  },
  {
    id: 2,
    title: "Vegetarian Pesto Pasta",
    image: "./chicken.webp",
    readyInMinutes: 25,
    servings: 2,
    sourceUrl: "https://example.com/vegetarian-pesto-pasta",
    diets: ["vegetarian"],
    cuisine: "Italian",
    ingredients: [
      "pasta",
      "basil",
      "parmesan cheese",
      "garlic",
      "pine nuts",
      "olive oil",
      "salt",
      "black pepper"
    ],
    pricePerServing: 3.0,
    popularity: 92
  },
  {
    id: 3,
    title: "Gluten-Free Chicken Stir-Fry",
    image: "./chicken.webp",
    readyInMinutes: 20,
    servings: 3,
    sourceUrl: "https://example.com/gluten-free-chicken-stir-fry",
    diets: ["gluten-free"],
    cuisine: "Asian",
    ingredients: [
      "chicken breast",
      "broccoli",
      "bell pepper",
      "carrot",
      "soy sauce (gluten-free)",
      "ginger",
      "garlic",
      "sesame oil",
      "cornstarch",
      "green onion",
      "sesame seeds",
      "rice"
    ],
    pricePerServing: 4.0,
    popularity: 78
  },
  {
    id: 4,
    title: "Dairy-Free Tacos",
    image: "./chicken.webp",
    readyInMinutes: 15,
    servings: 2,
    sourceUrl: "https://example.com/dairy-free-tacos",
    diets: ["dairy-free"],
    cuisine: "Mexican",
    ingredients: [
      "corn tortillas",
      "ground beef",
      "taco seasoning",
      "lettuce",
      "tomato",
      "avocado"
    ],
    pricePerServing: 2.8,
    popularity: 88
  },
  {
    id: 5,
    title: "Middle Eastern Hummus",
    image: "./chicken.webp",
    readyInMinutes: 10,
    servings: 4,
    sourceUrl: "https://example.com/middle-eastern-hummus",
    diets: ["vegan", "gluten-free"],
    cuisine: "Middle Eastern",
    ingredients: [
      "chickpeas",
      "tahini",
      "garlic",
      "lemon juice",
      "olive oil"
    ],
    pricePerServing: 1.5,
    popularity: 95
  },
  {
    id: 6,
    title: "Quick Avocado Toast",
    image: "./chicken.webp",
    readyInMinutes: 5,
    servings: 1,
    sourceUrl: "https://example.com/quick-avocado-toast",
    diets: ["vegan"],
    cuisine: "Mediterranean",
    ingredients: [
      "bread",
      "avocado",
      "lemon juice",
      "salt"
    ],
    pricePerServing: 2.0,
    popularity: 90
  },
  {
    id: 7,
    title: "Beef Stew",
    image: "./chicken.webp",
    readyInMinutes: 90,
    servings: 5,
    sourceUrl: "https://example.com/beef-stew",
    diets: [],
    cuisine: "European",
    ingredients: [
      "beef chunks",
      "potatoes",
      "carrots",
      "onion",
      "garlic",
      "tomato paste",
      "beef broth",
      "red wine",
      "bay leaves",
      "thyme",
      "salt",
      "black pepper",
      "butter",
      "flour",
      "celery",
      "mushrooms"
    ],
    pricePerServing: 5.5,
    popularity: 80
  }
]

//  function that creates cards for every recipe object in the array
const recipeSection = document.querySelector(".recipeSection")

const displayedRecipes = (recipes) => {
  recipes.forEach(recipe => {
    recipeSection.innerHTML += `
    <article class="recipe">
      <div class="topImageContainer">
        <img class="topImage" src="images/food.jpg" alt="photo of food">
        <div class="recipeHeadingSection">
          <h2 class="recipeHeading">${recipe.title}</h2>
        </div>
      </div>
      <div class="generalInfo">
        <ul>
          <li class="cuisine"><span>Cuisine:</span> ${recipe.cuisine}</li>
          <li class="readyIn"><span>Time:</span> ${recipe.readyInMinutes}</li>
        </ul>
      </div>
      <div class="ingredients">
        <h3>Ingredients</h3>
        <ul>
          ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
        </ul>
      </div>
    </article>
    `
  })
}

displayedRecipes(recipes)

// Function: show selected filters
const filterButton = document.querySelectorAll(".filterButton")

// shorten these functions. IF possible, make into one?
// Italian
const italianFilterSelected = (recipe) => {
  return recipe.cuisine === "Italian"
}
const italianRecipes = recipes.filter(italianFilterSelected)

// Asian
const asianRecipesSelected = (recipe) => {
  return recipe.cuisine === "Asian"
}
const asianRecipes = recipes.filter(asianRecipesSelected)

// mexican
const mexicanRecipesSelected = (recipe) => {
  return recipe.cuisine === "Mexican"
}
const mexicanRecipes = recipes.filter(mexicanRecipesSelected)

const selectedFilter = () => {
  filterButton.forEach(button => {
    button.addEventListener("click", () => {
      filterButton.forEach(btn => btn.classList.remove("active"))
      button.classList.add("active")
      // put back: button.classList.toggle("active"), when creating code that can select several filters?

      if (button.id === "allFilters" && button.classList.contains("active")) {
        recipeSection.innerHTML = ""
        displayedRecipes(recipes)
      } else if (button.id === "italianFilter" && button.classList.contains("active")) {
        recipeSection.innerHTML = ""
        displayedRecipes(italianRecipes)
      } else if (button.id === "asianFilter" && button.classList.contains("active")) {
        recipeSection.innerHTML = ""
        displayedRecipes(asianRecipes)
      } else if (button.id === "mexicanFilter" && button.classList.contains("active")) {
        recipeSection.innerHTML = ""
        displayedRecipes(mexicanRecipes)
      } else {
        recipeSection.innerHTML = ""
        displayedRecipes(recipes)
      }
    })
  })
}

selectedFilter()

// Function: selected sorting options
const cookingTime = document.getElementById("cookingTime")
const sortingButton = document.querySelectorAll(".sortButton")


const selectedSorting = () => {
  sortingButton.forEach(button => {
    button.addEventListener("click", () => {
      sortingButton.forEach(btn => btn.classList.remove("active"))
      button.classList.add("active")
      if (button.id === "sortAscending" && button.classList.contains("active")) {
        cookingTime.innerText = ("Ascending it is")
      } else if (button.id === "sortAscending" && !button.classList.contains("active")) {
        cookingTime.innerText = ""
      } else if (button.id === "sortDescending" && button.classList.contains("active")) {
        cookingTime.innerText = "Descending it is"
      } else if (button.id === "sortDescending" && !button.classList.contains("active")) {
        cookingTime.innerText = ""
      }
    })
  })
}

selectedSorting()

// const cookingTime = document.getElementById("cookingTime")
// const sortingButton = document.querySelectorAll(".sortButton")

// const selectedSorting = () => {
//   sortingButton.forEach(button => {
//     button.addEventListener("click", () => {
//       sortingButton.forEach(btn => btn.classList.remove("active"))
//       button.classList.add("active")
//       if (button.id === "sortAscending" && button.classList.contains("active")) {
//         cookingTime.innerText = ("Ascending it is")
//       } else if (button.id === "sortAscending" && !button.classList.contains("active")) {
//         cookingTime.innerText = ""
//       } else if (button.id === "sortDescending" && button.classList.contains("active")) {
//         cookingTime.innerText = "Descending it is"
//       } else if (button.id === "sortDescending" && !button.classList.contains("active")) {
//         cookingTime.innerText = ""
//       }
//     })
//   })
// }

// selectedSorting()





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
