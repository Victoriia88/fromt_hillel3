let imageFiles = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

let randomIndex = Math.floor(Math.random() * imageFiles.length);

let randomImageName = imageFiles[randomIndex];

let imageUrl = "images/" + randomImageName;

let imgElement = document.createElement("img");

imgElement.src = imageUrl;
imgElement.alt = "Випадкове зображення";

document.body.appendChild(imgElement);
