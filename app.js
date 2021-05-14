console.log(tourData);

// Grabs the 4 season names from the data set and puts them into an array
let seasonNames = Object.keys(tourData.seasonCategories);

// Loops through the array of season names
for (let i = 0; i < seasonNames.length; i++) {
  // Creates a new option element
  let seasons = document.createElement("option");
  // Assigns the inner text of the new element to the current season name
  // Capitalizes the first letter of the season
  seasons.innerText = seasonNames[i][0].toUpperCase() + seasonNames[i].slice(1);
  // Grabs the season form element
  let seasonForm = document.getElementsByClassName("seasons-form")[0];
  // Appends the newly created option elements to the season form
  seasonForm.appendChild(seasons);
}

season = season[0].toLowerCase() + season.slice(1);
// console.log(season);

// Display the categories that match the selected season

let category = tourData.seasonCategories[season];
// console.log("category: ", category);

// temp - represents the selected category
let categorySelection = category[0];

// Display all destinations that match the selected category
let destinations = tourData.destinations;
let filteredDestinations = [];

for (let i = 0; i < destinations.length; i++) {
  let destination = destinations[i];
  if (destination.category === categorySelection) {
    filteredDestinations.push(destination);
  }
}

// the filtered list of destinations
// console.log(filteredDestinations);
