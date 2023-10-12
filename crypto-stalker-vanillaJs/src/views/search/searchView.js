//Search function
const searchCoins = (search) => {
  // Grab coins table
  const coinsTable = document.getElementById("coins-table");
  const coinRows = coinsTable.getElementsByClassName("coin-data-container");

  // Iterate through each coin row html array
  for (let i = 0; i < coinRows.length; i++) {
    // Get dataset value from each row
    const category = coinRows[i].dataset.category;
    const symbol = coinRows[i].dataset.symbol;

    // Split the search term into separate words with spaces
    const searchWords = search.toLowerCase().split(" ");
    // Check if all search words are present in the category
    const match = searchWords.every((word) => {
      return category.toLowerCase().includes(word) || symbol.toLowerCase().includes(word);
    });

    // Show or hide the div based on the match
    if (match) {
      coinRows[i].style.display = "";
    } else {
      coinRows[i].style.display = "none";
    }
  }
};

export const renderSearchBar = () => {
  // Search Box Element
  const searchBox = document.createElement("div");
  searchBox.classList.add("search-box-container");

  // Search Input Element
  const searchBoxInput = document.createElement("input");
  searchBoxInput.classList.add("search-box-input");
  searchBoxInput.setAttribute("id", "search-input");
  searchBoxInput.setAttribute("type", "text");
  searchBoxInput.setAttribute("maxlength", "10");
  searchBoxInput.setAttribute("placeholder", "search your coin!");

  // Search Input Event Listener
  searchBoxInput.addEventListener("keyup", ({ target }) => {
    searchCoins(target.value);
  });

  // Search Box Button Element
  const searchBoxButton = document.createElement("button");
  searchBoxButton.classList.add("search-box-button");
  searchBoxButton.innerHTML = "Search";

  // Search Box Button Event Listener
  searchBoxButton.addEventListener("click", () => {
    searchCoins(searchBoxInput.value);
  });

  // Append search elements to the search container
  searchBox.appendChild(searchBoxInput);
  searchBox.appendChild(searchBoxButton);

  return searchBox;
};
