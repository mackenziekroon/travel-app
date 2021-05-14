console.log(tourData);

let seasonNames = Object.keys(tourData.seasonCategories);

for (let i = 0; i < seasonNames.length; i++) {
  let seasons = document.createElement("option");
  seasons.innerText = seasonNames[i];
  let seasonForm = document.getElementsByClassName("seasons-form")[0];
  seasonForm.appendChild(seasons);
}
// seasons.map((season) => document.createElement("option"));

// console.log("SEASONS: ", seasons);

let season = "Autumn";

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
