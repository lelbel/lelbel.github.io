const username = document.getElementById("form-name");
const mascot = document.getElementById("form-mascot");
const image = document.getElementById("form-image");
const personalBackground = document.getElementById("form-personal-background");
const professionalBackground = document.getElementById("form-professional-background");
const academicBackground = document.getElementById("form-academic-background");
const webdevBackground = document.getElementById("form-webdev-background");
const computerPlatform = document.getElementById("form-computer-platform");
const funnyThing = document.getElementById("form-funny-thing");
const anythingElse = document.getElementById("form-anything-else");
const formAgreement = document.getElementById("form-agreement");
const coursesTextButton = document.getElementById("courses-text-button");
const coursesTextbox = document.getElementById("form-courses");
const byoForm = document.getElementById("byo-intro-form");
const submitButton = document.getElementById("form-submit-button");
const resetButton = document.getElementById("form-reset-button");
const byoIntroDisplay = document.getElementById("byo-intro-display");
const formHeadings = document.getElementById("form-headings");
var coursesArr = [];
var formElements = [username, mascot, image, personalBackground, professionalBackground, academicBackground, webdevBackground, computerPlatform, coursesArr, formAgreement];

//courseTextButton function to display course textbox
coursesTextButton.onclick = (function displayCoursesText() {
    //create remove button
    const removeButton = document.createElement("input");
    removeButton.type = "button";
    removeButton.id = "form-button-remove";
    removeButton.setAttribute("value","Remove Course");
    coursesTextbox.appendChild(removeButton);
    
    //create an input element, set type and placeholder values, push element to courses array, append to html
    var classInput = document.createElement("input");
    classInput.type = "text";
    //classInput.required = true;
    classInput.setAttribute("placeholder","Course");
    coursesArr.push(classInput);
    coursesTextbox.appendChild(classInput);

    //remove button functionality
    removeButton.onclick = (function removeCourse() {
        coursesArr.pop();
        coursesTextbox.removeChild(classInput);
        coursesTextbox.removeChild(removeButton);
    });

    //console.log(coursesArr);
});

//function to check file extension
function checkImage() {
    //create an array with acceptable file types
    const imageTypes = [".png", ".jpg"];

    //create a substring with last 4 characters of file name
    const imageExt = image.value.substring(image.value.length - 4, image.value.length);

    //return true if the extension is listed, return false if it is not listed
    //console.log(imageExt);
    //console.log(imageTypes.includes(imageExt));
    return imageTypes.includes(imageExt);
}

//resetButton function that resets the form
resetButton.onclick = (function resetForm() {
    byoForm.reset();
});

//function to load input image
function loadImage() {
    var loadedImage = image.files[0];
    const imageURL = URL.createObjectURL(loadedImage);
    document.getElementById("load-image").innerHTML = `<img src="${imageURL}" alt="BYO Intro Image">`;
}

//submitButton function 
//checks if all required fields are filled out
//formats information into introduction page
submitButton.onclick = (function checkFormInfo(event) {
    console.log(image.value);
    for (var i = 0; i < formElements.length; i++) {
        currentElement = formElements[i];
        console.log(currentElement.value);

        if ((currentElement.type === "text" && currentElement.value === "") || (currentElement.length === 0)) {
            alert("One or more required fields are not filled out. Please try again.");
            event.preventDefault();
            return;
        } else if (currentElement.type === "file" && checkImage() === false) {
            alert("Uploaded image must be a .png or .jpg file. Please resubmit form with the correct file type.");
            event.preventDefault();
            return;
        } else if (currentElement.type === "radio" && (!currentElement.checked)) {
            alert("Please agree to the terms of submission by clicking \"yes\" at the bottom of the form.");
            event.preventDefault();
            return;
        }
    }

    //stop normal form submission functionality and instead display an intro page with all provided information
    event.preventDefault();

    byoForm.style.display = "none";
    formHeadings.style.display = "none";

    byoIntroDisplay.innerHTML = 
    `<figure>
        <a href="images/meetingSteve.jpg"></a>
        <div id="load-image"></div>
        <figcaption>BYO Introduction Image</figcaption>
    </figure>

    <ul id="intro-list">
        <li>Personal Background: ${personalBackground.value}</li>
        <li>Professional Background: ${professionalBackground.value}</li>
        <li>Academic Background: ${academicBackground.value}</li>
        <li>Background in this Subject: ${webdevBackground.value}</li>
        <li>Primary Computer Platform: ${computerPlatform.value}</li>
        <li>Courses I'm Taking and Why: 
            <ol id="byo-courses-list"></ol>
        </li>
    </ul>
    
    <button id="reset-byo-button">Reset BYO Page</button>`;
    
    loadImage();

    for (var j = 0; j < coursesArr.length; j++) {
        var listCourse = document.createElement("li");
        listCourse.textContent = coursesArr[j].value;
        document.getElementById("byo-courses-list").appendChild(listCourse);
    }

    if (funnyThing.value !== "") {
        var funnyThingList = document.createElement("li");
        funnyThingList.textContent = `Funny Thing: ${funnyThing.value}`;
        document.getElementById("intro-list").appendChild(funnyThingList);
    }

    if (anythingElse.value !== "") {
        var anythingElseList = document.createElement("li");
        anythingElseList.textContent = `Anything Else: ${anythingElse.value}`;
        document.getElementById("intro-list").appendChild(anythingElseList);
    }

    //function to reset the byo page
    const byoResetButton = document.getElementById("reset-byo-button");
    byoResetButton.onclick = (function byoReset() {
        byoForm.reset();
        byoForm.style.display = "initial";
        formHeadings.style.display = "initial";
        byoIntroDisplay.innerHTML = `<div id="load-image"></div>`;
        byoIntro.style.display = "none";
    });
});