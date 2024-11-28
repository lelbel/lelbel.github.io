const coursesTextButton = document.getElementById("courses-text-button");
const coursesTextbox = document.getElementById("form-courses");
const byoForm = document.getElementById("byo-intro-form");
const submitButton = document.getElementById("");
var coursesArr = [];

//courses text box implementation
const removeButton = document.createElement("input");
removeButton.type = "button"
removeButton.id = "form-button-remove";
removeButton.style.display = "none";
removeButton.setAttribute("value","Remove Course Text Box");
coursesTextbox.appendChild(removeButton);

coursesTextButton.onclick = (function displayCoursesText() {
    if (coursesArr.length >= 0) {
        removeButton.style.display = "initial";
    }
    else {
        removeButton.style.display = "none";
    }
    
    var classInput = document.createElement("input");
    classInput.type = "text";
    classInput.required = true;
    classInput.setAttribute("placeholder","Course");
    coursesArr.push(classInput);
    coursesTextbox.appendChild(classInput);

    console.log(coursesArr);
});

removeButton.onclick = (function removeCourse() {
    coursesTextbox.removeChild(coursesArr.pop());
    
    if (coursesArr.length >= 1) {
        removeButton.style.display = "initial";
    }
    else {
        removeButton.style.display = "none";
    }
});