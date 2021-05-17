// console.log(tourData);

// Grabs the 4 season names from the data set and puts them into an array
let seasonNames = Object.keys(tourData.seasonCategories);

// Loops through the array of season names
for (let i = 0; i < seasonNames.length; i++) {
  // Creates a new option element
  let seasons = document.createElement("option");
  // Assigns the inner text of the new element to the current season name
  // Capitalizes the first letter of the season
  seasons.innerText = seasonNames[i][0].toUpperCase() + seasonNames[i].slice(1);
  // Assigns the season name as the value
  seasons.value = seasonNames[i][0].toUpperCase() + seasonNames[i].slice(1);
  // Grabs the season form element
  let seasonForm = document.getElementsByClassName("seasons-form")[0];
  // Appends the newly created option elements to the season form
  seasonForm.appendChild(seasons);
}

const selectSeason = () => {
  let currentSeason = document.getElementsByClassName("seasons-form")[0];
  let selectedSeason = currentSeason.options[currentSeason.selectedIndex].text;
  // console.log("selected season:", selectedSeason);
  selectedSeason = selectedSeason.toLowerCase();
  let categoryOptions = tourData.seasonCategories[selectedSeason];
  // console.log("category", category);
  let categoryForm = document.getElementsByClassName("categories-form")[0];
  // let singleCategory = document.getElementsByClassName("category");
  // console.log("before removing, ", singleCategory);
  // remove children that were previously created
  while (categoryForm.firstChild) {
    categoryForm.removeChild(categoryForm.firstChild);
  }

  return createCategory(categoryOptions);
  // return category;
};

const createCategory = (e) => {
  let category = e;
  for (let i = 0; i < category.length; i++) {
    console.log("CATEGORY:", category[i]);
    let categories = document.createElement("option");
    let categoryForm = document.getElementsByClassName("categories-form")[0];

    // add class name
    categories.classList.add("category");
    // Display the categories that match the selected season
    categories.innerText = category[i][0].toUpperCase() + category[i].slice(1);
    categories.value = category[i][0].toUpperCase() + category[i].slice(1);
    categoryForm.appendChild(categories);
  }
};

// console.log("category", category);

// Display all destinations that match the selected category
// let destinations = tourData.destinations;
// let filteredDestinations = [];

// for (let i = 0; i < destinations.length; i++) {
//   let destination = destinations[i];
//   if (destination.category === categorySelection) {
//     filteredDestinations.push(destination);
//   }
// }

// the filtered list of destinations
// console.log(filteredDestinations);
