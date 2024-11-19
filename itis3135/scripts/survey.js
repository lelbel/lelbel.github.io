const coursesTextButton = document.getElementById("courses-text-button");
const coursesTextbox = document.getElementById("form-courses");

//courses text box implementation
coursesTextButton.onclick = (function displayCoursesText() {
    coursesTextbox.setAttribute("type", "text");
    coursesTextbox.setAttribute("value", "Test Value");
});