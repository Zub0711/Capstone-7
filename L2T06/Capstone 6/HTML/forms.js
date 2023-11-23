//Compulsory Task
// In this task I will be creating 3 forms

// first create the function button for the first form

// The first function will alert the user that the info has been saved and they will be contacted
function saveDetail() {
  let details = document.getElementById("form1").value;
  localStorage.setItem("details-saved", details);
  alert("Thank you for submitting you details we will be in touch :)");
}

function loadUp() {
  localStorage.getItem("details-saved");
}

let posted = sessionStorage.getItem("posted");

// In order to display the comments posted by the user I will create the function post

function post() {
  // I then create 3 variables and use the document get element by ID and .value
  let name = document.getElementById("Com-Name").value;
  let email = document.getElementById("Com-Email").value;
  let comment = document.getElementById("Com-section").value;
  // I then create a comment object
  let commentObj = {
    name: name,
    email: email,
    comment: comment,
  };

  // I then create a variable existing comments that will display the existing comments using get Item
  let existingComments = JSON.parse(localStorage.getItem("comments")) || [];
  // I then use the push method to push the existing comments into the comment object
  existingComments.push(commentObj);

  localStorage.setItem("comments", JSON.stringify(existingComments));
  // I then use a alert to alert the user that the comment has been posted
  alert(" Posted :)");

  displayComments();
}

// create the function display comments that will display the comments that the user has just posted

function displayComments() {
  // I create the variable existing items and use json.parse
  let existingComments = JSON.parse(localStorage.getItem("comments")) || [];
  // I use the document get element by id to get the div element in my html
  let commentsDiv = document.getElementById("comments");
  // I use the innerHtml method to display the comments on the webpage
  commentsDiv.innerHTML = "";

  existingComments.forEach((comment) => {
    // I then use a for each loop to create a new div element
    let commentEle = document.createElement("div");
    // I then add it to the page using innerHtml to create span tag to divide the 3 sections name,email,comment
    commentEle.innerHTML = `  
  <span>  Name : ${comment.name} 
  Email : ${comment.email}  
  Comment : ${comment.comment} </span>
  
  `;
    // I then append it to the webpage
    commentsDiv.appendChild(commentEle);
  });
}

window.onload = function () {
  displayComments();
};
