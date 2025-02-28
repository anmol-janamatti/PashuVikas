// script.js

// Initialize an array to store the items added by the farmer
let farmerItems = [];

// Listen for the form submission to add an item
document.getElementById("add-item-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    
    // Get the values from the form fields
    const name = document.getElementById("item-name").value;
    const description = document.getElementById("item-description").value;
    const price = document.getElementById("item-price").value;

    // Create a new item object
    const newItem = {
        name: name,
        description: description,
        price: price
    };

    // Add the new item to the farmer's items array
    farmerItems.push(newItem);

    // Clear the form fields after adding the item
    document.getElementById("item-name").value = "";
    document.getElementById("item-description").value = "";
    document.getElementById("item-price").value = "";

    // Update the display of the added items
    updateItemsList();
});

// Function to update the list of items added by the farmer
function updateItemsList() {
    const itemsList = document.getElementById("items-list");
    itemsList.innerHTML = ""; // Clear the current list

    // Loop through each item and create a list item element
    farmerItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - ${item.description} - $${item.price}`;
        itemsList.appendChild(li);
    });
}
