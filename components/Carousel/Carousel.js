/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

// Carousel Function
const topBar = document.querySelector(".top-bar");

function slideAnimate() {

  const carouselImage = document.querySelectorAll("img");

  // Transition not working
  carouselImage.forEach(ele => {
    ele.setAttribute(
      "style", 
      "max-width: 100%; height: auto; z-index: -1; display: block; animation-duration: 3; animation-name: slidein; animation-iteration-count: infinite"
    );
    console.log(ele)

    return ele;
  })
}





function carouselComponent() {

  const carouselDiv = document.createElement("div");
  const leftButtonDiv = document.createElement("div");
  const rightButtonDiv = document.createElement("div");
  const firstImage = document.createElement("img");
  const secondImage = document.createElement("img");
  const thirdImage = document.createElement("img");
  const fourthImage = document.createElement("img");

  carouselDiv.classList.add("carousel");
  leftButtonDiv.classList.add("left-button");
  rightButtonDiv.classList.add("right-button");
  firstImage.setAttribute("src", "./assets/carousel/mountains.jpeg")
  secondImage.setAttribute("src", "./assets/carousel/computer.jpeg")
  thirdImage.setAttribute("src", "./assets/carousel/trees.jpeg")
  fourthImage.setAttribute("src", "./assets/carousel/turntable.jpeg")

  leftButtonDiv.textContent = "<";
  rightButtonDiv.textContent = ">";

  carouselDiv.appendChild(leftButtonDiv)
  carouselDiv.appendChild(firstImage)
  carouselDiv.appendChild(secondImage)
  carouselDiv.appendChild(thirdImage)
  carouselDiv.appendChild(fourthImage)
  carouselDiv.appendChild(rightButtonDiv)
  let carouselCon = document.querySelector(".carousel-container")
  carouselCon.appendChild(carouselDiv)

  leftButtonDiv.addEventListener('click', slideAnimate());
  rightButtonDiv.addEventListener('click', slideAnimate());

  topBar.style.zIndex = 1;

  return carouselDiv;

}

carouselComponent()