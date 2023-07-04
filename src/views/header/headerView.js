export const renderHeader = () => {
    const header = document.createElement("header");
    // Design your header element
    // Add any necessary content or styling
  
    const title = document.createElement("h1");
    title.textContent = "My App Header";
    header.appendChild(title);
  
    return header;
  };