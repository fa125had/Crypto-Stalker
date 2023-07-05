export const renderFooter = () => {
  // Render footer
  const footer = document.createElement("footer");
  footer.classList.add("footer-container");
  // Create footer division
  const footerFistDivision = document.createElement("div");
  footerFistDivision.classList.add("footer-division");
  // Create footer division
  const footerSecondDivision = document.createElement("div");
  footerSecondDivision.classList.add("footer-division");
  // Create footer division
  const footerThirdDivision = document.createElement("div");
  footerThirdDivision.classList.add("footer-division");

  // Add Copy right - First division
  const copyRight = document.createElement("p");
  copyRight.classList.add("copy-right");
  copyRight.innerText = "© 2020 - 2021";
  footerFistDivision.appendChild(copyRight);

  // Add footer links - Second division
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
  footerSecondDivision.appendChild(footerLinks);

  // Add footer description - Third division
  const footerDescription = document.createElement("p");
  footerDescription.classList.add("footer-description");
  footerDescription.textContent =
    "I am a full-stack web developer with a passion for building websites and applications. I love to code, learn new things, and learn new things.";
  footerThirdDivision.appendChild(footerDescription);

  // Add footer divisions to footer
  footer.appendChild(footerFistDivision);
  footer.appendChild(footerSecondDivision);
  footer.appendChild(footerThirdDivision);

  return footer;
};
