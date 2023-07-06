export const renderContents = (apiData) => {
  const contents = document.createElement("main");
  contents.classList.add("main-container");

  const homePageHero = document.createElement("div");
  homePageHero.classList.add("home-page-hero");
  homePageHero.textContent = 'Content for the home page';


  contents.appendChild(homePageHero);


  return contents;
};
