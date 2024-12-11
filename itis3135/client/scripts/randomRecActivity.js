//HTML elements
const btnRandActivity = document.getElementById("btn-rand-activity");
const randActivityText = document.getElementById("rand-activity-text");
const activityList = ["Fort Fisher Aquarium", "Carolina Beach Boardwalk", "Carolina Beach State Park", "Ferry to Southport", "Fort Fisher Historical Site", "Disc Golf at Good Hops"];

//function for displaying a random activity
btnRandActivity.onclick = (function getRandActivity() {
    randActivityText.innerHTML = `Try checking out the ${activityList[Math.floor(Math.random() * activityList.length)]}`;
});