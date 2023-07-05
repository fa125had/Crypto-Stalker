export const renderContents = (apiData) => {
  const contents = document.createElement("main");
  contents.classList.add("main-container");

  const homePageHero = document.createElement("div");
  homePageHero.classList.add("home-page-hero");


  contents.appendChild(homePageHero);


  return contents;
};
