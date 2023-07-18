export const renderFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer-container");
  footer.classList.add("footer-collapsed");

  // Create footer division
  const footerFirstDivision = document.createElement("div");
  footerFirstDivision.classList.add("footer-division");

  // Create footer division
  const footerSecondDivision = document.createElement("div");
  footerSecondDivision.classList.add("footer-division");

  // Add footer links - First division
  const footerLinks = document.createElement("p");
  footerLinks.classList.add("footer-links");
  const footerLink = document.createElement("a");
  footerLink.classList.add("footer-link");
  // LinkedIn link
  footerLink.href = "https://www.linkedin.com/in/far5had/";
  footerLink.target = "_blank";
  footerLink.innerText = "LinkedIn";
  footerLinks.appendChild(footerLink);
  // Github link
  const footerGithub = document.createElement("a");
  footerGithub.classList.add("footer-link");
  footerGithub.href = "https://github.com/fa125had/";
  footerGithub.target = "_blank";
  footerGithub.innerText = "Github";
  footerLinks.appendChild(footerGithub);
  // Add links
  footerFirstDivision.appendChild(footerLinks);

  // Add footer description - Second division
  const footerDescription = document.createElement("p");
  footerDescription.classList.add("footer-description");
  footerDescription.textContent =
    "I am junior developer with a passion for building websites and applications. I love to code, learn new things, and learn new things. 2023 - Farshad";
  footerSecondDivision.appendChild(footerDescription);

  // Footer collapse button
  const footerCollapseButton = document.createElement("button");
  footerCollapseButton.classList.add("footer-collapse-button");
  // Down arrow icon
  footerCollapseButton.innerHTML = "&#9650;";
  footerCollapseButton.addEventListener("click", () => {
    footer.classList.toggle("footer-collapsed");

    if (footer.classList.contains("footer-collapsed")) {
      footerCollapseButton.innerHTML = "&#9650;";
    } else {
      footerCollapseButton.innerHTML = "&#9660;";
    }
  });

  // Add footer button to footer
  footer.appendChild(footerCollapseButton);
  // Add footer divisions to footer
  footer.appendChild(footerFirstDivision);
  footer.appendChild(footerSecondDivision);

  return footer;
};
