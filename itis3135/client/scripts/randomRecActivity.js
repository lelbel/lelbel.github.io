const btnRandActivity = document.getElementById("btn-rand-activity");
const randActivityText = document.getElementById("rand-activity-text");
const activityList = ["Fort Fisher Aquarium", "Carolina Beach Boardwalk"];

btnRandActivity.onclick = (function getRandActivity() {
    randActivityText.innerHTML = `Try checking out the ${activityList[Math.floor(Math.random() * activityList.length)]}`;
});