// In this file the functions to store the page on the save later page are located here as well as the function for the like buttons

function saveImg(imgUrl) {
  // I start by creating a function called save img
  // I then create a new variable and use the json.parse method to create saved-images
  let savedImg = JSON.parse(localStorage.getItem("saved-images")) || [];
  // I use the push method to add the image to local storage
  savedImg.push(imgUrl);

  // I then use the set Item method and jason stringify method
  localStorage.setItem("saved-images", JSON.stringify(savedImg));
  // I then use the alert method to display a message to the user
  alert(`Image has been saved to the save later file.
you saved ${savedImg.length} image`);
}

// I will then create a function to save the paragraphs
function savePara(p) {
  // I start by creating the variable savedp and using the JSON.parse method to create saved para
  let savedp = JSON.parse(localStorage.getItem("saved-para")) || [];
  // I then push it to local storage
  savedp.push(p);

  // I then use set item and the json stringify method

  localStorage.setItem("para", JSON.stringify(p));
  // I then alert the user that the article has been saved.

  alert(`Article has been saved for later, you saved ${p.length} articles`);
}

// I use document.addEventlistener and a querySelectorAll followed by a foreach loop tp toggle  the like button

document.addEventListener("DOMContentLoaded", function () {
  const liked = document.querySelectorAll(".likeButton");
  liked.forEach((button) => {
    button.addEventListener("click", function () {
      button.textContent = "liked";
    });
  });
});
