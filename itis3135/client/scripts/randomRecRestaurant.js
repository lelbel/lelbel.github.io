//HTML elements
const btnRandRestaurant = document.getElementById("btn-rand-restaurant");
const randRestaurantText = document.getElementById("rand-restaurant-text");
const restaurantList = ["The Gulfstream", "Kate's Pancake House", "Butts and Such", "Beach House Burgers", "Ocean Grill &amp; Tiki Bar", "Soul Flavor"];

//function for displaying a random restaurant
btnRandRestaurant.onclick = (function getRandRestaurant() {
    randRestaurantText.innerHTML = `Try eating at ${restaurantList[Math.floor(Math.random() * restaurantList.length)]}`;
});