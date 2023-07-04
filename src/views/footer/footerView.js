export const renderFooter = () => {
    const footer = document.createElement("footer");
    // Design your footer element
    // Add any necessary content or styling
  
    const text = document.createElement("p");
    text.textContent = "My App Footer";
    footer.appendChild(text);
  
    return footer;
  };
  