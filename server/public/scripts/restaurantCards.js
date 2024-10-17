// scripts/restaurantCards.js

document.addEventListener('DOMContentLoaded', () => {
    // Attach event listeners to all delete buttons
    const deleteButtons = document.querySelectorAll('.delete-btn');

    deleteButtons.forEach(button => {
        button.addEventListener('click', deleteRestaurantCard);
    });
});

function deleteRestaurantCard(event) {
    // Find the restaurant card (parent of the button)
    const restaurantCard = event.target.closest('.restaurant-card');
    
    // Remove the restaurant card from the DOM
    restaurantCard.remove();
}