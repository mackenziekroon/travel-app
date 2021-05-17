// Grabs the 4 season names from the data set and puts them into an array
let seasonNames = Object.keys(tourData.seasonCategories);

// Sets button and select tags to be initally disabled
let searchBtn = document.getElementsByClassName("search-btn")[0];
searchBtn.setAttribute("disabled", "disabled");
let categorySelect = document.getElementsByClassName("categories-form")[0];
categorySelect.setAttribute("disabled", "disabled");
let destinationSelect = document.getElementsByClassName("destination-form")[0];
destinationSelect.setAttribute("disabled", "disabled");

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

  selectedSeason = selectedSeason.toLowerCase();
  let categoryOptions = tourData.seasonCategories[selectedSeason];

  let categoryForm = document.getElementsByClassName("categories-form")[0];

  // remove children that were previously created
  while (categoryForm.firstChild) {
    categoryForm.removeChild(categoryForm.firstChild);
  }
  let destinationForm = document.getElementsByClassName("destination-form")[0];

  // remove children that were previously created
  while (destinationForm.firstChild) {
    destinationForm.removeChild(destinationForm.firstChild);
  }
  let categoryPlaceholder = document.createElement("option");
  categoryPlaceholder.selected = true;
  destinationForm.appendChild(categoryPlaceholder);

  // removes disabled category select
  categorySelect.removeAttribute("disabled", "disabled");

  return createCategory(categoryOptions);
};

const createCategory = (e) => {
  // resestting the category placeholder
  let categoryPlaceholder = document.createElement("option");
  let categoryForm = document.getElementsByClassName("categories-form")[0];

  categoryPlaceholder.selected = true;
  categoryPlaceholder.innerText = "Category";
  categoryPlaceholder.selectedIndex = 0;
  categoryForm.appendChild(categoryPlaceholder);

  // resetting the destination placeholder
  let destinationPlaceholder = document.createElement("option");
  let destinationForm = document.getElementsByClassName("destination-form")[0];
  destinationPlaceholder.selected = true;
  destinationPlaceholder.innerText = "Destination";
  destinationPlaceholder.selectedIndex = 0;
  destinationForm.appendChild(destinationPlaceholder);
  let category = e;
  for (let i = 0; i < category.length; i++) {
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

const selectCategory = () => {
  let currentCategory = document.getElementsByClassName("categories-form")[0];
  let selectedCategory =
    currentCategory.options[currentCategory.selectedIndex].text;

  selectedCategory = selectedCategory.toLowerCase();

  let destinationOptions = tourData.destinations;
  destinationOptions = destinationOptions.filter(
    (destinationOptions) => destinationOptions.category === selectedCategory
  );

  let destinationForm = document.getElementsByClassName("destination-form")[0];

  // remove children that were previously created
  while (destinationForm.firstChild) {
    destinationForm.removeChild(destinationForm.firstChild);
  }

  // removes disabled destination select
  destinationSelect.removeAttribute("disabled", "disabled");

  return createDestinations(destinationOptions);
};

const createDestinations = (d) => {
  // resetting the destination placeholder
  let destinationPlaceholder = document.createElement("option");
  let destinationForm = document.getElementsByClassName("destination-form")[0];
  destinationPlaceholder.selected = true;
  destinationPlaceholder.innerText = "Destination";
  destinationPlaceholder.selectedIndex = 0;
  destinationForm.appendChild(destinationPlaceholder);
  let destinations = d;
  for (let i = 0; i < destinations.length; i++) {
    let destination = document.createElement("option");
    let destinationForm = document.getElementsByClassName(
      "destination-form"
    )[0];

    // add class name
    destination.classList.add("destination");
    // Display the destinations that match the selected category
    destination.innerText =
      destinations[i].name[0].toUpperCase() + destinations[i].name.slice(1);
    destination.value =
      destinations[i].name[0].toUpperCase() + destinations[i].name.slice(1);
    destinationForm.appendChild(destination);
  }
};

const selectDestination = () => {
  let currentDestination = document.getElementsByClassName(
    "destination-form"
  )[0];
  let selectedDestination =
    currentDestination.options[currentDestination.selectedIndex].text;

  let destinationOptions = tourData.destinations;
  let totalDestination = destinationOptions.filter(
    (destinationOptions) => destinationOptions.name === selectedDestination
  )[0];
  let searchBtn = document.getElementsByClassName("search-btn")[0];
  searchBtn.removeAttribute("disabled", "disabled");
  return totalDestination;
};

const searchButton = () => {
  // Destination Images
  let destinationInfo = selectDestination();

  let imgNum = destinationInfo.id;

  let destinationImage = document.createElement("img");
  destinationImage.src = `solution/assets/${imgNum}.jpg`;
  destinationImage.classList = "destination-img";
  let imageContainer = document.getElementsByClassName("img-container")[0];
  let destinationTitle = document.createElement("div");
  let destinationCountry = document.createElement("div");
  let name = `${destinationInfo.name},`;
  let country = destinationInfo.country;
  destinationTitle.innerText = name;
  destinationTitle.classList = "destination-title";
  destinationCountry.innerText = country;
  destinationCountry.classList = "destination-country";
  imageContainer.appendChild(destinationImage);
  imageContainer.appendChild(destinationTitle);
  imageContainer.appendChild(destinationCountry);
};
