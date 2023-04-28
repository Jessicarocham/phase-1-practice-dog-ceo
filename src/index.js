console.log("%c HI", "color: firebrick");
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

let breeds;
console.log(breeds);
// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array
fetch(imgUrl)
  .then((res) => res.json())
  .then((dogImageData) => appendImages(dogImageData.message));

function appendImages(dogImages) {
  const imgContainer = document.querySelector("div");
  dogImages.forEach((image) => {
    const img = document.createElement("img");

    img.src = image;
    let h2 = document.createElement("h2");
    h2.innerText = "hello world";

    imgContainer.append(img);
  });
}

const breedUrl = "https://dog.ceo/api/breeds/list/all";

// on page load, fetches all the dog breeds using the url above ⬆️
// adds the breeds to the page in the <ul> provided in index.html

fetch(breedUrl)
  .then((res) => res.json())
  .then((breedsData) => {
    breeds = Object.keys(breedsData.message);
    renderBreeds(breeds);
  });

const ul = document.querySelector("ul");

function renderBreeds(breeds) {
  console.log(breeds);

  for (let breed of breeds) {
    const li = document.createElement("li");

    li.textContent = breed;

    li.addEventListener("click", () => {
      li.style.color = "red";
    });

    ul.appendChild(li);
  }
}

const dropdown = document.querySelector("select");

dropdown.addEventListener("change", filterBreeds);

function filterBreeds(event) {
  let letter = event.target.value;

  let filteredBreeds = breeds.filter((breed) => {
    return breed[0] === letter;
  });

  console.log(filteredBreeds);
  ul.innerHTML = "";
  renderBreeds(filteredBreeds);
}
