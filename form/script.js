// Function to dynamically populate the nested list in the content area
function populateNestedList(data) {
    const contentArea = document.querySelector("#content ul");
    contentArea.innerHTML = "";
  
    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      contentArea.appendChild(li);
    });
  }
  
  // Function to add new cards to the sidebar and content area
  function addCard(cardName) {
    const sidebar = document.querySelector("#sidebar ul");
    const contentArea = document.querySelector("#content ul");
  
    const card = document.createElement("li");
    card.classList.add("card");
    card.textContent = cardName;
  
    sidebar.appendChild(card);
  
    // Add click event listener to newly added card
    card.addEventListener("click", () => {
      // Dummy nested data2 for the selected card
      const data2 = ["Item 1", "Item 2", "Item 3"];
      populateNestedList(data2);
    });
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const collapseBtn = document.querySelector("#collapseBtn");
    const searchInput = document.querySelector("#searchInput");
    const addCardBtn = document.querySelector("#addCardBtn");
    const newCardInput = document.querySelector("#newCardInput");
    const addCardModal = new bootstrap.Modal(document.querySelector("#addCardModal"));
  
    collapseBtn.addEventListener("click", () => {
      // Handle expand/collapse functionality
    });
  
    searchInput.addEventListener("input", () => {
      // Handle search functionality
    });
  
    addCardBtn.addEventListener("click", () => {
      const cardName = newCardInput.value;
      if (cardName) {
        addCard(cardName);
        newCardInput.value = "";
        addCardModal.hide();
      }
    });
  });
  