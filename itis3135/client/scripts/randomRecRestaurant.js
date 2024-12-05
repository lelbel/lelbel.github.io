const btnRandRestaurant = document.getElementById("btn-rand-restaurant");
const randRestaurantText = document.getElementById("rand-restaurant-text");
const restaurantList = ["The Gulfstream", "Kate's Pancake House"];

btnRandRestaurant.onclick = (function getRandRestaurant() {
    randRestaurantText.innerHTML = `Try eating at ${restaurantList[Math.floor(Math.random() * restaurantList.length)]}`;
});