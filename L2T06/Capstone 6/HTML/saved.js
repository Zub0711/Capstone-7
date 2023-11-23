// In this file I will be creating a function for my homepage "index.html"
// I will be adding a save later feature so when the user would like to save picture it will be saved on the saved later page

// I start by creating a function displayImg
function displayImg() {
  // I create a variable savedImg and us the Json.parse to method
  let savedImg = JSON.parse(localStorage.getItem("saved-images")) || [];
  // I then use the document.getElementbyid
  let savedImgDiv = document.getElementById("saved-images");
  // I then use the foreach loop to append the saved file to the webpage
  savedImg.forEach((img) => {
    let imageEl = document.createElement("img");
    imageEl.src = img;
    savedImgDiv.appendChild(imageEl);
  });
}
// I then call the function
displayImg();
