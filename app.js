console.log(tourData);
let season = "Winter";

season = season[0].toLowerCase() + season.slice(1);
console.log(season);

// let category = tourData.map((data) => data.seasonCategories)

let category = tourData.seasonCategories[season];
console.log("category: ", category);

let categorySelection = category[0];

let destinations = tourData.destinations;

let filteredDestinations = [];

for (let i = 0; i < destinations.length; i++) {
  let destination = destinations[i];
  if (destination.category === categorySelection) {
    filteredDestinations.push(destination);
  }
}
console.log(filteredDestinations);
